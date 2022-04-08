import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  console.log(props);

  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;
  console.log(redGraph);

  return (
    <div id="graph">
      <Plot
        data={[
          {
            id: "redLine",
            type: "scartter",
            mode: "lines+markers",
            marker: { color: "red" },
            x: redGraph.xAxis,
            y: redGraph.yAxis,
          },

          {
            id: "greenLine",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "green" },
            x: greenGraph.xAxis,
            y: markerGraph.yAxis,
          },

          {
            id: "markerLine",
            type: "scatter",
            mode: "markers",
            marker: { color: "orange" },
            size: 12,
            width: 3,
            x: markerGraph.xAxis,
            y: markerGraph.yAxis,
          },
        ]}
        layout={{ width: 1000, height: 500 }}
      />
    </div>
  );
};

export default GraphLayout;

