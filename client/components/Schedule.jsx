import React from 'react';
import ScheduleItem from './ScheduleItem.jsx'


const Schedule = (props) => {
  return (
    <div>
    <button onClick={props.home}>HOME</button>
      {props.schedule.data.week.games.map(game => {
        return <h2 key={game.id}><ScheduleItem gameData={game}/></h2>;
      })}
    </div> 
  )
}

export default Schedule;