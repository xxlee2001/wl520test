export const DOMAIN_PREFIX = process.env.__CLIENT__ ? (window._baseUrl || '') : (process.env.PREFIX || '');

export const _IS_LOCAL_DEBUG = /^http\:\/\/(test|local|localhost).*:3003$/.test(location.origin);

const https = 'https://'
export const getHost = () => _IS_LOCAL_DEBUG ? `${https}build.yyuap.com`: location.origin;
