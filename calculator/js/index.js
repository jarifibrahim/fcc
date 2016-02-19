$('a').click(function() {
  var value = $(this).attr('id');
  var output = $('#output').text();
  console.log(output);
  if (value == 'equal') {
    var result;
    try {
      result = eval(output.replace(/\x/g, '*'));
    } catch (err) {
      result = 'Syntax Error';
    }
    $('#output').text(result);
  } 
  else if (value == 'AC')
    $('#output').text('');
  else if (value == 'CE') {
    if (output == 'Syntax Error') {
      $('#output').text('');
      return;
    }

    $('#output').text(output.slice(0, -1));
  } else {
    if (output == 'Syntax Error')
      output = '';
    console.log(output);
    $('#output').text(output + $('#' + value).text());
  }
});