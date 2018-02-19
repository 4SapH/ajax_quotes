let Quotes = (function () {

  // DOM

  let dom = {};

  function cacheDom() {
    dom.$quoteBlock = $('#quoteBlock');
    dom.$quoteTitle = $('#quoteTitle');
    dom.$quoteText = $('#quoteText');
    dom.$inspireBtn = $('#inspire');
  }

  // Get

  let api = {
    endPoint: 'https://quotesondesign.com/wp-json/posts',
    params: {
      'filter[orderby]': 'rand',
      'filter[posts_per_page]': 1,
    },
  };

  function getQuote() {
    $.get(api.endPoint, api.params, renderQuote, 'json');
  }

  function handleError(err) {
    console.log(err);
  }

  // Render

  let first = true;

  function renderQuote(response) {
    if (first) {
      dom.$quoteTitle.text(response[0].title);
      dom.$quoteText.html(response[0].content);
      first = false;
    } else {
      dom.$quoteBlock.fadeOut(250, function () {
        dom.$quoteTitle.text(response[0].title);
        dom.$quoteText.html(response[0].content);
      }
      );
      dom.$quoteBlock.fadeIn(250);
    }
  }

  function init() {
    cacheDom();
    getQuote();
    dom.$inspireBtn.on('click', getQuote);
  }

  return {
    init: init,
  };

}());
