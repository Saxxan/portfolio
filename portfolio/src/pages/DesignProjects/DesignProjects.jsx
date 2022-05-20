import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './DesignProjects.css';

export default function DesignProjects() {
    return (
        <article className="design">
            <SectionTitle title='Design projects'></SectionTitle>
            <Swiper>
                <SwiperSlide>
                    <h3>project 1</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>project 2</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>project 3</h3>
                </SwiperSlide>
            </Swiper>
        </article>
    );
}