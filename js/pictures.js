let Pictures = (function () {

  // Get

  let picLink = '';

  let api = {
    //endPoint: 'https://source.unsplash.com/random',
    endPoint: 'https://api.unsplash.com/photos/random',
    params: {
      client_id: 'cdc095379d12676313aa0c017b2f46748464292a3ab3b52850e4a9a566a4ef72',//insert my id here
    },
  };

  function getPicture() {
    $.get(api.endPoint, api.params, handlePicture, 'json');
  }

  function handleError(err) {
    console.log(err);
  }

  // Render

  function handlePicture(response) {
    picLink = response.urls.thumb;
    console.log(picLink);
  }

  // function lemne() {
  //   $('#img').src = 'https://source.unsplash.com/random';
  // }

  function init() {
    // lemne();
    getPicture();
  }

  return {
    init: init,
    picLink: picLink,
  };

}());

// https://unsplash.com/documentation
