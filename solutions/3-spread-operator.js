// BEGIN
export default convert = (...arrayDates) => {
    if(arrayDates.length === 0)
    {
        return arrayDates;
    }
    const arrayConvertedDates = [];
    for(let date of arrayDates)
    {
        let [year, month, day] = date;
        arrayConvertedDates.push(new Date(year, month, day).toDateString());
    }
    return arrayConvertedDates;
}
// END