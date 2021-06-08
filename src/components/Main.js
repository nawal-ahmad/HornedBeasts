import React from 'react';
import HornedBeast from './HornedBeast';
import HornedBeastData from './data.json';


class Main extends React.Component {

    render() {
        return (
            <div>
                {/* Using map function to loop through array */}

                {
                    HornedBeastData.map((beast) => {
                        return (
                            <HornedBeast
                                title={beast.title}
                                img={beast.image_url}
                                description={beast.description}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default Main;