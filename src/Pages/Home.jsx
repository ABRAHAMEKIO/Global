import React from 'react'
import "../assets/css/shortcodes.css"
import '../assets/css/responsive.css'
function Home() {
  return (
    <div> 
    <>
  {/* preloade */}
  <div className="preload preload-container">
    <div className="preload-logo" />
  </div>
  {/* /preload */}
  <div id="wrapper" className="wrapper-style">
    <div id="page" className="clearfix">
      <section className="tf-slider">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="swiper-container slider-home home1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-slider-item">
                        <div className="content-inner">
                          <h1 className='heading'>
                          Discover a new wo<span>rld</span> where music meets <span>in</span>novation
                            <img
                              src="assets/images/slider/bg-slider.png"
                              alt="Image"
                            />
                          </h1>
                          <h1 className="sub-heading">
                          Discover a new way to experience music with Global – the decentralized platform where music, art, and blockchain unite. Whether you're an artist or a fan, Global lets you create, buy, and sell music NFTs while earning real rewards for your engagement.
                          </h1>
                          <div className="btn-slider">
                            <a
                              href="/Explore"
                              className="tf-button style-2"
                            >
                              Explore now
                            </a>
                            <a
                              href="/create"
                              className="tf-button style-3"
                            >
                              Create
                            </a>
                          </div>
                        </div>
                        <div className="image">
                          <div className="img-slider-main ani5">
                            <img
                              src="assets/images/slider/slider-0.jpg"
                              alt="Image"
                            />
                          </div>
                          {/* <img
                            src="assets/images/slider/slider-2.png"
                            alt="Image"
                            className="img-slider-2 ani4"
                          /> */}
                          {/* <img
                            src="assets/images/slider/slider-3.png"
                            alt="Image"
                            className="img-slider-3 ani5"
                          /> */}
                          <div className="">
                            {/* <div className="title"></div>
                            <div className="price"></div> */}
                          </div>
                          {/* <div className="card-infor ani5">
                            <img
                              src="assets/images/slider/slider-4.png"
                              alt="Image"
                            />
                            <div className="inner ">
                              <h6 className="name"></h6>
                              <p className="author"></p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-category">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb40 wow fadeInUp">
                <h4 className="heading">All Categories</h4>
              </div>
            </div>
            <div className="col-md-12 wow fadeInUp">
              <div className="swiper-container product-category ">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-1.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Digital art</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-2.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Style</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-3.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Music</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-4.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Sport</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-1.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Digital art</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="tf-product-category">
                        <img
                          src="assets/images/product-category/product-category-2.jpg"
                          alt="Image"
                        />
                        <div className="category">
                          <a href="#">Style</a>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                </div>
              </div>
              <div className="swiper-button-next button-product-category-next" />
              <div className="swiper-button-prev button-product-category-prev" />
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-live-auction visible-sw">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb40 wow fadeInUp">
                <h4 className="heading">Live Auctions</h4>
                <a className="button" href="live-auction.html">
                  Explore
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-md-12 wow fadeInUp">
              <div className="swiper-container live-auction visible">
                <div className="swiper-wrapper ">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            Giulia Glur #32
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product1.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author1.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Magnus Perry</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            Giulia Glur #32
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product27.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author14.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Frederick Dixon</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            Archetype #588
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product28.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author15.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Theo Watts</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            3DPunks #070
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product29.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author16.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Neville Gutierrez</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            Angelic Nyan Cat
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product31.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author17.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Frederick Dixon</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-product style1">
                        <div className="top">
                          <a href="item-details.html" className="tag">
                            Sweet Baby #1
                          </a>
                          <div className="wish-list">
                            <a href="#" className="heart-icon" />
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src="assets/images/product/product30.jpg"
                              alt="images"
                            />
                          </div>
                          <div className="featured-countdown">
                            <span
                              className="js-countdown"
                              data-timer={55555}
                              data-labels=" ,  h , m , s "
                            />
                          </div>
                          <div className="rain-drop1">
                            <img
                              src="assets/images/icon/rain1.svg"
                              alt="images"
                            />
                          </div>
                          <div className="rain-drop2">
                            <img
                              src="assets/images/icon/rain2.svg"
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src="assets/images/author/author1.png"
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">Creator</div>
                                <div className="name">
                                  {" "}
                                  <a href="#">Stephan Neal</a>
                                </div>
                              </div>
                            </div>
                            <div className="current-bid">
                              <div className="subtitle"></div>
                              <div className="price">
                                <span className="cash">5 ETH</span>
                                <span className="icon">
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              className="tf-button"
                            >
                              {" "}
                              <span className="icon-btn-product" /> Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item*/}
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-live-auction" />
              <div className="swiper-button-next button-live-auction-next" />
              <div className="swiper-button-prev button-live-auction-prev" />
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-create-and-sell">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading style-2 mb40 wow fadeInUp">
                <h4 className="heading">Create And Sell NFTs</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tf-create wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon">
                  <img src="assets/images/svg/icon-create-1.svg" alt="Image" />
                </div>
                <h6 className="title">
                  <a href="#"> Set up your wallet</a>
                </h6>
                <p className="content">
                  Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                  Accusantium Doloremque
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tf-create wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon">
                  <img src="assets/images/svg/icon-create-2.svg" alt="Image" />
                </div>
                <h6 className="title">
                  <a href="#">Create Your collection</a>{" "}
                </h6>
                <p className="content">
                  Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                  Accusantium Doloremque
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tf-create wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon">
                  <img src="assets/images/svg/icon-create-3.svg" alt="Image" />
                </div>
                <h6 className="title">
                  <a href="#">Add Your NFTs</a>{" "}
                </h6>
                <p className="content">
                  Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                  Accusantium Doloremque
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tf-create wow fadeInUp" data-wow-delay="0.8s">
                <div className="icon">
                  <img src="assets/images/svg/icon-create-4.svg" alt="Image" />
                </div>
                <h6 className="title">
                  <a href="#"> List them for sale</a>
                </h6>
                <p className="content">
                  Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
                  Accusantium Doloremque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-hot-pick tf-filter">
        <div className="tf-container">
          <div className="row ">
            <div className="col-md-12">
              <div className="tf-heading mb23 wow fadeInUp">
                <h4 className="heading">Hot Picks</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="top-menu wow fadeInUp">
                <ul className="filter-menu">
                  <li className="active">
                    <a href="#" data-filter=".3d">
                      HIP HOP
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".anime">
                    RAP
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".cyber">
                    JAZZ
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".pixel">
                    R&B
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".music">
                    AFROBEATS
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".abstract">
                    AMAPIANO
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".2d">
                    MUSIC
                    </a>
                  </li>
                </ul>
                <div id="item_category" className="dropdown">
                  <a href="#" className="btn-selector nolink ">
                    Recently Create
                  </a>
                  <ul>
                    <li>
                      <span>Recently Listed</span>
                    </li>
                    <li className="active">
                      <span>Recently Created</span>
                    </li>
                    <li>
                      <span>Recently Sold</span>
                    </li>
                    <li>
                      <span>Recently Received</span>
                    </li>
                    <li>
                      <span>Recently Soon</span>
                    </li>
                    <li>
                      <span>Recently Low to Hight</span>
                    </li>
                    <li>
                      <span>Recently Last Sale</span>
                    </li>
                    <li>
                      <span>Oldest</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row tf-filter-container wow fadeInUp">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author1.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Frank Stevens</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product2.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name">ETH</div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d pixel">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author14.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Buck Morrison</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product32.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name">ETH</div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d music">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author15.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Henrietta Collins</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product33.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d 2d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author16.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Samantha Keller</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product34.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d anime">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Cool Cat 3D #2538
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author17.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Theodore Woods</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product35.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d abstract">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author18.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Lionel Romero</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product36.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d abstract">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                   Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author19.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Bryant Carpenter</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product37.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d 2d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                  Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author20.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Bailey Quinn</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product38.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore anime 3d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                   Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author21.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Roy Marshman</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product39.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore cyber 3d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author22.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Polly Graves</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product40.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore pixel 3d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                   Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author23.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Kenn Bailey</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product41.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore music 3d">
              <div className="sc-product style2">
                <div className="top">
                  <a href="item-details.html" className="tag">
                    Global
                  </a>
                  <div className="wish-list">
                    <a href="#" className="heart-icon" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
                      <div className="avatar">
                        <img
                          src="assets/images/author/author24.png"
                          alt="images"
                        />
                      </div>
                      <div className="content">
                        <div className="position">Creator</div>
                        <div className="name">
                          {" "}
                          <a href="#">Sophia Sandoval</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product42.jpg"
                      alt="images"
                    />
                  </div>
                  <div className="rain-drop1">
                    <img src="assets/images/icon/rain1.svg" alt="images" />
                  </div>
                  <div className="rain-drop2">
                    <img src="assets/images/icon/rain2.svg" alt="images" />
                  </div>
                </div>
                <div className="bottom-style2">
                  <div className="price">
                    <div className="icon">
                      <img src="assets/icon/preload.png" alt="images" />
                    </div>
                    <div className="content">
                      <div className="name"></div>
                      <div className="cash">4.53</div>
                    </div>
                  </div>
                  <div className="product-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="btn-loadmore mt17 wow fadeInUp">
              <a
                href="explore-grid.html"
                className="tf-button loadmore style-4"
              >
                Load more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-collection">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb30 wow fadeInUp">
                <h4 className="heading">Popular Collection</h4>
                <a className="button style-2" href="collection.html">
                  Explore
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="collection-carousel wow fadeInUp">
                <div className="swiper-container product-category-1 pt10">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <h1>COMING SOON</h1>
                          </a>
                          
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <div className="thumb-collection">
                              <div className="left-thumb">
                                <img
                                  src="assets/images/collection/collection4.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="right-thumb">
                                <div className="top-cl">
                                  <img
                                    src="assets/images/collection/collection5.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="bottom-cl">
                                  <img
                                    src="assets/images/collection/collection6.jpg"
                                    alt="images"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="tf-author">
                            <div className="image">
                              <img
                                src="assets/images/author/author-cl.png"
                                alt="Image"
                              />
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                                  fill="#48BC65"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <a href="#" className="name">
                                Cassandra
                              </a>
                            </div>
                            <div className="details-item">26 Items</div>
                          </div>
                          <div className="top">
                            <div className="content">
                              <div className="details">
                                <span>
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>{" "}
                                <a href="#">33.2 w</a>{" "}
                              </div>
                              <div className="price">$ 92,025</div>
                            </div>
                            <div className="wish-list">
                              <a href="#" className="heart-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <div className="thumb-collection">
                              <div className="left-thumb">
                                <img
                                  src="assets/images/collection/collection7.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="right-thumb">
                                <div className="top-cl">
                                  <img
                                    src="assets/images/collection/collection8.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="bottom-cl">
                                  <img
                                    src="assets/images/collection/collection9.jpg"
                                    alt="images"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="tf-author">
                            <div className="image">
                              <img
                                src="assets/images/author/author-cl.png"
                                alt="Image"
                              />
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                                  fill="#48BC65"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <a href="#" className="name">
                                Quinn Herrera
                              </a>
                            </div>
                            <div className="details-item">26 Items</div>
                          </div>
                          <div className="top">
                            <div className="content">
                              <div className="details">
                                <span>
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>{" "}
                                <a href="#">33.2 w</a>{" "}
                              </div>
                              <div className="price">$ 92,025</div>
                            </div>
                            <div className="wish-list">
                              <a href="#" className="heart-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <div className="thumb-collection">
                              <div className="left-thumb">
                                <img
                                  src="assets/images/collection/collection10.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="right-thumb">
                                <div className="top-cl">
                                  <img
                                    src="assets/images/collection/collection11.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="bottom-cl">
                                  <img
                                    src="assets/images/collection/collection12.jpg"
                                    alt="images"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="tf-author">
                            <div className="image">
                              <img
                                src="assets/images/author/author-cl.png"
                                alt="Image"
                              />
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                                  fill="#48BC65"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <a href="#" className="name">
                                Humbert Watts
                              </a>
                            </div>
                            <div className="details-item">26 Items</div>
                          </div>
                          <div className="top">
                            <div className="content">
                              <div className="details">
                                <span>
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>{" "}
                                <a href="#">33.2 w</a>{" "}
                              </div>
                              <div className="price">$ 92,025</div>
                            </div>
                            <div className="wish-list">
                              <a href="#" className="heart-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <div className="thumb-collection">
                              <div className="left-thumb">
                                <img
                                  src="assets/images/collection/collection1.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="right-thumb">
                                <div className="top-cl">
                                  <img
                                    src="assets/images/collection/collection2.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="bottom-cl">
                                  <img
                                    src="assets/images/collection/collection3.jpg"
                                    alt="images"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="tf-author">
                            <div className="image">
                              <img
                                src="assets/images/author/author-cl.png"
                                alt="Image"
                              />
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                                  fill="#48BC65"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <a href="#" className="name">
                                Moonbirds
                              </a>
                            </div>
                            <div className="details-item">26 Items</div>
                          </div>
                          <div className="top">
                            <div className="content">
                              <div className="details">
                                <span>
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>{" "}
                                <a href="#">33.2 w</a>{" "}
                              </div>
                              <div className="price">$ 92,025</div>
                            </div>
                            <div className="wish-list">
                              <a href="#" className="heart-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                    <div className="swiper-slide">
                      <div className="slider-item">
                        <div className="sc-product style1 collection">
                          <a href="#">
                            <div className="thumb-collection">
                              <div className="left-thumb">
                                <img
                                  src="assets/images/collection/collection10.jpg"
                                  alt="images"
                                />
                              </div>
                              <div className="right-thumb">
                                <div className="top-cl">
                                  <img
                                    src="assets/images/collection/collection11.jpg"
                                    alt="images"
                                  />
                                </div>
                                <div className="bottom-cl">
                                  <img
                                    src="assets/images/collection/collection12.jpg"
                                    alt="images"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="tf-author">
                            <div className="image">
                              <img
                                src="assets/images/author/author-cl.png"
                                alt="Image"
                              />
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                                  fill="#48BC65"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div className="content">
                              <a href="#" className="name">
                                Humbert Watts
                              </a>
                            </div>
                            <div className="details-item">26 Items</div>
                          </div>
                          <div className="top">
                            <div className="content">
                              <div className="details">
                                <span>
                                  <img
                                    src="assets/icon/preload.png"
                                    alt="images"
                                  />
                                </span>{" "}
                                <a href="#">33.2 wETH</a>{" "}
                              </div>
                              <div className="price">$ 92,025</div>
                            </div>
                            <div className="wish-list">
                              <a href="#" className="heart-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* item*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-top-seller wow fadeInUp">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-heading mb40 ">
                <h4 className="heading">Top Artists</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon active">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#11</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tf-author">
                <div className="image">
                  <img src="assets/images/author/preload.png" alt="Image" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94987 0.242313C5.88929 -0.127324 6.99031 0.916511 7.99984 0.916511C9.00936 0.916511 10.1104 -0.127329 11.0498 0.242306C11.1437 0.27926 11.2368 0.317871 11.329 0.358101C12.2539 0.761615 12.295 2.27725 13.0085 2.9908C13.7221 3.70438 15.2378 3.74531 15.6414 4.67026C15.6817 4.76261 15.7204 4.85583 15.7574 4.94989C16.127 5.8893 15.0832 6.99032 15.0832 7.99984C15.0832 9.00937 16.127 10.1104 15.7574 11.0498C15.7205 11.1436 15.6819 11.2366 15.6417 11.3287C15.2382 12.2538 13.7222 12.2947 13.0085 13.0083C12.2949 13.722 12.254 15.2381 11.3289 15.6416C11.2368 15.6818 11.1437 15.7204 11.0498 15.7574C10.1104 16.127 9.00938 15.0832 7.99986 15.0832C6.99033 15.0832 5.88932 16.127 4.9499 15.7574C4.85599 15.7204 4.76292 15.6818 4.67071 15.6416C3.7457 15.2381 3.70478 13.7221 2.99117 13.0085C2.27755 12.2949 0.761626 12.254 0.358081 11.329C0.317858 11.2368 0.279254 11.1437 0.242306 11.0498C-0.127328 10.1104 0.916511 9.00936 0.916511 7.99984C0.916511 6.99032 -0.127325 5.8893 0.242311 4.94988C0.279288 4.8559 0.317923 4.76276 0.35818 4.67049C0.761743 3.74551 2.27757 3.70458 2.99117 2.99098C3.70475 2.2774 3.74573 0.76162 4.6707 0.358091C4.7629 0.317867 4.85597 0.279262 4.94987 0.242313Z"
                      fill="#48BC65"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0095 5.6464C12.11 5.74017 12.1665 5.86733 12.1665 5.99991C12.1665 6.1325 12.11 6.25966 12.0095 6.35343L7.71997 10.3536C7.61942 10.4473 7.48306 10.5 7.34088 10.5C7.1987 10.5 7.06234 10.4473 6.96179 10.3536L4.81702 8.35351C4.71935 8.25921 4.6653 8.1329 4.66652 8.0018C4.66775 7.8707 4.72414 7.74528 4.82355 7.65258C4.92297 7.55987 5.05745 7.50728 5.19804 7.50614C5.33863 7.505 5.47407 7.5554 5.5752 7.64648L7.34088 9.29305L11.2513 5.6464C11.3519 5.55266 11.4882 5.5 11.6304 5.5C11.7726 5.5 11.909 5.55266 12.0095 5.6464Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="content">
                  <div className="title">
                    <a href="#">coming soon</a>
                    <span className="icon">
                      <i className="far fa-plus" />
                    </span>
                  </div>
                  <div className="price">
                    <span className="price-eth"></span>
                    <span>#12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-explore tf-filter">
        <div className="tf-container">
          <div className="row ">
            <div className="col-md-12">
              <div className="tf-heading style-2 wow fadeInUp">
                <h4 className="heading">Explore</h4>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="filter-menu style-2 wow fadeInUp">
                <li className="active">
                  <a href="#" data-filter=".3d">
                    HIP HOP
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".anime">
                    RAP
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".cyber">
                    JAZZ
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".pixel">
                    R&B
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".music">
                    AFROBEATS
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".abstract">
                    AMAPIANO
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".2d">
                    MUSIC{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row tf-filter-container wow fadeInUp">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product3.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d pixel">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product44.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d music">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product45.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d 2d">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product46.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d abstract">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product48.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d abstract">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product49.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#">@ZoePeay</a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d anime">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product50.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d anime">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product47.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#">@Sidney Hall</a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore anime ">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product3.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore cyber ">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product45.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore pixel ">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product47.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore music ">
              <div className="sc-product style3">
                <div className="features">
                  <div className="product-media">
                    <img
                      src="assets/images/product/product49.jpg"
                      alt="images"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="details-product">
                    <div className="title">
                      {" "}
                      <a href="item-details.html"></a>{" "}
                    </div>
                    <div className="creator">
                      {" "}
                      <a href="#"></a>{" "}
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtitle"></div>
                    <div className="cash">Coming soon</div>
                  </div>
                  <div className="profile-author">
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Jordan"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd14.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Daniel Rose"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd15.png"
                        alt="images"
                      />
                    </a>
                    <a
                      href="#"
                      className="avatar"
                      data-tooltip="Creator: Solvador"
                      tabIndex={0}
                    >
                      <img
                        src="assets/images/author/authorpd16.png"
                        alt="images"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="btn-loadmore mt8 wow fadeInUp">
              <a
                href="explore-grid.html"
                className="tf-button loadmore style-4"
              >
                Load more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* Bottom */}
    </div>
    {/* /#page */}
  </div>
  {/* /#wrapper */}
  <div
    className="modal fade popup"
    id="popup_bid"
    tabIndex={-1}
    aria-modal="true"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body space-y-20 pd-40">
          <h3>Place a Bid</h3>
          <p className="text-center sub-heading">
            You must bid a least{" "}
            <span className="price color-popup">4.89 ETH</span>
          </p>
          <input type="text" className="form-control" placeholder="00.00 ETH" />
          <p className="label-1">
            Enter quantity. <span className="color-popup">5 available</span>
          </p>
          <input
            type="text"
            className="form-control quantity form-bottom"
            defaultValue={1}
          />
          <div className="d-flex justify-content-between detail-1">
            <p> You must bid at least:</p>
            <p className="text-right price color-popup"> 4.89 ETH </p>
          </div>
          <div className="d-flex justify-content-between detail-2">
            <p> Service free:</p>
            <p className="text-right price color-popup"> 0,89 ETH </p>
          </div>
          <div className="d-flex justify-content-between detail-3">
            <p> Total bid amount:</p>
            <p className="text-right price color-popup"> 4 ETH </p>
          </div>
          <a
            href="#"
            className="button-popup"
            data-toggle="modal"
            data-target="#popup_bid_success"
            data-dismiss="modal"
            aria-label="Close"
          >
            {" "}
            Place bid
          </a>
        </div>
      </div>
    </div>
  </div>
  <a id="scroll-top" />
 
</>

</div>
  )
}

export default Home