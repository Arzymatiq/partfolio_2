import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"; // Импортируйте свои стили
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <p>Privacy Policy | Terms of Use</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
