$(document).ready(function() {

  var leftKey = document.createElement('audio');
  leftKey.setAttribute('src', 'mp3/left.mp3');
  var upKey = document.createElement('audio');
  upKey.setAttribute('src', 'mp3/up.mp3');
  var rightKey = document.createElement('audio');
  rightKey.setAttribute('src', 'mp3/right.mp3');
  var downKey = document.createElement('audio');
  downKey.setAttribute('src', 'mp3/down.mp3');
  var spaceKey = document.createElement('audio');
  spaceKey.setAttribute('src', 'mp3/space.mp3');
  var clickKey = document.createElement('audio');
  clickKey.setAttribute('src', 'mp3/click.mp3');

  $.get();
  $(document).click(function(){
    if(clickKey.paused){
      clickKey.play();
    } else {
      clickKey.currentTime = 0;
    }

  })

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: //left
      if(leftKey.paused){
        leftKey.play();
      } else {
        leftKey.currentTime = 0;
      }
      break;

      case 38: //up
      if(upKey.paused){
        upKey.play();
      } else {
        upKey.currentTime = 0;
      }
      break;

      case 39: // right
      if(rightKey.paused){
        rightKey.play();
      } else {
        rightKey.currentTime = 0;
      }
      break;

      case 40: // down
      if(downKey.paused){
        downKey.play();
      } else {
        downKey.currentTime = 0;
      }
      break;

      case 32: // space
      if(spaceKey.paused){
        spaceKey.play();
      } else {
        spaceKey.currentTime = 0;
      }
      break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

});
