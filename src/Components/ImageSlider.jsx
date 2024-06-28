import React from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import Category from './Category.jsx';
import img1 from '../Assets/SLiderImg/img (2).png'
import img2 from '../Assets/SLiderImg/img (1).jpeg'
import img3 from '../Assets/SLiderImg/img (3).jpeg'
import img4 from '../Assets/SLiderImg/img (4).jpeg'
import img5 from '../Assets/SLiderImg/img (5).jpeg'
import img6 from '../Assets/SLiderImg/img (6).jpeg'
import img7 from '../Assets/SLiderImg/img (7).jpeg'
import img8 from '../Assets/SLiderImg/img (8).jpeg'
import img9 from '../Assets/SLiderImg/img (9).jpeg'
import img10 from '../Assets/SLiderImg/img (10).jpeg'
import img11 from '../Assets/SLiderImg/img (11).jpeg'
import img12 from '../Assets/SLiderImg/img (12).jpeg'
import img13 from '../Assets/SLiderImg/img (13).jpeg'
import img14 from '../Assets/SLiderImg/img (14).jpeg'
import img15 from '../Assets/SLiderImg/img (15).jpeg'
import img16 from '../Assets/SLiderImg/img (16).jpeg'
import img17 from '../Assets/SLiderImg/img (17).jpeg'
import img18 from '../Assets/SLiderImg/img (18).jpeg'
import img19 from '../Assets/SLiderImg/img (19).jpeg'
import img20 from '../Assets/SLiderImg/img (20).jpeg'
import img21 from '../Assets/SLiderImg/img (21).jpeg'
import img26 from "../Assets/SLiderImg/img (26).jpeg"
import img27 from "../Assets/SLiderImg/img (27).jpeg"
import img28 from "../Assets/SLiderImg/img (28).jpeg"
import img29 from "../Assets/SLiderImg/img (29).jpeg"
import img30 from "../Assets/SLiderImg/img (30).jpeg"
import img31 from "../Assets/SLiderImg/img (31).jpeg"
import img32 from "../Assets/SLiderImg/img (32).jpeg"
import img33 from "../Assets/SLiderImg/img (33).jpeg"
import img22 from "../Assets/SLiderImg/img (22).jpeg"
import img23 from "../Assets/SLiderImg/img (23).jpeg"
import img24 from "../Assets/SLiderImg/img (24).jpeg"
import img25 from "../Assets/SLiderImg/img (25).jpeg"

// const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-next" onClick={onClick}>
//             <i className="fa fa-chevron-right" />
//         </div>
//     );
// };

// const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <div className="slick-prev" onClick={onClick}>
//             <i className="fa fa-chevron-left" />
//         </div>
//     );
// };

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    const images = [
        { src: img1, alt: "img1" },
        { src: img2, alt: "img2" },
        { src: img3, alt: "img3" },
        { src: img4, alt: "img4" },
        { src: img5, alt: "img5" },
        { src: img6, alt: "img6" },
        { src: img7, alt: "img7" },
        { src: img8, alt: "img8" },
        { src: img9, alt: "img9" },
        { src: img10, alt: "img10" },
        { src: img11, alt: "img11" },
        { src: img12, alt: "img12" },
        { src: img13, alt: "img13" },
        { src: img14, alt: "img14" },
        { src: img15, alt: "img15" },
        { src: img16, alt: "img16" },
        { src: img17, alt: "img17" },
        { src: img18, alt: "img18" },
        { src: img19, alt: "img19" },
        { src: img20, alt: "img20" },
        { src: img21, alt: "img21" },
        { src: img22, alt: "img22" },
        { src: img23, alt: "img23" },
        { src: img24, alt: "img24" },
        { src: img25, alt: "img25" },
        { src: img26, alt: "img26" },
        { src: img27, alt: "img27" },
        { src: img28, alt: "img28" },
        { src: img29, alt: "img29" },
        { src: img30, alt: "img30" },
        { src: img31, alt: "img31" },
        { src: img32, alt: "img32" },
        { src: img33, alt: "img33" },
    ];

    return (
        <div className="ImageSlider">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index}>
                        <img src={item.src} alt={item.alt} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
            <Category />
        </div>
    );
};

export default ImageSlider;
