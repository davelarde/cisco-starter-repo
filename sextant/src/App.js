
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
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Let us show you how it's done!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active text-white">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      
    </ul>
  </div>
</nav>
  
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

