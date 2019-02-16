import React, { Component } from 'react';
// import Markdown from 'markdown-to-jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import CustomersService from './projectservice';

// const customersService = new CustomersService();


class ProjectDeatil extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: null,
    };
  }
//   constructor(props) {
//     super(props);
 
//     this.state = { user: { name: '' } };
//  }

//   componentDidMount() {
//       const { match: { params } } = this.props;
//       if(params && params.pk)
//       {
//         customersService.getCustomer(params.pk).then((user)=>{
//         console.log( user);
//         this.refs.title.value = user.title;
//         this.refs.description.value = user.description;
//         this.refs.image.value = user.image;
//         this.refs.link.value = user.link;
//         this.refs.body.value = user.body;
//         this.refs.language.value = user.language;
//         this.refs.slink.value = user.slink;
        
//         this.setState({users: user.data});
//       });
//   }
// }

async componentDidMount() {
  const { match: { params } } = this.props;
  const question = (await axios.get(`http://localhost:8000/api/project/${params.pk}`)).data;
  console.log(question)
  this.setState({
    question,
  });
}



  

  // handleCreate(){
  //   customersService.createCustomer(
  //     {
  //       "first_name": this.refs.firstName.value,
  //       "last_name": this.refs.lastName.value,
  //       "email": this.refs.email.value,
  //       "phone": this.refs.phone.value,
  //       "address": this.refs.address.value,
  //       "description": this.refs.description.value
  //   }          
  //   ).then((result)=>{
  //     alert("Thanks For Contact with us. We will contact with us!!");
  //   }).catch(()=>{
  //     alert('There was an error! Please re-check your form.');
  //   });
  // }
  // handleUpdate(pk){
  //   customersService.updateCustomer(
  //     {
  //       "pk": pk,
  //       'title' : this.refs.title.value,
  //       'description':this.refs.description.value,
  //       'image':this.refs.image.value,
  //       'link':this.refs.link.value,
  //       'slink':this.refs.slink.value,
  //       'body':this.refs.body.value,
  //       'language':this.refs.language.value,
  //   }          
  //   ).then((result)=>{
  //     console.log(result);
  //     alert("Customer updated!");
  //   }).catch(()=>{
  //     alert('There was an error! Please re-check your form.');
  //   });
  // }
  // handleSubmit(event) {
  //   const { match: { params } } = this.props;

  //   if(params && params.pk){
  //     this.handleUpdate(params.pk);
  //   }
  //   else
  //   {
  //     this.handleCreate();
  //   }

  //   event.preventDefault();
  // }

  

  render() {
 
    const {question} = this.state;
    if (question === null) return <p>Loading ...</p>;

    return (
    

 


<div id="fact1p d">



<div className="container d"  >
  <div className="row">
    <div className="col-md-5">
    <img className="card-img-top image" src={question.image} alt=""  />
    <button className="btn btn-success btb text-white"> <Link to={question.link} className="text-white"> <i className="fa fa-eye" />  Project Demo </Link> </button>
    <button className="btn btn-dark btb"><a href={`question.github`} className="text-white"><i className="fa fa-github" />  Download Link </a> </button>
   
    </div>
    <div className="col-md-7">
      <h1 className="name text-white">{question.title}</h1>
      <p className="star text-white" >Publish Date: {question.date}
       <span className="lol"><i className="fa fa-eye text-white" ></i></span>
       <span >  Read time: {question.readtime} </span></p>
       <h2 className="body" >{question.body}</h2>
       <h5 className="star text-white m" >{question.description}</h5>
       <h6 className="m" style={{ color:'rgba(137, 255, 162, 0.78)', fontWeight: 'bolder' }} >Author : <span className="star text-white">{question.by}</span></h6>
       <h6 className="m" style={{ color:'rgba(137, 255, 162, 0.78)', fontWeight: 'bolder' }} >Language : <span className="star text-white">{question.language}</span></h6>
    </div>
  <div>
  </div>
</div>
</div>


<h2 className="text-center " style={{ color:'white'}}  >Reviews And Like </h2><hr style= {{ borderColor:'rgba(137, 255, 162, 0.78)'}} />
<div id="fact1">
<div className="row">
<div className="col-md-12">
<div class="fb-like" data-href={window.location.href} data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div><br></br>
</div>

</div>

<div className="row">
<div className="col-md-12">
<div class="fb-comments" data-href={window.location.href} data-width="100%" data-numposts="5"></div>
</div>

</div>
</div>

</div>








    );
  }  
}
export default ProjectDeatil;