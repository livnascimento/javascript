function scope(){

    const form = document.querySelector('.form');
    
    const pessoas = [];
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const nome = document.querySelector('#nome').value;
        const sobrenome = document.querySelector('#sobrenome').value;
        const peso = document.querySelector('#peso').value;
        const idade = document.querySelector('#idade').value;
 

        pessoas.push(
            {nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            idade: idade}
        );
    
        document.querySelector('.pessoas').innerHTML += `<p>${nome}\t${sobrenome}\t${peso}\t${idade}<p/>`;

        console.log(pessoas);

    });

}

scope();
