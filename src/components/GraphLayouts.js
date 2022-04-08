import React from "react";
import Plot from 'react-plotly.js';
import Index from "./Index";



//const GraphLayout =  ({redX, redY , greenX, greenY, markerX ,markerY}) => {
  const GraphLayout = (props) => {     
      console.log(props) 
//    const {redSample}=props;
   const {redX} = props;
   const {redY} = props;
   const {greenY} = props;
   const {greenX} = props;
   const {markerX} = props;
   const {markerY} = props;
   const {redSample} = props;


   
        return (
            <div id="graph">
            <Plot  data={[
                    
                    {  id: 'redLine',
                        type: 'scartter',
                     mode: 'lines+markers',
                     marker: {color: 'red'},
                        x: redX,
                        y: redY},
                    
                        { id: 'greenLine',
                        type: 'scatter',
                         mode: 'lines+markers',
                         marker: {color: 'green'},
                        x: greenX,
                        y: greenY},
                     
                    {   id: 'markerLine',
                        type: 'scatter',
                         mode: 'markers',
                         marker: {color: 'orange'},
                         size: 12,
                         width: 3,
                        x: markerX,
                        y: markerY}
                         
                        
                ]} 
                layout={ { width: 1000,height: 500} } />
                
               


            </div>
            
        )
        
    
}

export default GraphLayout;