import {Event} from "../Event/Event.jsx"
import {List} from "./PageBoard.styled.js"

export const PageBoard = ({events}) => {
    return (
        <List className="PageBoard">
            {events.map(event => {
                return <Event data={event}/>
            })}
        </List>
    )
}
