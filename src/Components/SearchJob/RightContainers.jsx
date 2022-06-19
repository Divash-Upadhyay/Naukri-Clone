import React from "react";
import styles from "./RightContainers.module.css";

export const RightContainers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companyContainer}>
        <p className={styles.adTitle}>See 120 jobs in Featured</p>
        <p className={styles.adTitle}>Companies</p>

        <div className={styles.adContainer}>
          <div className={styles.individualAdCont}>
            <div>
              <img src={1} alt="ad1" />
            </div>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/4498568.gif"
                alt="ad2"
              />
            </div>
          </div>
          <div className={styles.individualAdCont}>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/3211.gif"
                alt="ad1"
              />
            </div>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/3211.gif"
                alt="ad2"
              />
            </div>
          </div>
          <div className={styles.individualAdCont}>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/731247.gif"
                alt="ad1"
              />
            </div>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/89123.gif"
                alt="ad2"
              />
            </div>
          </div>
          <div className={styles.individualAdCont}>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/16987.gif"
                alt="ad1"
              />
            </div>
            <div>
              <img
                src="https://img.naukimg.com/fc_images/v2/27117.gif"
                alt="ad2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
