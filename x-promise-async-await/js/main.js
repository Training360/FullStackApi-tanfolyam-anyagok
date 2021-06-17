fetch('img/ast-async2-pipe.jpg')
    .then( response => {
        if (!response.ok) {
            throw new Error(`Http error! STATUS: ${response.status}`);
        }

        return response.blob();
    }).then( myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.querySelector('.card.shadow-sm img');
        image.src = objectURL;
    })
    .catch( e => {
        console.log(`Error: ${e.message}`);
    });