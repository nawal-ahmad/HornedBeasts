import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeastData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProps: {},
      show: false,
    };
  }

  handleShow = (previousProps) => {
    this.setState({
      show: !this.state.show,
      selectedProps: previousProps,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Main HornedBeastData={HornedBeastData} handleShow={this.handleShow} />
        <SelectedBeast
          show={this.state.show}
          selectedProps={this.state.selectedProps}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
