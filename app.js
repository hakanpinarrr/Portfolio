$(document).ready(function() {
  $(".tooltipped").tooltip();

  $(".button-collapse").sideNav();

  var options = [
    {
      selector: "#imageofme",
      offset: 20,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#imageofme").css({ opacity: 20 });
      }
    },
    {
      selector: "#intro",
      offset: 20,
      callback: function(el) {
        setTimeout(function() {
          Materialize.fadeInImage($(el));
          $("#intro").css({ opacity: 20 });
        }, 400);
      }
    },
    {
      selector: "#staggered-test",
      offset: 100,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#staggered-test").css({ opacity: 100 });
      }
    },
    {
      selector: "#educations",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#educations").css({ opacity: 100 });
      }
    },
    {
      selector: "#projects",
      offset: 50,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#projects").css({ opacity: 100 });
      }
    },
    {
      selector: "#abilities",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#abilities").css({ opacity: 100 });
      }
    },
    {
      selector: "#personalskills",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#personalskills").css({ opacity: 100 });
      }
    },
    {
      selector: "#contact",
      offset: 150,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#contact").css({ opacity: 100 });
      }
    }
  ];

  $(".button-collapse").sideNav({
    menuWidth: 250, // Default is 300
    edge: "left", // Choose the horizontal origin
    closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

  Materialize.scrollFire(options);
  $("input#input_text, textarea#textarea1").characterCounter();
  $(".parallax").parallax();
  check();
  applyHeader();

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
});

function check() {
  if ($(window).height() < 600) {
    applyHeader();
    $("#navbar").css({ display: "block" });
  }
}

$("div.main").mouseenter(function() {
  $(this)
    .addClass("change")
    .delay(5000)
    .queue(function() {
      $(this)
        .removeClass("change")
        .dequeue();
    });
});

$("div.main1").mouseenter(function() {
  $(this)
    .addClass("change")
    .delay(5000)
    .queue(function() {
      $(this)
        .removeClass("change")
        .dequeue();
    });
});

$(document).ready(function() {
  $(".scrollspy").scrollSpy({});
});

$(window).on("resize", function() {
  applyHeader();
});

function applyHeader() {
  $(".first-parallax").css({ height: $(window).height() + "px" });
  $(".first-parallax").css({ width: "100%" });
  $("#nameSection").css({ width: "100%" });
  $("#nameSection").css({ height: $(window).height() + "px" });
}
