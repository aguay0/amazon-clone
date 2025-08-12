import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className= "home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home_row">
                <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={29.99}
                image="https://m.media-amazon.com/images/I/71sxTeZIi6L._UF1000,1000_QL80_.jpg"
                rating={5}
                />
                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.00}
                rating={4}
                image="https://www.remodelista.com/wp-content/uploads/2015/03/fields/kenwood-kmx54-k-mix-kitchen-machine-electric-stand-mixer-remodelista.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/12282023/gal/G55C_003_R-Perspective_Black_PC_1600x1200.jpg?$product-details-jpg$"
                />
                <Product 
                id="23445930"
                title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://www.bhphotovideo.com/images/fb/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
                />
                <Product 
                id="3254354345"
                title="New Apple iPad pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/81SGb5l+lZL._UF1000,1000_QL80_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/81gf+wgrcfS.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home