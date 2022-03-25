import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ShowPictureModal from '../modals/ShowPictureModal';
import SearchBar from '../utils/Searchbar';
import './LandingPage.scss';


export default function LandingPage(){

    const [showPictureModal,setShowPictureModal] = useState(false);

    const textWork = (text : string, prev? : string) => {
        /*Filler Method to include Searchbar*/
    }
    
    return(
        <div className="body">

            <SearchBar onSearch={textWork} onChange={textWork} />
            <ShowPictureModal show={showPictureModal} onClose={() => setShowPictureModal(false)} />

            <Container fluid>
            <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4}>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4}>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4}>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3" sm={1} md={2} lg={2} xl={4} xxl={4}>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="clickable" onClick={() => setShowPictureModal(true)}>
                            <Card>
                                <Card.Body>
                                    <img className='img-thumbnail' src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="Bild"/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}