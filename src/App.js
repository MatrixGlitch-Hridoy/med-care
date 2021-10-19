import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment";
import AuthProvider from "./components/context/AuthProvider";
import Footer from "./components/Hero Section/Footer/Footer";
import Header from "./components/Hero Section/Header/Header";
import Home from "./components/Hero Section/Home/Home";
import SingleService from "./components/Hero Section/Services/SingleService";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/service/:id" component={SingleService}/>
          <PrivateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
