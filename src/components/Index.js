import { plot } from "plotly.js/lib/bar";
import React, { useState, useEffect } from "react";
import GraphLayouts from "./GraphLayouts";

const Index = (props) => {
  
  
  const redSample = [{ redX: [0, 0, 0, 0, 0], redY: [1, 2, 3, 4, 5] }];
  const greenSample = [{ greenX: [10, 100, 37, 10, 6], greenY: [1, 2, 3, 4, 5] }];
  const markSample = [ { markerX:[39,90,87,40,2], markerY: [1,2,3,4,5] } ];


  return (
    //botoes
    <div>
        <GraphLayouts redSample={redSample} teste="teste"/>

    </div>
  );
};

export default Index;
