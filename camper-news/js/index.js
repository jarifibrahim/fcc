var a = $.getJSON("http://www.freecodecamp.com/news/hot", function(json) {
  console.log(json);
  for (var j = 0; j < json.length; j++) {
    var content = json[j]
    var headline = content['headline']
    var author_uname = content['author']['username']
    var author_picture = content['author']['picture']
    var link = content['link']
    var upvotes = content['upVotes'].length;
    var image = content['author']['picture'];
    var date = new Date(content['timePosted'])
    var author_link = "http://www.freecodecamp.com/" + author_uname;

    var data = "<div class='news'>" + 
        "<a href=" + link + "><img src='" + image + "'/>" + 
        "<p class='head'>" + headline + "</p></a>" + 
        "<p class='tail'>by - " + "<a href=" + author_link + ">" + author_uname + "</a></p>" + 
        "<p><span class='glyphicon glyphicon-heart'></span> " + upvotes + " </p>" + 
        "<p>Posted on " + date.toDateString() + "</p>" + 
        "</div>";
    $('.container-fluid').append(data);
  }
});