import './App.css';
import Calculator from './component/Calculator';
import './component/Calculator.css';
import DisplayQuote from './component/DisplayQuotes';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Calculator and Random Quote</h1>
      </header>
      <div className="main-content">
        <div className="calculator">
          <Calculator />
        </div>
        <div className="quote">
          <DisplayQuote />
        </div>
      </div>
    </div>
  );
}

export default App;
