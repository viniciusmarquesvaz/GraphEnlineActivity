import { plot } from "plotly.js/lib/bar";
import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = () => {
  
  
  const redSample = [{ redX: [50, 20, 30,40, 10], redY: [1, 2, 3, 4, 5] }];
  const greenSample = [{ greenX: [10, 100, 37, 10, 6], greenY: [1, 2, 3, 4, 5] }];
  const markSample = [ { markerX:[39,90,87,40,2], markerY: [1,2,3,4,5] } ];

  const redX = [20,40,50,32,12];
  const redY = [1,2,3,4,5];
  const greenX = [15,48,69,20,80];
  const greenY = [1,2,3,4,5];
  const markerX = [80,30,55,12,60];
  const markerY = [1,2,3,4,5];


  return (
    //botoes
    <div>
        <GraphLayouts redSample={redSample} greenSample={greenSample} markSample={markSample} redX={redX} redY={redY} greenX={greenX} greenY={greenY} markerX={markerX} markerY={markerY}  />

    </div>
  );
};

export default Index;
