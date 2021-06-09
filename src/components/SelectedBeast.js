import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

    render() {
            return (
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>{this.props.selectedProps.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <Card.Img variant="top" src={this.props.selectedProps.img} alt={this.props.selectedProps.title} onClick={this.likes} style={{ height: '17rem' }} />
                            <Card.Body>
                                <Card.Title>{this.props.selectedProps.title}</Card.Title>
                                <Card.Text>
                                  {this.props.selectedProps.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                    </Button>
                  </Modal.Footer>
                </Modal>

            );
        }

    }


export default SelectedBeast;