const {resolve} = require('path');
const version = require('../package.json').version;

/** PATHS **/
const SRC_PATH = resolve(__dirname, '..', 'src');
const OUTPUT_PATH = resolve(__dirname, '..', 'dist');
const PUBLIC_PATH = resolve(__dirname, '..', 'public');

/** CONSTANTS **/
const VERSION = version;
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8001;
const DEFAULT_PUBLIC_PATH = '/';

module.exports = {
  SRC_PATH,
  OUTPUT_PATH,
  PUBLIC_PATH,
  VERSION,
  PRODUCTION,
  DEVELOPMENT,
  DEFAULT_PORT,
  DEFAULT_HOST,
  DEFAULT_PUBLIC_PATH
};
