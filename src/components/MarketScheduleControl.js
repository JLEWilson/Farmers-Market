import React from "react";
import MarketSchedule from "./MarketSchedule";
import Button from 'react-bootstrap/Button'

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class MarketScheduleControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dayNumber: 0
    };
  }
  
  handleClick = () => {
    if(this.state.dayNumber === marketSchedule.length-1){
      this.setState(prevState => ({
        dayNumber: 0
      }));
    }else {
      this.setState(prevState => ({
        dayNumber: prevState.dayNumber + 1
      }));
    }
  }

  render(){
    let currentlyVisibleState = <MarketSchedule
        day={marketSchedule[this.state.dayNumber].day}
        location={marketSchedule[this.state.dayNumber].location}
        hours={marketSchedule[this.state.dayNumber].hours}
        booth={marketSchedule[this.state.dayNumber].booth}
    />;
    let buttonText = null;
    if(this.state.dayNumber === marketSchedule.length-1){
      buttonText = marketSchedule[0].day;
    } else {
      buttonText = marketSchedule[this.state.dayNumber + 1].day;
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div className="buttons-div">
          <Button variant="secondary" className="buttons" onClick={this.handleClick}>{buttonText}</Button>
        </div>
      </React.Fragment>
    );
  }
} 

export default MarketScheduleControl;