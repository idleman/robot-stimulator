import Channel from './Channel.mjs';
import readline from 'node:readline';
import autobind from './autobind.mjs';
import RobotApp from './robot/App.mjs';
import parseLine from './parseLine.mjs';
import addEventListener from './addEventListener.mjs';

export default class Application {

  constructor(process = globalThis.process) {
    autobind(this);
    this.process = process;
    this.interface = readline.createInterface({ input: process.stdin, output: process.stdout });
    this.unsubscribers = [
      addEventListener(process, 'exit', this.terminate),
      addEventListener(process, 'SIGINT', this.terminate),
      addEventListener(process, 'SIGTERM', this.terminate),
      addEventListener(process, 'uncaughtException', this.handleError)
    ];
    this.channels = []; 
  }

  terminate(code = 0) {
    const unsubscribers = this.unsubscribers;
    if(unsubscribers.length) {
      this.unsubscribers = [];
      unsubscribers.forEach(cb => cb());
      this.interface.close();
      this.process.exit(code);
    }
  }

  handleError(err) {
    console.error(err);
    this.terminate(1);
  }

  async run() {
    try {
      const channel = new Channel(RobotApp);
      const output = this.process.stdout;
      for await (const line of this.interface) {

        const cmd = line.toUpperCase();
        if(cmd === 'QUIT') {
          return this.terminate(0);
        }

        const messages = parseLine(cmd);
        messages.forEach(args => {
          const result = channel.send(...args);
          const isReport = Array.isArray(result);
          if(isReport) {
            output.write(`Report: ${result.join(' ')}\n`);
          }
        });
        // Each line in the readline input will be successively available here as
        // `line`.
      }
      this.terminate(0);
    } catch(err) {
      this.handleError(err);
    }
  }

}