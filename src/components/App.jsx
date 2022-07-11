import './App.css';
import './Userdata';
import Userdata from './Userdata';
import Header  from './Header';
import Employees from './Employees';
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <hr style={{height:'0.8rem'}}/>
     <Userdata />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
