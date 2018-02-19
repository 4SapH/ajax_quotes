$(function () {
  $.ajaxSetup({
    cache: false,
    error: function(xhr, status, error) {
      alert("error");
    }
  });
  Pictures.init();
  // Colors.init();
  Quotes.init();
});

// unsplash:

// https://source.unsplash.com/random
// https://api.unsplash.com/photos/random

// for colors:

// https://www.canva.com/color-palette/
// (too many request, doesn't accept new keys)
// http://apicloud.me/apis/colortag/docs/
// (haven't tried yet)
// https://pictaculous.com/api/1.0/
// (can't get it to work)
