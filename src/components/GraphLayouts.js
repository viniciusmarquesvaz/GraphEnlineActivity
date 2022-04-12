import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;

  let GraphData = { ...interationGraph };
  const GraphLayout = {
    widthLayout: 1000,
    heightLayout: 500,
    titleLayout: "EnlineGraph",
  };

  const interationGraph = () => {
    Object.keys(GraphData).forEach((key) => {
      console.log(key, GraphData[key]);
    });
  };

  console.log(interationGraph());

  return (
    <div id="graph">
      <Plot
        data={[...GraphData]}
        layout={{
          ...GraphLayout,
        }}
      />
    </div>
  );
};

export default GraphLayout;
