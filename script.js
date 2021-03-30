let cityName = $('#city-name');
let cityTemp = $('#temperature');
let windSpeed = $('#wind-speed');
let humidity = $('#humidity');
let cityUVIndex = $('#uv-index');
let timeDisplayEL = $('#date-display');
let userSearchInput = $('#search-input');
let searchBtn = $('#search-btn');

var userContainer = document.getElementById('users'); //This is for testing

// Globally scoped variables are above.

function displayTime() {
    var rightNow = moment().subtract(10, 'days').calendar();
    timeDisplayEL.text(rightNow);
}

setInterval(displayTime);

//Above we use a moment.js function to display the current time.


//////


// Testing the weather API below.
function getWeatherApi() {
    var cityName = userSearchInput
    console.log(cityName.textContent)
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=$c670ee249f79219a0df9744ffc1fd9ba&units=imperial`;
    // console.log(cityName.textContent)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating a h3 element and a p element
          var userName = document.createElement('h3');
          var userUrl = document.createElement('p');
  
          //Setting the text of the h3 element and p element.
          userName.textContent = data[i].login;
          userUrl.textContent = data[i].url;
  
          //Appending the dynamically generated html to the div associated with the id="users"
          //Append will attach the element as the bottom most child.
          usersContainer.append(userName);
          usersContainer.append(userUrl);
        }
      });
  }