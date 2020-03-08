let inputAmount = document.querySelector("#unitInput").innerHTML;

console.log(inputAmount);
document.querySelector("#convertFromKg").addEventListener("click", function() {
  document.querySelector(".output").innerHTML = inputAmount;
});
