import 'aframe';
import { AFRAME } from './change-site'
import React from 'react';


function Prueba() {


  return (
    //  <Scene/>

    <a-scene>
     
      {/* inside = salida posgrados  outside = entradaposgrados */}
      <a-assets>

        <img id="ugc" src="img/ugc.jpg" alt="ugc" />
        <img id="ugc1" src="img/ugc1.jpg" alt="ugc1" />
        <img id="ingenieria" src="img/ingenieria.jpg" alt="ingenieria" />
        <img id="campus" src="img/campus.jpg" alt="campus" />
        <img id="conciliacion" src="img/conciliacion.jpg" alt="conciliacion" />
        <img id="entrada" src="img/entrada.png" alt="entrada" />
        <img id="entradaposgrados" src="img/campus.jpg" alt="entradaposgrados" />
        <img id="salidaposgrados" src="img/ugc.jpg" alt="salidaposgrados" />
        <img id="salida" src="img/salida.png" alt="salida" />
        <audio id="alerta" src="sound/alerta-nextel-ringtones.mp3" preload="auto"></audio>
        <audio id="gallo" src="sound/Gallo.mp3" preload="auto"></audio>
        <audio id="tuberia" src="sound/mario-bros tuberia.mp3" preload="auto"></audio>
        <audio id="mario" src="sound/mario-bros.mp3" preload="auto"></audio>
        <audio id="sound-entrada" src="sound/mario-bros.mp3" preload="auto"></audio>
        <audio id="sound-salida" src="sound/mario-bros tuberia.mp3" preload="auto"></audio>
        <audio id="click" src="sound/alerta-nextel-ringtones.mp3" preload="auto"></audio>

        {/* <Imagen/> */}
      </a-assets>

      <a-camera near="0.005" spectator="true" fov="90" >
        <a-cursor raycaster="objects: .clickable;  " ></a-cursor>
      </a-camera>

      <a-entity position="-1.9 1.3 -5">


        {/* -------------------------------------Ingenieria--------------------------------- */}
        <a-entity>
          <a-box scale="0.25 0.25 0.25" rotation="45 45 45" color="red" visible="false"
            animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

          <a-plane color="black" position="1.9 0 0" width="3" height="0.25" class="clickable"
            change-site="img: #ingenieria "
            sound="on:mouseenter; src:#gallo">

            <a-text value="Ingenieria" color="gray" align="center"></a-text>
          </a-plane>


        </a-entity>

        {/* -----------------------------------Posgrados---------------------------------- */}
        <a-entity position="0 -0.3 0">
          <a-box scale="0.25 0.25 0.25" rotation="45 45 45" color="red"
            animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

          <a-plane color="black" position="1.9 0 0" width="3" height="0.25"
            change-site="img: #ugc;" class="clickable"
            sound="on:mouseenter; src:#alerta">

            <a-text value="Posgrados" color="white" align="center"></a-text>
          </a-plane>
          {/* position="-0.9 -1 10" */}
          <a-circle  position="-0.9 -1 10"  rotation="0 2 0" radius="2" color="white"
            class="clickable" change-site="img: #ugc1;" 
            sound="on:mouseenter; src:#alerta">
              <a-image src="#entrada" class="clickable" change-site="img: #ugc;1" ></a-image>
          </a-circle>
          <a-circle  position="-0.9 -1 0" rotation="0 -45 0" radius="2" color="white"
            class="clickable" visible="true"
            change-site="img: #ingenieria "
           >
            <a-image src="#salida"></a-image>

          </a-circle>

        </a-entity>





        {/* --------------------------------------------Campus--------------------------------- */}

        <a-entity position="0 -0.6 0">
          <a-box scale="0.25 0.25 0.25" rotation="45 45 45" color="red" visible="false"
            animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

          <a-plane color="black" position="1.9 0 0" width="3" height="0.25" class="clickable"
            change-site="img: #campus"
            sound="on:mouseenter; src:#tuberia">

            <a-text value="Campus" color="gray" align="center"></a-text>
          </a-plane>
        </a-entity>
        {/* ----------------------------------------Conciliacion--------------------------------- */}
        <a-entity position="0 -0.9 0">
          <a-box scale="0.25 0.25 0.25" rotation="45 45 45" color="red" visible="false"
            animation__position="property:rotation;to:360 0 0; dir:alternate;dur:3000;loop:true"></a-box>

          <a-plane color="black" position="1.9 0 0" width="3" height="0.25" class="clickable"
            change-site="img: #conciliacion"
            sound="on:mouseenter; src:#mario">

            <a-text value="Conciliacion" color="gray" align="center"></a-text>
          </a-plane>
        </a-entity>
      </a-entity>
      <a-sky id="my-sky" src="#ingenieria"></a-sky>
    </a-scene>

  );
}

export default Prueba; 