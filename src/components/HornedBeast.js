import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }

  likes = () => {
    this.setState({
      numberOfLikes: (this.state.numberOfLikes += 1),
    });
  };

  update = () => {
    this.props.selectedUpdate(this.props.title);
  };

  render() {
    return (
      <div class='card-deck' style={{ display: 'inline-flex' }}>
        <Card style={{ width: '18.9rem' }}>
          <Card.Img
            variant='top'
            src={this.props.img}
            alt={this.props.title}
            style={{ height: '17rem' }}
            onClick={() => {
              this.likes();
              this.props.handleShow(this.props);
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>❤️ {this.state.numberOfLikes}</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
