import {Event} from "./Event.jsx"

export const PageBoard = ({events}) => {
    return (
        <ul className="PageBoard">
            {events.map(event => {
                return <Event data={event}/>
            })}
        </ul>
    )
}