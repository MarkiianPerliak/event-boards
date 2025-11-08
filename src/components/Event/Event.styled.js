import styled from "styled-components";

export const EventItem = styled.li`
  flex: 0 0 calc(25% - 24px);
  background: #fff3eb;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px 20px;
  box-sizing: border-box;
  text-align: left;
  & h3 {
      color: #2c2c2c;
    margin-bottom: 20px;
  }
      & p {
    margin: 4px;
    color: #444;
  }
    
`
