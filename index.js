const { interfaces } = require("mocha");

function scuberGreetingForFeet(check) {
  var msg = 'This one is on me!';
  if (check < 199)
  msg = 'This one is on me!';
  else if (check > 2000 && check < 2500)
    msg = 'I will gladly take your thirty bucks.';
  else if (check > 2500)
    msg = 'No can do.';

  return msg;
}

function ternaryCheckCity(city) {
  var msg = '';
  if (city == 'NYC')
    msg = 'Ok, sounds good.';
  if (city != 'NYC')
    msg = "No go.";

  return msg;
}

function switchOnCharmFromTip(msg) {
  switch (msg)
  {
    case 'generous': msg = "Thank you so much."; break;
    case 'not as generous': msg = "Thank you."; break;
    case 'thanks for everything': msg = "Bye."; break;
  }
  return msg;
}