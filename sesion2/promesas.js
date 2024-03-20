const apiMock = (input = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 1) {
                resolve({
                    status: 200,
                    data: {
                        nombre: 'Miguel',
                        edad: 30
                    }
                })
            } else {
                reject({
                    status: 400,
                    error: 'Bad request'
                })
            }
        }, 2000)
    })
}

// apiMock(1)
//     .then((resultado) => {
//         console.log(resultado);
//         return apiMock(2)
//     })
//     .then((resultado2) => {
//         console.log(resultado2)
//     })
//     .catch((error) => {
//         console.error('Error: ', error);
//     })


// Async y Await
const main = async () => {
    try {
        const resultado = await apiMock(2);
        console.log(resultado);
    } catch (error) {
        console.error('Error: ', error)
    }

}

main();