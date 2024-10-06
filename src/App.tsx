import './App.css';
import img from './assets/1.jpg';

function App() {
  return (
    <div className="cont">
      <img src={img} width="300px" height="400px" />
      <div className="test">
        <h1>Машулька</h1>
        <h2>Самая лучшая девчонка</h2>
      </div>
    </div>
  );
}

export default App;
