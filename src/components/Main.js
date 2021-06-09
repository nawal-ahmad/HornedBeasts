import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state({
  //     hornsNum: '',
  //   });
  // }
  // filterBeast = (e) => {
  //   this.setState({
  //     hornsNum: e.target.value,
  //   });
  // };

  render() {
    return (
      <div>
        <Form className='p-3'>
          <Form.Group>
            <Form.Label>Please select number of horns to select!</Form.Label>
            <Form.Control
              as='select'
              //  onChange={this.filterBeast}
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
