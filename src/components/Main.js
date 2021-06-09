import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {

    render() {
        return (

            <div>
                {/* Using map function to loop through array */}

                {
                    this.props.HornedBeastData.map((beast) => {
                        return (
                            <HornedBeast
                                title={beast.title}
                                img={beast.image_url}
                                description={beast.description}
                                handleShow={this.props.handleShow}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default Main;