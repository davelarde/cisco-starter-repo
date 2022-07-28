
import './App.css';

function Banner(){
  return(
    <div className="bannermain">
<h1>Your Favorite Site</h1>
  </div>
  )
}

function Exhibit(){
return(
  <div className="container">
    <div className="header">
    <h2>Explore us!</h2>
    </div>
    <ul>
      <li> Search </li>
      <li>Contact</li>
      <li>Latest news</li>
    </ul>

  </div>
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

