import React, { useState } from "react";

import styles from "./ProjectCard.module.css";
import { BloodDonationImages } from "../assets/images";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PortalWithState } from "react-portal";

type Props = {
  title: string;
  images: string[];
};

const ProjectCard = (props: Props) => {
  const { title, images } = props;

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <React.Fragment>
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <div className={styles.card}>
            <Carousel
              autoPlay
              showArrows
              showIndicators={false}
              showThumbs={false}
              stopOnHover
              dynamicHeight={false}
              className={styles.carousel}
              infiniteLoop
              onClickItem={(e) => {
                setCurrentImage(e);
              }}
            >
              {images.map((image, i) => (
                <div key={i} onClick={openPortal}>
                  <img src={image} />
                </div>
              ))}
            </Carousel>
            <div className={styles["title-container"]}>
              <p>{title}</p>
            </div>
            {portal(
              <>
                <div className={styles.backdrop}>
                  <h1 onClick={closePortal}>X</h1>
                  <Carousel
                    autoPlay
                    showArrows
                    showIndicators={false}
                    showThumbs={false}
                    stopOnHover
                    className={styles["carousel-backdrop"]}
                    infiniteLoop
                    selectedItem={currentImage}
                  >
                    {images.map((image, i) => (
                      <div key={i}>
                        <img src={image} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </>
            )}
          </div>
        )}
      </PortalWithState>
    </React.Fragment>
  );
};

export default ProjectCard;
