module.exports = {
  require: ['./test/helpers/_setup.js'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  files: ['./test/spec/**/*'],
  snapshotDir: './test/snapshot',
  babel: true,
  tap: false,
  verbose: true,
  color: true,
};
