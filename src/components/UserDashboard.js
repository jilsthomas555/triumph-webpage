// // src/components/UserDashboard.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './UserDashboard.css';

// const UserDashboard = () => {
//     return (
//         <div className="dashboard-container">
//             {/* Hero Section */}
//             <section className="hero-section">
//                 <h1>Welcome to Triumph Motorcycles</h1>
//                 <p>Explore our featured content, latest updates, and more!</p>
//             </section>

//             {/* Featured Carousel */}
//             <section className="carousel-section">
//                 <Carousel
//                     autoPlay
//                     infiniteLoop
//                     interval={3000}
//                     showThumbs={false}
//                     showStatus={false}
//                 >
//                     <div>
//                         <img src="https://w0.peakpx.com/wallpaper/204/70/HD-wallpaper-triumph-rocket-3-tfc-lights-sport-motorcycle-vehicle.jpg" alt="Featured 1" /> {/* Use images from public folder */}
//                         <p className="legend">Professional Growth</p>
//                     </div>
//                     <div>
//                         <img src="https://wallpapercave.com/wp/wp7290073.jpg" alt="Featured 2" />
//                         <p className="legend">Innovative Solutions</p>
//                     </div>
//                     <div>
//                         <img src="https://img2.wallspic.com/crops/0/1/3/3/2/123310/123310-triumph_motorcycles_ltd-automotive_lighting-helmet-car-red-2560x1600.jpg" alt="Featured 3" />
//                         <p className="legend">Latest News</p>
//                     </div>
//                 </Carousel>
//             </section>

//             {/* Information Section */}
//             <section className="info-section">
//                 <motion.div
//                     className="info-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <img src="https://wallpapercave.com/wp/otQ0gT1.jpg" alt="Data Insights" />
//                     <h3>Speed Triple 1200 RS</h3>
//                     <p>The most powerful, highest torque and fastest accelerating Speed Triple ever, with 1160cc triple engine.</p>
//                 </motion.div>
//                 <motion.div
//                     className="info-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <img src="https://img.freepik.com/premium-vector/latvia-man-motorbike-road-riding-having-fun-driving-empty-road-motorcycle-tour_1050166-7898.jpg?semt=ais_hybrid" alt="Performance" />
//                     <h3>Triumph Daytona 675R </h3>
//                     <p>Track your progress and achieve new milestones.</p>
//                 </motion.div>
//                 <motion.div
//                     className="info-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <img src="https://th.bing.com/th/id/OIP.Fh1KWK6Vdyjz2bb89rb3agHaEK?rs=1&pid=ImgDetMain" alt="New Updates" />
//                     <h3>Bonneville Bobber</h3>
//                     <p>Critically acclaimed 1200cc High Torque twin engine with Bobber tune, now even more responsive and Euro 5 compliant.</p>
//                 </motion.div>
//             </section>

//             {/* Footer */}
//             <footer className="footer">
//                 <div className="footer-content">
//                     <div className="footer-section">
//                         <h4>About Us</h4>
//                         <p>Your professional brand partner for growth and insights.  
//                             The page is designed and developed by 
//                             Mr.Jils Thomas</p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Contact</h4>
//                         <p>Email: contact@jilsthomas.com</p>
//                         <p>Phone: +123 456 7890</p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Social Media</h4>
//                         <p>Facebook | Twitter | LinkedIn</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default UserDashboard;






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './UserDashboard.css';
import triumphLogo from '../assets/images/triumphlogo.jpg'; // Ensure this image is in the correct path

const UserDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="dashboard-container">
            {/* Sidebar Overlay */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-content">
                    <img src={triumphLogo} alt="Triumph Logo" className="triumph-logo" />
                    <h2 className="navbar-title">TRIUMPH MOTORCYCLES</h2>
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <ul className={`nav-links ${sidebarOpen ? "active" : ""}`}>
                        <li><a href="#home" onClick={closeSidebar}>HOME</a></li>
                        <li><a href="#models" onClick={closeSidebar}>MODELS</a></li>
                        <li><a href="#history" onClick={closeSidebar}>OUR HISTORY</a></li>
                        <li><a href="#contact" onClick={closeSidebar}>CONTACT US</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="hero-overlay">
                    <h1>Welcome to Triumph Motorcycles</h1>
                    <p>Discover performance, legacy, and innovation.</p>
                </div>
            </section>

            {/* Add gap here */}
            <div style={{ margin: "40px 0" }}></div>

            {/* Featured Carousel */}
            <section className="carousel-section">
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight
                >
                    <div>
                        <img src="https://w0.peakpx.com/wallpaper/204/70/HD-wallpaper-triumph-rocket-3-tfc-lights-sport-motorcycle-vehicle.jpg" alt="Professional Growth" />
                        <p className="legend">Professional Growth</p>
                    </div>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp7290073.jpg" alt="Innovative Solutions" />
                        <p className="legend">Innovative Solutions</p>
                    </div>
                    <div>
                        <img src="https://img2.wallspic.com/crops/0/1/3/3/2/123310/123310-triumph_motorcycles_ltd-automotive_lighting-helmet-car-red-2560x1600.jpg" alt="Latest News" />
                        <p className="legend">Latest News</p>
                    </div>
                </Carousel>
            </section>

            {/* Information Section */}
            <section className="info-section" id="models">
                <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
                    <img src="https://wallpapercave.com/wp/otQ0gT1.jpg" alt="Speed Triple 1200 RS" />
                    <h3>Speed Triple 1200 RS</h3>
                    <p>The most powerful Speed Triple ever with 1160cc engine.</p>
                </motion.div>
                <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
                    <img src="https://img.freepik.com/premium-vector/latvia-man-motorbike-road-riding-having-fun-driving-empty-road-motorcycle-tour_1050166-7898.jpg" alt="Performance" />
                    <h3>Triumph Daytona 675R</h3>
                    <p>Track progress and achieve new milestones.</p>
                </motion.div>
                <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
                    <img src="https://th.bing.com/th/id/OIP.Fh1KWK6Vdyjz2bb89rb3agHaEK?rs=1&pid=ImgDetMain" alt="Bonneville Bobber" />
                    <h3>Bonneville Bobber</h3>
                    <p>1200cc High Torque twin engine with responsive tuning.</p>
                </motion.div>
                <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
                    <img src="https://wallpapercave.com/wp/wp8790605.jpg" alt="Legacy" />
                    <h3>Legacy of Triumph</h3>
                    <p>Explore our rich history and legacy of craftsmanship.</p>
                </motion.div>
            </section>

            {/* History Section */}
            <section className="history-section" id="history">
                <h2>Our History</h2>
                <p>Since 1902, Triumph has been the symbol of British motorcycling excellence, from early innovations to modern classics.</p>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <p>Have questions? Reach out for more information on our bikes and services.</p>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>Your partner for growth and insights. Developed by Mr. Jils Thomas.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>Email: contact@jilsthomas.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div className="footer-section">
                        <h4>Social Media</h4>
                        <p>Facebook | Twitter | LinkedIn</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <p>Blog | Careers | Media Center</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UserDashboard;
