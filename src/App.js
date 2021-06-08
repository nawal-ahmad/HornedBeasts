import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeastData from './components/data.json'
import SelectedBeast from './components/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      HornedBeastDataData: HornedBeastData,
      select: false,
    }
  }

   handleShow=() => {
    this.setState({
      select:true
    })
   }
   handleClose=()=>{
    this.setState({
      select:false
    })
   }
 

  render() {
    return (
      <div>
        <Header />
        <Main 
        HornedBeastData = {this.state.HornedBeastData}
        handleShow={this.handleShow}
        />
        <SelectedBeast
        HornedBeastData = {this.state.HornedBeastData}
        select={this.state.select}
        handleClose={this.handleClose}
        />
        <Footer />
      </div>

    )
  }
}

export default App;

