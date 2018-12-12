$("#sendemail").submit(function(e) {
  $.ajax({
    url: "insert.php",
    type: "POST",
    data: {
      email: $('[name="email"]').val(),
      message: $('[name="message"]').val(),
      name: $('[name="name"]').val()
    },
    success: function(msg) {
      e.preventDefault();
      Materialize.toast("<i class='material-icons'>done</i>" + "Email succesfully sent! I will try to respond as soon as possible. THANKS!", 3000);
    } 
  });

  e.preventDefault();
});