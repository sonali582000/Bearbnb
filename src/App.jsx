import "./App.css";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Footer />
      <Sidebar />
      <List />
    </>
  );
}

export default App;
