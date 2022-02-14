import React from 'react';
import Card from 'react-bootstrap/Card';

function MarketSchedule(props){
  return (
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
  );
}

export default MarketSchedule;