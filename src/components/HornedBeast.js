import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfLikes: 0
        }
    }

    likes = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes += 1
        });
    }


    render() {
        
        return (
           <div class="card-deck" style={{width:'33.3%',display:'inline-flex'}}>

            <Card>
                <Card.Img variant="top" src={this.props.img} alt={this.props.title} onClick={this.likes} style={{height:'17rem'}} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    ❤️ {this.state.numberOfLikes}
                </Card.Footer>
            </Card>

            </div>
        )
    }
}

export default HornedBeast;
