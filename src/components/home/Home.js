import React,{useContext} from 'react';
import './home.css'
import Product from "../product/Product";


const Home = () => {


    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                     src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
                <div className='home__row'>
                    <Product
                        id="49033321"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzc13juqmolsYsCjqq-7pK5acZ_LwXoJa0Iq4dLib7P6g1X24z5AOrnQBwCw&usqp=CAc"
                        rating={3}
                        amount={1}
                    />
                    <Product
                        id="490383409"
                        title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
                        price={118.99}
                        image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={3}
                        amount={1}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="49038508"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81vT0S30GML._AC_UY327_FMwebp_QL65_.jpg"
                        amount={1}
                    />
                    <Product
                        id="234459385"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_FMwebp_QL65_.jpg"
                        amount={1}
                    />
                    <Product
                        id="325443454"
                        title="New apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51W2e10l3UL._AC_UY327_FMwebp_QL65_.jpg"
                        amount={1}
                    />
                </div>
                <div className='home__row'>
                <Product
                        id="325443454"
                        title="New apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={5900.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY327_FMwebp_QL65_.jpg"
                        amount={1}
                    />
                
                </div>
            </div>
        </div>
    )
}
export default Home;