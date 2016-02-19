$(document).ready(function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=1ef1c7a121221a74581a8fdbb8493370";

          $.getJSON(url, function(json, stat) {
            var city = JSON.stringify(json.name + ', ' + json.sys.country).replace(/['"]+/g, '');
            var temp = json.main.temp.toFixed(2);
            var img = json.weather[0].icon;
            img = '<img src=http://openweathermap.org/img/w/' + img + '.png />';
            var desc = JSON.stringify(json.weather[0].description);
            desc = desc.replace(/['"]+/g, '');
            desc = desc.split(" ");
            desc[0] = desc[0].charAt(0).toUpperCase() + desc[0].slice(1);
            desc = desc.join(" ");
            temp = temp - 273.15;
            var bg = 'url("http://images.fineartamerica.com/images-medium-large-5/a-cloudy-day-lisa-plymell.jpg")';
            
              if(parseInt(json.weather.id, 10) < 300) 
                bg = 'url("https://upload.wikimedia.org/wikipedia/commons/a/a4/Cloud_to_ground_lightning_strikes_south-west_of_Wagga_Wagga.jpg")';
            else if(parseInt(json.weather[0].id,10) < 400)
              bg = 'url("http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg")';
            else if(parseInt(json.weather[0].id,10) < 600)
              bg = 'url("http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg")';
            else if(parseInt(json.weather[0].id,10) < 700)
              bg = 'url("https://i.ytimg.com/vi/ea1GMrjjJ1A/maxresdefault.jpg")';
            else if(parseInt(json.weather[0].id,10) == 800)
              bg = 'url("http://cdn1.landscapehdwalls.com/thumbs/1/clear-sky-759-706.jpg")';
            $('body').css('background-image', bg);  
            
            $('.cssload-container').css("display", 'none');
            $('#city').html(city);
            $('#temp').html(temp.toFixed(2) + ' &#8451;');
            $('#desc').html(desc);
            $('span').html(img);
            $('#info').css('display','inline');
            $("button").prop('disabled', false);
          });
        });
      }
        var celcius = true;
        $('.btn').click(function change() {
          var temp = $('#temp').text();
          temp = temp.split(" ");
          if (celcius) {
            //C to F
            temp = (temp[0] * 9 / 5 + 32).toFixed(2) + ' &#8457;';
            celcius = false;
          } else {
            celcius = true;
            temp = ((temp[0] - 32) * 5 / 9).toFixed(2) + ' &#8451;';
          }

          $('#temp').html(temp);
        });
        $(".btn").mouseup(function() {
          $(this).blur();
        });
      
      });