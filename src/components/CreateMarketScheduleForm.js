import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { v4 } from 'uuid'; 

function CreateMarketScheduleForm(props) {
  function handleSubmission(event) {
    event.preventDefault();
    props.submitDay({
      day: event.target.day.value,
      location: event.target.location.value,
      hours: event.target.hours.value,
      booth: event.target.booth.value,
      id: v4()
    });
    props.resetDay();
  }

  return (
    <React.Fragment>
      <Card border='danger' className='market-schedule'>
        <Card.Header><h2>New Market Day</h2></Card.Header>
        <Card.Body className='text-center'> 
          <form onSubmit={handleSubmission}>
            <input
              type='text'
              name='day'
              placeholder='Day' />
            <input
              type='text'
              name='location'
              placeholder='Location' />
            <input
              type='text'
              name='hours'
              placeholder='9:00am - 2:00pm' />
            <input
              type='text'
              name='booth'
              placeholder='1A' />
            <button type='submit'>Submit New Day</button>
          </form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

CreateMarketScheduleForm.propTypes = {
  submitDay: PropTypes.func,
  resetDay: PropTypes.func
}

export default CreateMarketScheduleForm;



/*
 <React.Fragment>
      <Card border='danger' className='market-schedule'>
        <Card.Header><h2>Market Schedule</h2></Card.Header>
        <Card.Body>
            <Card.Title><h3>{props.day}</h3></Card.Title>
            <hr />
        </Card.Body>
        <Card.Body className='text-center'>
          <h4 className='market-h4'>Location:</h4>
          <p className='market-p'>{props.location}</p>
          <h4 className='market-h4'>Hours:</h4> 
          <p className='market-p'>{props.hours}</p>
          <h4 className='market-h4'>Booth:</h4>
          <p className='market-p'>{props.booth}</p>
        </Card.Body>
      </Card>
    </React.Fragment>
*/