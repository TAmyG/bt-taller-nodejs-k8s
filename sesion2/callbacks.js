/**
 * 
 * @param {Recibe dos parametros, error y data} callback 
 */
const getData = (callback) => {
    setTimeout(() => {
        const data = 'Informacion que viene de un API';
        callback(null, data);
        // callback({ error: 'No hay comunicacion al API' }, null);
    }, 2000)
}

getData((error, data) => {

    if (error) {
        console.error('Error: ', error);
    } else {
        console.log('Respuesta exitosa: ', data)
        getData((error, data) => { //callback hell
            if (error) {
                console.error('Error: ', error);
            } else {
                console.log('Segundo llamado: ', data)
            }
        })
    }
})

