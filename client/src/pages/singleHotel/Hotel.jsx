import "./hotel.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useState } from "react";

const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1556710808-a2bc27a448f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  console.log(photos.length);

  const handleArrow = (action) => {
    setSlide(
      action === "dec"
        ? slide === 0
          ? photos.length - 1
          : slide - 1
        : slide === photos.length - 1
        ? 0
        : slide + 1
    );
  };

  return (
    <div className="SingleHotel">
      <Navbar />
      <Header hidden={false} />
      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <FontAwesomeIcon
              className="CloseSlider"
              onClick={() => setOpenSlider(false)}
              icon={faCircleXmark}
            />
            <FontAwesomeIcon
              onClick={() => handleArrow("dec")}
              className="arrow"
              icon={faCircleArrowLeft}
            />
            <div className="sliderWrapper">
              <img src={photos[slide].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              onClick={() => handleArrow("inc")}
              className="arrow"
              icon={faCircleArrowRight}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                style={{cursor:"pointer"}}
                  onClick={() => {
                    setSlide(i);
                    setOpenSlider(!openSlider);
                  }}
                  className="hotelImg"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Situated in Tanjong Tokong and only 1.1 km from Tanjung Tokong
                Beach, Seaview Holiday Home, by Sanguine features accommodation
                with sea views, free WiFi and free private parking. It is
                located less than 1 km from Straits Quay and offers a lift.
                Boasting family rooms, this property also provides guests with a
                children's playground. Situated in Tanjong Tokong and only 1.1
                km from Tanjung Tokong Beach, Seaview Holiday Home, by Sanguine
                features accommodation with sea views, free WiFi and free
                private parking. It is located less than 1 km from Straits Quay
                and offers a lift. Boasting family rooms, this property also
                provides guests with a children's playground.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in real heart of Krakow, this property has an excellent
                location score of 9.5!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
