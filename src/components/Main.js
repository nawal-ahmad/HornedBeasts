import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.filter}>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Choose Number of Horns: </Form.Label>
            <Form.Control
              onChange={this.newState}
              as='select'
              name='numberOfHorns'
              defaultValue={'All'}
            >
              <option value='All'>All</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Control>
            <Button variant='primary' type='submit'>
              Filter
            </Button>
          </Form.Group>
        </Form>

        <div>
          {/* Using map function to loop through array */}

          {this.props.HornedBeastData.map((beast) => {
            return (
              <HornedBeast
                title={beast.title}
                img={beast.image_url}
                description={beast.description}
                handleShow={this.props.handleShow}
                horns={this.props.horns}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
