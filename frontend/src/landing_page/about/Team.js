import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  p-3 mt-5 border-top">
        <h1 className="text-center text-muted">People</h1>
      </div>

      <div
        className="row p-3 text-muted text-center " 
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-5 d-flex flex-column align-items-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "100%",
              width: "60%"
              
            
            }}
          />
          <h4 className="mt-4 mb-1">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder, CEO</h6>
        </div>

        <div className="col-md-6 p-5 text-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on:{" "}
            <a href="#"  style={{ textDecoration: "none", pointerEvents: "none", cursor: "default" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#"  style={{ textDecoration: "none", pointerEvents: "none", cursor: "default" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#"  style={{ textDecoration: "none", pointerEvents: "none", cursor: "default" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
