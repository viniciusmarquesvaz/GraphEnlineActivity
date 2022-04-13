import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;

  // let GraphData = [
  //   {
  //     x: redGraph.xAxis,
  //     y: redGraph.yAxis,
  //     mode: "lines+markers",
  //     type: "scatter",
  //     name: "elemento 1",
  //     marker: { color: "red" },
  //   },
  //   {
  //     x: greenGraph.xAxis,
  //     y: greenGraph.yAxis,
  //     mode: "lines+markers",
  //     type: "scatter",
  //     name: "elemento 2",
  //     marker: { color: "green" },
  //   },
  //   {
  //     x: markerGraph.xAxis,
  //     y: markerGraph.yAxis,
  //     mode: "markers",
  //     type: "scatter",
  //     name: "elemento 3",
  //     marker: { color: "orange" },
  //   },
  // ];
  const GraphLayout = {
    widthLayout: 1000,
    heightLayout: 500,
    titleLayout: "EnlineGraph",
  };

  const getPlotData = () => {
    //FAZER: Passar os outros atributos para o gráfico via props: Mode, Name e marker color.
    let graphDataList = [];
    Object.keys(insertDataGraph).forEach((graphData) => {
      console.log(graphData);
      console.log(insertDataGraph[graphData]);
      graphDataList.push({
        x: insertDataGraph[graphData].xAxis,
        y: insertDataGraph[graphData].yAxis,
        mode: insertDataGraph[graphData].modeGraph,
        type: insertDataGraph[graphData].gettypeGraph,
        name: insertDataGraph[graphData].nameGraph,
        marker: insertDataGraph[graphData].color,
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
