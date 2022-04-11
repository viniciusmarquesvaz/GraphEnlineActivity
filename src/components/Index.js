import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = () => {
  //gerador de um array
  function generateXdata(a, b) {
    var array = [];
    while (a < b + 1) {
      array.push(a++);
    }
    return array;
  }
  console.log(generateXdata(0, 100));

  //gerador de numeros aleatórios
  const generateYdata = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const PlotData = {
    redGraph: {
      xAxis: [50, 50, 40, 80, 60],
      yAxis: [1, 2, 3, 4, 5],
    },
    greenGraph: {
      xAxis: [41, 34, 97, 20],
      yAxis: [1, 2, 3, 4, 5],
    },
    markerGraph: {
      xAxis: [14, 47, 65, 12, 5],
      yAxis: [1, 2, 3, 4, 5],
    },
  };

  return (
    <div>
      <GraphLayouts insertDataGraph={PlotData} />
      <button>teste</button>
    </div>
  );
};

export default Index;
