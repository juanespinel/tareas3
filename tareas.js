const fs = require('fs');

//OBEJETO LITERAL
let archivoTareas = {
    archivo: './tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
   
    /*
    borrarJSON: function (tareas) {
        fs.
    }
    */

    guardarTarea (tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    
    /*
    eliminarTarea (tarea) {
        let tareas = this.leerJSON();

    }
    */
   
    leerPorEstado (estado) {
        let tareas = this.leerJSON();
        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado == estado;
        });
        return tareasFiltradas;
    }
}

module.exports = archivoTareas;