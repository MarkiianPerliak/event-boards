import './App.css';
import data from "./upcoming-events.json"
import {PageBoard} from "./components/PageBoard.jsx"
import styled from "styled-components";

export const App = () => {
  console.log(data)
  return (
    <div className="App">
      <TextNice>24th Core Workds Coalition Conference</TextNice>
      <PageBoard events={data}/>
    </div>
  );
}

const TextNice = styled.p`
  background: #d8e8f9;
  border: 1px solid #9cb6d3;
  border-radius: 6px;
  padding: 8px 16px;
  text-align: center;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
`;