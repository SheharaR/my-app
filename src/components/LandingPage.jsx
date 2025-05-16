import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './LandingPage.css'; // You'll need to create this CSS file with the styles from the HTML

const LandingPage = () => {
  const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="container header-container">
          <div className="logo">
            {/* Logo Section */}
            <a href="#"><img src={require('../assets/logo.png')} alt="Lithu Fashions Logo" style={{ width: '70px',height:'70px', }} /></a>
            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#products">New Arrivals</a></li>
                <li><a href="#join-us">Join Us</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/login" className="login-btn">Login</a></li>
            </ul>

            <div className="mobile-menu" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            </div>
            </header>

            {/* Hero Section */}
      <section className="hero" >
        {/* REPLACE WITH HERO IMAGE: High quality fashion photoshoot, 1920x1080px minimum resolution 
            Should show premium fashion items and models wearing Lithu designs 
            Dark overlay is already applied via CSS, so use a bright, high-contrast image */}
        <div className="container">
          <div className="hero-content">
            <h1>Elevate Your Style With Lithu Fashions</h1>
            <p>Discover our exclusive collection of premium clothing and accessories designed for the modern fashion enthusiast.</p>
            <a href="#products" className="btn">Explore New Arrivals</a>
          </div>
        </div>
      </section>
      
      {/* Trending Products */}
      <section id="products" className="trending-products">
        <div className="container">
          <div className="section-title">
            <h2>New Arrivals</h2>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-img-container">
                {/* REPLACE WITH PRODUCT IMAGE: 500x600px, clear product shot on white/neutral background */}
                <img className="product-img" src={require('../assets/Product2.jpg')} alt="Product Name" />
                <div className="product-badge">New</div>
              </div>
              <div className="product-info">
                <h3>Premium Silk Dress</h3>
                <div className="product-price">
                  <div>
                    <span className="old-price">$199.99</span>
                    <span className="price">$149.99</span>
                  </div>
                  <a href="#" className="btn">Add to Cart</a>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-img-container">
                {/* REPLACE WITH PRODUCT IMAGE: 500x600px, clear product shot on white/neutral background */}
                                <img className="product-img" src={require('../assets/Product1.png')} alt="Product Name" />
                                <div className="product-badge">Sale</div>
                              </div>
                              <div className="product-info">
                                <h3>Designer Blazer</h3>
                                <div className="product-price">
                                  <div>
                                    <span className="old-price">$249.99</span>
                                    <span className="price">$199.99</span>
                                  </div>
                                  <a href="#" className="btn">Add to Cart</a>
                                </div>
                              </div>
                            </div>
                            
                            <div className="product-card">
                              <div className="product-img-container">
                                {/* REPLACE WITH PRODUCT IMAGE: 500x600px, clear product shot on white/neutral background */}
                <img className="product-img" src={require('../assets/Product3.png')} alt="Product Name" />
              </div>
              <div className="product-info">
                <h3>Leather Handbag</h3>
                <div className="product-price">
                  <div>
                    <span className="price">$129.99</span>
                  </div>
                  <a href="#" className="btn">Add to Cart</a>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-img-container">
                {/* REPLACE WITH PRODUCT IMAGE: 500x600px, clear product shot on white/neutral background */}
                <img className="product-img" src={require('../assets/Product4.jpg')} alt="Product Name" />
                <div className="product-badge">New</div>
              </div>
              <div className="product-info">
                <h3>Premium Watch</h3>
                <div className="product-price">
                  <div>
                    <span className="price">$299.99</span>
                  </div>
                  <a href="#" className="btn">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section id="join-us" className="join-us">
        <div className="container">
          <div className="join-us-content">
            <h2>Join the Lithu Family</h2>
            <p>Create an account to enjoy exclusive member benefits, early access to sales, and personalized shopping experiences.</p>
            <a href="/signup" className="signup-btn">Sign Up Now</a>
          </div>
        </div>
      </section>
      
      {/* About Us */}
      <section id="about" className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="about-img">
                      <img src={require('../assets/ourstory.png')} alt="About Lithu Fashions" />
                    </div>
                    <div className="about-text">
                      <h2>Our Story</h2>
                      <p>Lithu Fashions was founded in 2015 with a vision to bring premium quality clothing and accessories to fashion enthusiasts. We believe in sustainable fashion and ethical manufacturing practices.</p>
                      <p>Our team of talented designers works tirelessly to create unique pieces that combine contemporary trends with timeless elegance. Each item in our collection is crafted with attention to detail and commitment to quality.</p>
                      <p>At Lithu Fashions, we're not just selling clothes - we're offering a lifestyle that embodies sophistication, confidence, and individuality.</p>
                      <a href="#" className="btn">Learn More</a>
                    </div>
                    </div>
                  </div>
                  </section>
                  
                  {/* Testimonials */}
      <section className="testimonials" style={{ backgroundImage: `url('/path/to/testimonial-bg.jpg')` }}>
        {/* REPLACE WITH TESTIMONIAL BACKGROUND: Subtle fashion-related image, will be darkened by overlay */}
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testimonial-text">
                "The quality of Lithu Fashions' clothes is exceptional. I've been a loyal customer for years and have always been impressed by their attention to detail and customer service. Their designs are unique and always receive compliments!"
              </div>
              <div className="testimonial-author">Sarah Johnson</div>
              <div className="testimonial-role">Fashion Blogger</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          
          <div className="contact-container">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul className="contact-details">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>123 Fashion Street, City, Country</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+1 234 567 8900</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>info@lithufashions.com</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} />
                  <span>Mon-Fri: 9AM-6PM</span>
                </li>
              </ul>
              
              <div className="social-links" style={{ marginTop: '30px' }}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <h3>Lithu Fashions</h3>
              <p>Premium clothing and accessories for the modern fashion enthusiast.</p>
              <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h3>Shop</h3>
              <ul className="footer-links">
                <li><a href="#products">New Arrivals</a></li>
                <li><a href="#">Women's Collection</a></li>
                <li><a href="#">Men's Collection</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Sale Items</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Customer Service</h3>
              <ul className="footer-links">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Track Order</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-links">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Fashion Street, City, Country</li>
                <li><FontAwesomeIcon icon={faPhone} /> +1 234 567 8900</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> info@lithufashions.com</li>
                <li><FontAwesomeIcon icon={faClock} /> Mon-Fri: 9AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 Lithu Fashions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;