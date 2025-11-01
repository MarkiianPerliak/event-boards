import './App.css';
import data from "./upcoming-events.json"
import {PageBoard} from "./components/PageBoard.jsx"

export const App = () => {
  console.log(data)
  return (
    <div className="App">
      <PageBoard events={data}/>
    </div>
  );
}