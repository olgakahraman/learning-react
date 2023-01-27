
import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import Hello from "./Hello";
import Cities from "./Cities";

function App() {
  return (
    <div className="App">
      <Weather />
      <SearchEngine />
      <Hello language="Spanish" />
      <Cities />
    </div> 
  );
}

export default App;
