import { useState } from 'react'
import './App.css';
import { FaPlus } from "react-icons/fa";

function App() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [importancia, setImportancia] = useState("2")
  const [tarefas, setTarefas] = useState([
    {
        id: 1,
        titulo: "Primeira Atividade",
        importancia: "1",
        descricao: " Descrição da Primeira Atividade"
    },
    {
        id: 2,
        titulo: "Segunda Atividade",
        importancia: "2",
        descricao: "Descrição da Segunda Atividade"
    }
])

  const adicionarTarefa = () => {

  }


  return (
    <div className="container">
      <h1 className='text-center'>Lista de Tarefas em Bootstrap</h1>

      <form className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Título</label>
            <input type="text" className="form-control" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Descrição</label>
            <input type="text" className="form-control" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
          </div>

          <div className="col-md-6">
          <label className="form-label">Importância</label>
            <select className="form-select" value={importancia} onChange={e => setImportancia(e.target.value)}>
              <option value="1">Baixa</option>
              <option value="2">Normal</option>
              <option value="3">Alta</option>
            </select>
        </div>

        <hr />

        <div className="col-12 mb-4">
          <button type="button" className="btn btn-outline-primary" onClick={adicionarTarefa}>
            <div className='d-flex align-items-center'>
              <FaPlus className='me-2'/> 
              Adicionar
            </div>
          </button>
        </div>
      </form>

      {tarefas.map((tarefa) => (
        <div key={tarefa.id} className="card shadow-sm mb-2">
          <div className="card-header d-flex justify-content-between">
          <span>{tarefa.id} - {tarefa.titulo}</span>
          <span>Importância: Alta {tarefa.importancia}</span>
          </div>
          <div className="card-body">
            <p className="card-text">Descrição</p>
          </div>
        </div>
      ))}



    </div>
  );
}

export default App;

