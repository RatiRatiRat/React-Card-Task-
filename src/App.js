import Main from "./components/Main";
import Background from "./components/background";
import style from "./components/style-app.css"
import lewisHamiltonImage from './images/lewis-hamilto.png';
import Span from "./components/span.jsx"; 


function App() {
  return (
    <div className="App">
      <Main/>
      <Background/>
      
      <Span/>
    </div>
  );
}

export default App;
