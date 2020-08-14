import React from "react";
import "./repo.css"
import { Carousel, Container, Col, Row} from "react-bootstrap"
import {parkplannerimg, parkplannerimg2, parkplannerimg3, wordgame, wordgame2, wordgame3, portfolioGen, portfolioGen2, portfolioGen3} from "../../images"

function RepoComp() {
    return (
        <div>
            <Container> 
            
        <div className="carousel-container">
           <Row>
           <Col>
            <Container>
              
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-font">Park Planner</h2>
                        {/* <p>Words</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="carousel-font">Park Planner</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="carousel-font">Park Planner</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
                
            </Col>
            <Col>
            <a href="https://parkplannerarty.herokuapp.com/">Park Planner </a><span> | </span>
            <a href="https://github.com/YengHV/Park-planner">Github link</a>
            <p className="project-description">Park Planner displays information, and a five-day weather forecast, for all state and national parks located in Iowa, Minnesota, North Dakota, South Dakota, and Wisconsin.</p>
            </Col>      
            </Row>
            
        </div>

        <div className="carousel-container">
        <Row>
        <Col>
        <Container >
        
        
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-font">Word Game</h3>
            
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-font">Word Game</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-font">Word Game</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        


        </Container>
        </Col>
        <Col>
        <a href="https://lit-ravine-77685.herokuapp.com/wordgame#">Word Game</a><span> | </span>
        <a href="https://github.com/YengHV/word-game">Github link</a>
        <p className="project-description">Word Game displays seven letters. It’s up to you to find as many words as you can, using only those seven letters. You score a point for each word you find.</p>
                </Col>   
     </Row>            

    </div>

    <div className="carousel-container">
        <Row>
        
        <Col>
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="carousel-font">JSTY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="carousel-font">JSTY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-font">JSTY</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        </Container>
        </Col>
        <Col>
        <a href="https://jtsy-portfolio.herokuapp.com/">JSTY</a><span> | </span>
        <a href="https://github.com/shininglite/portfolio-generator">Github link</a>
        <p className="project-description">Portfolio Generator is a full-stack React app that creates an automatic portfolio website based on chosen GitHub repositories.</p>
    
        </Col>
        
        </Row>  
    </div>

    <div className="carousel-container">
        <Row>
        
        <Col>
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="carousel-font">Slideshow</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="carousel-font">Slideshow</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={portfolioGen3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-font">Slideshow</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        </Container>
        </Col>
        <Col>
        <a href="https://jtsy-portfolio.herokuapp.com/">Slidshow</a><span> | </span>
        <a href="https://github.com/shininglite/portfolio-generator">Github link</a>
        <p className="project-description">A simple slideshow only using HTML and CSS.</p>
    
        </Col>
        
        </Row>  
    </div>
      
          
    </Container>
    
    </div>
    )
}

export default RepoComp;