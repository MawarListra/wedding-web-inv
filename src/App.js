
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Admin/Login';
import Homepage from './Pages/Admin/Homepage';
import EditTamu from './Pages/Admin/EditTamu';
import Kartu from './Pages/Admin/Kartu';
function App() {
  return (
   <Router>
     <div>
       <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/AdminDashboard" component={Homepage} />
        <Route path="/edittamu/:id" component={EditTamu} />
        <Route path="/kartu/:id" component={Kartu} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
