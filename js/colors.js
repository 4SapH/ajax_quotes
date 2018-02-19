let Colors = (function () {

  let colors = [];

  let api = {
    endpoint: 'https://pictaculous.com/api/1.0/',
    params: {
      image: 'https://images.unsplash.com/photo-1495979830471-67a0decaa1cc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIxNTIyfQ&s=a4a5488765c3f3661955e6d17e195dcf.png',
    }
  }

  function handleColors(data) {
    colors = data.colors;
    console.log(colors);
  }

  function init() {
    $.get(api.endpoint, api.params, handleColors,'json');

    Quotes.init();
  }

  return {
    init: init,
  };

})();
