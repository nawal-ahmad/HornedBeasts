import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

    render() {

        if (this.props.select) {
            return (

                <Modal show={this.props.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Img variant="top" src={this.props.img} alt={this.props.title} onClick={this.likes} style={{ height: '17rem' }} />
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                    </Button>
                  </Modal.Footer>
                </Modal>

            );
        }

    }
}

export default SelectedBeast;