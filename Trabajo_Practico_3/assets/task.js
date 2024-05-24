let list = [];

function addTask(nombre){
    alert("Se ha agregado la tarea de: "+nombre);
    list.push(nombre);
}
function listTasks(){
    if (list.length <=0){
        alert("No hay tareas pendientes")
    }else{alert("Lista de tareas: \n" + list.join("\n"))}}

function editTask(nombre){
    if(list.includes(nombre)){
        let nuevoNombre = prompt("Ingresa un nuevo nombre para la tarea:");
        switch(true){
            case(nuevoNombre=== ' '):
            alert("No se puede agregar una tarea vacía.")
            break;
            case((nuevoNombre.charAt(0)==' ')):
            alert('No se puede agregar una tarea con espacios al principio.')
            break;
            case((nuevoNombre.charAt(nuevoNombre.length - 1)==' ')):
            alert('No se puede agregar una tarea con un espacio al final.')
            break;
            default:
                alert('Se cambió la tarea '+ nombre + "-->" + nuevoNombre);
                list[list.indexOf(nombre)]=nuevoNombre;
                break;
        }
    }else{
        alert("No existe una tarea");
    }
}
function deleteTask(nombre){
    if(list.includes(nombre)){
        alert("Se ha eliminado la tarea: " + nombre);
        list.splice(list.indexOf(nombre),1)
    }else{
        alert("No existe esa tarea")
    }
}
let accion;
do{
accion = parseInt(prompt("Elija acción a realizar:\n1-Agregar tarea.\n2-Listar tareas.\n3-Editar tareas.\n4-Eliminar tareas.\n5-Salir"));
    switch(accion){
        case 1:
            addTask(prompt("¿Qué tarea quieres agregar?"));
            break;
        case 2:
            listTasks();
            break;
        case 3:
            editTask(prompt("¿Qué tarea quieres editar?"));
            break;
        case 4:
            deleteTask(prompt("¿Qué tarea quieres eliminar"));  
            break;      
        case 5:
            alert("Saliendo del programa...")    
        default:
            alert("Acción inválida");
        }
    }while(accion !==5);