import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
// import { Route} from 'react-router-dom'
import { Route} from 'react-router-dom'

import About  from './Web/aboutme'
// import Project  from './Web/project'
import Contact  from './Web/contact'
import Home  from './Web/index'

import  ContactList from './contactt/contacttlist'
import  AddContact  from './contactt/addcontact'
import  AddProject  from './project/projectlist'
import  ProjectDeatil  from './project/details'


import './App.css';

const BaseLayout = () => (
<section id="facte"  className="wow fadeIn">
<div className="container">
<div className="">
<nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href=" #">Rahul Raj</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
    <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-1s" href="/ "><i className = "fa fa-home" > </i>  Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-2s" href="/project/"><i className = "fa fa-tasks" > </i>   Project</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-3s" href="/about/"><i className = "fa fa-user" > </i>   About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-4s" href="/customer/"><i className = "fa fa-address-book" > </i>   Contact Us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white animated fadeInDown delay-4s" href="/list/"><i className = "fa fa-address-book" > </i>List Of Conatct</a>
      </li>

    </ul>
   
    <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link animated fadeInRight delay-1s" href="https://www.linkedin.com/in/iamrraj/" target=" _blank">
                        <img src=" http://www.ergodomus.it/wp-content/uploads/2017/02/linkedin-logo-copy.png" width=" 30" height="30" alt="Linkedin"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link animated fadeInRight delay-2s" href=" #" target="_blank">
                      
                        <img src="http://www.isiccard.ie/wp-content/uploads/2018/02/instagram.jpg" width="30" height="30" alt="Instagram "/>

                    </a>
                </li>
                <li className="nav-item animated fadeInRight delay-3s">
                    <a className="nav-link" href="http://www.facebook.com/iamrraj"  target=" _blank">
                        <img src="https://www.facebook.com/images/fb_icon_325x325.png" width="30" height="30" alt="Facebook"/>
                    </a>
                </li>
                <li className="nav-item animated fadeInRight delay-4s">
                    <a className="nav-link" href="http://www.github.com/iamrraj" target=" _blank">
                        <img src="https://png.pngtree.com/svg/20161104/github_600875.png" width="30" height="30" alt="Github"/>
                    </a>
                </li>


            </ul>
    
  </div>
</nav><hr className="col-md-12" style={{ borderWidth: '1px', borderColor:'green' }}></hr>

    <div className="content">
    <Route path="/" exact component={Home} />
    <Route path="/about/" exact component={About} />
    {/* <Route path="/customer/:pk"  component={AddStudent} /> */}
    {/* <Route path="/project/" exact component={Project} /> */}
    <Route path="/contact/" exact component={Contact} />

    <Route path="/project/" exact component={AddProject} />
    <Route path="/list/" exact component={ContactList} />
    <Route path="/customer/:pk"  component={AddContact} />

    <Route exact path='/project/:pk' component={ProjectDeatil}/>

    <Route path="/customer/" exact component={AddContact} />

    {/* <Route path="/customer/" exact component={AddStudent} /> */}

    </div>
    <footer className="page-footer font-small unique-color-dark bg-dark"  >


 <div className="footer-copyright text-center py-3 bg-primary text-white animated fadeInUp delay-5s">© <span id="date"> </span> Copyright:<a href="# " className='text-white'> rajrahul.pl</a>
 </div>

</footer>
</div>


 



</div>
</section>


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
