import {BookButton} from "../BookButton/BookButton";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import "./Network.scss";

export const Network = () => (
    <div className="network">
        <div className="network_text-section">
            <div className="network_label">
                <SectionTitle> Network </SectionTitle>
            </div>

            <h2 className="network_headings">
                Our Network,
                <br className="network_headings-devider"/> Is Your Network
            </h2>

            <p className="network_text">
                Our network Community Bluprint™ is proven, the data is undeniable.
                When you provide founders with the tools to succeed, a dedicated
                growth team, and the largest sold-out network in the industry, success
                follows. What are you waiting for?
            </p>

            <BookButton/>
        </div>

        <div className="network_carousel">
            {carouselPhotoArr.map((src, index) => (
                <div key={index} className="network_carousel-item">
                    <img src={src} alt={`carousel-${index}`}/>
                </div>
            ))}
        </div>
    </div>
);


const carouselPhotoArr = [
    '../network_carousel/property1.png',
    '../network_carousel/property2.png',
    '../network_carousel/property3.png',
    '../network_carousel/property4.png',
    '../network_carousel/property5.png',
    '../network_carousel/property6.png',
    '../network_carousel/property7.png',
    '../network_carousel/property8.png',
    '../network_carousel/property9.png',
];
