'use strict';
const commander = require('commander');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

// node版本限制
if (major < 8) {
  console.error('你正在使用node' + currentNodeVersion + '. 请升级至 Node 8 或以上！');
  process.exit(1);
}

const program = new commander.Command(packageJson.name)
.version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log(`一些提示信息。`);
  })
  .parse(process.argv);