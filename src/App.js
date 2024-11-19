import "./App.css";
import Footer from "./components/footer/footer"
import Header from "./components/header/header";
import Home from "./routes/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
