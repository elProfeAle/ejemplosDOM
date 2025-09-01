let nuevaTarea = document.querySelector("#nuevaTarea");
let agregarTarea = document.querySelector("#agregarTarea");
let listaTareas = document.querySelector("#listaTareas");
let borrarTareas = document.querySelector("#borrarTareas");


agregarTarea.onclick = function() {
    let tarea = nuevaTarea.value;
    let elementoLista = document.createElement("li");
    elementoLista.textContent = tarea;
    listaTareas.appendChild(elementoLista);
    nuevaTarea.value = "";
    


}

