const convertToCelsius = function(temp) {
  const newTemp = (temp - 32) * (5 / 9);
  const cel = newTemp.toFixed(1);
  if(parseInt(cel) == cel){
    return parseInt(cel)
  }
  else{
  return parseFloat(cel);}

};

const convertToFahrenheit = function(temp) {
  const newTemp = temp * (9 / 5) + 32;
  const fahr = newTemp.toFixed(1);
  if(parseInt(fahr)  == fahr){
  return parseInt(fahr);
}
else{
  return parseFloat(fahr);}
  
};

//Solution more straightforward with Math.round function 
//wouldn't have to do the parseInt or ParseFloat

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
