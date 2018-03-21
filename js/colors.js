let Colors = (function () {

  // DOM

  // let dom = {};
  let $img;

  function cacheDom() {
    $img = document.querySelector('#testImage');
  }

  let colors = [];

  function getColors() {
    cacheDom();

    let colorThief = new ColorThief();
    // dom.$img.src = picLink;
    let $img = new Image();
    $img.crossOrigin = "Anonymous";
    $img.setAttribute('crossOrigin', '');
    $img.src = "https://images.unsplash.com/photo-1507202149208-29670519ac08?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIxNTIyfQ&s=d2d0b77c7ab4c14f1d5ed3634e8451ab";
    console.log(colorThief.getPalette($img, 5));
    //colors = colorThief.getPalette(dom.$img, 5);
    //console.log(colors);
  };

  return {
    getColors: getColors
  };

})();
