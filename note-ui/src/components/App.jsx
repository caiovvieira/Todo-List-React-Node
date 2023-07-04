import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import NewUser from "./NewUser";
import Auth from './Auth';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/dashboard' element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
