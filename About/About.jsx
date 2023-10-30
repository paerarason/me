import React from 'react';
import './About.scss';
import profile from "./dp.png";



export default function About() {
  return (
    <div className='about'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bevan&family=Rubik+Mono+One&display=swap');</style>
       
        <section className="layout">
           <div className="sidebar">
           <h1 className='heading'>Paerarason </h1><p className='para'>     
       
         Alma mater at Madras Institute of Technology,
         I obtained a B.E in Production Engineeing (2022). 
         Eventually did intern at Advertyzement 2023 feb onwards from on now, 
         A Backend Dev capable of manage fastAPI microservices and a bit of Devops in AWS as well.
         after working on the Python's Asynchronous functions, I went crazy about concurreny and multithreading so it eventually lead to Go For 
         few of my hobby projects i code that in golang i loves go's concurreny  
         <br></br> <br></br>
         I believe that<br></br> "  You con't understand everything. but, 
you should push yourself to understand 
the system  "
       </p></div>
           <div className="body">
            <img  className="dp" src={profile} alt="Profile" width="300"> 
            </img>
           </div>
      </section>
              
    </div>
  )
}
