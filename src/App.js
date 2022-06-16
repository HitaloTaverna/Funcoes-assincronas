import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState([])
  const [atualizar, setAtualizar] = useState(false);
  const [loading, setLoading] = useState(false)

  const getDog = async () => {
    setLoading(true)
    
    try{
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search')
      setDog(data)
      console.log("TRY")
    } catch(e) {
      //lança uma excessão 
      console.log(e)
      setLoading(false)
    } finally {
      //sempre é executado
      console.log("FINALLY")
    }
    // console.log("ACABOU DE ACONTECER UM SETSTATE")
  }

  const fetchGetDog = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then( response => {
      if(response.ok){
        return response.json()
      }
      throw response
    }).then(dados => {
      setDog(dados)
    }).catch( error => {
      console.log(error)
    }).finally(() => {})
  }

  useEffect(() => {
    // getDog();
    fetchGetDog()
  },[])

  // useEffect(() => {
  //   // if(loading) return
  //   console.log("LOOP INFINITO")
  //   setAtualizar(!atualizar)
  // },[atualizar])

  return (
    <div className="App">
      <h1>SHOW ME THE DOG</h1>
      <h1>{loading && "CARREGANDO. AGUARDE"}</h1>
      { dog.length !== 0  && <img src={dog[0].url} onLoad={() => setLoading(false)} alt="Dog" width={200}/> }
      <br />
      <button onClick={getDog} disabled={loading}>Clique para ver outro cachorrinho</button>
    </div>
  );
}

export default App;