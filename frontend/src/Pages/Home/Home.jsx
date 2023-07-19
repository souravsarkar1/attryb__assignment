import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//import carImage from '../images/car.jpg'; // Import your sample car image

const Home = () => {
    return (
        <div className="home">
            <br />
            <br />
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Welcome to Second Hand Cars</h1>
                            <p>Find your dream car at a fraction of the price.</p>
                            <Link to="/cars" className="btn btn-primary">
                                Browse Cars
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="featured-cars">
                    <div className="container">
                        <p>

                            {`Welcome to Second Hand Cars! Our website is your one-stop destination for finding your dream car at an affordable price. Whether you're looking for a reliable sedan, a spacious SUV, or a stylish sports car, we have a wide selection of quality second-hand vehicles waiting for you.

With our user-friendly interface and powerful search filters, browsing through our extensive inventory is a breeze. Our listings provide detailed information about each car, including its make, model, year, mileage, and price, making it easy for you to compare and make informed decisions.

We prioritize the satisfaction and trust of our customers, which is why all our listings are thoroughly inspected and verified. Our team ensures that you get the best value for your money with every purchase. Rest assured that you're dealing with reputable sellers, and we are here to assist you at every step of the car-buying process.

So, why wait? Take the first step towards owning your dream car today. Start exploring our collection of second-hand cars and drive away with confidence!"

Remember to customize the description with specific features and services offered by your second-hand car website. You can also add more details about your website's unique selling points and benefits to attract potential customers.`}
                        </p>
                    </div>
                </section>

                {/* Add more sections as needed */}
            </main>
            <footer>
                {/* Your Footer Component */}
            </footer>
        </div>
    );
};

export default Home;
