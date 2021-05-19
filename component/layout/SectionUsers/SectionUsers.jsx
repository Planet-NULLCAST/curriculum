import React, { Component } from "react";
import Slider from "react-slick";
import styles from './SectionUsers.module.scss';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            variableWidth: true,
            autoplaySpeed: 2200,
            easing: 'linear',
            speed: 2200,
            pauseOnHover: false
          };
        return (
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <div className={styles.border}>
                        <Slider {...settings}>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Allie Grater</a></h4>
                                </div>
                            </div>

                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Paige Turner</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Percy Kewshun</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Allie Grater</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Paige Turner</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Percy Kewshun</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Allie Grater</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Paige Turner</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Percy Kewshun</a></h4>
                                </div>
                            </div>
                            
                            <div>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        <img src="/images/temp/avatar1.png" alt=""/>
                                    </div>
                                    <h4><a href="">Allie Grater</a></h4>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}