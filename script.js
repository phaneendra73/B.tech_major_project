const read_channel =
  "https://api.thingspeak.com/channels/2182455/feeds.json?api_key=TCJU8DGD2FFMMCTC&results=2";

  patients=document.getElementById("patients");

function fetchDataAndUpdate() {
  fetch(read_channel)
    .then((response) => response.json())
    .then((data) => {
      // 'data' contains the parsed JSON object
      // You can access the data and perform operations here
      var info = data;
      console.log(info.feeds)
      patients.innerHTML = `<div class="patients">
      <h2>Patient 1 Data</h2>
      <div>Temperature 1= ${info.feeds[0].field1 - 5}</div>
      <div>ECG 1= ${info.feeds[0].field2}</div>
      <div>PULSE 1= ${info.feeds[0].field3}</div>
       <h2>Patient 2 Data</h2>
      <div>Temperature 1= ${info.feeds[0].field4}</div>
      <div>ECG 1= ${info.feeds[0].field5}</div>
      <div>PULSE 1= ${info.feeds[0].field6}</div>
      </div>`;
      
    })
    .catch((error) => {

      console.log("Error:", error);
    });
}

// Call the fetchDataAndUpdate function initially
fetchDataAndUpdate();

// Set up a timer to call the function every 10 seconds
setInterval(fetchDataAndUpdate, 15000);
