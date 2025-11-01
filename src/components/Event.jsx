export const Event = ({data}) => {
    console.log(data)
    let time = "hour"
    if (Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5) > 1) {
        time = "hours"
    }
    return (
        <li className="Event">
            <h3>{data.name}</h3>
            <p>{data.location}</p>
            <p>{data.speaker}</p>
            <p>{data.time.start.replace("T", ", ")}</p>
            <p>{Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5)} {time}</p>
        </li>
    )
}