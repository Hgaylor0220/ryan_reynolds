$(document).ready(function() {
  $("form#quiz").submit(function(event) {
console.log(event)
      var celeb;
      var gender = $("select#gender").val();
      var height = $("select#height").val();
      var hair = $("select#hair").val();

      if (gender === 'male' && height === 'tall' && hair === 'brunette'){
        celeb = "Ryan Reynolds";
      } else if (gender === 'male' && height === 'tall' && hair === 'blonde')
        celeb = "Ryan Gosling";

      $("#celeb").empty().append(celeb);
      $("#result").show();
    event.preventDefault();
  });
});
