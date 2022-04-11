import React from "react";
import Plot from "react-plotly.js";
import Index from "./Index";

//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
const GraphLayout = (props) => {
  const { insertDataGraph } = props;
  const { redGraph, greenGraph, markerGraph } = insertDataGraph;

  const numGraph = () => {
    var numberOfGraphs = 0;
    numberOfGraphs = prompt(
      "Digite o número referente a quantidade de gŕaficos que deseja inserir na apresentação /n"
    );
    if (numberOfGraphs < 0) {
      return;
    } else if (numberOfGraphs > 0) {
      let newLineGraph;

      for (var i = 0; i < numberOfGraphs.length; i++) {
        greenGraph = newLineGraph.push({
          x: redGraph.xAxis,
          y: greenGraph.yAxis,
          mode: "lines+markers",
          type: "scatter",
          name: "elemento 1",
          marker: { color: "red" },
        });
      }
    }
  };

  let GraphData = [
    {
      x: redGraph.xAxis,
      y: greenGraph.yAxis,
      mode: "lines+markers",
      type: "scatter",
      name: "elemento 1",
      marker: { color: "red" },
    },
    {
      x: greenGraph.xAxis,
      y: greenGraph.yAxis,
      mode: "lines+markers",
      type: "scatter",
      name: "elemento 2",
      marker: { color: "green" },
    },
    {
      x: markerGraph.xAxis,
      y: markerGraph.yAxis,
      mode: "markers",
      type: "scatter",
      name: "elemento 3",
      marker: { color: "orange" },
    },
  ];
  const GraphLayout = {
    widthLayout: 1000,
    heightLayout: 500,
    titleLayout: "EnlineGraph",
  };

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

// const numGraph = (num) => {
//   numberOfGraphs = prompt(
//     "Digite o número referente a quantidade de gŕaficos que deseja inserir na apresentação /n"
//   );
//   if (numberOfGraphs < 0) {
//     return;
//   } else if (numberOfGraphs > 0) {
//     const GraphData =  {
//       id: 'redLine',
//       type: 'scartter',
//       mode: 'lines+markers',
//       marker: {color: 'red'},
//       x: ['1','2','3','4','5'],
//       y: [29,100,41,48,74]},
//     }
//   }
// };
