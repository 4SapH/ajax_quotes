let Pictures = (function () {

  // DOM

  let dom = {};

  function cacheDom() {
    dom.$inspire = $('#inspire');
  }

  // Get

  let picLink = '';

  let api = {
    // endPoint: 'https://source.unsplash.com/random',
    endPoint: 'https://api.unsplash.com/photos/random',
    params: {
      client_id: 'cdc095379d12676313aa0c017b2f46748464292a3ab3b52850e4a9a566a4ef72'
    },
  };

  function getPicture() {

    $.get(api.endPoint, api.params, handlePicture, 'json');

    // dom.$inspire = handleColors();
  }

  function handleError(err) {
    console.log(err);
  }

  // Render

  function handlePicture(response) {
    picLink = response.urls.thumb;
    let colors = Colors.getColors(picLink);
    // console.log("COLORS: ", colors);
  }

  function init() {
    cacheDom();
    getPicture();
  }

  return {
    init: init,
    picLink: picLink,
  };

}());

// https://unsplash.com/documentation
