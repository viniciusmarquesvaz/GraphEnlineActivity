import React, { useEffect, useState } from "react";
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

  const getGraphName = (name) => {
    if (name === "redData") {
      return name;
    } else if (name === "greenData") {
      return name;
    } else if (name === "markerData") {
      return name;
    }
  };

  const generateColors = (opcacity = 1) => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgba(${r},${g},${b},${opcacity})`;
  };
  const getGraphType = (type) => {
    if (type === "scatter") return type;
  };

  const getGraphMode = (mode) => {
    if (mode === "lines") {
      return mode;
    } else if (mode === "markers") {
      return mode;
    } else if (mode === "lines+markers") {
      return mode;
    }
  };

  const getGraphColor = () => {
    return generateColors(1);
  };

  const [dataValues, setDatavalues] = useState(DataString);
  useEffect(() => {
    manipulateDataValues();
  }, [DataString]);

  const manipulateDataValues = () => {
    setDatavalues(!DataString);
  };

  const DataString = {
    redGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
      color: { color: getGraphColor(1) },
      nameGraph: getGraphName("redData"),
      typeGraph: getGraphType("scatter"),
      modeGraph: getGraphMode("lines"),
    },
    greenGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
      color: { color: getGraphColor(1) },
      nameGraph: getGraphName("greenData"),
      typeGraph: getGraphType("scatter"),
      modeGraph: getGraphMode("lines"),
    },
    markerGraph: {
      xAxis: generateXdata(100),
      yAxis: generateYdata(),
      color: { color: getGraphColor(1) },
      nameGraph: getGraphName("markerData"),
      typeGraph: getGraphType("scatter"),
      modeGraph: getGraphMode("markers"),
    },
  };

  return (
    <div>
      <GraphLayouts
        insertDataGraph2={dataValues}
        insertDataGraph={DataString}
      />
      <button>teste </button>
      <p>Teste para salvar o estado do elemento </p>
    </div>
  );
};

export default Index;
