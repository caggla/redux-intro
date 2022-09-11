import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}>
          Inc 2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // aslında burada action çağırıyoruz yani gönderyoruz :D
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }; //bindActionCreators action u bağlamak ıcın kullnılır. (increaseByTwoCounter action, reducer daki)
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter); //yani bu ikisini de hem export hem connect etmiş oluyoruz redux a.
