import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./SectionUsers.module.scss";
import Link from "next/link";
import Image from "next/image";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      variableWidth: true,
      autoplaySpeed: 2200,
      easing: "linear",
      speed: 2200,
      pauseOnHover: false
    };
    return (
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.border}>
            <Slider {...settings}>
              {this.props.user.map((item, key) => (
                <div key={key}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Image
                        className="rounded-full"
                        src={item.avatar || `/images/dummy${key % 4}.png`}
                        alt="user"
                        height="70rem"
                        width="70rem"
                      />
                    </div>
                    <h4 className={styles.min_w_10rem}>
                      <Link href={`/u/${item.user_name}`}>
                        <a>{item.user_name}</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
