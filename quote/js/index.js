$(document).ready(function() {
  var tweet = '';
  var quote = ['You can do anything, but not everything.',
    'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    'The richest man is not he who has the most, but he who needs the least.',
    'You miss 100 percent of the shots you never take.',
    'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
    'You must be the change you wish to see in the world.',
    'To the man who only has a hammer, everything he encounters begins to look like a nail.',
    'We are what we repeatedly do; excellence, then, is not an act but a habit.',
    'A wise man gets more use from his enemies than a fool from his friends.',
    'Do not seek to follow in the footsteps of the men of old; seek what they sought.',
    'Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.',
    'What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.',
    'The real voyage of discovery consists not in seeking new lands but seeing with new eyes.',
    'Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching',
    'Even if you’re on the right track, you’ll get run over if you just sit there.',
    'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.'
  ];
  var source = ['David Allen',
    'Antoine de Saint-Exupéry',
    'Unknown Author', 'Wayne Gretzky',
    'Ambrose Redmoon', 'Gandhi',
    'Abraham Maslow', 'Aristotle',
    'Baltasar Gracian', 'Basho',
    'Georg Christoph Lichtenberg',
    'John Ruskin',
    'Marcel Proust', 'Unknown Author',
    'Will Rogers',
    'Zig Ziglar'
  ];
  var but = document.getElementById("link");

  function change() {
    var ran = Math.floor(Math.random() * quote.length);
    $('p').html(quote[ran]);
    $('footer').html(source[ran]);
    tweet = 'Quote: ' + quote[ran] + ' --' + source[ran];
    but.setAttribute("data-text", tweet);

  }
  change();

  $('button').click(function() {
    change();
  });

  $('#new_quote').on('click', function(ev) {
    ev.preventDefault();
    // Remove existing iframe
    $('iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
      .addClass('twitter-share-button')
      .attr('href', 'http://twitter.com/intent/tweet')
      .attr('data-url', '/')
      .attr('data-text', tweet)
    .attr('data-size', 'large');
    $('.quote-center').append(tweetBtn);
    twttr.widgets.load();
  });
});