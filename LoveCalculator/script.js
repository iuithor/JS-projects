function calculateLove() {
  const nombre1 = document.getElementById("nombre1").value.trim();
  const nombre2 = document.getElementById("nombre2").value.trim();

  if (nombre1 === "" || nombre2 === "") {
    alert("Please, enter both names!");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");

    result.innerHTML = `${nombre1} and ${nombre2}´s love percentage is: ${lovePercentage}% <br />`;

    if (lovePercentage < 30) {
      result.innerHTML += "Not a great match. Keep looking, maybe?";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerText += "There is potential. Give it time!";
    } else if (lovePercentage >= 70 && lovePercentage < 90) {
      result.innerText += "Great match! Love is in the air.";
    } else {
      result.innerText += "Heavenly blessed match!";
    }
  }
}
