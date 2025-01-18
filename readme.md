# Robot Simulator

## Prerequisites

Before using this project, ensure you have a recent version of **Node.js** installed on your system. You can download and install Node.js from the official website:

[Node.js Download Page](https://nodejs.org/)

## Installation

To set up the project, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal in the project directory.
3. Run the following command to install dependencies:

```bash
npm install
```

This will install **Mocha**, the testing framework.

## Running Tests

To execute all tests and verify that the project is functioning correctly, run:

```bash
npm test
```

## Running the Robot Simulator

To run the binary, you have two options:

### Option 1: Using NPM Script

Run the following command:

```bash
npm run robot
```

### Option 2: Running the Binary Directly

Run the binary file directly using Node.js:

```bash
node bin/robot.mjs
```

## Usage

Once the binary is running, you can manually enter instructions line by line, exactly as shown in the assignment examples.

### Example Input and Output

```bash
> node bin/robot.mjs
5 5
1 2 N
RFRFFRFRF
Report: 1 3 N
```

In this example:
- The first line (`5 5`) defines the grid size.
- The second line (`1 2 N`) sets the robot's starting position and direction (North).
- The third line (`RFRFFRFRF`) provides movement instructions.
- The output (`Report: 1 3 N`) shows the robot's final position and direction.