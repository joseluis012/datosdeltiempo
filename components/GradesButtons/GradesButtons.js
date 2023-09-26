


import React, { useState } from 'react';

function TemperatureUnitSelector() {
  const [selectedUnit, setSelectedUnit] = useState("metric"); 

  
  const handleCelsius = () => {
    setSelectedUnit("metric");
  };

 
  const handleFahrenheit = () => {
    setSelectedUnit("standard");
  };

  return (
    <div id="grades">
      <button
        href="#"
        className={selectedUnit === "metric" ? "btn-grades active" : "btn-grades"}
        onClick={handleCelsius}
      >
        ºC
      </button>
      <button
        href="#"
        className={selectedUnit === "standard" ? "btn-grades active" : "btn-grades"}
        onClick={handleFahrenheit}
      >
        ºF
      </button>
    </div>
  );
}

export default TemperatureUnitSelector;
