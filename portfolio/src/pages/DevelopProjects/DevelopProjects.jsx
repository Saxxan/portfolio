import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { SectionPageDark } from '../../components/sectionPage/SectionPage';
import DevProjectCard from './components/DevProjectCard';

export default function DevelopProjects() {
    return (
        <SectionPageDark>
            <SectionTitle title='Development projects'></SectionTitle>
            <Swiper>
                <SwiperSlide>
                    <DevProjectCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <DevProjectCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <DevProjectCard/>
                </SwiperSlide>
            </Swiper>
        </SectionPageDark>
    );
}