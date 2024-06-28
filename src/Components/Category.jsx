import React from 'react'
import './Category.css'
import img1 from '../Assets/Assets23.jpg'
import img2 from "../Assets/Items/img08.jpg"
import img3 from "../Assets/Items/img09.jpg"
import img4 from "../Assets/Items/img10.jpg"
import img5 from "../Assets/Items/img11.jpg"
import img6 from "../Assets/Items/img12.jpg"
import img7 from "../Assets/Items/img13.jpg"
import img8 from "../Assets/Items/img14.jpg"
import img9 from "../Assets/Items/img15.jpg"
import img10 from "../Assets/Items/img16.jpg"
import img11 from "../Assets/Items/img17.jpg"
import img12 from "../Assets/Items/img18.jpg"
import img13 from "../Assets/Items/img19.jpg"
import img14 from "../Assets/Items/img20.jpg"
import img15 from "../Assets/Items/img21.jpg"
import img16 from "../Assets/Items/img22.jpg"
import img17 from "../Assets/Items/img23.jpg"
import img18 from "../Assets/Items/img24.jpg"
import img19 from "../Assets/Items/img25.jpg"
import img20 from "../Assets/Items/img26.jpg"
import img21 from "../Assets/Items/img27.jpg"
import img22 from "../Assets/Items/img28.jpg"
import img23 from "../Assets/Items/img29.jpg"
import img24 from "../Assets/Items/img30.jpg"
import img25 from "../Assets/Items/img31.jpg"
import img26 from "../Assets/Items/img32.jpg"
import img27 from "../Assets/Items/img01.jpg"
import img28 from "../Assets/Items/img02.jpg"
import img29 from "../Assets/Items/img03.jpg"
import img30 from "../Assets/Items/img04.jpg"
import img31 from "../Assets/Items/img05.jpg"
import img32 from "../Assets/Items/img06.jpg"
import img33 from "../Assets/Items/img07.jpg"
// import img34 from "../Assets/Items/img (6).jpeg"
// import img35 from "../Assets/Items/img (7).jpeg"
import img56 from "../Assets/Footerimg/img1.jpg"
import Footer from './Footer'
const Category = () => {
  const products = [
    {src: img2, alt:"img"},
    {src: img3, alt:"img"},
    {src: img4, alt:"img"},
    {src: img5, alt:"img"},
    {src: img6, alt:"img"},
    {src: img7, alt:"img"},
    {src: img8, alt:"img"},
    {src: img9, alt:"img"},
    {src: img10, alt:"img"},
    {src: img11, alt:"img"},
    {src: img12, alt:"img"},
    {src: img13, alt:"img"},
    {src: img14, alt:"img"},
    {src: img15, alt:"img"},
    {src: img16, alt:"img"},
    {src: img17, alt:"img"},
    {src: img18, alt:"img"},
    {src: img19, alt:"img"},
    {src: img20, alt:"img"},
    {src: img21, alt:"img"},
    {src: img22, alt:"img"},
    {src: img23, alt:"img"},
    {src: img24, alt:"img"},
    {src: img25, alt:"img"},
    {src: img26, alt:"img"},
    {src: img27, alt:"img"},
    {src: img28, alt:"img"},
    {src: img29, alt:"img"},
    {src: img30, alt:"img"},
    {src: img31, alt:"img"},
    {src: img32, alt:"img"},
    {src: img33, alt:"img"},
    // {src: img34, alt:"img"},
    // {src: img35, alt:"img"},
  ]
  return (
    <div className='Category'>
        <div className="mainimg">
            <img src={img1} alt="img" />
        </div>
        <div className="items">
          {
            products.map((item, index)=>(
              <img src={item.src} alt={item.alt} style={{width: 290,height:290}}/>
            ))
          }
        </div>
        <div className="footimg">
          <img src={img56} alt="img" />
        </div>
        <Footer/>
    </div>
  )
}

export default Category