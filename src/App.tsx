import { Suspense } from 'react';
import './App.css';
import {Generation} from "./features/generation/Generation";
import {Species} from "./features/species/Species";
import {Versions} from "./features/versions/Versions";
import {ErrorBoundary} from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Suspense fallback={<div>Chargement...</div>}>
              <div><Generation/><ErrorBoundary error={" "}><Versions/></ErrorBoundary></div>
              <ErrorBoundary>
                  <Species/>
              </ErrorBoundary>
          </Suspense>
      </header>
    </div>
  );
}

export default App;
