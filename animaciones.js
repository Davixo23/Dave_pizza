let logo= document.getElementById("logo");
let imagen=0
let animacion = setInterval(() => {
        let direct;
        imagen+=1;
        if (imagen>4) {
            imagen=1;
        }
        
        direct="img/logo"+imagen+".jpg";
        
        // para cambiar el atributo o src o alt o id de la etiqueta.
        logo.setAttribute("src", direct);
    
}, 1000);