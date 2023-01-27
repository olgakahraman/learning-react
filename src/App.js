import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import Hello from "./Hello";
import Cities from "./Cities";
import Cities1 from "./Cities1";

function App() {
  return (
    <div className="App">
      <Weather />
      <SearchEngine />
      <Hello language="Spanish" />
      <Cities />
      <Cities1 />
    </div>
  );
}

export default App;
