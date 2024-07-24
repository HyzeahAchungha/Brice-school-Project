import React from "react";
import H5 from "../component/IMAGES/h5.jpg";


import H2 from "../component/IMAGES/h2.jpg";
import H3 from "../component/IMAGES/h3.jpg";

import "./news.css";
import Hirosection from "./Hirosection";

const NewsWeek = () => {
  return (
    <div>
      <div>
        <Hirosection />
        <div className="carousel-item c-tem">
          <img src={H5} alt="" className="d-block w-100 c-img" />
          <div className="carousel-caption d-none d-md-block">
            <p>HUIB Calender 2025</p>
            <h1>Opening Ceremory</h1>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={H5} alt="" className="card-img-top c-img" />
              <div className="card-body">
                <h5 className="card-title">Upcoming Student Field Trip</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio.
                </p>
                <div className="text-end">
                  <a href="./readmore" className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={H2} alt="" className="card-img-top c-img" />
              <div className="card-body">
                <h5 className="card-title">Upcoming Student Field Trip</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio
                  rem ut tempore consequuntur, unde quia aspernatur commodi
                  neque voluptatibus quibusdam illo doloribus.
                </p>
                <div className="text-end">
                <a href="./readmore" className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card">
              <img src={H3} alt="Hello" className="card-img-top c-img" />
              <div className="card-body">
                <h5 className="card-title txt-title">
                  Upcoming Matriculation Ceremony 2025
                </h5>
                <p className="card-text text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio
                  rem ut tempore consequuntur, unde quia aspernatur commodi
                  neque voluptatibus quibusdam illo doloribus.
                </p>
                <div className="text-end">
                <a href="./readmore" className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsWeek;
