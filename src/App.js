import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Parks from "./components/Parks";

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Parks />
    </div>
  );
}

export default App;
