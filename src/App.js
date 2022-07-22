import './App.css';
import {Nav}from './component/import';
import {
  BrowserRouter as Router,
} from "react-router-dom";
// import Sidenav from './component/sidenav';
import {MainPage} from './page/import';
import store from './app/store';
import {Provider} from "react-redux"

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
    <Nav/>
    <MainPage/>
    </Router>    
    </Provider>
    
    </>
  );
}

export default App;
