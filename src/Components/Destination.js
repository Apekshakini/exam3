import React from 'react'

const Destination = () => {
  return (
    <>
    <div>Destination</div>
    <div className="container mt-4">
      <h1>Destination</h1>

      <div className="row">
        <div className="col-md-6">
          <h3>Cabban Park</h3>
          <img src="https://karnatakatourism.org/wp-content/uploads/2020/06/cabbon-park.jpg"
          alt="Loading"
          height="209px"/>
          <p>
          Located in :Banglore

          Spread over an area of 300 acres, Cubbon Park in the city of Bangalore is a major sightseeing attraction rich in green foliage. It is a green belt region of the city and is an ideal place for nature lovers and those seeking a calm atmosphere. Having been laid down by Lord Cubbon, the park is named so in his honour.
          </p>
          <h3>$9600</h3>
          <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>
      
        </div>

        <div className="col-md-6">
          <h3>Church Street</h3>
          <img src="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_Church_street_trees_3_20210628130018.jpg"
          alt="Loading"
          height="200px"/>
          <p>
          Highlights: Cafes and Restaurants, Rooster Guitars, Bloss (Read More)
About 750 m long, Church Street in Bangalore is one of the busiest and most beloved streets, named after St. Mark’s Cathedral. It is lined with gift shops, music shops, bookstores, restaurants and cafes, some of them being the oldest in the city, all selling a wide variety of products and tasty treats. There are days when artists set up shop out on the streets and sell their work that includes paintings, photo frames, posters and handmade items. There are arcades for children and adults to play at and tattoo parlours too.
          </p>
          <h3>$5000</h3>
          <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>
        </div>

        <div className="col-md-6">
          <h3>Banergatta  Park</h3>
          <img src="https://www.holidify.com/images/cmsuploads/compressed/4130_20190406114925.JPG"
          alt="Loading"
          height="200px"/>
          <p>
          Located 22 km away, the Bannerghatta National Park is a sanctuary for a large variety of flora and fauna. The main attractions here are an aquarium, a zoo, a Children's park, Crocodile Farm, Snake Park and a Prehistoric Animals' Park. It is also popular for hiking and trekking.
          </p>
          <h3>$9999</h3>
          <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>
        </div>

        <div className="col-md-6">
          <h3>Mysore Palace</h3>
          <img src="https://www.holidify.com/images/cmsuploads/compressed/BangalorePalace16_20190904100428_20190904100439.jpg"
          alt="Loading"
          height="200px"/>

          <p>
          Located in : Malleshwaram

The palace is a royal palace known for its architecture with beautiful carvings both inside and outside. It is owned by the Mysore Royal family. The sprawling grounds around the palace is ideal for a picnic.
          </p>
         <h3>$7000</h3>
          <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>
        </div>

      </div>
      <button  type="button" class="btn btn-outline-warning">
                        <a href="https://www.goindigo.in/"
                    class="btn btn-danger"
                    >Book Now</a>
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

export default Destination