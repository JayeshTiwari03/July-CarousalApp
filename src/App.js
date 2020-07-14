import React from 'react';
import './App.css';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1 className="title">Welcome to the Designer Club</h1>
      <h3>This website contains pictures of Interior Designs in a Carousel format. For informational purposes only.</h3>
<div className="box">
      <Carousel showThumbs={false}>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg" alt="Room 1"/>
          <p className="legend">Room 1</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/Lshaped-modern-sofa.jpg" alt="Room 2"/>
          <p className="legend">Room 2</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/green-living-room.jpg" alt="Room 3"/>
          <p className="legend">Room 3</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/red-pouf.jpg" alt="Room 4"/>
          <p className="legend">Room 4</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/green-tv-wall-decor.jpg" alt="Room 5"/>
          <p className="legend">Room 5</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/modern-coffee-table-1.jpg" alt="Room 6"/>
          <p className="legend">Room 6</p>
        </div>
        <div>
          <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/modern-dining-room-1.jpg" alt="Room 7"/>
          <p className="legend">Room 7</p>
        </div>
        
      </Carousel>
      
      </div>

      <div className="boxes">
        <li className="li1">Bedroom Ideas</li>
        <li className="li2">Kitchen Ideas</li>
        <li className="li3">Bathroom Ideas</li>
      </div>

      <div className="content">
        <p>Kindly research the best idea for your home desin and contact us for a call. We love hearing back from our customers who are enthusiastic about getting their homes designed in the best beautiful way they can.</p>
      </div>

      <div className="footer">
        <span>Copyright Not Protected</span>
      </div>
    </div>
  );
}}

export default App;