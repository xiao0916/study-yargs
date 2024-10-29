#!/usr/bin/env node
const argv = require("yargs")
  .usage("Usage: $0 <command> [options]")
  .command("count", "Count the lines in a file") // 定义一个命令
  .example("$0 count -f foo.js", "count the lines in the given file") // 给命令添加一个例子
  .alias("f", "file") // 别名。第一个值是别名，第二个值是参数名称
  .nargs("f", 1) // 这个参数需要一个值
  .describe("f", "加载一个文件") // 描述这个参数
  .demandOption(["f"]) // 需要一个参数
  .alias("h", "help").argv;

const fs = require("fs");

// Create stream with the file
const s = fs.createReadStream(argv.file);

var lines = 0;
s.on("data", (buf) => {
  // Get the number of lines
  lines += buf.toString().match(/\n/g).length;
});

s.on("end", () => {
  // Display the number of lines
  console.log(lines);
});
