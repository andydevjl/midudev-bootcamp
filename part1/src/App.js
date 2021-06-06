import './App.css';
import Message from './Message';

const Description = () => {
  return <p>This is the fullstack bootcamp app</p>
}

const App =() => {
  return (
    <div className="App">
      <Message  color='red' message='We are working'/>
      <Message  color='green' message='In a React'/>
      <Message  color='yellow' message='Course'/>
      <Description />
    </div>
  );
}

export default App;
