function ondragstart(e) {
  e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover
  e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
  e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
  e.target.style.opacity = '0.4'; // Establece la opacidad del elemento que se va arrastrar
}

function end(e) {
  e.target.style.opacity = ''; // Restaura la opacidad del elemento   
  e.dataTransfer.clearData("Data");
}