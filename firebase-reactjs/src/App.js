import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
//import List from "./components/List";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>ReactJs + Firebase Application</h1>
          </div>
          <div className="card-body">
            <Create />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
