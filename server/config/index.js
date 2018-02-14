import config from './config.json'

const ENV = process.env.NODE_ENV || 'DEV';

console.log(`ENV ========== ${ENV}`);

if (ENV === 'DEV' || ENV === 'TEST') {
  const configEnv = config[ENV];
  Object.keys(configEnv).forEach((key) => {
    process.env[key] = configEnv[key];
  })
}
