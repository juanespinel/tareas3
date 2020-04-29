let archivoTareas = require('./tareas');

let accion = process.argv[2];

let tareas = [];

switch(accion) {
    case 'listar':
        console.log();
        console.log('Listado de tareas');
        console.log('-----------------');
        console.log();

        tareas = archivoTareas.leerJSON();
        tareas.forEach((tarea, index) => {
            console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
        });
        
        console.log();
        console.log('-----------------');
        break;

    case 'crear':
        console.log();
        console.log('Nueva tarea creada');
        console.log('------------------');
        console.log();

        let titulon = process.argv[3];
        let estadon = process.argv[4];
        let tarea = {
            titulo: titulon,
            estado: estadon
        }
        archivoTareas.guardarTarea(tarea);

        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log();
        console.log('------------------');
        break;
    
    //case 'borrar'

    case 'filtrar':
        let estado = process.argv[3];

        console.log();
        console.log('Tareas ' + estado);
        console.log('-----------------');
        console.log();

        let filtradas = archivoTareas.leerPorEstado(estado);

        filtradas.forEach((tarea, posicion) => {
            console.log(`${posicion+1}- ${tarea.titulo}`)
        });
        console.log();
        console.log('-----------------');
        break;
        
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}