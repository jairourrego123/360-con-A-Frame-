import 'aframe';

import React from 'react';
import Imagen from './change-site'

function Prueba() {
    return (
    //  <Scene/>
    
    <a-scene>
      <a-assets>
        <img id="ugc" src="img/ugc.jpg" alt="ugc"/>
        <img id="ingenieria" src="img/ingenieria.jpg" alt="ingenieria"/>
        <img id="campus" src="img/campus.jpg" alt="campus"/>

      </a-assets>
      
      <a-camera>
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>
      <a-plane color="black" position="0 1 -3" width="3" height="0.25" class="clickable" change-site="img: #ugc">
        <a-text value = "ENTRAR" color="white" align="center"></a-text>
      </a-plane>
      <a-plane color="black" position="0 1.3 -3" width="3" height="0.25" class="clickable" change-site="img: #ingenieria">
        <a-text value = "SALIR" color="white" align="center"></a-text>
      </a-plane>
      <a-sky id="my-sky" src="#campus"></a-sky>
    </a-scene>
    

     
    );
  }
  
  export default Prueba; 