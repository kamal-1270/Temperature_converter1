document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const inputTemperature = parseFloat(temperatureInput.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(inputTemperature)) {
            alert("Please enter a valid temperature.");
            return;
        }

        let convertedTemperature;

        if (from === "celsius" && to === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            convertedTemperature = (inputTemperature - 32) * 5/9;
        } else {
            convertedTemperature = inputTemperature;
        }

        result.textContent = `${convertedTemperature.toFixed(2)} ${to === "celsius" ? "°C" : "°F"}`;
    });
});
