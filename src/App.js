import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { removeFeature, buyItem } from "./actions/actions";

const App = (props) => {
  const removeFeature = (item) => {
    props.removeFeature(item);
  };

  const buyItem = (item) => {
    // console.log("buy item");
    props.buyItem(item);
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { removeFeature, buyItem })(App);
