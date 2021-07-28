import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselBanner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 z-20 bg-gradient-to-t from-gray-100 to-transparent bottom-0"></div>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                emulateTouch={true}
                interval={5000}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img
                        loading="lazy"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselBanner;
