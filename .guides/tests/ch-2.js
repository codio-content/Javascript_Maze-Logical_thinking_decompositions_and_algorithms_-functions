
var fs = require('fs');

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-2.js', 'utf8');
  eval(data);
 
  if(typeof hitEnergyEvent == 'function') {
    energy = 0;
    score = 0;
    steps = 1;
    hitEnergyEvent();
    
    if(energy != 5 || score != 30) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }

  if(typeof hitMonsterEvent == 'function') {
    energy = 6;
    score = 0;
    steps = 1;
    
    hitMonsterEvent();
    if(energy != 1 || score != 6) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
    
  if(typeof calcScore == 'function') {
    energy = 5;
    score = 0;
    steps = 1;
    calcScore(6);
    if(score != 30){
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  process.stdout.write('Well done!');  
  process.exit(0);
}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
