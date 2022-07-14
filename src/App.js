import {createContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './style/app.scss';
import Nav, {Link} from './components/Nav';
import {Calendar, LogIn, Tasks, Tips} from './screens';
import {Button, Hr} from './components';

import {useObjState} from './util/hooks';

import langs from './lang';

export const AppContext = createContext();

const App = () => {
  const [stApp, setStApp] = useObjState({
    signed: true,
    lang: "en",
  })
  const logOut = () => setStApp({signed: false});
  const toggleLang = () => setStApp({lang: stApp.lang === "en" ? "es" : "en"});
  return (
    <Router>
      <div className="bg-dark light hv-min">
        <AppContext.Provider value={{stApp, setStApp}}>
          <Nav brand="Tage">
            {stApp.signed ? (
              <>
                <Link to="/">Tasks</Link>
                <Link to="/calendar">Calendar</Link>
              </>
            ) : (
              <Link to="/">Log In</Link>
            )}
            <Link to="/tips">Tips</Link>
            <Button onClick={toggleLang}>
              {`Lang: ${stApp.lang}`}
            </Button>
            {stApp.signed && (
              <Button className="bord bord2 bord-light" onClick={logOut}>
                Log Out
              </Button>
            )}
          </Nav>
          <Routes>
            {stApp.signed ? (
              <>
                <Route path="/" element={<Tasks />} />
                <Route path="/calendar" element={<Calendar />} />
              </>
            ) : (
              <Route path="/" element={<LogIn />} />
            )}
            <Route exact path="/tips" element={<Tips />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
