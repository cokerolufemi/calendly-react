import React from "react";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col6">
            <h3 className="ax">Easy</h3>
            <h3 className="loy">scheduling</h3>
            <h3 className="text">ahead</h3>
            <p className="bolt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim venia
            </p>

            <input type="email" placeholder="enter your email" />

            <button className="enc">sign up</button>
          </div>
          <div className="col-md-6 gh">
            <img src="images/laptopimage.jpg" style={{ width: "80%" }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center dol">
              Simplified schedulling for more than
              <br />
              <span className="span">10,000,000</span> users worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/2hDXRTJ8GBvGvFew8TZLSM/f15bee8de363080dd1ae486f246c7242/Compass.svg"
              alt="Compass"
              className="Comp"
            />
          </div>
          <div className="col-md-2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/rexKRdC9CB00Jh616eiD5/82174ec98a18d6a40478868e2a8521bf/drop.svg"
              alt="mistbush"
              className="mist"
            />
          </div>
          <div className="col-md-2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/2ck9ANAgxoASegsTLVaTLW/c3e53db0a0a7e0dad8b73ba75525d7ee/ebay.svg"
              alt="bay"
              className="ebay"
            />
          </div>
          <div className="col-md-2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/2uC8mx63tSkNEh1Kt2Fnn3/e11a46ad74d725b2b9b68080d50b0733/Lazboy.svg"
              alt="liv"
              className="liveboy"
            />
          </div>
          <div className="col-md-2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1kEJVQrmrXOhTKiZbNpGWV/d71c4890960ea1e7fbe9977f90dd7c9c/twilio.svg"
              alt="twi"
              className="twillo"
            />
          </div>
        </div>
      </div>

      <div className="container cont">
        <div className="row ">
          <div className="col-md-4">
            <h5>
              &copy;
              <span>
                <div>Create </div>
                <br />
              </span>
              <div className="uj">simple rules</div>
            </h5>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <h5>
          &copy;
          <span>
            Share your
            <br />
            <div className="uj">link</div>
          </span>
        </h5>
      </div>

      <div className="col-md-4">
        <h5>
          &copy;<span>Get booked</span>
        </h5>
      </div>
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="cas">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            </p>
          </div>
          <div className="col-md-4">
            <p className="cas">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            </p>
          </div>
          <div className="col-md-4">
            <p className="cas">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
