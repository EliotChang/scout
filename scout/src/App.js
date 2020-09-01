import React from 'react';
import './App.css';
import image from './image.png';
import table from './table'
function App() {
  return (
    <div>
        <div id="root"></div>
        <div class = "app">
          <div class="container">
            <div class="row">
              <div style=""class="col-md-8 order-md-2 align-self-end text-right">
                <div style="padding-top: 25vh;" class = "">
                  <p class="introText text-light"> Just a crowdsourced list of internships.</p>
                  <p style="font-size: 5rem"class="titleText text-light">Scout.</p>
                </div>
              </div>
              <div style="" class="col-md-4 text-center resize-1">
                <div>
                  <img class="heights" src="images/image.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-center">
            <div class="row">
              <div class="col-lg-12">
                <div class="input-group mb-3">
                  <input style="border-radius: 10px 0 0 10px; height: 60px;"type="text" class="form-control" placeholder="New job who dis? Sign up for text updates whenever we update the list. Enter Phone number" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  </input>
                  <div class="input-group-append">
                    <span class="input-group-text text-light" style="background-color: #2C3690; border-color: #2C3690; border-radius: 0 10px 10px 0; padding-left: 20px; padding-right: 20px;" id="basic-addon2">Submit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container" style="padding-top: 25px">
            <div class="row">
              <div class="col-lg-6">
                <div class = "updates">
                  <p class="text-light" style="font-size: 2rem; font-weight: bold; margin-bottom:0" > 42 positions open </p>
                  <p class="text-light" > Last updated: 8/27/2020 </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row col-lg-612 col-md-offset-2 custyle">
              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th style="background-color: white; font-weight: bold; border-radius: 10px 0 0 0 ; border-color: white"><i>Company</i></th>
                    <th style="background-color: white; font-weight: bold; border-color: white"><i>Location</i></th>
                    <th style="background-color: white; font-weight: bold; border-color: white"><i>Position</i></th>
                    <th style="background-color: white; font-weight: bold; border-radius: 0 10px 0 0; border-color: white"><i>Date Posted</i></th>
                  </tr>
                </thead>
                <tr>
                    <td style="background-color: white; border-color: white">Google</td>
                    <td style="background-color: white; border-color: white">New York</td>
                    <td style="background-color: white; border-color: white">Software Engineer</td>
                    <td style="background-color: white; border-color: white">8/27/20</td>
                </tr>
                <tr>
                    <td style="background-color: white; border-color: white">Apple</td>
                    <td style="background-color: white; border-color: white">Las Vegas</td>
                    <td style="background-color: white; border-color: white">Software Engineer</td>
                    <td style="background-color: white; border-color: white">8/27/20</td>
                </tr>
                <tr>
                    <td style="background-color: white; border-color: white; border-radius: 0 0 0 10px">Microsoft</td>
                    <td style="background-color: white; border-color: white">Chicago</td>
                    <td style="background-color: white; border-color: white">Software Engineer</td>
                    <td style="background-color: white; border-color: white; border-radius: 0 0 10px 0">8/27/20</td>
                </tr>
              </table>
            </div>
          </div>


          <div class = "listView">
            <table></table>
          </div>
          <div style="padding-top:50px"class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class = "footer float-right">
                  <p class="text-light"> maintained by @eliotchang & @andrwyang. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
