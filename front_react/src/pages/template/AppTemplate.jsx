import { LeftSideBar, Main } from "../pages"
import { Container, Row, Col } from 'react-bootstrap'

export const AppTemplate = ( ) => {

    return (
        <div className = 'AppTemplate' >
            <Container fluid>
                <Row>
                    <Col xs={3} style = {{  height : '100%', border : "1px solid black"}}>
                        <LeftSideBar/>
                    </Col>
                    <Col xs={9} style = {{  height : '100%', border : "1px solid black"}}>
                        <Main/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}