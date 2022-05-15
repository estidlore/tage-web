import {createContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './style/app.scss';
import Nav, {Link} from './components/Nav';
import {LogIn, Tags, Tasks, Tips} from './screens';
import {Button, Hr} from './components';

import {useObjState} from './util/hooks';

export const AppContext = createContext();

const App = () => {
  const [stApp, setStApp] = useObjState({
    signed: false,
  })
  const logOut = () => setStApp({signed: false});
  return (
    <Router>
      <div className="bg-dark light min-vh-100">
        <AppContext.Provider value={{stApp, setStApp}}>
          <Nav brand="Tage">
            {stApp.signed ? (
              <>
                <Link to="/">Tasks</Link>
                <Link to="/tags">Tags</Link>
              </>
            ) : (
              <Link to="/">Log In</Link>
            )}
            <Link to="/tips">Tips</Link>
            {stApp.signed && (
              <Button className="bord bord-2 bord-light" onClick={logOut}>
                Log Out
              </Button>
            )}
          </Nav>
          <>{
            // TEST
            /*
            <Tasks />
            <Hr />
            */
          }</>
          <Routes>
            {stApp.signed ? (
              <>
                <Route path="/" element={<Tasks />} />
                <Route path="/tags" element={<Tags />} />
                <Route exact path="/tips" element={<Tips />} />
              </>
            ) : (
              <Route path="/" element={<LogIn />} />
            )}
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
