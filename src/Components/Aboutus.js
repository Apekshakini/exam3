import React from 'react'

const Aboutus = () => {
  return (
    <>
     <div className="container mt-4">
      <h1>About</h1>
      <center>
      <img src="https://www.shutterstock.com/shutterstock/photos/1028106712/display_1500/stock-vector-travel-logo-icon-vector-design-illustration-1028106712.jpg"
            alt="Loading"
            height="200px"
            />
            </center>

      <div className="row">
        <div className="col-md-6">
          <h3>Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit justo. 
            Vestibulum consequat mauris eget justo volutpat, sed finibus urna fermentum.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Vision</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit justo. 
            Vestibulum consequat mauris eget justo volutpat, sed finibus urna fermentum.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Details</h3>
          <h6>Organisation Name:Travelling Life</h6>
          <h6>Address:4-52,Orea Island, Delhi</h6>
          <h6>location:Manglore,India</h6>
          <h6>contact Details:596471235</h6>
        </div>

      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body">
          <h3>Additional Details</h3>
          <p>
            Nunc dapibus efficitur dui, vitae lacinia orci auctor vel. Nam non eleifend mauris.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus