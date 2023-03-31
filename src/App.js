import './App.css';
import MainWeel from './components/MainWeel';
import Topic from './components/Topic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='titulo-principal'>CV - APP</h1>
      </header>
      <main>        
        <MainWeel />
        <Topic />
      </main>
    </div>
  );
}

export default App;