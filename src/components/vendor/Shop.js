import React from "react";

function Shop(props) {
  const {
    storeName,
    businessType,
    street,
    contactPerson,
    contactNo,
    city,
    zip,
  } = props.store;
  return (
    <div className="lifestle-shop">
      <div className="d-flex justify-content-between">
        <div className="shop-left-content">
          <h6>{storeName}</h6>
          <p>{businessType}</p>
          <h6>
            {contactPerson} , {contactNo}
          </h6>
          <p>
            {street} {city} {zip}
          </p>
        </div>
        <div className="shop-right-content">
          <a href="#">Edit</a>
          <br />
          <a href="#">Delete</a>
        </div>
      </div>
    </div>
  );
}

export default Shop;
