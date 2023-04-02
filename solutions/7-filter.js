// BEGIN
export default getGirlFriends = (listUsers) =>
{
    const friendsList = listUsers.map(({ friends }) => friends);
    const friends = friendsList.flat();
    return friends.filter(({ gender }) => gender === 'female');
}
// END