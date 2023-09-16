import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/erp-system.png";
import wp1Img from "../assets/img/wp-1.png";
import wp2Img from "../assets/img/wp-2.png";
import fscdimg from "../assets/img/fsc-d.png";
import fscmimg from "../assets/img/fsc-m.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const project = [
    {
      title: "Business Management System",
      description: "ERP Development",
      imgUrl: projImg1,
    },
    {
      title: "Informational Type Web",
      description: "WP Web Development",
      imgUrl: wp1Img,
    },
    {
      title: "Informational Type Web",
      description: "WP Web Development",
      imgUrl: wp2Img,
    },
    {
      title: "Seedlings tracker",
      description: "Innovative huge real-life project with hardware and software",
      imgUrl: fscdimg,
    },
    {
      title: "Business Management System",
      description: "ERP Development",
      imgUrl: fscmimg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    With a wealth of experience gained from collaborating on a
                    multitude of diverse projects and overcoming complex
                    challenges, I bring a seasoned perspective to the table. My
                    journey has afforded me the opportunity to cultivate a
                    versatile skill set that spans a wide spectrum of
                    technologies and industries. Whether you're seeking
                    assistance with web development, application design, system
                    integration, or tackling intricate technical hurdles, I'm
                    here to leverage my knowledge and expertise to help you
                    achieve your project's goals. Let's work together to turn
                    your ideas into reality and navigate the ever-evolving
                    landscape of technology and innovation
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">ERP Systems</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">WP Webs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Real-Life Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12} sm={12} md={6} lg={6}>
                            <ProjectCard key={1} {...project[0]} />
                          </Col>

                          <Col>
                            <p>
                              I'm passionate about building business management
                              systems, and for the past nearly two years, I've
                              been immersed in this dynamic field. During this
                              time, I've had the privilege of integrating
                              various systems, tackling complex challenges, and
                              enhancing functionality to optimize business
                              operations. Unfortunately, I'm bound by strict
                              company privacy policies that prevent me from
                              divulging specific details or providing additional
                              images.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col size={12} sm={12} md={6} lg={6}>
                            <Row>
                              <Col size={10} sm={10} md={10}>
                                <ProjectCard key={1} {...project[1]} />
                              </Col>
                            </Row>
                            <Row>
                              <Col size={10} sm={10} md={10}>
                                <ProjectCard key={1} {...project[2]} />
                              </Col>
                            </Row>
                          </Col>

                          <Col>
                            <p>
                              My journey in the world of programming began
                              during my childhood with WordPress. I found myself
                              fascinated by the power of this platform and
                              started crafting websites for various companies.
                              As I honed my skills, I delved into the realm of
                              plugin development and integration for WordPress,
                              further enhancing my ability to create tailored
                              solutions. This early experience laid the
                              foundation for my career, and I've since continued
                              to expand my knowledge and expertise in the
                              ever-evolving field of web development.
                            </p>
                          </Col>
                        </Row>{" "}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col size={12} sm={12} md={6} lg={6}>
                            <Row></Row>
                            <ProjectCard key={1} {...project[3]} />
                          </Col>

                          <Col>
                            <p>
                              Collaborating closely with a dedicated hardware
                              development team, I've been a key contributor to
                              an innovative startup focused on forestry. My role
                              encompasses both application and web development,
                              where I've taken on the challenge of crafting
                              robust solutions. Along this journey, I've
                              encountered and conquered formidable technical
                              obstacles. These included architecting custom
                              services, characteristics, and establishing secure
                              data transfer through Bluetooth tunnels. Moreover,
                              I've seamlessly integrated diverse APIs such as
                              Google Maps, Geolocator, and numerous others,
                              enhancing our product's capabilities and
                              usability.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
