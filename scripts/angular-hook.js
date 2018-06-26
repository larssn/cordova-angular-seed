const fs = require('fs');
const execSync = require('child_process').execSync;
const colors = require('colors');

module.exports = function (context) {
  console.log('Building Angular application into "./www" directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  if (context.opts && context.opts.options) {
    let cmd;
    if (context.opts.options.production) {
      console.log('--- PROD BUILD ---');
      cmd = "npm run prod";
    } else if (context.opts.options.aot) {
      console.log('--- AOT BUILD ---');
      cmd = "npm run aot";
    } else if (context.opts.options.prodtest) {
      console.log('--- PROD TEST BUILD ---');
      cmd = "npm run prodtest";
    } else {
      console.log('--- DEV BUILD ---');
      cmd = "npm run dev";
    }

    const start = Date.now();
    console.log(execSync(
      cmd,
      {
        maxBuffer: 1024 * 1024 * 8,
        cwd: basePath + '/.'
      }).toString('utf8')
    );
    const timeTaken = Date.now() - start;
    console.log(colors.blue('Webpack build took ' + timeTaken / 1000 + ' seconds.'));
    var files = fs.readdirSync(baseWWW);
    for (var i = 0; i < files.length; i++) {
      if (files[i].endsWith('.gz')) {
        fs.unlinkSync(baseWWW + '/' + files[i]);
      }
    }
    fs.writeFileSync(baseWWW + '/.gitignore', `# Ignore everything in this directory
*
# Except this file
!.gitignore
`);
  }
};