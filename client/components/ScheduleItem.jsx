import React from 'react';

const ScheduleItem = ({ gameData }) => {

  const date = gameData.scheduled;
  let calendar = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December"
  };
  const dateNew = calendar[date.slice(5, 7)] + " " + date.slice(8, 10) + " " + date.slice(0, 4);

  return(
    <div className="singlegame">
      <img src={"http://cdn.bleacherreport.net/images/team_logos/100x100/" + gameData.away.name.toLowerCase().split(" ").join("_") + ".png"}/> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_at_sign.svg/100px-White_at_sign.svg.png"/>
      <img src={"http://cdn.bleacherreport.net/images/team_logos/100x100/" + gameData.home.name.toLowerCase().split(" ").join("_") + ".png"}/> 
      <h4>{gameData.away.name} VS {gameData.home.name}</h4> 
      <h5>At {gameData.venue.name} on {dateNew}</h5>
      {console.log('weather! -->', gameData.weather)}
      <h5>Weather {gameData.weather ? gameData.weather.split(":")[1].slice(1, 5) : 'UNAVAILABLE'}</h5>
    </div>
  )  
}

export default ScheduleItem;