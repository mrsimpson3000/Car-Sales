import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className='content'>
      <h4>
        Total Amount: ${props.carPriceOnProps + props.additionalPriceOnProps}
      </h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carPriceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(Total);
