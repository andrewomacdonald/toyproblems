//a very simple jquery script that autocompletes beneath an input box when you type.

var autoCompleteVals = ['apple', 'abc'];
$('#myInput').keyup(function(){
  var valuesToAppend = autoCompleteVals.filter(function(value) {
    return value.includes($('#myInput').val()) && $('#myInput').val().length > 0;
  });
  $('p').remove();
  $('body').append('<p>' + valuesToAppend + '</p>');
});