import React, { Component } from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import { getPhoneById } from "../../redux/selectors";
import { fetchPhoneById, addPhoneToBasket } from "../../redux/actions";
import BasketCart from "../components/basketCart";

class Phone extends Component {
  renderFields() {
    const { phone } = this.props;
    console.log("phone", phone);
    const columnField = R.compose(
      R.toPairs,
      R.pick([
        "cpu",
        "camera",
        "battery",
        "display",
        "size",
        "display",
        "memory",
      ])
    )(phone);

    console.log("column", columnField);
    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">
          <p>{value}</p>
        </div>
      </div>
    ));
  }

  renderContent() {
    const { phone } = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  renderSidebar() {
    const { phone, addPhoneToBasket } = this.props;
    return (
      <div>
        <div className="lead">Quickshop</div>
        <BasketCart />
        <div className="form-group">
          <h1>{phone.name}</h1>
          <h2>{phone.price}</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          type="button"
          onClick={() => addPhoneToBasket(phone.id)}
          className="btn btn-block btn-success"
        >
          Add to cart
        </button>
      </div>
    );
  }

  render() {
    // console.log("phone", this.props.phone);
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {this.props.phone && this.renderContent()}
            </div>
            <div className="col-md-3">
              {this.props.phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("props", this.props);
    const phoneId = this.props.match.params.id;
    this.props.fetchPhoneById(phoneId);
  }
}

const mapStateToProps = (state) => {
  return {
    phone: getPhoneById(state, state.phonePage.id),
  };
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
