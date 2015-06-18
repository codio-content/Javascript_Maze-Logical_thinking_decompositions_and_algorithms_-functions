
$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  if(typeof hitEnergyEvent == 'function') {
    energy = 0;
    score = 0;
    steps = 1;
    hitEnergyEvent();
    
    if(energy != 5 || score != 30) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }

  if(typeof hitMonsterEvent == 'function') {
    energy = 6;
    score = 0;
    steps = 1;
    
    hitMonsterEvent();
    if(energy != 1 || score != 6) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
    
  if(typeof calcScore == 'function') {
    energy = 5;
    score = 0;
    steps = 1;
    calcScore(6);
    if(score != 30){
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }

  return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');      
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, "Test not implemented yet. Coming soon.");})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});