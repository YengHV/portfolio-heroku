import React from "react";
import "./repo.css"
import { Carousel, Container, Col,} from "react-bootstrap"
import {parkplannerimg, parkplannerimg2, parkplannerimg3, wordgame, wordgame2, wordgame3, portfolioGen, portfolioGen2, portfolioGen3} from "../../images"

function RepoComp() {
    return (
        <div>
            <Container> 

        <div className="carousel-container">
           
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
                <Col>
                <a href="https://yenghv.github.io/Park-planner/">Park Planner</a>
                </Col>
                
        </div>
       
        <div className="carousel-container">
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
        <Col>
        <a href="https://lit-ravine-77685.herokuapp.com/wordgame#">Word Game</a>
                </Col>    
    </div>
    <div className="carousel-container">
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
        <Col>
    <p className="portGenlink">Delpoy link</p>
    
                </Col>  
    </div>
    </Container>
    
    </div>
    )
}

export default RepoComp;