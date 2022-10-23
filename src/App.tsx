import { Suspense } from 'react';
import './App.css';
import {Generation} from "./features/generation/Generation";
import {Species} from "./features/species/Species";
import {Versions} from "./features/versions/Versions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Suspense fallback={<div>Chargement...</div>}>
              <div><Generation/><Versions/></div>
              <Species/>
          </Suspense>
      </header>
    </div>
  );
}

export default App;
