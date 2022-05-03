import React from "react"
import { Question, WrapQuestion, WrapQ } from "./styles.js"
import arrow from "../../../content/assets/tabarrow.svg"
import { Collapse } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Accordion = ({ title, content, isOpen, toggle }) => {
  return (
    <WrapQuestion onClick={toggle} className="accordion" isOpen={isOpen}>
      <WrapQ>
        <Question className="accordionTitle" isOpen={isOpen}>
          {title}
        </Question>
        <div style={{ paddingRight: "17px" }}>
          {isOpen ? (
            <div
              style={{
                transform: "rotate(90deg)",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <img src={arrow} alt="strelica" />
            </div>
          ) : (
            <div style={{ transition: "all 0.5s ease-in-out" }}>
              <img src={arrow} alt="strelica lijevo" />
            </div>
          )}
        </div>
      </WrapQ>
      <Collapse isOpen={isOpen} className="accordionContent">
        {content}
        <br />
        <br />
      </Collapse>
    </WrapQuestion>
  )
}

export default Accordion
