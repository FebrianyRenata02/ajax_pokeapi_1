function fetchData() {
    const xhttp = new XMLHttpRequest();
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    const httpMethod = "GET";

    xhttp.open(httpMethod, url);
    xhttp.onload = function() {
        const results = JSON.parse(xhttp.responseText);
        console.log('data', results)
            // number
        console.log('number', results.id)

        // name 
        console.log('name', results.name)

        // image
        console.log('image', results.sprites.front_default)

        // type 
        console.log('type', results.types[0].type.name)


        // let data = ''
        // for (i = 0; i < results.length; i++) {
        //     data = data + <p>${results[i].name}</p>;
        // }

        let a = document.getElementById("card").style.display = "block"
        console.log(a)
        const number = results.id
        document.getElementById("number").innerHTML = number;

        const name = results.name
        document.getElementById("name").innerHTML = name;

        const image = results.sprites.front_default
        document.getElementById("image").innerHTML = image;

        const type = results.types[0].type.name
        document.getElementById("type").innerHTML = type;
    };
    xhttp.send();
}