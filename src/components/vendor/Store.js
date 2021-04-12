import React, { useState } from "react";

const Store = (props) => {
  const [storeName, setStoreName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const store = {
      storeName: storeName,
      businessType: businessType,
      city: city,
      street: street,
      zip: zip,
      contactPerson: contactPerson,
      contactNo: contactNo,
    };

    props.store(store);

    setStoreName("");
    setBusinessType("");
    setCity("");
    setStreet("");
    setZip("");
    setContactPerson("");
    setContactNo("");
  }

  return (
    <div className="business-details">
      <div className="merchant-login">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Store Name"
              name="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Your business type"
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Contact Person"
                name="contactPerson"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="tel"
                className="form-control"
                id="inputZip"
                placeholder="Contact Number"
                name="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Street Address"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City / Region"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Zip Code"
                name="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          <div className="btn-new-entry">
            <button className="btn btn-primary btn-edit-button">
              + Add more
            </button>
          </div>
        </form>

        <div className="app-content">
          <p>
            App will use your contact details to send you mails and messages
            about events and other updates and information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;
