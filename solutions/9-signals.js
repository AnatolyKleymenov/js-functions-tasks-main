import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default getFreeDomainsCount = (listEmails) => {
  let domains = listEmails.map(email => email.split('@')[1]);
  let freeDomains = domains.filter(domain => freeEmailDomains.includes(domain));
  return freeDomains.reduce((acc, domain) => {
  acc[domain] ? acc[domain]++ : acc[domain] = 1;
  return acc;
  }, {});  
}
// END