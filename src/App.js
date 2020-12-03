import './App.css';
import Header from './Components/Header.js'
import AddGame from './Components/AddGame'
import GameList from './Components/GameList'


/*
Update score needs to be written here
Delete app needs to be written here
component did mount makes a get request
create a new game makes a post request
  after .post use setState
*/

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
