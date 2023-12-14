import './App.css';
import Header from './routes/Header';
import Course from './routes/Course';
import Test from './routes/Test';

function App() {
  return (
    <div className="App">
      <Header/>
      <Test/>
      <Course/>
    </div>
  );
}

export default App;
