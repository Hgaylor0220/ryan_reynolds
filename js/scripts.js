$(document).ready(function() {
  // $()
  $("form#quiz").submit(function(event) {
    event.preventDefault();

      var gender = $("select#gender").val();
      var height = $("select#height").val();
      var hair = $("select#hair").val();
      console.log(gender)
      if (gender && height && hair) {
        gender + hair + height === 'Ryan Renyolds'


      $("#celeb").empty().append('You' + gender + ', you are ' + height);
      $("#result").show();
    } else {
      alert('Please enter your preferences!');
    }


  });
});
