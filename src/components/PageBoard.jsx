import {Event} from "./Event.jsx"
import styled from "styled-components";

export const PageBoard = ({events}) => {
    return (
        <List className="PageBoard">
            {events.map(event => {
                return <Event data={event}/>
            })}
        </List>
    )
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 40px;
  margin: 0;
  background: #e6ebee;
  border-radius: 8px;
  list-style: none;
`