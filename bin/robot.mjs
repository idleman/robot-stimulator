#!/usr/bin/env node

import noop from '../src/noop.mjs';
import Application from '../src/App.mjs';

const stderr = { write: noop };
const process = Object.defineProperty(Object.create(globalThis.process), 'stderr', {
  // We overwrite the stderr stream to ignore any data written to it
  get() {
    return stderr;
  }
});

const app = new Application(process);
app.run();
