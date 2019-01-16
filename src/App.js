import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

componentDidMount(){
  window.addEventListener('scroll', this.handleScroll);
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}



handleScroll = event => {
  console.log('scroll top - ',document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > this.state.height){
    document.getElementById("top-nav").classList.add("fixed")
    document.getElementById("top-nav").classList.add("flex")
    document.getElementById("top-nav").classList.remove("invisible")
  } else {
    document.getElementById("top-nav").classList.remove("fixed")
    document.getElementById("top-nav").classList.remove("flex")
    document.getElementById("top-nav").classList.add("invisible")
  }
  // let scrollTop = event.srcElement.body.scrollTop,
      // itemTranslate = Math.min(0, scrollTop/3 - 60);
  // this.setState({
  //   transform: itemTranslate
  // });
}

updateWindowDimensions() {
  this.setState({
    width: window.innerWidth,
    height: window.innerHeight
  });
}



  // Window.onscroll = function() {scrollFunction()};

  // topNavView(){
  //   var element = document.getElementById("top-nav");
  //   element.classList.add("fixed");
  //   element.classList.add("flex");
  //   element.classList.remove("invisible");
  // }


scrollTo = e => {
  console.log('e.target - ',e.target.id)
  let target = e.target.id
  target += '-sect'
  document.getElementById(target).scrollIntoView({ behavior: 'smooth', block: 'start'})
  // document.getElementById(target).scrollIntoView()
}


scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top-nav").classList.add("fixed")
    document.getElementById("top-nav").classList.add("flex")
    document.getElementById("top-nav").classList.remove("invisible")
  } else {
    document.getElementById("top-nav").classList.remove("fixed")
    document.getElementById("top-nav").classList.remove("flex")
    document.getElementById("top-nav").classList.add("invisible")
  }
}

  render() {

    // var width;
    // $(window).resize(function() {
    //   width = $(window).width();
    // });


// Need a function that adds the class of fixed

// remove invisible/add fixed


    return (
      <div className="App">
        <section id="home-sect">
          <div className="cover">
            <div className="text">
                Nick Hall's coding highlight real
            </div>
            <div className="btn center" id="portfolio" dest="portfolio" onClick={this.scrollTo}>
                View work
            </div>
          </div>

          <nav id="top-nav" className="invisible">
            <div className="link-wrap">
              <div className="page-link" id="home" dest="home" onClick={this.scrollTo}>home</div>
              <div className="page-link" id="about" dest="about" onClick={this.scrollTo}>about</div>
              <div className="page-link" id="portfolio" dest="portfolio" onClick={this.scrollTo}>portfolio</div>
              <div className="page-link" id="blog" dest="blog" onClick={this.scrollTo}>blog</div>
              <div className="page-link" id="contact" dest="contact" onClick={this.scrollTo}>contact</div>
            </div>
          </nav>
        </section>
        <section id="about-sect">
          <h1>About</h1>
        </section>
        <section id="portfolio-sect">
          <h1>Portfolio</h1>
        </section>
        <section id="blog-sect">
          <h1>Blog</h1>
        </section>
        <section id="contact-sect">
          <h1>Contact</h1>
          <p>Questions, Comments, Jobs?</p>
            <form className="waypoint animated pop-in"  data-delay=".5s" id="contact-form" >
              <input placeholder="Name" type="text" name="name" required="" />
              <input placeholder="Enter email" type="email" name="email" required="" />
              <textarea placeholder="Your Message" type="text" name="message"></textarea>
              <div id="success" className="invisible">
            <div>Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span></div>
          </div>
          <input className="button" type="submit" id="submit" value="SUBMIT" />
          </form>
        </section>


      </div>
    );
  }
}

export default App;
