const fs = require('fs');
const chalk = require('chalk');

const validCommitMessage = /^(AL-\d+)|(AMB-\d+)|(MRK-\d+)/g;
const commitMessage = fs.readFileSync(process.argv[2]).toString().trim();
const valid = validCommitMessage.test(commitMessage);

if (!valid) {
  console.error();
  console.error(
    chalk.red('[FAILED]'),
    `Commit message must start with AL- or AMB- or MRK- and the valid ticket number, "${commitMessage}"`,
  );
  console.error();
}

process.exit(valid ? 0 : 1);
