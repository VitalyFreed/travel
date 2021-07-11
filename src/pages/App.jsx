import React from 'react';
import {Switch, Route} from "react-router-dom";

import styles from './app.module.scss';

import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import CardList from "./CardList/CardList";
import Cities from "./Cities/Cities";
import Lighthouse from "./Lighthouse/Lighthouse";
import Places from "./Places/Places";
import Customers from "./Customers/Customers";
import Download from "./Download/Download";
import Footer from "./Footer/Footer";

import About from "../routes/About/About";
import TourGuid from "../routes/TourGuid/TourGuid";
import Terms from "../routes/Terms/Terms";
import Privacy from "../routes/Privacy/Privacy";
import OurTeam from "../routes/OurTeam/OurTeam";
import LatestBlog from "../routes/LatestBlog/LatestBlog";
import Forum from "../routes/Forum/Forum";
import Destinations from "../routes/Destinations/Destinations";
import CustomerSupport from "../routes/CustomerSupport/CustomerSupport";
import ContactUs from "../routes/ContactUs/ContactUs";

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Slider/>
                    <CardList/>
                    <Cities/>
                    <Lighthouse/>
                    <Places id='section1'/>
                    <Customers/>
                    <Download/>
                    <Footer/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/contact'>
                    <ContactUs/>
                </Route>
                <Route path='/customer-support'>
                    <CustomerSupport/>
                </Route>
                <Route path='/destinations'>
                    <Destinations/>
                </Route>
                <Route path='/forum'>
                    <Forum/>
                </Route>
                <Route path='/latest-blog'>
                    <LatestBlog/>
                </Route>
                <Route path='/our-team'>
                    <OurTeam/>
                </Route>
                <Route path='/privacy'>
                    <Privacy/>
                </Route>
                <Route path='/terms'>
                    <Terms/>
                </Route>
                <Route path='/tour-guid'>
                    <TourGuid/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;