import React from 'react'
import ToolLog from './ToolLog'
import "./tools.scss"


const Tools = () => {
  const logos =[
    {
        id:1,
        imagen:"https://us.123rf.com/450wm/innayatsuk/innayatsuk2102/innayatsuk210200051/165304530-orange-3d-html5-icon-isolated-on-white-background-.jpg?ver=6"
    },
    {
        id:2,
        imagen:"https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png"
    },
    {
      id:3,
      imagen:"https://conectasoftware.com/wp-content/uploads/2020/03/JS.jpg"
  },
  {
    id:4,
    imagen:"https://iconape.com/wp-content/png_logo_vector/git-icon.png"
},
{
  id:5,
  imagen:"https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"
},
{
  id:6,
  imagen:"https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800"
},
{
  id:7,
  imagen:"https://i.pinimg.com/originals/be/d3/0d/bed30ddfa5d434e827c775ac9a3b0d38.jpg"
},
{
  id:8,
  imagen:"https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png"
},


]
return (
  <div className='tools'>
    {
      logos.map((logo,index)=>(
        <ToolLog key={index} imagen={logo.imagen}/>
      ))
    }
    
  </div>
  
)
}



export default Tools