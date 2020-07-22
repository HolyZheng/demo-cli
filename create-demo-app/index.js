'use strict';

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

// node版本限制
if (major < 8) {
  console.error('你正在使用node' + currentNodeVersion + '. 请升级至 Node 8 或以上！');
  process.exit(1);
}