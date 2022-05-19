import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './aboutMe.css';

export default function AboutMe() {
    return (
        <article className='about'>
            <Swiper slidesPerView={1}>
                <SwiperSlide className='aboutSlide about__home'>
                    <h1>Home</h1>
                </SwiperSlide>
                <SwiperSlide className='aboutSlide about__about'>
                    <h1>About</h1>
                </SwiperSlide>
                <SwiperSlide className='aboutSlide about__skills'>
                    <h1>Skills</h1>
                </SwiperSlide>
            </Swiper>
        </article>
    );
}