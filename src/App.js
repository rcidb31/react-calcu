import { useState } from "react"; 
import "./App.css";

function App() {
  const [value, setValue] = useState(""); // value valor del input

  return (
    <>
      <header>🇨🇱 Raul Cid "React" </header>

        {/* Botón para redirigir a la página principal */}
        <button onClick={() => window.location.href = 'https://cidev.dev'}>
            Ir a Inicio
          </button>
          
      {/* Contenedor de la calculadora */}
      <div className="Contenedor">
        <div className="Calculadora"> 
          <form action=""> 
            <div className="display">  
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => setValue('')} /> 
              <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} /> 
              <input type="button" value="." onClick={(e) => setValue(value + e.target.value)} />
              <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)} /> 
            </div>
            <div>
              <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)} /> 
            </div>
            <div>
              <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)} />
              <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)} /> 
              <input type="button" value="=" className="equal" onClick={() => setValue(eval(value))} /> 
            </div>
          </form>
        
          <footer>@Raul_Cid</footer>
        </div>
      </div>
    </>
  );
}

export default App;
