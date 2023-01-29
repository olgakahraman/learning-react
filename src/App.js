import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import Hello from "./Hello";
import Cities from "./Cities";
import Cities1 from "./Cities1";
import BalticCountries from "./BalticCountries";
import Countries from "./Countries";
import AnimatedWeather from "./AnimatedWeather";


function App() {
  let countries = [
  {
    name: "France",
    capital: "Paris",
  },
  {
    name: "USA",
    capital: "Washington DC",
  },
  {
    name: "Japan",
    capital: "Tokyo",
  },
  { name: "Australia", capital: "Camberra" },
];
  return (
    <div className="App">
      <Weather />
      <SearchEngine />
      <Hello language="Spanish" />
      <Cities />
      <Cities1 />
      <BalticCountries />
      <Countries countries={countries} />
      <AnimatedWeather />
    </div>
  );
}

export default App;
