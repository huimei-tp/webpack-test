import React from 'react';
import photo0 from '../../public/written_notes/0.png';
import photo1 from '../../public/written_notes/1.png';
import photo2 from '../../public/written_notes/2.png';
import photo3 from '../../public/written_notes/3.png';
import photo4 from '../../public/written_notes/4.png';
import photo5 from '../../public/written_notes/5.png';
import photo6 from '../../public/written_notes/6.png';
import photo7 from '../../public/written_notes/7.png';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'; // Make sure to import the CSS for the slideshow

const images = [
    photo0,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
];

export default function Slideshow() {
    return (
        <div>
            <Slide easing="ease">
                {images.map((slide, index) => {
                    return (
                        <div key={index} className="each-slide">
                            <div style={{
                                backgroundImage: `url(${slide})`,
                                height: '400px', 
                                backgroundSize: 'contain', 
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                
                            </div>
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
}