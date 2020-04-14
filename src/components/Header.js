import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <>
      <figure className='image is-128x128'>
        <img src={props.carImageOnProps} alt={props.carNameOnProps} />
      </figure>
      <h2>{props.carNameOnProps}</h2>
      <p>Amount: ${props.carPriceOnProps}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carImageOnProps: state.car.image,
    carNameOnProps: state.car.name,
    carPriceOnProps: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Header);
