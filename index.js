#!/usr/bin/env node
const cp = require("child_process");

function execute(cmd, ...args) {
  cp.spawnSync(cmd, args.reverse(), { stdio:"inherit" });
}

const args = process.argv.slice(2);
if (args.length === 0) {
  process.stdin.setEncoding("utf8");
  const parse = require("shell-parser");
  const rl = require("readline").createInterface({
    input:process.stdin, output:process.stdout,
  });
  const prompt = () => {
    rl.question("< ", (line) => {
      const [cmd, ...args] = parse(line);
      if (cmd === "exit") {
        process.exit(0);
      } else {
        execute(cmd, ...args);
        prompt();
      }
    });
  };
  prompt();
} else {
  execute(...args);
}
