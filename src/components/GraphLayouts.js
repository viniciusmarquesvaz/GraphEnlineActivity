import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  


  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;
  const { insertLayoutGraph } = props;
  const { widthLayout, heightLayout, titleLayout } = insertLayoutGraph;

  return (
    <div id="graph">
      <Plot
        data={[
          {
            type: redGraph.type,
            mode: redGraph.mode,
            marker: { color: redGraph.color },
            x: redGraph.xAxis,
            y: redGraph.yAxis,
            name: redGraph.name,
          },

          {
            type: greenGraph.type,
            mode: greenGraph.mode,
            marker: { color: greenGraph.color },
            x: greenGraph.xAxis,
            y: greenGraph.yAxis,
            name: greenGraph.name,
          },

          {
            type: markerGraph.type,
            mode: markerGraph.mode,
            marker: { color: markerGraph.color },
            x: markerGraph.xAxis,
            y: markerGraph.yAxis,
            name: markerGraph.name,
          },
        ]}
        layout={{
          width: widthLayout,
          height: heightLayout,
          title: titleLayout,
        }}
      />
    </div>
  );
};

export default GraphLayout;
