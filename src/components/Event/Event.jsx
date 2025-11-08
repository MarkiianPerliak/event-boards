import {EventItem} from "./Event.styled.js"

export const Event = ({data}) => {
    console.log(data)
    let time = "hour"
    if (Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5) > 1) {
        time = "hours"
    }
    return (
        <EventItem className="Event">
            <h3 className="name">{data.name}</h3>
            <p className="location">{data.location}</p>
            <p className="speaker">{data.speaker}</p>
            <p className="time">{data.time.start.replace("T", ", ")}</p>
            <p className="time-left">{Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5)} {time}</p>
        </EventItem>
    )
}