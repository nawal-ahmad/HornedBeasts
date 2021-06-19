import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Gallery of Horns</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Header;
