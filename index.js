function parImpar(){
    for(i = 0; i <= 100; i++)
    {
        console.log(i);  
        if(i % 2 == 0)  
        {
            console.log('é par');
        }
        else
        {
            console.log('é impar');
        }
    }
}


var tabela = document.querySelector('.tabelaColor');

function trocarCorTabela(){

    tabela.classList.toggle('corTrocada');
}