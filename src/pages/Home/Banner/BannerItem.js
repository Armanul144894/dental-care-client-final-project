import React from 'react';
import img1 from "../../../assets/icons/clock.svg";
import img2 from "../../../assets/icons/marker.svg";
import img3 from "../../../assets/icons/phone.svg";
import BannerDetails from './BannerDetails';

const BannerItem = () => {
    const bannerItems = [
        {
          id: 1,
          title: "Opening Hours",
          description: "Lorem Ipsum is simply dummy text of the pri",
          image: img1,
          color: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
        },
        {
          id: 2,
          title: "Visit our location",
          description: "Brooklyn, NY 10036, United States",
          image: img2,
          color: "#3A4256",
        },
        {
          id: 3,
          title: "Contact us now",
          description: "+000 123 456789",
          image: img3,
          color: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
        },
      ];
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 align-middle mt-10 lg:mt-[-150px] ">
        {bannerItems.map((bannerItem) => (
          <BannerDetails key={bannerItem.id} bannerItem={bannerItem} />
        ))}
      </div>
        </div>
    );
};

export default BannerItem;