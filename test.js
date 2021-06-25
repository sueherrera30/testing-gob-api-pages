const fetch = require('node-fetch');

// Esta url contiene un parámetro "page" para paginar entre 100 resultados.
const api = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=';

const fs = require('fs');

const handleData = async (page)  => {
    try {
        const response = await fetch(api + page);
        const inditators = response.json();
        return inditators;
    } catch (error) {
         return error;
    }   
};
for(let i=1 ; i<= 50; i++) {
    handleData(i)
    .then((indicators) => {
        console.log('indicators', indicators) 
        fs.writeFile('indicators.json',indicators, function (err) {
            if (err) return console.log(err);
            console.log('indicators', indicators) 
          });  
    }
    ); 
}

  



