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
      <h3>沐雨是最靓的仔!</h3>
      <h4>爸爸爱沐雨!</h4>
      <h5>沐雨是小花朵!</h5>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <UserProfile />
      <UseState />
      <UseEffect />
      <UseEffect2 />
    </div>
  );
}

export default App;