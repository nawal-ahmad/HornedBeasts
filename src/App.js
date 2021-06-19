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
      allBeasts: HornedBeastData,
      selectedProps: {},
      show: false,
    };
  }

  handleShow = (title) => {
    const selectedProps = this.state.allBeasts.find(
      (beast) => beast.title === title
    );

    this.setState({
      show: true,
      selectedProps: selectedProps,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  updateBeasts = (allBeasts) => {
    this.setState({
      allBeasts: allBeasts,
    });
    // console.log(horns);
  };

  render() {
    return (
      <div>
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          handleShow={this.handleShow}
          displayFiltered={this.updateBeasts}
        />
        <SelectedBeast
          show={this.state.show}
          selectedProps={this.state.selectedProps}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
