$(document).ready(function() {

//hover over tiled images
  $(".hoverfade").hover(function() {
    $(this).stop().animate({opacity: "0.5"}, 'slow');
  },
  function() {
    $(this).stop().animate({opacity: "1"}, 'slow');
  });

//alert button
  $(".btn").click(function() {
    alert("Thanks, you are now subscribed!");
  });

});
