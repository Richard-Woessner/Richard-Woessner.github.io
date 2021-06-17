import React, { Component } from 'react';
import Sky from 'react-sky';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

<Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://image.flaticon.com/icons/png/512/2867/2867522.png" /* You can pass as many images as you want */,
            1: "https://image.flaticon.com/icons/png/128/900/900111.png",
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={
            15
          } /* Pass the number of images Sky will render chosing randomly */
          time={100} /* time of animation */
          size={"100px"} /* size of the rendered images */
          background={"palettedvioletred"} /* color of background */
        />

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Interests</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>A <span>{occupation}</span> and tech enthusiast in {city}. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
