import React, { Component } from "react"
import Card from "./CardUI"
import "./card-style.css";

import img1 from "../assets/Image 2-10-20 at 6.44 PM.jpeg";
import img2 from "../assets/Image 2-5-20 at 1.11 PM.jpg";
import img3 from "../assets/IMG_2030.jpg";
import img4 from "../assets/IMG_2821.jpeg";
import img5 from "../assets/IMG_2826.jpeg";
import img6 from "../assets/IMG_2831.jpeg";

class LearnCards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Codecademy/pro" text="Online learning platform thats designed to keep you up with the latest technology"
                        href="https://app.slack.com/client/TPH967SKH/CPHKK8WB0/thread/C0109G9SJN8-1586373815.004900"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Skillsoft" text="Online learning platform thats designed to keep you up with the latest technology"
                        href="https://www.skillsoft.com/sign-in/"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Pluralsight" text="Online learning platform thats designed to keep you up with the latest technology"
                        href="https://app.pluralsight.com/id?"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Udemy" text="Online learning platform thats designed to keep you up with the latest technology"
                        href="https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fcourses%2Fit-and-software%2F"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title="React Training Video" text="Online Learning Center, where you can find tutorials, videos, guides, and ReactJS tips."
                        href="https://www.youtube.com/playlist?list=PLIGDNOJWiL1_2CpDKGg4-jNPqoirutxc5"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title="MERN Training Video" text="Online Learning Center, where you can find tutorials, videos, guides, and MERN tips."
                        href="https://www.youtube.com/watch?v=7CqJlxBYj-M"/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default LearnCards;