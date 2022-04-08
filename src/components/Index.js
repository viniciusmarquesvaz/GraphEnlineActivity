import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = () => {
  //o ideal
  //como ficou

  const PlotData = {
    redGraph: {
      xAxis: [0, 50, 40, 80, 60],
      yAxis: [1, 2, 3, 4, 5],
      mode: "lines+markers",
      type: "scatter",
      name: "elemento 1",
      color: "red",
    },
    greenGraph: {
      xAxis: [41, 34, 97, 20],
      yAxis: [1, 2, 3, 4, 5],
      mode: "lines+markers",
      type: "scatter",
      name: "elemento 2",
      color: "green",
    },
    markerGraph: {
      xAxis: [14, 47, 65, 12, 5],
      yAxis: [1, 2, 3, 4, 5],
      mode: "markers",
      type: "scatter",
      name: "elemento 3",
      color: "orange",
    },
  };
  const PlotLayout = {
    widthLayout: 1000,
    heightLayout: 500,
    titleLayout: "EnlineGraph",
  };

  return (
    <div>
      <GraphLayouts insertDataGraph={PlotData} insertLayoutGraph={PlotLayout} />
    </div>
  );
};

export default Index;
