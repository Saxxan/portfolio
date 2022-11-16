import { Swiper, SwiperSlide } from 'swiper/react';
import CTA from '../../components/CTA/CTA';
import 'swiper/css';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import './aboutMe.css';
import styled from 'styled-components';


const AboutPageLayout = styled.article`
    height: 100vh;
    color: var(--font-white);
`

export default function AboutMe() {
    return (
        <AboutPageLayout>
            <Swiper slidesPerView={1} modules={[Pagination]} pagination={{boolean:true, clickable:true}}>
                <SwiperSlide className='aboutSlide about__home'>
                    <section className='about__home__section'>
                        <h1 className='about__home__section__title'>SALVADOR PUCHE IBÁÑEZ</h1>
                        <section className='about__home__section__subtitle'>
                            <h2>FRONT-END DEVELOPER</h2>
                            <h2>UX/UI DESIGNER</h2>
                            <CTA display='block' name='Contact' />
                        </section>
                    </section>
                    <section className='about__home__section'>
                        <img src='./landing-page.webp' alt='Landing page' />
                    </section>
                </SwiperSlide>
                <SwiperSlide className='aboutSlide about__about'>
                    <p className='about__about__text'>Hi, I’m Salvador Puche Ibáñez, a front-end developer based in Valencia and interested in working remotely. A resume about me would be: Animal and travel lover. Overall, I consider myself a calm person with a sober taste. I am ceaslessly eager to assume design and front-end challenges, though.</p>
                    <hr className='about__about__line' />
                    <p className='about__about__text'>I work to help people and companies to create accessible and innovative web sites and get users feel comfortable, easy and intuitive navigating these sites.</p>
                </SwiperSlide>
                <SwiperSlide className='aboutSlide about__skills'>
                    <section className='about__skills__block'>
                        <h3>Software skills</h3>
                        <ul>
                            <li>Semantic HTML</li>
                            <li>Responsive CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git</li>
                            <li>C++</li>
                            <li>Linux</li>
                        </ul>
                    </section>
                    <section className='about__skills__block'>
                        <h3>Design skills</h3>
                        <ul>
                            <li>Figma</li>
                            <li>Animation</li>
                            <li>Responsive design</li>
                        </ul>
                    </section>
                    <section className='about__skills__block'>
                        <h3>Social skills</h3>
                        <ul>
                            <li>Cooperative</li>
                            <li>Proactive</li>
                            <li>Empathic</li>
                        </ul>
                    </section>
                </SwiperSlide>
            </Swiper>
        </AboutPageLayout>
    );
}