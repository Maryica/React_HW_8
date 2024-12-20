import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles.css";
import slider from "../img/slider.png";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
        <>
            <Header />
            <div className="breadcrumbs center">
                <h2 className="breadcrumbs__heading">NEW ARRIVALS</h2>
                <nav>
                    <ul className="breadcrumbs__nav">
                        <li className="breadcrumbs__list">
                            <Link className="breadcrumb__link" href="index.html">
                                HOME
                            </Link>
                        </li>
                        <li className="breadcrumbs__list">
                            <Link className="breadcrumb__link" href="#">
                                MEN
                            </Link>
                        </li>
                        <li className="breadcrumbs__list">
                            <Link className="breadcrumb__link" href="#">
                                NEW ARRIVALS
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="slider">
                <a href="/#" className="slider__arrow slider__arrow_left">

                </a>
                <img className="slider_img" src={slider} alt="slider photo" />
                <a href="/#" className="slider__arrow slider__arrow_right">

                </a>
            </div>
            <div className="center">
                <section className="content">
                    <h3 className="content__heading">WOMEN COLLECTION</h3>
                    <div className="content__line"></div>
                    <h2 className="content__h2">MOSCHINO CHEAP AND CHIC</h2>
                    <p className="content__text">
                        Compellingly actualize fully researched processes before proactive
                        outsourcing. Progressively syndicate collaborative architectures
                        before cutting-edge services. Completely visualize parallel core
                        competencies rather than exceptional portals.
                    </p>
                    <div className="content__price">$561</div>
                    <div className="content__hr"></div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;