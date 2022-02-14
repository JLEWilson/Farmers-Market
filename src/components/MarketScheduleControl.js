import React from "react";
import MarketSchedule from "./MarketSchedule";
import Button from 'react-bootstrap/Button'
import CreateMarketScheduleForm from "./CreateMarketScheduleForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class MarketScheduleControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      dayNumber: 0
    };
  }
  handleChangeToDay1 = () => {
    this.setState(prevState => ({
      dayNumber: 0,
      formVisibleOnPage: false
    }));
  }
  handleChangeToNextDay = () => {
    if(this.state.dayNumber === Object.keys(this.props.mainMarketScheduleList).length -1){
      this.setState(prevState => ({
        dayNumber: 0
      }));
    }else {
      this.setState(prevState => ({
        dayNumber: prevState.dayNumber + 1
      }));
    }
  }
  handleFormPage = () => {
    this.setState(prevState => ({
      formVisibleOnPage : !prevState.formVisibleOnPage
    }));
  }
  handleAddingNewMarketScheduleToList = (newMarketSchedule) => {
    const { dispatch } = this.props;
    const { id, day, location, booth, hours } = newMarketSchedule;
    const action = {
      type: 'ADD_MARKETDAY',
      id: id,
      day: day,
      location: location,
      booth: booth,
      hours: hours
    }
    dispatch(action);
    //Maybe set state like set to day 1
  }
  render(){
    let buttonText = null;
    let buttonFunc = null;
    let formButton = null;
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      buttonText = "Never mind";
      buttonFunc = this.handleChangeToDay1;
      currentlyVisibleState = <CreateMarketScheduleForm resetDay={this.handleChangeToDay1}
      submitDay={this.handleAddingNewMarketScheduleToList}/>
    } else 
    {
      const listValues = Object.values(this.props.mainMarketScheduleList);
      currentlyVisibleState = <MarketSchedule
        day={listValues[this.state.dayNumber].day}
        location={listValues[this.state.dayNumber].location}
        hours={listValues[this.state.dayNumber].hours}
        booth={listValues[this.state.dayNumber].booth}
    />;
    buttonFunc = this.handleChangeToNextDay;
    formButton = <Button variant="secondary" className="buttons" onClick={this.handleFormPage}>New Market Day</Button>
    if(this.state.dayNumber === listValues.length -1){
      buttonText = listValues[0].day;
    } else {
      buttonText = listValues[this.state.dayNumber + 1].day;
    }
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div className="buttons-div">
          <Button variant="secondary" className="buttons" onClick={buttonFunc}>{buttonText}</Button> 
          {formButton}
        </div>
      </React.Fragment>
    );
  }
} 

MarketScheduleControl.propTypes = {
  mainMarketScheduleList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainMarketScheduleList: state
  }
}

MarketScheduleControl = connect(mapStateToProps)(MarketScheduleControl)

export default MarketScheduleControl;