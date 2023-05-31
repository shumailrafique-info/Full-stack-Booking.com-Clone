import "./searchItem.scss";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Town Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m 1 full bed
        </span>
        <span className="siCancelOp">free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Include taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
