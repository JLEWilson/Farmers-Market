import React from 'react';
import FoodItem from './FoodItem';
import Card from 'react-bootstrap/Card';

function SeasonalProduce(props){
  return (
    <React.Fragment>
      <Card className='food-card'>
        <Card.Header><h2>Available Produce</h2></Card.Header>
        <Card.Body>
          <h4>Month: {props.month}</h4>
          <hr/>
          <ul className='food-list'>
            {props.selection.map((foodItem, index) =>
              <FoodItem 
                foodName={foodItem}
                key={index}/>
            )}
          </ul>
        </Card.Body>  
      </Card>
    </React.Fragment>
  )
}

export default SeasonalProduce;