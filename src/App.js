import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
// import { removeFeature, buyItem } from "./actions/actions";

const App = () => {
  // const removeFeature = (item) => {
  //   props.removeFeature(item);
  // };

  // const buyItem = (item) => {
  //   console.log("buy item");
  //   props.buyItem(item);
  // };

  const data = useSelector((state) => state);

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={data.car} />
        <AddedFeatures car={data.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures additionalFeatures={data.additionalFeatures} />
        <Total car={data.car} additionalPrice={data.additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalPrice: state.additionalPrice,
//     additionalFeatures: state.additionalFeatures,
//   };
// };

// const mapDispatchToProps = {
//   removeFeature,
//   buyItem,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
