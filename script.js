// const response = fetch("https://api.adviceslip.com/advice")
//   .then((responseData) => {
//     /*os dados fetch passam a ser chamados com a variável responseData*/
//     return responseData.json();
//     /* torna-se .json */
//   })
//   .then((jsonData) => {
//     /* os dados são separados adequadamente */
//     console.log(jsonData);
//   });

const call = async () => {
  var randomNum = Math.floor(Math.random() * 200);

  try {
    const response = await fetch(
      "https://api.adviceslip.com/advice/" + randomNum
    );
    const jsonData = await response.json();
    document.getElementById("adviceNum").innerHTML =
      "Advice # " + jsonData.slip.id;

    document.getElementById("string").innerHTML =
      '"' + jsonData.slip.advice + '"';
  } catch (error) {
    console.log("something went wrong: " + error);
  }
};
