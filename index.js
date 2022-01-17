let searchButton = document.querySelector("#search")
let temp = 1;

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let API_KEY = "f9saVdsoWESCCfFR2vu2qs617EgvLAty4FbLeuio";
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


function useApiData(data) {
  if (temp == 1) {
    for (let i = 1; i <= 15; i++) {
      document.getElementById(`dataName${i}`).innerHTML += data.photos[i].rover.name + " rover - " + data.photos[i].camera.full_name + "\n"; // get the name of the rover
      document.getElementById(`image${i}`).innerHTML += `<img src=${data.photos[i].img_src}>` + "\n"; // get the image
      document.getElementById(`date${i}`).innerHTML += data.photos[i].earth_date + "\n"; // earth date
      temp++; // to avoid uploading images repeatedly when the search button is clicked
    }
  }
}

function DisplayorNo() {
  for (let i = 1; i <= 15; i++) {
    document.getElementById(`content${i}`).style.display = 'block' // display each post when the search button is clicked
  }
  document.getElementById("intro").style.display = 'none'; // do not dispaly the intro
  document.getElementById("backButton").style.display = 'block'; // display the 'back' button
  document.getElementById("nameLabel").style.display = 'block'; // display the application name

}

function Back() {
  for (let i = 1; i <= 15; i++) {
    document.getElementById(`content${i}`).style.display = 'none' // do not display the individual posts
  }
  document.getElementById("intro").style.display = 'block'; // display the main text
  document.getElementById("backButton").style.display = 'none'; // do not display the back button
  document.getElementById("nameLabel").style.display = 'none'; // do not display the application name
}



function LikeButton(no, likes) {
  var lb = document.getElementById(`click${no}`); // get the Id of each post respective to their number assigned
  if (lb.style.webkitTextFillColor == "red") { // to unlike the post (white outline of the heart)
    lb.style.webkitTextStroke = "2px rgb(255, 255, 255)"
    lb.style.webkitTextFillColor = "rgba(255, 255, 255, 0)"
    document.getElementById(`nameShow${no}`).innerHTML = likes + " likes" // display original number of likes

  }
  else { // to like the post (red heart)
    lb.style.webkitTextFillColor = "red"
    lb.style.webkitTextStroke = "2px red"
    document.getElementById(`nameShow${no}`).innerHTML = likes + 1 + " likes" // display an increment in likes by one
  }

}
