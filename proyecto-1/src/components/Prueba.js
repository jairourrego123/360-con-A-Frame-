import 'aframe';
import { AFRAME } from './change-site'
import React from 'react';


function Prueba() {


  return (
    //  <Scene/>

    <a-scene >

      <a-assets>

        <img id="ugc" src="img/ugc.jpg" alt="ugc" />
        <img id="ingenieria" src="img/ingenieria.jpg" alt="ingenieria" />
        <img id="campus" src="img/campus.jpg" alt="campus" />
        <img id="conciliacion" src="img/conciliacion.jpg" alt="conciliacion" />
        <audio id="alerta" src="sound/alerta-nextel-ringtones.mp3" preload="auto"></audio>
        <audio id="gallo" src="sound/Gallo.mp3" preload="auto"></audio>
        <audio id="tuberia" src="sound/mario-bros tuberia.mp3" preload="auto"></audio>
        <audio id="mario" src="sound/mario-bros.mp3" preload="auto"></audio>
        {/* <Imagen/> */}
      </a-assets>

      <a-camera >
        <a-cursor raycaster="objects: .clickable" ></a-cursor>
      </a-camera>

      <a-entuty>


      {/* -------------------------------------Ingenieria--------------------------------- */}

      <a-box position="-1.9 1.3 -3" scale="0.25 0.25 0.25" rotation="45 45 45" color="red"
        animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

      <a-plane color="black" position="0 1.3 -3" width="3" height="0.25" class="clickable"
        change-site="img: #ingenieria"
        sound="on:mouseenter; src:#gallo">

        <a-text value="Ingenieria" color="white" align="center"></a-text>
      </a-plane>


      {/* ----------------------------------Posgrados---------------------------------- */}

      <a-box position="-1.9 1 -3" scale="0.25 0.25 0.25" rotation="45 45 45" color="red"
        animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

      <a-plane color="black" position="0 1 -3" width="3" height="0.25" class="clickable"
        change-site="img: #ugc"
        sound="on:mouseenter; src:#alerta">

        <a-text value="Posgrados" color="white" align="center"></a-text>
      </a-plane>





      {/* --------------------------------------------Campus--------------------------------- */}
      <a-box position="-1.9 0.7 -3" scale="0.25 0.25 0.25" rotation="45 45 45" color="red"
        animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

      <a-plane color="black" position="0 0.7 -3" width="3" height="0.25" class="clickable"
        change-site="img: #campus"
        sound="on:mouseenter; src:#tuberia">

        <a-text value="Campus" color="white" align="center"></a-text>
      </a-plane>

      {/* ----------------------------------------Conciliacion--------------------------------- */}
      <a-box position="-1.9 0.4 -3" scale="0.25 0.25 0.25" rotation="45 45 45" color="red"
        animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

      <a-plane color="black" position="0 0.4 -3" width="3" height="0.25" class="clickable"
        change-site="img: #conciliacion"
        sound="on:mouseenter; src:#mario">

        <a-text value="Conciliacion" color="white" align="center"></a-text>
      </a-plane>

      <a-sky id="my-sky" src="#campus"></a-sky>
      </a-entuty>
    </a-scene>



  );
}

export default Prueba; 