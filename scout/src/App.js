import React from 'react';
import './App.css';
import image from './image.png';
import table from './table'
function App() {
  return (
    <div className = "app">
      <div className = "hero">
        <div className = "top">
          <div className = "image">
            <img src = {image}/>
          </div>
          <div className = "introText">
            <p> Just a crowdsourced list of internships. </p>
            <p> Scout. </p>
          </div>
        </div>

        <div className = "input">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div className = "updates">
        <p> 42 positions open </p>
        <p> Last updated: 8/27/2020 </p>
      </div>

      <div className = "listView">
        <table></table>
      </div>

      <div className = "footer">
        <p> maintained by @eliotchang & @andrwyang. </p>
      </div>
    </div>
  );
}

export default App;
