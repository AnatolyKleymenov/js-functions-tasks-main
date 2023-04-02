// BEGIN
isNumberSimple = (number) => {
    if(number <= 1) {
        return 0;
    }
    for(let i = 2;i < number;i++)
    {
        if(number % i === 0){
            return 0;
        }
    }
    return 1;
}

export default sayPrimeOrNot = (number) => {
    if(isNumberSimple(number)){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
// END