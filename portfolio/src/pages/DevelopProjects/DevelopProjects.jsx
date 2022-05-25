import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { SectionPageDark } from '../../components/sectionPage/SectionPage';

export default function DevelopProjects() {
    return (
        <SectionPageDark>
            <SectionTitle title='Development projects'></SectionTitle>
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
        </SectionPageDark>
    );
}