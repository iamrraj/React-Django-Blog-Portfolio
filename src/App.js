import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
// import { Route} from 'react-router-dom'
import { Route} from 'react-router-dom'

import About  from './Web/aboutme'
import Project  from './Web/project'
import Contact  from './Web/contact'
import Home  from './Web/index'


import './App.css';

const BaseLayout = () => (

<div className="">
<nav className="navbar  navbar-expand-lg navbar-light" >
  <a className="navbar-brand animated fadeInUp delay-1s" href="# " >Rahul Raj </a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-1s" href="/ "><i className = "fa fa-home" > </i>  Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-2s" href="/project/"><i className = "fa fa-tasks" > </i>   Project</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-3s" href="/about/"><i className = "fa fa-user" > </i>   About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-4s" href="/contact/"><i className = "fa fa-address-book" > </i>   Contact Us</a>
      </li>


      {/* <li className="nav-item ">
      <button className="btn btn-success active b">  <a className="nav-link" href=" "><i className = "fa fa-sign-in" > </i>  Login</a></button> 
      </li>

      <li className="nav-item ">
        <button className="btn btn-warning active b"> <a className="nav-link" href=" "><i className = "fa fa-user" > </i>  Register</a></button> 
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="# ">Action</a>
          <a className="dropdown-item" href="# ">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="# ">Something else here</a>
        </div>
      </li> */}
      
    </ul>
    <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link animated fadeInRight delay-1s" href="https://www.linkedin.com/in/iamrraj/" target=" _blank">
                        <img src=" http://www.ergodomus.it/wp-content/uploads/2017/02/linkedin-logo-copy.png" width=" 30" height="30" alt="Linkedin"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link animated fadeInRight delay-2s" href=" #" target="_blank">
                      
                        <img src="http://www.isiccard.ie/wp-content/uploads/2018/02/instagram.jpg" width="30" height="30" alt="Instagram "/>

                    </a>
                </li>
                <li class="nav-item animated fadeInRight delay-3s">
                    <a class="nav-link" href="http://www.facebook.com/iamrraj"  target=" _blank">
                        <img src="https://www.facebook.com/images/fb_icon_325x325.png" width="30" height="30" alt="Facebook"/>
                    </a>
                </li>
                <li class="nav-item animated fadeInRight delay-4s">
                    <a class="nav-link" href="http://www.github.com/iamrraj" target=" _blank">
                        <img src="https://png.pngtree.com/svg/20161104/github_600875.png" width="30" height="30" alt="Github"/>
                    </a>
                </li>


            </ul>
    
  </div>
</nav>

    <div className="content">
    <Route path="/" exact component={Home} />
    <Route path="/about/" exact component={About} />
    {/* <Route path="/customer/:pk"  component={AddStudent} /> */}
    <Route path="/project/" exact component={Project} />
    <Route path="/contact/" exact component={Contact} />
    {/* <Route path="/customer/" exact component={AddStudent} /> */}

    </div>

</div>


 
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
