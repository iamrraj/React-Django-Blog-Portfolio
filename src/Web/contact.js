import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom'

import axios from 'axios';

const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
    .then(result => {
      this.setState( { 
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState( { error: error.message } ));
  };


  
  render() {
    return(

      // <BrowserRouter>
      //   <BaseLayout/>
      // </BrowserRouter>
      
<div class="container" > 
<h1 class="mt-4 mb-3">My
      <small>Conatct</small>
    </h1>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href=" #">Home</a>
    </li>
    <li class="breadcrumb-item active">Contact</li>
  </ol>

  <section id="fact"  class="wow fadeIn">
  <div class="section-header">
      <div class="section-header">
      <div class="container-fluid" >
      <hr></hr>
      <div class="row text-center">
      
      <div class="col-sm-4 col-xs-6 first-box">
      <h1><a href=" tel:+48722750618"><i class="fa fa-phone "></i></a></h1>
      <h3>Phone</h3>
      <p>+48-722-750-618</p><br></br>
      </div>

      <div class="col-sm-4 col-xs-6 second-box">
        <h1><a href=" "><i class="fa fa-address-card-o "></i></a></h1>
        <h3>Location</h3>
        <p>Warsaw, Poland, 01-355</p><br></br>
      </div>

      <div class="col-sm-4 col-xs-6 third-box">
          <h1><a href="mailto:rajr971111@gmail.com"><i class="fa fa-envelope "></i></a></h1>
          <h3>E-mail</h3>
          <p>rajr971111@gmail.com</p><br></br>
      </div>
      </div>
      </div>


      <div class="row e">

          <div class="col-sm-8 mx-auto">




              <form action="#" method="post">
                  
                  <div class="form-row">

                      <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="text" name="fname" class="form-control" id="inputEmail4" placeholder="First Name" value={this.state.fname }
            onChange={e => this.setState({ fname: e.target.value })} />
                          <div class="valid-feedback">
                              Looks good!
                          </div>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="text" name="lname" class="form-control" id="inputPassword4" placeholder="Last Name" value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}   />
                          <div class="valid-feedback">
                              Looks good!
                          </div>
                      </div>
                    </div>

                  <div class="form-row">

                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" name='email' class="form-control" id="inputEmail4" placeholder="Email" value={this.state.email} 
            onChange={e => this.setState({email: e.target.value })} />
                          <div class="invalid-feedback">
                              Looks good!
                          </div>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPhone">Phone</label>
                        <input type="text" name="phone" class="form-control" id="inputPhone" placeholder="Password"  value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}  />
                      </div>
                      <div class="valid-feedback">
                              Looks good!
                      </div>

                    </div>


                    <div class="form-group">
                      <label for="inputAddress">Subject</label>
                      <input type="text" name='subject' class="form-control" id="inputAddress" placeholder="Subject "
                       value={this.state.subject}
                       onChange={e => this.setState({ subject: e.target.value })} 
                       /> 
                    </div>


                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea name='message' class="form-control" id="exampleFormControlTextarea1"  placeholder="Message" onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}></textarea>
                    </div>


                  <div class="pull-right">
                      <button type="submit" class="btn btn-primary btn-lg float-right bb " onClick = {e => this.handleFormSubmit(e)} ><i class="fa fa-angle-double-right"> Send Us</i></button>
                      <div> 
                        {this.state.mailSent  &&
                          <div className="sucsess">Thank you for contcting me.</div>
                        }
                        {this.state.error  &&
                          <div className="error">Sorry we had some problems.</div>
                        }
                     </div>
                  </div>

              </form>
          </div>
      </div>

      
            
  </div>
  </div>
  </section>


</div>
    );
  }
}

// const BaseLayout = () => (
  
// )



export default Contact;
