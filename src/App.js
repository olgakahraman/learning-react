
import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <Weather />
      <SearchEngine />
      <Hello language="Spanish" />
    </div> 
  );
}

export default App;
