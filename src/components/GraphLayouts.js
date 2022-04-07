import React from "react";
import Plot from 'react-plotly.js';
import Index from "./Index";



//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
  const GraphLayout = (props) => {     
      console.log(props) 
   const {redSample}=props;
   console.log(redSample);
        return (
            <div id="graph">
            <Plot  data={[
                    
                    {  id: 'redLine',
                        type: 'scartter',
                     mode: 'lines+markers',
                     marker: {color: 'red'},
                        x:[1,2,3],
                        y: [1,2,3]},
                    
                        { id: 'greenLine',
                        type: 'scatter',
                         mode: 'lines+markers',
                         marker: {color: 'green'},
                        x: [1,2,3],
                        y: [1,2,3]},
                     
                    {   id: 'markerLine',
                        type: 'scatter',
                         mode: 'markers',
                         marker: {color: 'orange'},
                         size: 12,
                         width: 3,
                        x: [1,2,3],
                        y: [1,2,3]} 
                        
                ]} 
                layout={ { width: 1000,height: 500} } />
                
               


            </div>
            
        )
        
    
}

export default GraphLayout;
