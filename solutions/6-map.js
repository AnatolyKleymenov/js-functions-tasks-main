// BEGIN
export default getChildren = (usersList) => {
    return usersList.flatMap(user => user.children);
}
// END