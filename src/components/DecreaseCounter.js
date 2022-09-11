import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";
class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}>
          Dec 1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // aslında burada action çağırıyoruz yani gönderyoruz :D
  return { actions: bindActionCreators(decreaseCounter, dispatch) }; //bindActionCreators action u bağlamak ıcın kullnılır. (decreaseCounter action, reducer daki)
}

export default connect(mapDispatchToProps)(DecreaseCounter); //yani bu ikisini de hem export hem connect etmiş oluyoruz redux a.
