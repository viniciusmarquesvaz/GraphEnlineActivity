import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;
  const { insertDataGraph2 } = props;

  const GraphLayout = {
    widthLayout: 1000,
    heightLayout: 500,
    titleLayout: "EnlineGraph",
  };

  const getPlotData = () => {
    let graphDataList = [];
    Object.keys(insertDataGraph2).forEach((graphData) => {
      console.log(graphData);
      console.log(insertDataGraph2[graphData]);
      graphDataList.push({
        x: insertDataGraph2[graphData].xAxis,
        y: insertDataGraph2[graphData].yAxis,
        mode: insertDataGraph2[graphData].modeGraph,
        type: insertDataGraph2[graphData].gettypeGraph,
        name: insertDataGraph2[graphData].nameGraph,
        marker: insertDataGraph2[graphData].color,
      });
    });
    console.log(graphDataList);
    return graphDataList;
  };

  return (
    <div id="graph">
      <Plot
        data={[...getPlotData()]}
        layout={{
          ...GraphLayout,
        }}
      />
    </div>
  );
};

export default GraphLayout;
