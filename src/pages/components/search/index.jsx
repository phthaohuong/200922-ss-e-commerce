import React, { Component } from "react";
import { connect } from "react-redux";

import { searchPhone } from "../../../redux/actions";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    // Hard Explicit để không mất đi context object, hoặc có thể dùng Arrow Function
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Push our value with an action
    this.props.searchPhone(this.state.value);
  }

  render() {
    return (
      <div className="well blos">
        <h3 className="lead">Quick Shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span>
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhone,
};

export default connect(null, mapDispatchToProps)(Search);
