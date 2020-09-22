import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones } from "../../redux/actions";
import { getPhones } from "../../redux/selectors";
import { Link } from "react-router-dom";

import * as R from "ramda";

class Phones extends Component {
  renderPhone(phone, index) {
    const shortDescription = `${R.take(60, phone.description)}`;

    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          <div className="caption">
            <h4 className="pull-right">${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button className="btn btn-primary">Buy Now!</button>
              <Link to={`/phones/${phone.id}`} className="btn btn-default">
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { phones } = this.props;

    return (
      <>
        <div className="book row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>

        <div></div>
      </>
    );
  }

  // Không gọi DB trong cpnDidMount, đẩy lên nhờ middleware gọi giùm
  componentDidMount() {
    this.props.fetchPhones();
  }
}

const mapStateToProps = (state) => ({
  phones: getPhones(state),
});

const mapDispatchToProps = {
  fetchPhones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
