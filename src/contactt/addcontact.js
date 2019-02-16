import React, { Component } from 'react';

import CustomersService from './contactservice';

const customersService = new CustomersService();

class AddContact extends Component {

    constructor(props) {
        super(props);
    
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          customersService.getCustomer(params.pk).then((c)=>{
            this.refs.firstName.value = c.first_name;
            this.refs.lastName.value = c.last_name;
            this.refs.email.value = c.email;
            this.refs.phone.value = c.phone;
            this.refs.address.value = c.address;
            this.refs.description.value = c.description;
          })
        }
      }

      handleCreate(){
        customersService.createCustomer(
          {
            "first_name": this.refs.firstName.value,
            "last_name": this.refs.lastName.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
            "description": this.refs.description.value
        }          
        ).then((result)=>{
          alert("Thanks For Contact with us. We will contact with us!!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        customersService.updateCustomer(
          {
            "pk": pk,
            "first_name": this.refs.firstName.value,
            "last_name": this.refs.lastName.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
            "description": this.refs.description.value
        }          
        ).then((result)=>{
          console.log(result);
          alert("Customer updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
    
      render() {
        return (
        
            <div className="container">
            <h1 className="mt-4 mb-3">Contact
              <small>Us</small>
            </h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href=" #">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>

            <section id="fact"  class="wow fadeIn">
            <div className="section-header">
                <div className="section-header">
                <div className="container-fluid" >
                <hr></hr>
                <div class="row text-center">
                
                <div className="col-sm-4 col-xs-6 first-box">
                <h1><a href=" tel:+48722750618"><i className="fa fa-phone "></i></a></h1>
                <h3>Phone</h3>
                <p>+48-722-750-618</p><br></br>
                </div>

                <div className="col-sm-4 col-xs-6 second-box">
                  <h1><a href=" "><i className="fa fa-address-card-o "></i></a></h1>
                  <h3>Location</h3>
                  <p>Warsaw, Poland, 01-355</p><br></br>
                </div>

                <div className="col-sm-4 col-xs-6 third-box">
                    <h1><a href="mailto:rajr971111@gmail.com"><i className="fa fa-envelope "></i></a></h1>
                    <h3>E-mail</h3>
                    <p>rajr971111@gmail.com</p><br></br>
                </div>
                </div>
                </div>


                <div className="row e">

                    <div className="col-sm-8 mx-auto">




                    <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-row">

                                <div className="form-group col-md-6">
                                  <label >First Name</label>
                                  <input type="text" name="fname" className="form-control" id="inputEmail4" placeholder="First Name" autoComplete="off" ref='firstName' />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Last Name</label>
                                  <input type="text" name="lname" className="form-control" id="inputPassword4" placeholder="Last Name" autoComplete="off" ref='lastName' />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                              </div>

                            <div className="form-row">

                                <div className="form-group col-md-6">
                                  <label >Email</label>
                                  <input type="email" name='email' className="form-control" id="inputEmail4" placeholder="Email" autoComplete="off" ref='email' />
                                    <div className="invalid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                  <label >Phone</label>
                                  <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Password"  autoComplete="off" ref='phone' />
                                </div>
                                <div className="valid-feedback">
                                        Looks good!
                                </div>

                              </div>


                              <div className="form-group">
                                <label >Subject</label>
                                <input type="text" name='subject' className="form-control" id="inputAddress" placeholder="Subject" autoComplete="off" ref='address'/> 
                              </div>


                              <div className="form-group">
                                <label >Message</label>
                                <textarea name='message' className="form-control" id="exampleFormControlTextarea1"  placeholder="Message" autoComplete="off" ref='description'></textarea>
                              </div>


                            <div className="pull-right">
                                <button  className="btn btn-primary btn-lg float-right bb " type="submit"  ><i class="fa fa-angle-double-right"> Send Us</i></button>
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

export default AddContact;