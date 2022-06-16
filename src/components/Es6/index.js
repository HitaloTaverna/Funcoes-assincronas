//REVER OS CONCEITOS DE MAP, FILTER, SPREAD OPERATOR e DESESTRUTURAÇÃO
//FOREACH, SOME, EVERY

const Es6 = () => {
    //MAP - Interação em um array, podendo modificar o item, gera um array novo;
    const pessoa = [
        {nome: "João", idade: 31},
        {nome: "Carlos", idade: 26},
        {nome: "Catarina", idade: 46},
        {nome: "Joana", idade: 20}
    ]
    
    const handleClick = () => {
        //forEach - Serve para percorrer o array. Conseguimos modificar o Array Original
        // pessoa.forEach((item) => {
        //     console.log(item.nome)
        //     item.nome = "Carro"
        // })

        //Map - Além percorrer os items, cria um array novo com a informação passada no return
        //Quando usado no JSX, cria um elemento novo
        // const novasPessoas = pessoa.map((item, index) => {
        //     const pessoaAlterada = item
        //     pessoaAlterada.nome = "Jonas"
        //     return pessoaAlterada
        // })

        //FILTER - Filtrar o Array - Assim como o map, ele retorna um array novo contendo os itens que passaram na condição
        // const arrayFiltrado = pessoa.filter( item => (item.idade > 30 && item.idade <= 40))

        //every - Retorna true caso todos os items passem no teste
        const numerosPares = [2, 4, 6, 8, 10, 11, 3]
        // const retornoEvery = numerosPares.every(num => num%2 === 0)

        //some - Basta que um item seja verdadeiro para que retorne true
        const retornoSome = numerosPares.some(item => item === 3)
 
        console.log(retornoSome);
        // console.log(novasPessoas);
    }

    return (
        <>
            <h1>ES6</h1>
            <button onClick={handleClick}>DISPARAR</button>
        </>
    );
};
