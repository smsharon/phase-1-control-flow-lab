function scuberGreetingForFeet(ride){
  // Write your code here!
  let result
  if (ride <= 400) {
    result = 'This one is on me!';
}
else if ( ride > 2000 &&  ride <= 2500){
  result = 'I will gladly take your thirty bucks.';
}
else if (ride > 2500){
  result = 'No can do.';
}


return result;

}

function ternaryCheckCity(city) {
  let result;
  result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result;
}



function switchOnCharmFromTip(tip) {
  let result;
  switch (tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
      break;
  }
  return result;
}
