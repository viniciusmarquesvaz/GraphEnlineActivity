import { plot } from "plotly.js/lib/bar";
import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = () => {
  
  //o ideal  
  //como ficou
  
  //ideal
  const PlotData = { redGraph : { xAxis: [0,50,40,80,60] , yAxis: [1,2,3,4,5] } , greenGraph: { xAxis: [41,34,97,20] , yAxis: [1,2,3,4,5]},markerGraph:{xAxis:[14,47,65,12,5],yAxis: [1,2,3,4,5]} }


  return (
    //botoes
    <div>
        <GraphLayouts insertDataGraph={PlotData} />

    </div>
  );
};

export default Index;
