const ENVIRONMENT_LOCAL = 'LOCAL';
const ENVIRONMENT_PRODUCTION = 'PRODUCTION';

const parseEnvironment = () => {
  if (window.location.hostname.includes('prod.')) return ENVIRONMENT_PRODUCTION;

  return ENVIRONMENT_LOCAL;
};

export const ENVIRONMENT = parseEnvironment();
export const isLocal = () => ENVIRONMENT === ENVIRONMENT_LOCAL;
export const isProduction = () => ENVIRONMENT === ENVIRONMENT_PRODUCTION;

let api = {
  defaultTimeout: 90000,
  // local development settings:
  baseUrl: 'http://127.0.0.1:5000',
};

if (isProduction()) {
  // IDEA: Configure Production API
  api = {
    ...api,
    baseUrl: 'https://api.omegahorizontech.com',
  };
}

const CONFIGURATION = {
  api,
};

export default CONFIGURATION;
