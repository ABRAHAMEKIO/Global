import React from 'react'
import "../assets/css/shortcodes.css"
import '../assets/css/responsive.css'
function Explore() {
  return (
    <div><>
    {/* preloade */}
    <div className="preload preload-container">
      <div className="preload-logo" />
    </div>
    {/* /preload */}
    <div id="wrapper" className="wrapper-style">
      <div id="page" className="clearfix">
        {/* title page */}
        <section className="tf-page-title">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumbs">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="explore.html">Explore</a>
                  </li>
                  <li>Explore Left Bar</li>
                </ul>
                <h4 className="page-title-heading">Explore Left Bar</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="tf-explore-sidebar">
          <div className="tf-container">
            <div className="row ">
              <div className="col-md-3 ">
                <div className="sidebar sidebar-explore ">
                  <div className="widget widget-search">
                    <h6 className="widget-title">Search</h6>
                    <form action="#">
                      <input type="text" placeholder="Search NFT" required="" />
                      <a className="btn-search">
                        <i className="icon-fl-search-filled" />
                      </a>
                    </form>
                  </div>
                  <div className="widget widget-status widget-accordion">
                    <h6 className="widget-title">Status</h6>
                    <div className="widget-content">
                      <form action="#" className="form-checkbox">
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Buy Now</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>On Auctions</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Has Offers</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="widget widget-category widget-accordion">
                    <h6 className="widget-title">Categories</h6>
                    <div className="widget-content">
                      <form action="#" className="form-checkbox">
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Art</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Music</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Domain Names</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Virtual Worlds</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Trading Cards</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Collectibles</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Sports</span>
                        </label>
                        <label className="checkbox-item">
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="btn-checkbox" />
                          </span>
                          <span>Utility</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="widget widget-price">
                    <h6 className="widget-title">Price</h6>
                    <img
                      src="assets/images/svg/range-price-dark.svg"
                      alt="Image"
                      id="img-range-price"
                    />
                    <div id="slider-range" />
                    <div className="slider-labels">
                      <span id="slider-range-value1" />
                      <span id="slider-range-value2" />
                    </div>
                  </div>
                  <div className="widget widget-chain">
                    <h6 className="widget-title">Chains</h6>
                    <div id="chains" className="dropdown">
                      <a href="#" className="btn-selector nolink ">
                        <span className="icon">
                          <i className="fab fa-ethereum" />
                        </span>
                        Ethereum (ETH)
                      </a>
                      <ul>
                        <li>
                          <span className="icon">
                            <i className="fab fa-ethereum" />
                          </span>
                          <span>Ethereum (ETH)</span>
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              width={6}
                              height={12}
                              viewBox="0 0 6 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.60123 12V10.9476C1.79959 10.8474 1.16564 10.5285 0.699386 9.99089C0.233129 9.4533 0 8.76993 0 7.94077H1.07975C1.07975 8.42369 1.20654 8.85649 1.46012 9.23918C1.72188 9.61276 2.10225 9.85421 2.60123 9.96355V6.25968C2.54397 6.24146 2.48262 6.22323 2.41718 6.20501C2.35992 6.17768 2.30266 6.1549 2.2454 6.13667C1.58282 5.88155 1.09202 5.5672 0.773006 5.19362C0.453988 4.81093 0.294478 4.31435 0.294478 3.70387C0.286298 2.99317 0.486708 2.40091 0.895705 1.92711C1.31288 1.4533 1.88139 1.17995 2.60123 1.10706V0H3.44785V1.10706C4.13497 1.19818 4.68303 1.48519 5.09202 1.96811C5.50102 2.45102 5.70961 3.03872 5.71779 3.73121H4.63804C4.63804 3.39408 4.53988 3.07061 4.34356 2.76082C4.14724 2.44191 3.84867 2.22779 3.44785 2.11845V5.42597C3.51329 5.44419 3.57873 5.46697 3.64417 5.49431C3.70961 5.52164 3.77914 5.54442 3.85276 5.56264C4.26176 5.72665 4.62986 5.91799 4.95705 6.13667C5.28425 6.35535 5.53783 6.63781 5.71779 6.98405C5.90593 7.3303 6 7.77221 6 8.30979C6 8.73804 5.90593 9.14351 5.71779 9.5262C5.52965 9.90888 5.24335 10.2323 4.8589 10.4966C4.48262 10.7608 4.01227 10.9157 3.44785 10.9613V12H2.60123ZM1.36196 3.59453C1.36196 4.01367 1.47239 4.33257 1.69325 4.55125C1.91411 4.76082 2.21677 4.94305 2.60123 5.09795V2.09112C2.23313 2.1549 1.93456 2.31891 1.70552 2.58314C1.47648 2.83827 1.36196 3.1754 1.36196 3.59453ZM4.93251 8.37813C4.93251 7.84966 4.79346 7.45786 4.51534 7.20273C4.23722 6.94761 3.88139 6.73804 3.44785 6.57403V9.99089C3.92229 9.92711 4.2863 9.74487 4.53988 9.44419C4.80164 9.14351 4.93251 8.78815 4.93251 8.37813Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>United States Dollar (USD)</span>
                        </li>
                        <li>
                          <span className="icon">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.80699 3.99719H1.29199L3.19324 2.10156H10.7082L8.80699 3.99719Z"
                                fill="white"
                              />
                              <path
                                d="M8.80699 9.89859H1.29199L3.19324 8.00391H10.7082"
                                fill="white"
                              />
                              <path
                                d="M3.19324 6.94836H10.7082L8.80699 5.05273H1.29199"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>Solana (SOL)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 ">
                <div className="top-option">
                  <div className="left-option">Showing 1–9 of 144 results</div>
                  <div className="right-option">
                    <div id="sigle-item" className="dropdown">
                      <a href="#" className="btn-selector nolink ">
                        Single Items
                      </a>
                      <ul>
                        <li>
                          <span>All Items</span>
                        </li>
                        <li>
                          <span>Bundles</span>
                        </li>
                      </ul>
                    </div>
                    <div id="item_category" className="dropdown">
                      <a href="#" className="btn-selector nolink ">
                        Recently Created
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
                    <ul className="option-view">
                      <li>
                        <a href="#" className="btn-grid active">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.59811 0H2.40189C1.07801 0 0 1.07855 0 2.40188V5.59906C0 6.93083 1.07801 8 2.40189 8H5.59811C6.93144 8 8 6.93083 8 5.59906V2.40188C8 1.07855 6.93144 0 5.59811 0Z"
                              fill="white"
                            />
                            <path
                              d="M5.59811 10H2.40189C1.07801 10 0 11.0785 0 12.4019V15.5991C0 16.9308 1.07801 18 2.40189 18H5.59811C6.93144 18 8 16.9308 8 15.5991V12.4019C8 11.0785 6.93144 10 5.59811 10Z"
                              fill="white"
                            />
                            <path
                              d="M15.5981 0H12.4019C11.0686 0 10 1.07855 10 2.40188V5.59906C10 6.93083 11.0686 8 12.4019 8H15.5981C16.922 8 18 6.93083 18 5.59906V2.40188C18 1.07855 16.922 0 15.5981 0Z"
                              fill="white"
                            />
                            <path
                              d="M15.5981 10H12.4019C11.0686 10 10 11.0701 10 12.4019V15.5991C10 16.9215 11.0686 18 12.4019 18H15.5981C16.922 18 18 16.9215 18 15.5991V12.4019C18 11.0701 16.922 10 15.5981 10Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn-list">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.49882 0H1.50118C0.673759 0 0 0.674092 0 1.50117V3.49941C0 4.33177 0.673759 5 1.50118 5H3.49882C4.33215 5 5 4.33177 5 3.49941V1.50117C5 0.674092 4.33215 0 3.49882 0Z"
                              fill="white"
                            />
                            <path
                              d="M3.49882 6.5H1.50118C0.673759 6.5 0 7.17409 0 8.00117V9.99941C0 10.8318 0.673759 11.5 1.50118 11.5H3.49882C4.33215 11.5 5 10.8318 5 9.99941V8.00117C5 7.17409 4.33215 6.5 3.49882 6.5Z"
                              fill="white"
                            />
                            <path
                              d="M3.49882 13H1.50118C0.673759 13 0 13.6741 0 14.5012V16.4994C0 17.3318 0.673759 18 1.50118 18H3.49882C4.33215 18 5 17.3318 5 16.4994V14.5012C5 13.6741 4.33215 13 3.49882 13Z"
                              fill="white"
                            />
                            <path
                              d="M9.99979 0H8.00216C7.16883 0 6.50098 0.674091 6.50098 1.50117V3.49941C6.50098 4.33177 7.16883 5 8.00216 5H9.99979C10.8272 5 11.501 4.33177 11.501 3.49941V1.50117C11.501 0.674091 10.8272 0 9.99979 0Z"
                              fill="white"
                            />
                            <path
                              d="M9.99979 6.49805H8.00216C7.16883 6.49805 6.50098 7.17214 6.50098 7.99922V9.99746C6.50098 10.8298 7.16883 11.498 8.00216 11.498H9.99979C10.8272 11.498 11.501 10.8298 11.501 9.99746V7.99922C11.501 7.17214 10.8272 6.49805 9.99979 6.49805Z"
                              fill="white"
                            />
                            <path
                              d="M9.99979 13H8.00216C7.16883 13 6.50098 13.6741 6.50098 14.5012V16.4994C6.50098 17.3318 7.16883 18 8.00216 18H9.99979C10.8272 18 11.501 17.3318 11.501 16.4994V14.5012C11.501 13.6741 10.8272 13 9.99979 13Z"
                              fill="white"
                            />
                            <path
                              d="M16.4988 0H14.5012C13.6678 0 13 0.674091 13 1.50117V3.49941C13 4.33177 13.6678 5 14.5012 5H16.4988C17.3262 5 18 4.33177 18 3.49941V1.50117C18 0.674091 17.3262 0 16.4988 0Z"
                              fill="white"
                            />
                            <path
                              d="M16.4988 6.5H14.5012C13.6678 6.5 13 7.17409 13 8.00117V9.99941C13 10.8318 13.6678 11.5 14.5012 11.5H16.4988C17.3262 11.5 18 10.8318 18 9.99941V8.00117C18 7.17409 17.3262 6.5 16.4988 6.5Z"
                              fill="white"
                            />
                            <path
                              d="M16.4988 13H14.5012C13.6678 13 13 13.6741 13 14.5012V16.4994C13 17.3318 13.6678 18 14.5012 18H16.4988C17.3262 18 18 17.3318 18 16.4994V14.5012C18 13.6741 17.3262 13 16.4988 13Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tf-explore-sidebar-wrap">
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        BitFox #4912
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
                              src="assets/images/author/author31.png"
                              alt="images"
                            />
                          </div>
                          <div className="content">
                            <div className="position">Creator</div>
                            <div className="name">
                              {" "}
                              <a href="#">Cynthia Burke</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product13.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        EVOLs #6905
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
                              <a href="#">Astrid Swanson</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product4.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        RareGuys #7209
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
                              <a href="#">Sirena May</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product5.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        Liberator Ape #21280
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
                              <a href="#">Maxwell Currey</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product9.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        VapePUNKS #96
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
                              <a href="#">Vere Waters</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product10.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                  <div className="sc-product style2">
                    <div className="top">
                      <a href="item-details.html" className="tag">
                        WormyArmy #8148
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
                              <a href="#">Zoe Parks</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img
                          src="assets/images/product/product11.jpg"
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
                          <img src="assets/images/icon/ethe.svg" alt="images" />
                        </div>
                        <div className="content">
                          <div className="name">ETH</div>
                          <div className="cash">0.0041</div>
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
                <div className="btn-loadmore ">
                  <a href="#" className="tf-button loadmore">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              Enter quantity. <span className="color-popup">5 availabel</span>
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

export default Explore