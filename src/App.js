import Navbar from './components/Navbar';
import CustomizedTables from './container/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenerateBill from './container/GenerateBill';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path='/customer-bill' element={<GenerateBill/>}/>
      <Route exact path='/' element={<CustomizedTables/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
