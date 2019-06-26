import React, { Component } from 'react';
import './App.css';
import logo from "./logo.svg";
import { connect } from 'react-redux';
import {increaseAge,decreaseAge} from "./store/actions/actions"

class App extends Component {

  render() {
    return (
      <div className="App" >
        <div>Age :<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age DOWN</button>
        {this.props.loading && <img src={logo} className="App-logo"></img>}
        <hr />
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(ele => (
                <li key={ele.id} onClick={()=>this.props.onDelItem(ele.id)}>
                  {ele.age}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(increaseAge(5)),//anonymous function
    onAgeDown: () => dispatch(decreaseAge(5)),
    onDelItem: (id) => dispatch({type: 'DEL_ITEM',key: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
