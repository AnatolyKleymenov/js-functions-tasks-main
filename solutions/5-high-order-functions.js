import _, { sortedIndex } from 'lodash';

// BEGIN
export default takeOldest = (listUsers, countReturnUsers = 1) => {
   const sortedUsers = _.sortBy(listUsers, user => Date.parse(user.birthday));
   return sortedUsers.slice(0, countReturnUsers); 
}
// END