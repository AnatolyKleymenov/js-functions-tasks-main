import _ from 'lodash';

// BEGIN
export default average = (...number) => {
    if(number.length === 0)
    {
        return null;
    }
    return _.sum(number) / number.length;
}
// END