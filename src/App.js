import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {



  const [dog, setDog] = useState(null)
  console.log(dog);

  const getDog = async () => {
    console.log("Entrei na função assíncrona")
    const { data } = await axios.get('https://api.thedogapi.com/v1/images/search')
    setDog(data)
    console.log(data[0].url)
  }

  useEffect(() => {
    getDog();
  },[])

  return (
    <div className="App">
      <h1>SHOW ME THE DOG</h1>
      { dog && <img src={dog[0].url} alt="Dog" width={200}/> }
      <br />
      <button onClick={getDog}>Clique para ver outro cachorrinho</button>
    </div>
  );
}

  // const esperar = async(x) => {
  //  return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(x)
  //   }, 2000)
  //  })
  // }

  // // async function somar2(){}

  // const somar = async() => {
  //   console.log("ENTREI NA FUNÇÃO DE SOMAR")
  //   const a = esperar(20);
  //   const b = esperar(30)
  //   const result =  a + await b;
  //   // const result = 10 + 20
  //   console.log(result)
  // }
  //return (
  // <div className="App">
  //    <h1>SHOW ME THE DOG</h1>
  //    <button onClick={somar}>CLIQUE AQUI</button>
  //  </div>
 // );
 //}

export default App;