import logo from './logo.svg';
import './App.css';
import Error_page from './pages/public/Error_page';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/public/Landingpage';
import Signin from './pages/auth/signin/Signin';
import Loadingpage from './pages/portal/loading/Loadingpage';
import Signup from './pages/auth/signup/Signup';
import Homepage from './pages/portal/home/Homepage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='*' element={<Error_page/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/loading' element={<Loadingpage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/homepage' element={<Homepage/>} />
        </Routes>
    </div>
  );
}

export default App;
