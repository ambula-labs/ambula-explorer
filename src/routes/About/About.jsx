
import { useRef } from "react";
import lightVector from "@/assets/lightVector.svg";
import "./About.scss";

function About() {
	return (
		<div className="About">
			<div className="aboutContainer">
                <div className="aboutHeader">
                    <div className="subtitle"></div>
                    <div className="title">We are building a better future</div>
                </div>
                <div className="aboutContent">
                    <span>
                        A group of friends, who shared a passion for cryptography and blockchain technology, came up with the idea of creating a truly decentralized and secure proof-of-work cryptocurrency that could resist attacks and manipulation. 
                        They decided to combine their skills and knowledge to design Ambula.
                    </span>
                    <span>
                        The team worked tirelessly for months, designing, testing, and refining the Ambula algorithm to make it secure and efficient. 
                        They also created a user-friendly interface and started building a community of supporters who shared their vision.
                    </span>
                    <span>
                        Even though Ambula has not yet launched, the team is excited about the potential of their cryptocurrency and the positive impact it could have on the world. 
                        They hope that by creating a truly decentralized and secure proof-of-work system, they can help to make the world a better place for everyone who uses cryptocurrency.
                    </span>
                </div>
			</div>
            <div className="roadmapContainer">
                &nbsp;
			</div>
            <div className="buyContainer">
                &nbsp;
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
		</div>
	); 
}

export default About;
