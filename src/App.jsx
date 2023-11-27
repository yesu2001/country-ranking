import "./App.css";
import bg from "./assets/hero-image-wr.jpg";
import CountryContainer from "./components/CountryContainer";

function App() {
  return (
    <div className="flex h-full">
      <div className=" absolute top-0  w-full object-cover">
        <img src={bg} alt="hero pic" className="w-full object-contain" />
      </div>
      <CountryContainer />
    </div>
  );
}

export default App;
