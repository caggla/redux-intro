import React, { Component } from "react";
import { connect } from "react-redux"; //Böylelıkle redux a bağlanırız :D

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer }; //state bilgisini counterreducer dan çek. diyoruz bu satırda.
}

export default connect(mapStateToProps)(Counter);
//mapStateToProps= state i propslara bağla :D

//Önceden redux olmayınca this.props.counter kısmını App.js den alıyorduk . Ama artık store dan alıyoruz direk :D
