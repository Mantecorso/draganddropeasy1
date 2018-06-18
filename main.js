//function allowDrop(ev) {
//    ev.preventDefault();
//  }
   
//  function ondragstart(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//  }
   
//  function ondrop(ev) {
//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//  }
  

  
function onDrop(ev){
  console.log('ondrop')
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}

function onDragStart(ev) {

  ev.dataTransfer.setData("text", ev.target.id); // guardamos los datos de la imagen en el evento que mas tarde vamos a pasar a onDrop (el ID en este caso)
}
