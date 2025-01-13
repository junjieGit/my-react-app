import './App.css';
import UserProfile from './UserProfile';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseEffect2 from './UseEffect2';

function App() {
  return (
    <div className="App">
      <h1>First React App!</h1>
      <h2>我是最帅的男人!</h2>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <UserProfile />
      <UseState />
      <UseEffect />
      <UseEffect2 />
    </div>
  );
}

export default App;