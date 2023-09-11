import './App.css';
import Sentiment from './components/Sentiment';
import Response from './components/Response';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Sentiment />
    
    </div>
  );
}

export default App;
