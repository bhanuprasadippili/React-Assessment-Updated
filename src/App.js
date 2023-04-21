import './App.css';
import Requistion from './components/requistion';
import Preview from './components/preview';
import { Routes,Route } from 'react-router-dom';
import Job from './components/job';
import Interview from './components/interview';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Requistion/>}/>
        <Route path='job' element={<Job/>}/>
        <Route path="interview" element={<Interview/>}/>
      </Routes>

      <Preview/>
    </div>
  );
}

export default App;
