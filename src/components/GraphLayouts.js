import React, { Component } from "react";
import PLot from 'react-plotly.js';
import Index from "./Index";



class GraphLayout extends Component {
    render(){
        return (
            <div id="graph">
            <PLot  data={[
                    //linha vermelha
                    {  id: 'redLine',
                        type: 'scartter',
                     mode: 'lines+markers',
                     marker: {color: 'red'},
                        x: ['1','2','3','4','5'],
                        y: [29,100,41,48,74]},
                    //linha verde
                        { id: 'greenLine',
                        type: 'scatter',
                         mode: 'lines+markers',
                         marker: {color: 'green'},
                        x: ['1','2','3','4','5'],
                        y: [40,20,100,68,10]},
                    //marcador    
                    {   id: 'markerLine',
                        type: 'scatter',
                         mode: 'markers',
                         marker: {color: 'orange'},
                         size: 12,
                         width: 3,
                        x: ['1','2','3','4','5'],
                        y: [15,84,46,13,97]} 
                        
                ]} 
                layout={ { width: 1000,height: 500} } />
                {/* todos os botões */}
                <Index/>


            </div>
            
        )
        
    }
}

export default GraphLayout;