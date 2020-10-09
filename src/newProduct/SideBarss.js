import React, {Component} from 'react';
import {MDBCollapse} from "mdbreact";
import {Button, Col, Container, Navbar, Row} from "reactstrap";
import {FaBars, FaTimes} from "react-icons/all";
import {Link} from "react-router-dom";

const mql = window.matchMedia(`(min-width: 900px)`);

class SideBarss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            isSideBar: false,
            isShowBtn: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
    }

    render() {
        return (
            <Container>
                <MDBCollapse className="float-left" isOpen={mql.matches ? this.state.isShowBtn : !this.state.isShowBtn}>
                    <Button onClick={() => this.setState({isSideBar: !this.state.isSideBar})}> {this.state.isSideBar ? <FaTimes/> : <FaBars/>}  </Button>
                </MDBCollapse>
                <MDBCollapse isOpen={this.state.isSideBar}>
                <Row>
                    <Col>
                        <Button className="float-right" onClick={() => this.setState({isSideBar: false})}><FaTimes/></Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="bg">
                        <ul className="list-unstyled">
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Главная</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">О нас</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Услуги</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Цены</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Фото</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Отзывы</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">FAQ</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Новости</Link></b></li>
                            <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#">Контакты</Link></b></li>
                        </ul>
                    </Col>
                </Row>
                </MDBCollapse>



            </Container>
        );
    }
}

export default SideBarss;