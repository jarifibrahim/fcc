$('.increase').click(function() {
  if (timer_running)
    return;
  var timer = $(this).parent().find('span').html();
  var minutes;
  minutes = parseInt(timer, 10) + 1;
  $(this).parent().find('span').html(minutes);

  var parent_id = ($(this).parent().parent().attr('id'));

  if (parent_id.toUpperCase() == $('.upper').find('h1').text().toUpperCase()) {
    var current_time = $('.time span').html();
    current_time = current_time.split(':');
    current_time[0] = minutes;
    if (current_time[0].toString().length < 2)
      current_time[0] = '0' + current_time[0];
    current_time = current_time.join(':');
    $('.time span').html(current_time);
  }
});

$('.decrease').click(function() {
  if (timer_running)
    return;
  var timer = $(this).parent().find('span').html();
  var minutes;
  minutes = parseInt(timer) - 1;
  $(this).parent().find('span').html(minutes);

  var parent_id = ($(this).parent().parent().attr('id'));

  if (parent_id.toUpperCase() == $('.upper').find('h1').text().toUpperCase()) {
    var current_time = $('.time span').html();
    current_time = current_time.split(':');
    current_time[0] = minutes;
    if (current_time[0].toString().length < 2)
      current_time[0] = '0' + current_time[0];
    current_time = current_time.join(':');
    $('.time span').html(current_time);
  }
});

var timer_running = false;
var settimer;
var circle_color= '#66CDAA';
function start_timer(time) {
  var minutes = time.minutes;
  var seconds = time.seconds;
  $('#circle').css('border-color', circle_color);
  settimer = setInterval(function() {
    seconds -= 1;
    if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && seconds.length != 2)
      seconds = '0' + seconds;
    if (minutes < 10 && minutes.toString().length < 2)
      minutes = '0' + minutes;

    $('.time > span').html(minutes + ':' + seconds);

    if (minutes == 0 && seconds == 0) {
      clearInterval(settimer);
      var text = $('.upper').find('h1');
      var time;
      if (text.text() == 'Break') {
        text.text('Session');
        circle_color = '#66CDAA';
        time = $('#session').find('span').text();
      } else {
        text.text('Break');
        circle_color = '#E9967A';
        time = '0' + $('#break').find('span').text();
      }
      $('.time > span').html(time + ':00');
      timer_running = !timer_running;
      $('#circle a').trigger("click");
    }
  }, 1000);
}

function stop_timer() {
  clearInterval(settimer);
  $('#circle').css("border-color",'#68E866');
}

$('#circle a').click(function() {
  var timer = $('.time > span').html().split(':');
  var minutes = Number(timer[0]),
    seconds = Number(timer[1]);

  timer_running = !timer_running;

  var time = {
    minutes: minutes,
    seconds: seconds
  };

  if (timer_running)
    start_timer(time);
  else
    stop_timer();

});

$('#reset a').click(function(){
  if(timer_running)
    return;
  
  var session_time = '25';
  $('#session > div#timer').find('span').html(session_time);
  $('.time').find('span').html(session_time + ":00");
});