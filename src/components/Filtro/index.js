import { useState } from "react"
const Filtro = () => {
    const [data, setData] = useState([
        {nome: "João", idade: 31},
        {nome: "Carlos", idade: 26},
        {nome: "Catarina", idade: 46},
        {nome: "Joana", idade: 20}
    ])
    const [dadosFiltrados, setDadosFiltrados] = useState(data)
    const [pesquisa, setPesquisa] = useState("")

    const handlePesquisa = () => {
        const arrayFiltrado = data.filter( item => item.nome === pesquisa)
        setDadosFiltrados(arrayFiltrado)
    }

    const limparPesquisa = () => {
        setPesquisa("")
        setDadosFiltrados(data)
    }


  return (
    <div>
        <h1>Filtro</h1>
        <input type="text" placeholder="Faça sua Pesquisa" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>
        <br />
        <button onClick={handlePesquisa}>Pesquisar</button>
        <button onClick={limparPesquisa}>Limpar Pesquisa</button>
        <br />
        <br />
        <ol>
            {dadosFiltrados.map( (item, index) => <li key={index}>{item.nome}</li>)}
        </ol>
    </div>
  )
}

export default Filtro