import React from "react";

function Universal() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small">
            Thematic investemnt platform
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" alt=""  style={{width:"40%"}}/>
          <p className="text-muted text-small">
              Algo and stragety platform
          </p>
        </div>

         <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:"50%"}} />
          <p className="text-muted text-small">
         Options trading platform


          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"60%"}} />
          <p className="text-muted text-small">
            Assest mangement
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="" />
         <p className="text-muted text-small">
            Bonds trading platform
         </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt=""  style={{width:"40%"}}/>
         <p className="text-muted text-small">Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%",margin: "0 auto"}}>
                   Signup now
                </button>
      </div>
      
    </div>
  );
}

export default Universal;
