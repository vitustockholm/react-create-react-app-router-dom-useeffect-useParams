// import Users from './components/Users/Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/users' component={UsersPage} />
          <Route path='/users/:id' component={UserPage} />
        </Switch>
      </Router>
      {/* <Users /> */}
    </>
  );
}

export default App;
/*  COMPONENT LIFECYCLE
--Mounting (Creating Component)
--- All logic in (of) component + Return statement + (OPTIONAL: useEffect)

--Updating (Updating Component) | Updating when: changed components state or props
--- All logic in (of) component + Return statement + (OPTIONAL: useEffect)


--Unmounting (removing Component)
--- (OPTIONAL: useEffect)
*/
