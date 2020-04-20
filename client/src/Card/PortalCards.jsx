import React, { Component } from "react"
import Card from "./CardUI"

import img1 from "../assets/Image 2-10-20 at 6.44 PM.jpeg";
import img2 from "../assets/Image 2-5-20 at 1.11 PM.jpg";
import img3 from "../assets/IMG_2030.jpg";
import img4 from "../assets/IMG_2821.jpeg";
import img5 from "../assets/IMG_2826.jpeg";
import img6 from "../assets/IMG_2831.jpeg";

class PortalCards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Slack" text="Communication hub where team members can communicate and work together"
                        href="https://app.slack.com/client/TPH967SKH/CPHKK8WB0/thread/C0109G9SJN8-1586373815.004900"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="LinkedIn Learning" text="Enhance Your Skills With Expert-Led, Online Video Tutorials"
                        href="https://www.linkedin.com/learning"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Smartsheet" text="Project management platform that aligns team members and technology"
                        href="https://app.smartsheet.com/b/home?_ga=2.55776811.1499499135.1532965904-1296233051.1529000033"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Zoom" text="Remote video conferencing for 1:1 and team meetings"
                        href="https://us04web.zoom.us/join"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img5} title="Payroll" text="View pay statements W2s, 1099s, and pay calendars"
                        href="https://my.adp.com/static/redbox/login.html"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img6} title="Policies & Procedures" text="This area provides access to all company policies and procedures"
                        link="/policies"/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default PortalCards;