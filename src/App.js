import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
