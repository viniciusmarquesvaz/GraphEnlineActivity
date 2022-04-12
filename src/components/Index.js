import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = () => {
  const generateXdata = (size) => {
    const sizeArrayX = [];
    for (let i = 0; i < size; i++) {
      sizeArrayX.push(i++);
    }
    return sizeArrayX;
  };

  const generateRandomNumY = () => {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  };

  const generateYdata = () => {
    const sizeArrayY = [];
    for (let i = 0; i < 100; i++) {
      let randomNumY = generateRandomNumY();
      sizeArrayY.push(randomNumY);
    }
    return sizeArrayY;
  };

  console.log(generateYdata());

  const PlotData = {
    redGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
    },
    greenGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
    },
    markerGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
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
