const fetch = require('node-fetch');
const fs = require('fs');

const api = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

const handleData = async ()  => {
    try {
        const response = await fetch(api);
        const indictors = response.json();
        return indictors;
    } catch (error) {
         return error;
    }   
};

handleData()
    .then((page) => {
        // const { page } = pages.pagination
        console.log('page :O', page)
    })


  



