"use client"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="faq-list">
          <Accordion style={{border:"none"}}>
            <AccordionItem >
              <AccordionItemHeading style={{border:"none"}} >
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Non consectetur a erat nam at lectus urna duis?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>{" "}
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Feugiat scelerisque varius morbi enim nunc?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Dolor sit amet consectetur adipiscing elit?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-item">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>{" "}
                  <span style={{marginLeft:"5px",color:"black",fontWeight:"600",fontSize:"16px"}}>Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel 
              style={{background:"white"}}
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={{border:"none"}}>
              <AccordionItemHeading style={{border:"none"}}>
                <AccordionItemButton className="accordion-item" style={{border:"none"}}>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                  <span style={{marginLeft:"5px",color:"#343a40",fontWeight:"600",fontSize:"16px"}}>Tortor vitae purus faucibus ornare. Varius vel pharetra vel.turpis nunc eget lorem dolor?</span>
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel
                style={{background:"white"}}
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
