import React from "react";
import Card from "react-bootstrap/Card";
import { ImInfinite  } from "react-icons/im"


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Yordanos Kassa </span>
            I reside in <span className="purple"> Allendale, Michigan.</span>
            <br />
            I am currently as student at <span className="purple">Grand Valley State Universiity.</span>
            <br />
            I am majoring in Computer Information Systems and currently in my Junior year. 
            <br />
            <br />
            Besides Buliding Software, I like:
          </p>
          <ul>
            <li className="about-activity">
              <ImInfinite /> Soccer
            </li>
            <li className="about-activity">
              <ImInfinite /> Listening to Tech Podcasts
            </li>
            <li className="about-activity">
              <ImInfinite /> Exploring Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I want to build things that can change lives!"{" "}
          </p>
          <footer className="blockquote-footer">Yordanos Kassa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
