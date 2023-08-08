import React from "react";
import { Card } from "react-bootstrap";
import "./content.css";
const Content = () => {
    return (
        <>
            <div className="main d-flex justify-content-around mt-5 flex-wrap mb-80 ">
                <Card style={{ width: "18rem", height: "500px" }}>
                    <Card.Img
                        variant="top"
                        src="https://github.com/Arzymatiq/portfolio/blob/master/img/Arzymat.png?raw=true"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Хард скилы у меня на низком уровне ну как вы видете
                            на моем сайте мечты но обещяю что я исправлюсь и в
                            ближайшем будующем повышу свою квалефикацию ))))))
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem", height: "500px" }}>
                    <Card.Img
                        variant="top"
                        src="https://github.com/Arzymatiq/portfolio/blob/master/img/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-15%20140319.png?raw=true"
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            А вот софт на очень высоком уровне потому что я
                            стрелец
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem", height: "500px" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            я мальчик из токмака и не так давно начал учится в
                            Makers где меня научили front end разработке
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* <div className="neMain"></div> */}
        </>
    );
};

export default Content;
