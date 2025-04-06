async function display(){
    const btn = document.getElementById("generate");
    const val = document.getElementById("card-no").value;
    const display = document.getElementById("show-card");
    display.innerHTML = "";

    for(let i = 1; i <= val; i++){
        let randomId = Math.floor(Math.random() * 1010) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        const attack = data.stats[1].base_stat;
        const show = document.createElement("div");
        
        console.log(data);
        
        show.innerHTML = `
        <h3>${data.name}</h3>
        
        <img src = "${data.sprites.front_default}" alt = "${data.name}">
        <p>Attack : ${attack}</p>
        `;
        show.classList.add("add");
        display.appendChild(show);
    }
}