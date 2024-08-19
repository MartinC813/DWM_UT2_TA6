const convertToCelcius = (temperatura) =>{
    return Number(((temperatura - 32) * 0.555).toFixed(1));
}
const convertToFahrenheit = (temperatura) =>{
    return (temperatura * 9/5) + 32
}


console.log(convertToCelcius(2));
console.log(convertToFahrenheit(2));