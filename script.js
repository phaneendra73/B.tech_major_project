const read_channel =
  "https://api.thingspeak.com/channels/2182455/feeds.json?api_key=TCJU8DGD2FFMMCTC&results=2";
let patient1 = document.getElementById("patient1");
fetch(read_channel)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch or parsing
    console.log("Error:", error);
  });
//  patient1.innerHTML = `<h2 class="banner-title"></h2>
//     <p class="banner-info">IMDB ${rating}</p>
//     <p class="banner-overview">${movie.release_date}<p>
//     <p class="banner-overview">${movie.overview}<p>
//     <div class="action-buttons">`;
