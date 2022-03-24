import './App.css';

const api ={
  key: "243b6e393ada730d0c460fd5ac464499",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  return (
    <div className="App">
     <main>
       <div className="search-box">
          <input
             type="text"
             className="search-bar"
             placeholder="Digite a cidade..."
          />
       </div>
     </main>
    </div>
  );
}

export default App;
