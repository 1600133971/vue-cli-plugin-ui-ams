const localeList = require('./lang.js')

module.exports = [
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import Element?',
    choices: [
      { name: 'Fully import', value: 'full' },
      { name: 'Import on demand', value: 'partial' }
    ],
    group: 'Element UI Options',
    default: 'full',
  },
  {
    when: answers => answers.import === 'full',
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite Element\'s SCSS variables?',
    group: 'Element UI Options',
    default: false,
  },
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load',
    choices: localeList.map(locale => ({
      name: locale,
      value: locale
    })),
    group: 'Element UI Options',
    default: 'zh-CN'
  },
  {
    type: 'list',
    name: 'type',
    message: 'AMS use Application Type',
    choices: [
      { name: 'Application Management System', value: 'app' },
      { name: 'Sales Data Board', value: 'sell' },
      { name: 'Collection of Basic Examples', value: 'base' },
      { name: 'Government Management System', value: 'government' },
      { name: 'Customer Source Management System', value: 'customer' },
      { name: 'Business Management System', value: 'business' },
      { name: 'Order Management System', value: 'order' },
      { name: 'Image Upload Example', value: 'upload' },
      { name: 'Login Form Page Example', value: 'login' }
    ],
    group: 'AMS Options',
    default: 'base',
  }
  /*{
    type: 'input',
    name: 'name',
    message: 'Name of vue-cli ui plugin',
    validate: input => !!input,
    group: 'AMS Options',
    default: 'chrome-extension'
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version for vue-cli ui plugin',
    validate: input => !!input,
    group: 'AMS Options',
    default: '0.0.1'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description for vue-cli ui plugin',
    validate: input => !!input,
    group: 'AMS Options',
    default: '__MSG_pluginDesc__'
  },
  {
    type: 'confirm',
    name: 'test1',
    message: 'test1 message',
    group: 'AMS Extend Options',
    default: false
  },
  {
    when: answers => answers.test1,
    type: 'confirm',
    name: 'test2',
    message: 'test2 message',
    group: 'AMS Extend Options',
    default: false
  }*/
];