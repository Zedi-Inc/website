import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Newletter from "./components/Newletter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Newletter />
      <Footer />
    </div>
  );
};

export default App;
