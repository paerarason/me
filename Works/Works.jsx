import React from 'react'
import './Works.scss'

export default function Works() {
  return (
    
    <div className='work'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Teko&display=swap');
      </style>

       <h1 className='head'>Projects</h1>
       <ul>
       <li className='project-list'>
          <h1 className='project-head'>Event Registration API</h1>
          <p className='project-para'>
            We use inline CSS to set the width to 100% and
           allow the height to adjust automatically, maintaining the image's aspect ratio. 
          You can adjust the width and height styles to fit your design.
          <a  className="code"href='https://github.com/paerarason/Event1'>Code.</a>
          </p>

        </li>
        <li className='project-list'>
          <h1 className='project-head'>Implement Heap Datastructure with contrains</h1>
          <p className='project-para'>The heap must satisfy the heap property.
Every parent node in the heap must have 2^x children.
          <a  className="code" href='https://github.com/paerarason/Event1'>link</a>
          </p>
        </li>       
        <li className='project-list'>
          <h1 className='project-head'>Event Registration API</h1>
          <p className='project-para'>
            Constructs the various flavors (in svg format) that an icon can exist in from it's different variants and moves these resulting flavors to a destination folder. It also generates a config file, one for each icon and stores it along with the icon it's in output folder.We use inline CSS to set the width to 100% and
           allow the height to adjust automatically, maintaining the image's aspect ratio. 
          You can adjust the width and height styles to fit your design.
          <a className="code" href='https://github.com/paerarason/Event1'>link</a>
          </p>
        </li>


       </ul>
    </div>
  )
}
