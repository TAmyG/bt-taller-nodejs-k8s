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

apiMock(2)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error('Error: ', error);
    })