const rangeSelector = document.querySelector(".range-selector");
const chart = document.querySelector(".chart");
const legends = document.querySelector(".legends");

rangeSelector.addEventListener("input", (event) => {
   const updatedValue = event.target.value;
   //    console.log(updatedValue);

   //    background: conic-gradient(rgb(12, 40, 118) 30%, rgb(62, 106, 226) 0);
   const updatedBackground = `conic-gradient(rgb(12, 40, 118) ${updatedValue}%, rgb(62, 106, 226) 0)`;

   chart.style.background = updatedBackground;

   legends.innerHTML = `Value: ${updatedValue}%`;
});
