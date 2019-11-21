import React, { Component } from 'react';

import { Nav, NavMini } from "./Nav";
import { Header } from "./Header";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";


export class Body extends Component {

    render() {
        return (
            <div className="w3-black">
                <Nav />
                <NavMini />
                <div className="w3-padding-large" id="main">
                    <Header />
                    <About />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
            </div>
        );
    }
}



    //     
    //     
    //     

    //     <comment>-- END PAGE CONTENT --</comment>
