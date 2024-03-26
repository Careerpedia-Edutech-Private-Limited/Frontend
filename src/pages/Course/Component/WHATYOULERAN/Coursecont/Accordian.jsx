import React from "react";
import "./Cont.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { FaCaretDown } from "react-icons/fa";
import { PiBookOpenTextBold } from "react-icons/pi";
import { PiChatsBold } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlineTask } from "react-icons/md";
import { FaPen } from "react-icons/fa";



import "./Accordian.scss";

const Accordian = () => {
  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="para">
              {" "}
              <h2>Html</h2>
              <AccordionDetails>
                The module provides an overview of the course and the review and
                the main tools used in the descriptivestatistics
                <div className="info">
                  <div className="icon1">
                    <PiBookOpenTextBold />
                    <p>20 lessons</p>
                  </div>
                  <div className="icon2">
                    <FaClock />
                    <p>3 hrs</p>
                  </div>
                  <div className="icon3">
                    <PiChatsBold />
                    <p>20 ecercises</p>
                  </div>
                  <div className="icon4">
                    <FaTasks />
                    <p>20 tasks</p>
                  </div>
                </div>
              </AccordionDetails>
            </p>
          </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* Module 1
               */}
               <h2>Module 1</h2>
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="div"> */}

              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 2</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Accordion>

        {/* csss////////////////////////////////////////////////// */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="para">
              {" "}
              <h2>CSS</h2>
              
              <AccordionDetails>
                The module provides an overview of the course and the review and
                the main tools used in the descriptivestatistics
                <div className="info">
                  <div className="icon1">
                    <PiBookOpenTextBold />
                    <p>20 lessons</p>
                  </div>
                  <div className="icon2">
                    <FaClock />
                    <p>3 hrs</p>
                  </div>
                  <div className="icon3">
                    <PiChatsBold />
                    <p>20 ecercises</p>
                  </div>
                  <div className="icon4">
                    <FaTasks />
                    <p>20 tasks</p>
                  </div>
                </div>
              </AccordionDetails>
            </p>
          </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 1</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="div"> */}

              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 2</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Accordion>

        {/* BOOTSTRAP ////////////////////////////////////////////////////////////*/}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="para">
              {" "}
              <h2>BOOTSTRAP</h2>

              <AccordionDetails>
                The module provides an overview of the course and the review and
                the main tools used in the descriptivestatistics
                <div className="info">
                  <div className="icon1">
                    <PiBookOpenTextBold />
                    <p>20 lessons</p>
                  </div>
                  <div className="icon2">
                    <FaClock />
                    <p>3 hrs</p>
                  </div>
                  <div className="icon3">
                    <PiChatsBold />
                    <p>20 ecercises</p>
                  </div>
                  <div className="icon4">
                    <FaTasks />
                    <p>20 tasks</p>
                  </div>
                </div>
              </AccordionDetails>
            </p>
          </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 1</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="div"> */}

              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 2</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Accordion>

        {/* JAVASCRIPT////////////////////////////////////////////// */}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="para">
              {" "}
              <h3>JAVA SCRIPT</h3>

              <AccordionDetails>
                The module provides an overview of the course and the review and
                the main tools used in the descriptivestatistics
                <div className="info">
                  <div className="icon1">
                    <PiBookOpenTextBold />
                    <p>20 lessons</p>
                  </div>
                  <div className="icon2">
                    <FaClock />
                    <p>3 hrs</p>
                  </div>
                  <div className="icon3">
                    <PiChatsBold />
                    <p>20 ecercises</p>
                  </div>
                  <div className="icon4">
                    <FaTasks />
                    <p>20 tasks</p>
                  </div>
                </div>
              </AccordionDetails>
            </p>
          </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
                             <h2>Module 1</h2>

            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="div"> */}

              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 2</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Accordion>
        {/* REACT/////////////////////////////////////////////////////// */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="para">
              {" "}
              <h2>REACT</h2>
              
              <AccordionDetails>
                The module provides an overview of the course and the review and
                the main tools used in the descriptivestatistics
                <div className="info">
                  <div className="icon1">
                    <PiBookOpenTextBold />
                    <p>20 lessons</p>
                  </div>
                  <div className="icon2">
                    <FaClock />
                    <p>3 hrs</p>
                  </div>
                  <div className="icon3">
                    <PiChatsBold />
                    <p>20 ecercises</p>
                  </div>
                  <div className="icon4">
                    <FaTasks />
                    <p>20 tasks</p>
                  </div>
                </div>
              </AccordionDetails>
            </p>
          </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 1</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="div"> */}

              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               <h2>Module 2</h2>
              
            </AccordionSummary>
            <AccordionDetails>
              <div className="modans">
                <div className="faqans active ">
                  <div className="lessons">
                    <div className="les">
                      <PiBookOpenTextBold />
                      <h4>20 lessons</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <FaPen />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>

                  <div className="lessons">
                    <div className="les">
                      <MdOutlineTask />

                      <h4>20 exercises</h4>
                    </div>
                    <div className="items">
                      <p>1 typography</p>

                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>

                    <div className="items">
                      <p>1 typography</p>
                      <div className="item">
                        <p>2 points</p>
                        <p> 30min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Accordion>
      </div>
    </>
  );
};

export default Accordian;
