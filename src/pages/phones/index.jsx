import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones } from "../../redux/actions";

class Phones extends Component {
  render() {
    return <div>Phones</div>;
  }

  // Không gọi DB trong cpnDidMount, đẩy lên nhờ middleware gọi giùm
  componentDidMount() {
    this.props.fetchPhones();
  }
}

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(null, mapDispatchToProps)(Phones);
