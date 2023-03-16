import logo from './logo.svg';
import './App.css';
import Pages from './Pages/index'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {ROUTER} from "./Router/index";


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

        {ROUTER.map((itemS1) => {
                        return <Route exact path={itemS1.url} element={<itemS1.component />}></Route>
                          
                    })}

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
