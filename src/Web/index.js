import React, { Component } from 'react';

class Home extends Component{
  render(){
    return(
<div class="container index">
      <div class="container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="http://placehold.it/600x300 " alt="First slide"  />
              <div class="centered">
                 <h1 class="text-dark text-center animated fadeInRight delay-1s h " >I'M Rahul Raj</h1>
                  <h2 class="text-dark text-center animated fadeInLeft delay-1s h1">Full Stack Web Developer</h2>
                  <h2 class="text-dark text-center animated fadeInLeft delay-1s h1"  >Data Scientist</h2>
                  <center>
                  <button class="btn btn-success btn-large text-center animated fadeInLeft delay-4s " id="button" > <a href=" " class="text-center hw" target="_blank" >
                    <i class="fa fa-arrow-down animated fadeInLeft delay-5s hi"></i>Hire Me</a></button></center>
              </div>
          </div>
         
      </div>
      </div>
</div>


{/* <!--About Part--> */}
 <div class="col-sm-12 " >

    <section id="factt"  class="wow fadeIn">
        <div class="container">
          <div class="clearfix">
          <div className="row">

          <div class="text-center animated fadeInRight delay-3s col-sm-4 ">
              <img src=" http://placehold.it/300x300" alt="Fjords" />
            </div>

          <div class="col-sm-8 ">
                <h5 class="header text-center animated fadeInUp delay-1s header" id="header" >About Me</h5>
                <h3 class="header text-center animated fadeInUp delay-2s"  >Who Am I ?</h3><hr></hr>
                

                <p id="p" class="animated fadeInLeft delay-4s">Hi I'm <strong> Rahul Raj</strong>, Computer science Student with a demonstrated history of working on Computer Software.
                    Skilled in Web Development, Android, Java,Spring, JavaScript, MySQL,Nest Js and PHP, Python,Django and
                    passionate about to learn Data Science and Machine Learning. Strong support professional with a
                    Bachelor of Science in Computer Science from<strong> Spoleczna Akademia Nauk </strong></p>
                    {/* <p id="p" class="animated fadeInLeft delay-4s">{{ post.detail|safe }} </p> */}
            
              </div>
         </div>
         
        </div>
        </div>
    </section>
    </div>

    {/* <!--End About Part--> */}


  

   {/* <!--End Counter  Part--> */}
<br></br>
<div class="col-sm-12 " >

<section id="fact11"  class="wow fadeIn">
    <div class="container">
      <div class="clearfix">
      

    <div class="row">
        <br/>
      <div class="col text-center">
      <h5 class="header text-center animated fadeInUp delay-1s header" id="header" >Hire Me</h5>
      <h3 class="header text-center animated fadeInUp delay-2s "  >Hire Me ?</h3><hr></hr>
    </div>
		
             
		
	</div>
		<div class="row text-center">
	        <div class="col">
	        <div class="counter ">
      <i class="fa fa-code fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="100" data-speed="1500"> </h2>
       <p class="count-text ">Our Customer</p>
    </div>
	        </div>
              <div class="col">
               <div class="counter ">
      <i className="fa fa-coffee fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"> </h2>
      <p className="count-text ">Happy Clients</p>
    </div>
              </div>
              <div class="col">
                  <div class="counter ">
      <i className="fa fa-lightbulb-o fa-2x"></i>
      <h2 className=" timer count-title count-number"  data-to="11900" data-speed="1500"> </h2>
      <p class="count-text ">Project Complete</p>
    </div></div>
              <div class="col">
              <div class="counter ">
      <i class="fa fa-bug fa-2x"></i>
      <h2 class=" timer count-title count-number" data-to="157" data-speed="1500"> </h2>
      <p class="count-text ">Coffee With Clients</p>
    </div>
              </div>
         </div>
         <br></br>
         <div className="lol">
    <button class="btn btn-success btn-large text-center animated fadeInLeft delay-4s " id="button" > <a href=" " class="text-center hww"  target="_blank" >
    <i class="fa fa-download animated fadeInLeft delay-5s"></i>Download Cv</a></button>
    </div>

      

    </div>
    </div>
</section>
</div>
<br></br>

{/* <!--Education Part--> */}
    <div class="col-sm-12 " >

    <section id="fact1"  class="wow fadeIn">
        

 
             <div class="col-sm-12 " >
                <h5 class="header text-center" id="header"  >EDUCATION</h5>
                <h3 class="header text-center"  >My Education Details ?</h3>
                <hr class="text-center col-sm-4" />
        <div class="accordion" id="accordionExample" >

        
        <div class="card" >
          <div class="card-header" id="headingOne"  >
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                BACHELORE STUDY
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" >
            <div class="card-body" >
             <div class="row">
                <div class="col-md-8">
                    <h2><strong>Spoleczna Akademia Nauk</strong> </h2>
                      <h3><strong>Major: Computer Science</strong></h3>
                </div>
                <div class="col-md-4">
                      <p>Warsaw, Poland</p>
                      <p><strong>10/2016 to Present</strong></p>
                </div>

                  <div class="col-md-4">
                    <p><strong>GPA: 4.6/5 </strong></p>
                 </div>
             </div>
            </div>
          </div>
        </div>


        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                HIGH SCHOOL
              </button>
            </h5>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
             <div class="row">
                <div class="col-md-6">
                    <h2 ><strong> Vivekanand Public School</strong> </h2>
                      <h3><strong>Major : Science</strong></h3>
                </div>
                <div class="col-md-6">
                    <p>Nawada(Bihar), India</p>
                      <p><strong>2012 to 2014</strong></p>
                </div>

                  <div class="col-md-6">
                    <p><strong>CGPA: 8.4/10</strong></p>
                </div>
            </div>
            </div>
          </div>
</div>


        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ONLINE STUDIES
              </button>
            </h5>
          </div>

          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h3><strong> EDX </strong></h3>
                            <ul><strong>
                                <li>Python For Data Science</li>
                                <li> Data Science Machine learning</li>
                                <li> Introduction to Python for data Science</li>
                            </strong>
                            </ul>
                    </div>
                    <div class="col-md-6">
                        <h3><strong> Internet </strong></h3>
                            <ul><strong>
                                <li> Java(Spring, Boot)</li>
                                <li> Python Django</li>
                                <li> Data Science(Pandas, Numpy, Sklearn, Tensorflow,Keras)</li>
                                <li> Data Visualization (Matplotlib, Seaborn, Plotly)</li>
                                <li>MySQL,PostgreSQL,SQL</li>

                            </strong>
                            </ul>
                    </div>
            </div>
          </div>
        </div>
        </div>


      </div>

    </div>
    </section>
    </div>


         {/* <!--Education Part End--> */}


  <footer class="page-footer font-small unique-color-dark bg-dark"  >


    <div class="footer-copyright text-center py-3 bg-primary text-white animated fadeInUp delay-5s">© <span id="date"></span> Copyright:<a href="# " class='text-white'> rajrahul.pl</a>
    </div>

  </footer>

  <script>
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y;

</script>

</div>


    )
  }
}

export default Home;