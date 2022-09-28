import AFRAME from'aframe';
AFRAME.registerComponent('change-site', {
    schema: {
     img:{type:'string'},
     zone:{type:'string'},
     sound:{type:'string'}

    },
  
    init: function () {
        var data = this.data; // lo que llega de change-site:
        var el = this.el;  // elemento
        el.addEventListener("mouseenter",function(){
            var parentEntity = el.parentNode; // del elemento que se ha echo clic queremos su padre
            var grandParentEntity=parentEntity.parentNode //el padre del padre sobre el que se ha echo click
            
            var thisAPlane= parentEntity.querySelector("a-plane");//del que se ha echo clic coje el primer plano
            thisAPlane.classList.remove("clickable"); // se quita la clase clckable

            var allPlane = grandParentEntity.querySelectorAll("a-plane");// coje todos los planes del abuelo 
            Object.keys(allPlane).forEach(function(key){ // coje cada uno de los planos que tiene el abuelo 
                if(allPlane[key] != thisAPlane){ // se añade a todos los elementos que no se ha echo clic
                    allPlane[key].classList.add("clickable")// la clase clickable
                }
            });
            var allbox = grandParentEntity.querySelectorAll("a-box");
            Object.keys(allbox).forEach(function(key){
                allbox[key].setAttribute("visible","false")
            })
            var parentEntityABox= parentEntity.querySelector("a-box");
            parentEntityABox.setAttribute("visible","true")

            var allAText = grandParentEntity.querySelectorAll("a-text");
            Object.keys(allAText).forEach(function(key){
                allAText[key].setAttribute("color","gray")
            })
            var aText = thisAPlane.querySelector("a-text");
            if(aText)aText.setAttribute("color","white")

            var allACircle = grandParentEntity.querySelectorAll("a-image"); // coje todos los circulos y los deja invisibles
            Object.keys(allACircle).forEach(function(key){
                allACircle[key].setAttribute("visible","false")
                allACircle[key].classList.remove("clickable"); // y les quita la clase clickeable 
            });
            console.log(data)
            var allACirclInThisZone=parentEntity.querySelectorAll(data.zone);
           
            Object.keys(allACirclInThisZone).forEach(function(key){
                allACirclInThisZone[key].setAttribute("visible","true");
                allACirclInThisZone[key].classList.add("clickable")
            })
            
            var mySky=document.querySelector("#my-sky");
            mySky.setAttribute("src",data.img)
        }); 
    }
  });

 