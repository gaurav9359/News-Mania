
import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {


  render() {
    
     const {title,description,imageUrl,url,bagde,publishedAt}=this.props;
     const dummy= 'https://picsum.photos/seed/picsum/200/300'
    const lorem_dummy= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit dolor, dicta eligendi, at quaerat asperiores aperiam sit, suscipit molestiae in quisquam placeat dolorem veritatis quod amet id ad voluptatibus? Quos fuga necessitatibus enim consectetur officiis dolorum vero. Officiis aperiam nihil nemo ex, porro nobis obcaecati fugit inventore explicabo eos maiores amet consectetur, iusto, deleniti repudiandae hic tempora dolores reprehenderit illo officia! Rerum, unde error perspiciatis voluptatibus nulla labore, doloribus a earum aperiam fugiat non? Cumque, aliquam optio. Sequi sed perspiciatis autem dignissimos accusamus odit accusantium ea natus iure? Ipsum pariatur architecto quam nam, impedit eos esse obcaecati rerum iusto!...'
    return (
        <div className="card" >
          
        <img src={imageUrl!==null?imageUrl:dummy} className="card-img-top" style={{height:250 }} alt="..."/>
        <div className="card-body">
        <span className="badge rounded-pill text-bg-danger mb-2">{bagde}</span>
        <a className='desc' href={url} target="_blank" rel="noreferrer" style={{color:'yellow'}}> <h5 className=" card-title">{title.length>60?title.slice(0,80)+'...':title}</h5></a>
        <p className="card-text"><small className="text-muted"><strong> {(new Date(publishedAt)).toUTCString()}</strong></small></p>
         <p className="card-text">{description!==null?description.length>100?description.slice(0,100)+'...':description:lorem_dummy.slice(0,100)+'...'}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
    
  }
}

NewsItem.defaultProps={
  title:"NO Title",
  description:"No Description Found",
  imageUrl:"../../public/imgnotloaded.png",
  url:"/"
}