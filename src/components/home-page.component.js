import React from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';

import UserContext from "../context/user.context";
// import Axios from 'axios';
// import User from '../'
// import Error from './error.component';
export default function HomePage() {


    const onSubmit = async (e) => {

    }

    return (
        <div className="parent">
      <div className="section1">
          <div className="row section-1-row">
              <div className="col-sm-12 col-md-6 center-block">  
              <img className="section-1-img" src={require("../Assets/movie.jpg")}/>
              <div className="row">
                <div className="col-sm-12" >
                <a href="http://www.freepik.com" id="credit-id">Designed by rawpixel.com / Freepik</a>
                </div>     
              </div>

              </div>
              <div className="col-sm-12 col-md-6 title-col">
                  {/* <h1 className="title-header">Search millions of movies, <br/>and keep track of your favourites!</h1> */}
                  <h1 className="title-header">Hey there! Login to search millions of movies and favourite the best ones!</h1>

                  </div>
          </div>
      </div>

       <div className="section2">
          <p>blah blah blah</p>
      </div>
      </div>

        );
}
