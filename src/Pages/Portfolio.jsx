
import AmeliImage from '../assets/img/portfolio/ameli.png';
import RasEcomImage from '../assets/img/portfolio/ras.png';
import trustBhaiImage from '../assets/img/portfolio/trustBhai.png';

const Portfolio = () => {
    return (
   
            <>
                
                <section id="portfolio" className="portfolio section">
                    <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="container">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Card</li>
                        <li data-filter=".filter-branding">Web</li>
                        </ul>
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Product 1</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Branding 1</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Product 2</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Branding 2</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>App 3</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Product 3</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            <h4>Branding 3</h4>
                            <p>Lorem ipsum, dolor sit</p>
                            <a href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

          
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>I have worked with this projects</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        </ul>
                    </div>
                    </div>

                    <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src={AmeliImage} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Multi Store App</h4>
                            <p>e-commerce App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="https://multi-store.manirul.xyz/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                            <a href="https://multi-store.manirul.xyz/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src={RasEcomImage} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Single Vendore App</h4>
                            <p>e-commerce App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="https://ecom.rashi-tech.com/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                            <a href="https://ecom.rashi-tech.com/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                   

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src={trustBhaiImage} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Trust Bhai</h4>
                            <p>e-commerce App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href={trustBhaiImage} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                            <a href="https://trustbhai.com/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/jotno.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Jotno</h4>
                            <p>Doctor Appoinment App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/jotno.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://64.188.4.206"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/social_site.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Music</h4>
                            <p>Music App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/social_site.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://music.manirul.xyz"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/rezume.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Rezume</h4>
                            <p>E-Commerce App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/rezume.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://rezume.manirul.xyz"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/school.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>ABC School</h4>
                            <p>School Management App</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/school.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://school.manirul.xyz"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/pos.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>POS</h4>
                            <p>Meena Bazar</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/pos.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://pos.manirul.xyz"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/laracom.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>E-Commerce</h4>
                            <p>Unique Brothers</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/laracom.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="http://laracom.manirul.xyz"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/next_shopping_cart.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Restaurant App</h4>
                            <p>Next Js</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/next_shopping_cart.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                            <a href="https://next-assignment-4.netlify.app/" target="_blank"  title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/react_blog.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Blog App</h4>
                            <p>React Js</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/react_blog.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                            <a href="https://rctblog.netlify.app/" target="_blank"  title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/nextjs_blog.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Blog App</h4>
                            <p>Next Js</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/nextjs_blog.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                            <a href="https://next-assignment-12.vercel.app/"  target="_blank"  title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/next_blog_bigger.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Blog App</h4>
                            <p>Next Js</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/next_blog_bigger.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                            <a href="https://next-assignment-16.vercel.app/" target="_blank"  title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                        <img src="assets/img/portfolio/login_register_next_14.PNG" className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Login Register</h4>
                            <p>Next Js</p>
                        </div>
                        <div className="portfolio-links">
                            <a href="assets/img/portfolio/login_register_next_14.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                            <a href="https://next-assignment-14-modified.vercel.app/"  target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>
            </section>

   </>
    );
};

export default Portfolio;