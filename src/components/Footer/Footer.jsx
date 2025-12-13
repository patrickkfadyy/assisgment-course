import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <footer className="main-color text-white text-center text-lg-start  pt-4 pb-3">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Location */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">LOCATION</h5>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          {/* Around the Web */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">AROUND THE WEB</h5>
           <div className="d-flex gap-3">
  <a href="#" className="btn btn-outline-light rounded-circle">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="#" className="btn btn-outline-light rounded-circle">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="btn btn-outline-light rounded-circle">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
  <a href="#" className="btn btn-outline-light rounded-circle">
    <FontAwesomeIcon icon={faGlobe} />
  </a>
</div>
          </div>

          {/* About Freelancer */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-3">
        <small>Copyright © Your Website 2021</small>
      </div>
    </footer>
  );
}