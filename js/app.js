$( document ).ready(function(){
  $('#A').keydown(function(event) {
      console.log("hello there");
  });

  var a_btn = $('#A');

  $('#A').click(function(){
    $('#A').effect("shake", {times:4}, 1000);

  });


});

var target=$('#target');
target.animate({
 width:target.width() * 2,
 height:target.height() * 2}, 1000);


// $('#A').addClass('animated ');


// $( document ).click(function() {
//   $( "#toggle" ).effect( "shake" );
// });
// </s
