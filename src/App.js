import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {
  
  const [linea1,setLinea1] = useState ('')
  const [linea2,setLinea2] = useState ('')
  const [imagen,setImagen] = useState ('')

  const onChangeLinea1 = function (vainadelinput) {
    setLinea1(vainadelinput.target.value)
  }
  const onChangeLinea2 = function (vainadelinput) {
    setLinea2(vainadelinput.target.value)
  }
  const onChangeImg = function (selector) {
    setImagen(selector.target.value)
  }
  
  const exportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("imagen/png");  
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }
   
  return (
    <div className="App">

      {/* selector del meme */}

      <select onChange={onChangeImg}>
        <option value="spiderman">spiderman</option>
        <option value="smart guy2" >Smart guy</option>
        <option value="pikachu" >Pikachu</option>
        <option value="Obama" >Obama</option>
      </select>


      {/* input para la linea de arriba */}

      <input onChange={onChangeLinea1} placeholder= "Linea 1"></input>
      
      {/* input para la linea de abajo */}

      <input onChange={onChangeLinea2} placeholder= "Linea 2"></input>


      {/* boton para exportar el meme */}
      <button onClick={exportar}>Exportar</button>

      {/* creacion del meme */}
      <div id='meme'>

     
        <h3>{linea1}</h3>
        <h3>{linea2}</h3>
        <img src={"/memes/" + imagen +".png"}/>
        
      </div>
  
    </div>
  );
}

export default App;
