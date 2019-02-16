import React, { Component } from 'react';
import CustomersService from './projectservice';
// import {Link} from 'react-router-dom';

const customersService = new CustomersService();

class AddProject extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      nextPageURL: ''

    };
    this.nextPage = this.nextPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    
  }  
  componentDidMount() {
    
    var self = this;
    customersService.getCustomers().then(function (result) {
      console.log(result);
      self.setState({ customers: result.data, nextPageURL: result.nextlink})
    });
  }

  handleDelete(e,pk){

    var self = this;
    customersService.deleteCustomer({pk : pk}).then(()=>{
      var newArr = self.state.customers.filter(function(obj) {
        return obj.pk !== pk;
      });

      self.setState({customers: newArr})
    });
    
  }
  
  nextPage(){
    var self = this;
    console.log(this.state.nextPageURL);
    customersService.getCustomersByURL(this.state.nextPageURL).then((result) => {

      self.setState({ customers: result.data, nextPageURL: result.nextlink})

    });      
    
  }

  render() {
    return (

      


 
<div className="container" > 
<h1 className="mt-4 mb-3 text-white">My
      <small>Project</small>
    </h1>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">Project</li>
    </ol>
    <img className="img-fluid rounded mb-4" src="http://placehold.it/1200x400" alt="">
    </img><hr className="hr"/>




<div className="row id">

{this.state.customers.map( c =>
  
    <div className="col-md-4   animated fadeInUp delay-2s if " key={c.pk}>
    <div className="product-content bg-white" >
    <div className="card  border-success " >

    </div>
    {/* <Link to={`/project/${c.pk}`}> */}
          <a href={"/project/" + c.pk} ><img className="card-img-top" src={c.image}  alt="mage"  /> </a>
          <h5 className="card-header text-left">Project: {c.pk} </h5>
          <div className="card-body text-primary ">
              <a href={"/project/" + c.pk}> <h6 className="card-title text-left cardd "><i className="fa fa-link"></i>{c.title}</h6></a>
              <hr className="hrr"></hr>
              <p className="card-text">{c.body}</p>
          </div>
          {/* </Link> */}
          <div className="card-footer text-muted " >
              <span className="date" >Date:</span>
              <span className="text-primary by" >by:{c.by} </span>                
          </div>
         
    </div> 
</div>




)}           
                            {/* // <td>
                // <button className="btn btn-danger"  onClick={(e)=> this.handleDelete(e,c.pk) }><i className="fa fa-trash" alt="Delete"></i></button> |
                // <a className="btn btn-success" href={"/customer/" + c.pk}><i className="fa fa-pencil"></i></a> 
                // </td> */}  
          
      </div>
      <hr className="hr"></hr>
      <center>
      <button className="btn btn-primary text-left next" onClick= { this.nextPage }>Next</button></center>
      </div>
    );
  }
}

export default  AddProject;
