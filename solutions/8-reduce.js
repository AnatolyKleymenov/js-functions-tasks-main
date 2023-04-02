// BEGIN
export default groupBy = (arrayObjects, nameProperty) => {
    return arrayObjects.reduce((res, student) => {
    let key = student[nameProperty];
    if (!res[key])
        res[key] = [];
    res[key].push(student);
    return res;
    }, {});
}
// END