import './App.css';
import {Generation} from "./features/generation/Generation";
import {Species} from "./features/species/Species";
import {Versions} from "./features/versions/Versions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div><Generation/><Versions/></div>
        <Species/>
      </header>
    </div>
  );
}

export default App;
