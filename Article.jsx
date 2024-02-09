import React from 'react'
import './Article.css'
import pie from './pie.jpg'
function Article ({title,paragraphe,image}) {
  return (
    <div className='tous'>
         <div className="main">
         <img src={pie} alt=''></img>
         <h1> {title}</h1>
         <p>{paragraphe}</p>
         <button className='btn'>read the article</button>

         </div> 


    </div>
  )
}

export default Article
