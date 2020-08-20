import React, { Component } from "react";
import "./style.css";
import Koi from "../../content/images/koi2.jpg"
import Cupid from "../../content/images/Cupid.png"
import Artemis from "../../content/images/Artemis.png"
import Centaur from "../../content/images/Centaur.png"
import contactArrow from "../../content/images/contactArrow.png"
import topArrow from "../../content/images/topArrow.png"
import Face from "../../content/images/myface.png"
import AboutMe from "../../content/images/about-me.png"
import ContactMe from "../../content/images/contact.png"
import Bio from "../../components/Bio";
import MobileHome from "../../components/MobileHome"


function Home() {

    return (

        <div className="homeDiv">
            <div className="homeContainer" id="home">
                <img src={Koi} className="koi"></img>

                <div className="bar">
                    <a href='/'>
                        <div className="animate" id="divPrime">
                            <div className="ww letterDiv" id="div1">W</div>
                            <div className="ww letterDiv" id="div2">I</div>
                            <div className="ww letterDiv" id="div3">L</div>
                            <div className="nw letterDiv" id="div4">L</div>
                            <div className="nw letterDiv" id="div5">I</div>
                            <div className="nw letterDiv" id="div6">A</div>
                            <div className="nw letterDiv" id="div7">M</div>
                            <div className="nw letterDiv" id="div8"> </div>
                            <div className="ww letterDiv" id="div9">D</div>
                            <div className="nw letterDiv" id="div10">A</div>
                            <div className="nw letterDiv" id="div11">N</div>
                            <div className="nw letterDiv" id="div12">I</div>
                            <div className="nw letterDiv" id="div13">E</div>
                            <div className="nw letterDiv" id="div14">L</div>
                            <div className="nw letterDiv" id="div15"> </div>
                            <div className="nw letterDiv" id="div16">H</div>
                            <div className="nw letterDiv" id="div17">A</div>
                            <div className="nw letterDiv" id="div18">T</div>
                            <div className="nw letterDiv" id="div19">H</div>
                            <div className="nw letterDiv" id="div20">A</div>
                            <div className="ww letterDiv" id="div21">W</div>
                            <div className="ww letterDiv" id="div22">A</div>
                            <div className="ww letterDiv" id="div23">Y</div>
                        </div>
                        <div className="wildwayAlt">WILDWAY</div>
                        <div className="webDesignIndex"><p>WEB DESIGN</p></div>
                        <div className="homeLine"></div>

                        <div className="wildwayIndex"><p>WILDWAY</p></div>
                        <div>

                        <div class="headerButtons">
                                
                                <a href="/journal" className="btn02 effect02 " data-sm-link-text="journal"><span>journal</span></a>
                            
                            
                                <a href="/#contact" className="btn02 effect02 " data-sm-link-text="inquiries"><span>inquiries</span></a>
                          
                                <a href="/portfolio" className="btn02 effect02 "  data-sm-link-text="portfolio"><span>portfolio</span></a>
                            
                        </div>

                
                        </div>
                    </a>
                </div>

            

            </div>

            <div className="scrollBtn"><a href="/#about"><p id="clickToScroll">click to scroll</p><img className="scrollBtnImg" src={Cupid}></img></a></div>

            <div className="aboutContainer" id="about">


                <div className="aboutDiv">

                    <div className="sectionTitleDiv">
                        <h1 className="sectionTitle"></h1>
                    </div>

                    <Bio />

                <div class="faceContainer">
                    <img src={Face} className="me"></img>
                    </div>

                    <div className="contactScrollBtn"><a href="/#contact"><p id="clickToScroll">click to scroll</p><img className="contactScrollBtnImg" src={Artemis}></img></a></div>


                </div>

                < MobileHome />


            </div>

            <div className="contactContainer" id="contact">
                <div className="contactDiv">

                    <div className="sectionTitleDiv">
                        <h1 className="contactTitle">Inquires</h1>
                    </div>




                </div>
                <div className="inquiries" id="">

                    <h6 className="emailText">Please click below to send me an email. I will respond as soon as possible. Thank you.</h6>
                    
                    <button className="emailBtn"><a href="mailto:william.hathaway38@gmail.com" subject="inquiry">Send an email</a></button>



                </div>

                <div className="topScrollBtn"><a href="/#home"><img className="topScrollBtnImg" src={Centaur}></img><p id="clickToScrollUp">back to top</p></a></div>


            </div>
        </div>

    )
}


export default Home;