/* eslint-disable no-console */
const { logger } = require('@twilio/cli-core').services.logging;
const chalk = require('chalk');

const AUTOCOMLETE_WARNING = `If you’re using autocomplete, you’ll need to run ${chalk.bold(
  'twilio autocomplete',
)} after installing a plugin and then open a new terminal window. The CLI needs to re-build its cache.`;
const AUTOCOMLETE_ALERT = `If you are running bash or zsh on macOS or Linux, you can run one of the two commands below (as appropriate for the shell you are using): ${chalk.bold(
  'twilio autocomplete bash',
)} or ${chalk.bold('twilio autocomplete zsh')}`;

module.exports = async function pluginPostRun(options) {
  if (options.Command.id === 'plugins:update') {
    console.warn(chalk.yellowBright(` » ${AUTOCOMLETE_WARNING}`));
  }
  if (options.Command.id === 'autocomplete') {
    if (Object.keys(options.argv).length === 0) {
      console.warn(chalk.yellowBright(` » ${AUTOCOMLETE_ALERT}`));
    }
  }
};
