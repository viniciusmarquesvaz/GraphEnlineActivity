import { plot } from "plotly.js/lib/bar";
import React, { useState, useEffect } from "react";



function Index() {
    //use states para alterar com eventor a linha do gŕáfico
    const [counterRed, setRed] = useState(false);
    const showOrHideRed = () => setRed(true);

    const [counterGreen, setGreen] = useState(false);
    const showOrHideGreen = () => setGreen(true)

    const [counterMarker, setMarker] = useState(false);
    const showOrHideMarker = () => setMarker(true)


    return(
        
        //botoes 
        <div>
            <button >gerar dados aleatórios</button>

            <button onClick={showOrHideRed} >botao linha vermelha</button>
            {/* condição abaixo para mostrar ou não mostrar(rever) */}
            { counterRed ?  <plot id='redLine' /> : null }


            <button onClick={showOrHideGreen}>botao linha verde</button>
            {/* condição abaixo para mostrar ou não mostrar(rever) */}
            { counterGreen ?  <plot id='greenLine' /> : null }


            <button onClick={showOrHideMarker} >botao marcador</button>
            {/* condição abaixo para mostrar ou não mostrar(rever) */}
            { counterMarker ?  <plot id='marker' /> : null }
        </div>
       
     
    )
}

export default Index