import React, { useState } from "react";
import Store from "./Store";
import Shop from "./Shop";

export default function Signup() {
  const [state, setState] = useState({
    businessName: "",
    contactNo: "",
    street: "",
    city: "",
    zip: "",
  });

  const [shop, setShop] = useState({});

  const handleChange = (e) => {
    e.target.name = setState(e.target.value);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  function store(store) {
    console.log(store);
    setShop(store);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <div className="merchant-sign-in merchant-signup">
            <div className="register-form">
              <h5 className="mb-1">Lets get started</h5>
              <p>
                Help us to know about your business, please fill the below form
                to register.
              </p>
            </div>
            <div className="business-details">
              <h6 className="business-title">Your business details</h6>
              <div className="merchant-login">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Business Name"
                      name="businessName"
                      key="businessName"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAddress1"
                      placeholder="Street Address"
                      name="street"
                      key="street"
                      onChange={(e) => handleChange(e)}
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
                        key="city"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="Zip Code"
                        name="city"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <h6 className="business-title">
                How many physical locations you have ?
              </h6>
              <div className="locations-selection">
                <div className="form-check form-check-inline">
                  <label className="custom-radio">
                    <input type="radio" name="shipping_method" />
                    <span className="checkmark"></span>
                    Only one
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="custom-radio">
                    <input type="radio" name="shipping_method" />
                    <span className="checkmark"></span>
                    Multiple
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="custom-radio">
                    <input type="radio" name="shipping_method" />
                    <span className="checkmark"></span>
                    Online only
                  </label>
                </div>
              </div>
            </div>

            {Object.keys(shop).length !== 0 ? <Shop store={shop} /> : null}

            <div className="business-details">
              <div className="merchant-login">
                <br />
                <Store store={store} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="terms-conditions">
                <div className="form-check form-check-inline">
                  <label className="custom-checkbox d-inline">
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                    By clicking submit i agree to work with app and accept all
                    the <a href="#">terms and conditions</a> policies of the
                    app.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="save-btn float-right mb-4">
                <button className="btn btn-primary btn-edit-button">
                  Submit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
