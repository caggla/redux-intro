import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}>
          Inc 1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // aslında burada action çağırıyoruz yani gönderyoruz :D
  return { actions: bindActionCreators(increaseCounter, dispatch) }; //bindActionCreators action u bağlamak ıcın kullnılır. (increaseCounter action, reducer daki)
}

export default connect(mapDispatchToProps)(IncreaseCounter); //yani bu ikisini de hem export hem connect etmiş oluyoruz redux a.
