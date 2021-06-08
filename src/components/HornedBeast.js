import React from 'react';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfLikes: 0
        }
    }

    likes = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes +=1
          });
    }


    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.img} alt={this.props.title} onClick = {this.likes} style={{ width: '15rem' }}></img>
                    <p>{this.props.description}</p>
                    <div>❤️ {this.state.numberOfLikes}</div> 
                </div>
            </div>

        )
    }
}

export default HornedBeast;
