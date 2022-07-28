
import './App.css';

function Banner(){
  return(
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Your Best Website !</h1>
    <p className="lead">The place where you create magic!</p>
  </div>
</div>
  )
}

function Exhibit(){
return(

  <ul clasName="nav nav-tabs">
     <h2>Let us show you how is done!</h2>
  <li className="nav-item">
    <a className="nav-link active" href="#">Contact us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Demo</a>
  </li>
  
</ul>
)
}

function App() {
  return(
 <div>
   <Banner></Banner>
   <Exhibit></Exhibit>
 </div>
  )
}

export default App;

