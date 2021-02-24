const axios = require("axios");

async function gett() {
  axios
  .get("http://apimeme.com/meme", {
    params: {
      meme: "Advice-Doge",
      top: "Top text",
      bottom: "Bottom text",
    },
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}



gett()