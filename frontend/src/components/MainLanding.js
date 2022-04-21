import React from 'react';
import { Carousel } from 'react-bootstrap';
import LandingTopic from './LandingTopic';
import SigInButton from './SigInButton';

const MainLanding = () => {
    const style ={
        backgroundColor: 'rgb(0,0,0,0.7)',
        borderRadius: 11
    }
    return (
        <>
            <Carousel >
                
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/58c3159303596e9dc416c0f3/1495250379214-GA5Z76C4VX2H72A8BF9O/Consultorio-03.png"
                        alt="Second slide"
                    />
                    
                    <Carousel.Caption style={style}>
                        <h3 >Experts</h3>
                        <h5 >Conocimiento a tu alcance</h5>
                        <SigInButton/>
                    </Carousel.Caption>

                    </Carousel.Item>
                    
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://la.ultradent.blog/hubfs/Para-que-la-seguridad-sea-una-prioridad-al-re-abrir-el-consultorio-1.png"
                        alt="Third slide"
                    />
                     <Carousel.Caption style={style}>
                        <h3>Experts</h3>
                        <h5>Conocimiento a tu alcance</h5>
                        <SigInButton/>
                    </Carousel.Caption>

                    
                </Carousel.Item>
            </Carousel>
            <LandingTopic/>
        </>
    )
}

export default MainLanding

