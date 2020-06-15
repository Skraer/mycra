const paths = require('./config/paths');
const args = require('./utils/args');
const buildMode = require('./config/buildMode');

module.exports = () => {
  switch (buildMode.type) {
    case 'development': {
      require('./scripts/dev');
      break;
    }
    case 'production': {
      require('./scripts/prod');
      break;
    }
    case 'test': {
      require('./scripts/test');
      break;
    }
    default: {
      console.error('ERROR: choose command to evalueate');
    }
  }
};
