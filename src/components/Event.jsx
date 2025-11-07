import styled from "styled-components";

export const Event = ({data}) => {
    console.log(data)
    let time = "hour"
    if (Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5) > 1) {
        time = "hours"
    }
    return (
        <EventUl className="Event">
            <Name className="name">{data.name}</Name>
            <Location className="location">{data.location}</Location>
            <Speaker className="speaker">{data.speaker}</Speaker>
            <TimeNow className="time">{data.time.start.replace("T", ", ")}</TimeNow>
            <TimeLeft className="time-left">{Math.round((new Date(data.time.end) - new Date(data.time.start)) / 36e5)} {time}</TimeLeft>
        </EventUl>
    )
}

const EventUl = styled.li`
  flex: 0 0 calc(25% - 24px);
  background: #fff3eb;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px 20px;
  box-sizing: border-box;
  text-align: left;
`

const Name = styled.h3`
    color: #2c2c2c;
    margin-bottom: 20px;
`

const Location = styled.p`
    margin: 4px;
    color: #444;
`

const Speaker = styled.p`
    margin: 4px;
    color: #444;
`

const TimeNow = styled.p`
    margin: 4px;
    color: #444;
`

const TimeLeft = styled.p`
    margin: 4px;
    color: #444;
`