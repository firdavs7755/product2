import React, {Component} from 'react';
import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form, FormGroup,
    Input,
    Navbar,
    Row
} from "reactstrap";
import {
    FaAngleDown,
    FaAngleUp, FaBars, FaComment,
    FaEnvelope,
    FaFacebook, FaHome,
    FaInstagram, FaLocationArrow,
    FaPhoneAlt,
    FaTelegram, FaTimes
} from "react-icons/all";
import Carousel from "react-elastic-carousel";

import eclipse from '../imgages/icons/eclipse3.png'
import c1 from '../imgages/carpets/carpet1.png'
import c2 from '../imgages/carpets/carpet2.png'
import c3 from '../imgages/carpets/carpet3.png'
import c4 from '../imgages/carpets/carpet4.png'
import c5 from '../imgages/carpets/carpet5.png'
import c6 from '../imgages/carpets/carpet6.png'
import office from '../imgages/icons/Vectoroffice.png'
import school from '../imgages/icons/Vectorschool.png'
import cinema from '../imgages/icons/Vectorcinema.png'
import cafe from '../imgages/icons/Vectorcafe.png'
import phone from '../imgages/howToWork/phone.PNG'
import bottom from '../imgages/howToWork/bottom.png'
import angleDown2 from '../imgages/howToWork/angleDown2.png'
import right from '../imgages/howToWork/right.png'
import karcher1 from '../imgages/chtoMiIspozuem/Rectangle 47karcher1.png'
import karcher2 from '../imgages/chtoMiIspozuem/Rectangle 48karcher2.png'
import karcher3 from '../imgages/chtoMiIspozuem/Rectangle 49karcher3.png'
import washed1 from '../imgages/ourWorks/Rectangle 62wash1.png'
import washed2 from '../imgages/ourWorks/Rectangle 50wash2.png'
import washed3 from '../imgages/ourWorks/Rectangle 52wash3.png'
import washed4 from '../imgages/ourWorks/Rectangle 51wash4.png'
import client1 from '../imgages/clients/Ellipse 8client1.png'
import client2 from '../imgages/clients/Ellipse 8client2.png'
import client3 from '../imgages/clients/Ellipse 8client2 (1).png'
import farrosh from '../imgages/farrosh.png'
import certificate from '../imgages/certificate.png'
import master1 from '../imgages/ourMasters/Ellipse 56master1.png'
import master2 from '../imgages/ourMasters/Ellipse 28master2.png'
import master3 from '../imgages/ourMasters/Ellipse 29master3.png'
import master4 from '../imgages/ourMasters/Ellipse 29master4.png'
import vlog1 from '../imgages/ourVlog/vlog1.png'
import vlog2 from '../imgages/ourVlog/vlog2.png'
import partner1 from '../imgages/partners/goldenPlace.png'
import partner2 from '../imgages/partners/radisson.png'
import partner3 from '../imgages/partners/miratorg.png'
import partner4 from '../imgages/partners/vtb.png'
import partner5 from '../imgages/partners/tska.png'
import partner6 from '../imgages/partners/russia.png'
import partner7 from '../imgages/partners/bankRussia.png'
import partner8 from '../imgages/partners/vinzavod.png'
import partner9 from '../imgages/partners/gazprom.png'
import partner10 from '../imgages/partners/sberBank.png'
import partner11 from '../imgages/partners/chayhona.png'
import partner12 from '../imgages/partners/comedy.png'
import zayavka from '../imgages/zayavka/zayavka.png'


import {MDBCard, MDBCardHeader, MDBCollapse} from "mdbreact";
import {Link} from "react-router-dom";

const mql = window.matchMedia(`(min-width: 900px)`);

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            sideNavLeft: false,
            collapseID: "",
            isBarsOpen: false
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

    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`;
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };

    toggleCollapse = collapseID => () =>
        this.setState(collapse => ({
            collapseID: collapse.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 2},
            {width: 768, itemsToShow: 3},
            {width: 1200, itemsToShow: 4}
        ];

        return (
            <Container className="">
                <Row className="mt-3" sm={12} xs={12} md="12">
                    <Col md={6} sm={6} xs={6}><h1 className="ml-5 float-left">Logo</h1></Col>
                    <Col md={4} sm={12} xs={12}>
                        <Form>
                            <Input placeholder="Рассчитать стоимость химчистки"/>
                        </Form>
                    </Col>
                    <Col md={2} sm={4} xs={4}><p style={{backgroundColor: "#FEDC45"}} className="bordered">+7(999) 999 99 99 </p></Col>
                </Row>

                <Row>
                    <Col>
                        <MDBCollapse className="float-left" isOpen={mql.matches ? this.state.isShowBtn : !this.state.isShowBtn}>
                            <Button className="btn btn-outline-warning" onClick={() => this.setState({isSideBar: !this.state.isSideBar})}> {this.state.isSideBar ? <FaTimes/> : <FaBars/>}  </Button>
                        </MDBCollapse>
                        <MDBCollapse isOpen={this.state.isSideBar} className="resp85 zIndex">
                            <Row>
                                <Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="bg" >
                                    <ul>
                                        <li>
                                            <Button className="float-right btn-outline-warning" onClick={() => this.setState({isSideBar: false})}><FaTimes/></Button>
                                        </li>
                                    </ul>

                                    <ul className="list-unstyled">
                                        <li className={!mql.matches?"ml-5":""}><b><Link className="nav-link onHover" to="#"><FaHome/>Главная</Link></b></li>
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
                    </Col>
                </Row>


                <MDBCollapse isOpen={!mql.matches?false:true}>
                    <Row className="bg" xs={12} sm={12} md={12}>
                        <Col className="ml-5" xs={12} sm={12} md={12}>
                            <Navbar bg="dark" className="nav" variant="dark">
                                <ul className={mql.matches?"navbar list-unstyled":"list-unstyled"}>
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
                            </Navbar>
                        </Col>
                    </Row>
                </MDBCollapse>
                <Row md={12} sm={12} xs={12} className={!mql.matches?"bgImg":"position-absolute bgImg"}>
                    <Col md={12} sm={12} xs={12}>
                        <h1 className="text-color ml-5">Химчистка мягкой<br/>мебели в москве</h1>
                        <p className="text-color ml-5">Цены от 190 рублей.<br/>Приедем через 1 час после оформления заявки.</p>
                            <Row md={12} xs={12}sm={12} >
                                <Col md={6} xs={8}sm={8}className="border ml-5">
                                    <h3 className="text-center">ЗАКАЗАЖИ ХИМЧИСТКУ</h3>
                                    <p className="text-center">и получи скидку 10%</p>
                                    <Form className="mt-4 ml-5 resp70">
                                        <Row md={12} sm={12} xs={12} className="">
                                            <Col md={6} sm={12} xs={12}>
                                                <Input placeholder="fullname"/>
                                            </Col>
                                            <Col md={6} sm={12} xs={12}>
                                                <Input placeholder="email"/>
                                            </Col>
                                        </Row>
                                        <Row md={12} sm={12} xs={12} className="mt-2 mb-3">
                                            <Col md={6} sm={12} xs={12}>
                                                <Input placeholder="phone"/>
                                            </Col>
                                            <Col md={6} sm={12} xs={12}>
                                                <Button className="bg btn-block" color="info">Send</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                                <Col md={4} xs={1} sm={1}>

                                </Col>
                                <Col md={1} xs={1}sm={1} className="mt-5">
                                    <div className="d-block bg-warning mt-5">
                                        <h3 className="mt-5 text-right position-absolute bg">
                                            <Link to="#"><FaPhoneAlt/></Link>
                                            <Link to="#"><FaComment/></Link>
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                <Row md={12} sm={12} xs={12} className={mql.matches?"cont3":""}>
                    <Col md={6} sm={12} xs={12} className="happyBrat onHover">
                        <div className="float-right">
                            <p className="mt-5 pt-5"><b>Сергей Васильевич</b></p>
                            <p className="">Генеральный директор</p>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xs={12} className="p-3 onHover">
                        <h2 className="mt-5 float-none">О НАШЕЙ КОМПАНИИ</h2>
                        <p>Мы рады приветствовать Вс на нашем сайте. Наша цель - обеспечить чистоту вашем доме и в
                            офисе. Наша компания выполнит все виды профессионального клининга и реализует проект любой
                            сложности, от квартиры до крупных производственных помещений – благодаря достаточному
                            количеству необходимого оборудования полного штата сотрудников. Специалисты нашей компании
                            выполнят полный спектр клининговых услуг, самыми распространенными из которых являются:</p>
                        <Button style={{backgroundColor: "#FEDC45", color: "black"}} className="btn">Рассчитать
                            стоимость химчистки</Button>
                    </Col>
                </Row>
                <Row md={12} xs={12} sm={12} style={{backgroundColor: "#FFF6A1"}} className={mql.matches?"cont3 mt-5":"mt-5 p-3"}>
                    <Col md={12} xs={12} sm={12} className="text-center">
                        <h2 className="text-center text-uppercase mt-3">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
                        <Row md={12} xs={12} sm={12} className="mb-3">
                            <Col md={3} xs={12} sm={12}><img className="onHover" src={eclipse} alt=""/></Col>
                            <Col md={3} xs={12} sm={12}><img className="onHover" src={eclipse} alt=""/></Col>
                            <Col md={3} xs={12} sm={12}><img className="onHover" src={eclipse} alt=""/></Col>
                            <Col md={3} xs={12} sm={12}><img className="onHover" src={eclipse} alt=""/></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className={mql.matches?"cont3 mt-5 mb-5":"mt-5 mb-5"}>
                    <Col md={18} className="text-center">
                        <h4 className="text-center mt-3 text-uppercase">НАШИ Услуги</h4>
                        <Row>
                            <Col xs={12} sm={12} md={3}> <img src={c1} className="onHover" alt="carpet"/><br/><b>Химчистка<br/>синтетических ковров</b></Col>
                            <Col xs={12} sm={12} md={3}> <img src={c2} className="onHover" alt="carpet"/><br/><b>Химчистка<br/>синтетических ковров</b></Col>
                            <Col xs={12} sm={12} md={3}> <img src={c3} className="onHover" alt="carpet"/><br/><b>Химчистка<br/>синтетических ковров</b></Col>
                            <Col xs={12} sm={12} md={3}> <img src={c4} className="onHover" alt="carpet"/><br/><b>Химчистка<br/>синтетических ковров</b></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className={mql.matches?"cont3 bgImg2 mt-5 ":"mt-5 bgImg2 imgResp"}>
                    <Col md={12} className="text-center">
                        <Row>
                            <Col md={2}></Col>
                            <Col>
                                <h2 className="text-color text-center mt-5">Профессионально химчистка ковров<br/>по фиксированной цене.</h2>
                                <p className="text-color">Мы используем многоэтапную технологию экстракторной химчистки
                                    с использованием лучших, зарекомендовавших себя на мировом уровне профессиональных
                                    химических составов</p>
                                <Button className="mb-5" style={{backgroundColor: "#FEDC45", color: "black"}}>Рассчитать стоимость химчистки</Button>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} xs={12} sm={12} className="cont3 mt-5 mb-5">
                    <Col md={18} className="text-center">
                        <h4 className="text-center mb-4 text-uppercase">ЦЕНЫ НА ХИМЧИСКУ КОВРОВ И КОВРОВЫХ ПОКРЫТИЙ</h4>
                        <Row xs={12} sm={12} className="mb-5">
                            <Col xs={12} sm={12} md={3}>
                                <img src={c1} alt="carpet"/><br/>
                                <b>Ковер синтетический с<br/>низким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c2} alt="carpet"/><br/>
                                <b>Ковер синтетически с<br/>высоким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>650
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c3} alt="carpet"/><br/>
                                <b>Ковер шерстяной с<br/>низким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c4} alt="carpet"/><br/>
                                <b>Ковер шерстяной с<br/>высоким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>4000
                                    рублей</b>
                            </Col>
                        </Row>
                        <Row xs={12} sm={12}>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c6} alt="carpet"/><br/>
                                <b>Ковер синтетический с<br/>низким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c2} alt="carpet"/><br/>
                                <b>Ковер синтетически с<br/>высоким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c5} alt="carpet"/><br/>
                                <b>Ковер шерстяной с<br/>низким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                <img src={c4} alt="carpet"/><br/>
                                <b>Ковер шерстяной с<br/>высоким ворсом<br/></b>
                                <b className="text-center" style={{backgroundColor: "#FEDC45", color: "black"}}>250
                                    рублей</b>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} xs={12} sm={12} style={{backgroundColor: "#FFF6A1"}} className="mt-5 mb-5 cont3">
                    <Col md={12} xs={12} sm={12} className="text-center">
                        <h2 className="text-center mt-3"> У нас Действуют спец. предложения для вас, если вы:</h2>
                        <p>Мы работаем с организациями и предлагаем самые<br/>выгодные условия сотрудничества.</p>
                        <Row md={10} xs={12} sm={12} className="mb-3 mt-5">
                            <Col md={1}></Col>
                            <Col className="mb-4" md={2} xs={12} sm={12}><img src={office} alt=""/><br/> Офисные
                                помещения</Col>
                            <Col className="mb-4" md={2} xs={12} sm={12}><img src={school} alt=""/><br/>Магазины</Col>
                            <Col className="mb-4" md={2} xs={12} sm={12}><img src={school} alt=""/><br/>школа и
                                вузы</Col>
                            <Col className="mb-4" md={2} xs={12} sm={12}><img src={cinema} alt=""/><br/>кинотеатр</Col>
                            <Col className="mb-4" md={2} xs={12} sm={12}><img src={cafe} alt=""/><br/>Рестораны и
                                кафе</Col>
                            <Col md={1}></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} sm={12} xs={12} className="mt-5 mb-5 cont3">
                    <Col md={12} sm={12} xs={12} className="text-center">
                        <h2 className="text-center mt-3">Как мы работаем</h2>
                        <Row md={12} sm={12} xs={12} className="mb-3 mt-5">
                            <Col md={2} sm={12} xs={12}>
                                <img src={phone} alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?bottom:angleDown2} alt=""/>
                                <p><b>Звоните</b><br/>
                                    консультант назовет цену услуг
                                </p>
                            </Col>
                            <Col md={1} sm={12} xs={12}>
                                <img src={phone} className="mt-5" alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?right:angleDown2} alt=""/>
                                <p><b>ЗАКАЗЫВАЙТЕ</b><br/>
                                    вывоз ковра или чистку на дому
                                </p>
                            </Col>
                            <Col md={2} sm={12} xs={12}>
                                <img src={phone} alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?bottom:angleDown2} alt=""/>
                                <p><b>приедим</b><br/>
                                    бесплатно в удобный Вам день
                                </p>
                            </Col>
                            <Col md={2} sm={12} xs={12}>
                                <img src={phone} className="mt-5" alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?right:angleDown2} alt=""/>
                                <p><b>ОСМОТРИТ ТЕХНОЛОГ</b><br/>
                                    с фото-видео фиксацией с 4-х сторон</p>
                                <p className="small"></p>
                            </Col>
                            <Col md={2} sm={12} xs={12}>
                                <img src={phone} alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?bottom:angleDown2} alt=""/>
                                <p><b className="text-center">ПОЧИСТИМ</b><br/>
                                    на лучшем оборудовании
                                </p>
                            </Col>
                            <Col md={2} sm={12} xs={12}>
                                <img src={phone} className="mt-5" alt=""/>
                                <img className={!mql.matches?"float-bottom ":"float-right"} src={mql.matches?right:angleDown2} alt=""/>
                                <p><b>ВЫСУШИМ</b><br/>
                                    без деформации и плохого запаха
                                </p>
                            </Col>
                            <Col md={1} sm={12} xs={12}>
                                <img src={phone} alt=""/>
                                <p><b>Готово</b><br/>
                                    чистый и свежий ковёр в удобный Вам день.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row xs={12} sm={12} md={12} className="mt-5 mb-5 cont3">
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h2 className="text-center mt-3">ЧТО МЫ ИСПОЛЬЗУЕМ</h2>
                        <Row xs={12} sm={12} md={12} className="mb-3 mt-5">
                            <Col className="onHover" md={4} xs={12} sm={12}>
                                <img className="ispolzuem" src={karcher1} alt=""/>
                                <h5><b>Экстрактор Karcher PUZZI 10/1</b></h5>
                                <p className="text-muted pl-4 text-left">Karcher(Германия)</p>
                                <p className="text-left pl-4">Надежный аппарат для чистки мягкой мебели экстракторным
                                    методом. Мощная всасывающая турбина гарантирует низкую остаточную влажность
                                    очищенного покрытия. Благодаря этому значительно сокращается время высыхания обивки
                                    мебели.</p>
                            </Col>
                            <Col className="onHover" md={4} xs={12} sm={12}>
                                <img className="ispolzuem" src={karcher2} alt=""/>
                                <h5><b>Экстрактор CLEANFIX TW 412</b></h5>
                                <p className="text-muted pl-4 text-left">Cleanfix (Швейцария)</p>
                                <p className="text-left pl-4">Экстракторная машина для профессиональной химчистки ковры.
                                    Характеризуется высокой силой всасывания и мощной подачей раствора за счет
                                    применения двух помп. Благодаря своей компактности CLEANFIX TW 412 оптимальна для
                                    проведения работ на малых и средних площадях.</p>
                            </Col>
                            <Col className="onHover" md={4} xs={12} sm={12}>
                                <img className="ispolzuem" src={karcher3} alt=""/>
                                <h5><b>Экстрактор Karcher PUZZI 10/1</b></h5>
                                <p className="text-muted pl-4 text-left">Karcher(Германия)</p>
                                <p className="text-left pl-4">Надежный аппарат для чистки мягкой мебели экстракторным
                                    методом. Мощная всасывающая турбина гарантирует низкую остаточную влажность
                                    очищенного покрытия. Благодаря этому значительно сокращается время высыхания обивки
                                    мебели.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} style={{backgroundColor: "#FFF6A1"}} className="mt-5 mb-5 cont3">
                    <Col md={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">примеры работ</h2>
                        <Row md={12} xs={12} sm={12} className="mb-3 pl-5 pr-5 mt-5">
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed1} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed3} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed2} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed4} alt=""/><br/></Col>
                        </Row>
                        <Row md={12} xs={12} sm={12} className="mb-3 pl-5 pr-5 mt-3">
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed2} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed1} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed3} alt=""/><br/></Col>
                            <Col md={3} xs={12} sm={12}><img className="p-2 ourWorks" src={washed4} alt=""/><br/></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className="mt-5 mb-5 cont3">
                    <Col md={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">что говорят наши клиенты</h2>

                        <Row md={12} className="mb-3 pl-5 pr-5 mt-5">
                            <Carousel breakPoints={breakPoints}>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client1} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Борис Тарасов</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client2} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Светлана Миронова</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client3} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Веселов Борислав</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client1} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Борис Тарасов</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client2} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Светлана Миронова</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client3} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Веселов Борислав</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client1} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Борис Тарасов</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client2} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Светлана Миронова</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg">
                                        <CardHeader>
                                            <img src={client3} alt=""/>
                                        </CardHeader>
                                        Lorem ipsum dolor sit amet adipisicing elit. Aliquam aliquid commodi
                                        consectetur,
                                        culpa deserunt dignissimos doloribus excepturi facilis illum laboriosam,
                                        necessitatibus nemo non, obcaecati porro quaerat qui
                                        <b>Веселов Борислав</b>
                                        <CardFooter>
                                            <FaFacebook/>
                                            <FaInstagram/>
                                            <FaTelegram/>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Carousel>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className="cont3 bgImg3 mt-5 mb-5">
                    <Col md={12} className="text-center">
                        <Row>
                            <Col md={2}></Col>
                            <Col>
                                <h2 className="text-color text-center mt-5">Профессионально химчистка ковров<br/>по
                                    фиксированной цене.</h2>
                                <p className="text-color">Мы используем многоэтапную технологию экстракторной химчистки
                                    с использованием лучших, зарекомендовавших себя на мировом уровне профессиональных
                                    химических составов.</p>
                                <Button className="mb-5" style={{backgroundColor: "#FEDC45", color: "black"}}>Рассчитать
                                    стоимость
                                    химчистки</Button>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} xs={12} sm={12} className="mt-5 cont3">
                    <Col md={12} xs={12} sm={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">Вопросы и ответы</h2>
                        <Row md={12} xs={12} sm={12} className="mb-3 pl-5 pr-5">
                            <Col md={7} xs={12} sm={12} className="mt-5 p-3">
                                <MDBCard className="mb-3 shadow">
                                    <MDBCardHeader className={this.state.collapseID === "collapse1" ? "bg" : "bgWhite"}
                                                   onClick={this.toggleCollapse("collapse1")}>
                                        <h5>Как мне определить размеры?<h4
                                            className="float-right">{this.state.collapseID !== "collapse1" ?
                                            <FaAngleDown/> : <FaAngleUp/>}</h4></h5>
                                    </MDBCardHeader>
                                    <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                                      <p>
                                          На обратной стороне ковра, как правило, в одном из углов бывают этикетки, на
                                          которых указаны название, размеры и материал из которого изготовлен ковер.
                                          Сообщите эти данные оператору, чтобы он мог сделать предварительную оценку
                                          стоимости чистки.
                                      </p>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard className="mb-3 shadow">
                                    <MDBCardHeader className={this.state.collapseID === "collapse2" ? "bg" : "bgWhite"}
                                                   onClick={this.toggleCollapse("collapse2")}>
                                        <h5>Какие дополнительные услуги?<h4
                                            className="float-right">{this.state.collapseID !== "collapse2" ?
                                            <FaAngleDown/> : <FaAngleUp/>}</h4></h5>
                                    </MDBCardHeader>
                                    <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                                        <p>
                                            nte ea proident. Ad vegan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard className="mb-3 shadow">
                                    <MDBCardHeader className={this.state.collapseID === "collapse3" ? "bg" : "bgWhite"}
                                                   onClick={this.toggleCollapse("collapse3")}>
                                        <h5>Как сделать заказ?<h4
                                            className="float-right">{this.state.collapseID !== "collapse3" ?
                                            <FaAngleDown/> : <FaAngleUp/>}</h4></h5>
                                    </MDBCardHeader>
                                    <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                                        <p>
                                            consectetur adipisicing elit. Ducimus, rerum. Ad vegan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard className="mb-3 shadow">
                                    <MDBCardHeader className={this.state.collapseID === "collapse4" ? "bg" : "bgWhite"}
                                                   onClick={this.toggleCollapse("collapse4")}>
                                        <h5>Чистка с выездом или на фабрике?<h4
                                            className="float-right">{this.state.collapseID !== "collapse4" ?
                                            <FaAngleDown/> : <FaAngleUp/>}</h4></h5>
                                    </MDBCardHeader>
                                    <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
                                        <p>
                                            DucimusLorem  dolor sit amet, consectetur adipisicing elit. , rerum. Ad egan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard className="shadow">
                                    <MDBCardHeader className={this.state.collapseID === "collapse5" ? "bg" : "bgWhite"}
                                                   onClick={this.toggleCollapse("collapse5")}>
                                        <h5>Какой компании довериться?<h4
                                            className="float-right">{this.state.collapseID !== "collapse5" ?
                                            <FaAngleDown/> : <FaAngleUp/>}</h4></h5>
                                    </MDBCardHeader>
                                    <MDBCollapse id="collapse5" isOpen={this.state.collapseID}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, rerum. Ad
                                            vegan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            heard of them accusamus labore sustainable VHS.
                                        </p>
                                    </MDBCollapse>
                                </MDBCard>
                            </Col>
                            <Col md={5} xs={12} sm={12}>
                                <img src={farrosh} className="ml-5 resp" alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} xs={12} sm={12} style={{backgroundColor: "#FFF6A1"}} className="mt-5 mb-5 cont3">
                    <Col md={12} xs={12} sm={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">Наши Сертификаты</h2>
                        <Row md={12} xs={12} sm={12} className="mb-5 mt-5">
                            <Col md={1}></Col>
                            <Col md={2} xs={12} sm={12}><img className="p-2 certificate" src={certificate} alt=""/><br/></Col>
                            <Col md={2} xs={12} sm={12}><img className="p-2 certificate" src={certificate} alt=""/><br/></Col>
                            <Col md={2} xs={12} sm={12}><img className="p-2 certificate" src={certificate} alt=""/><br/></Col>
                            <Col md={2} xs={12} sm={12}><img className="p-2 certificate" src={certificate} alt=""/><br/></Col>
                            <Col md={2} xs={12} sm={12}><img className="p-2 certificate" src={certificate} alt=""/><br/></Col>
                            <Col md={1}></Col>
                        </Row>

                    </Col>
                </Row>
                <Row md={12} className="mt-5 cont3">
                    <Col md={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">НАШИ МАСТЕРА</h2>
                        <Row md={12} xs={12} sm={12} className="mb-3 pl-5 pr-5">
                            <Col md={6} xs={12} sm={12} className="mt-5">
                                <img src={master1} className="float-left" alt=""/>
                                <h5 className="text-center mt-5"><b>Артур Айзатуллин</b></h5>
                                <p className="text-center">Сотрудник с 3-летним опытом</p>
                            </Col>
                            <Col md={6} xs={12} sm={12} className="mt-5">
                                <img src={master3} className="float-left" alt=""/>
                                <h5 className="text-center mt-5"><b>Анна Розанова</b></h5>
                                <p className="text-center">Сотрудник с 5-летним опытом</p>
                            </Col>
                        </Row>
                        <Row md={12} xs={12} sm={12} className="mb-3 pl-5 pr-5">
                            <Col md={6} mr-5 pt-3 pr-5 className="mt-5">
                                <img src={master4} className="float-left" alt=""/>
                                <h5 className="text-center mt-5"><b>Николай Ломоев</b></h5>
                                <p className="text-center">Сотрудник с 5-летним опытом</p>
                            </Col>
                            <Col md={6} xs={12} sm={12} className="mt-5">
                                <img src={master2} className="float-left" alt=""/>
                                <h5 className="text-center mt-5"><b>Дмитрий Чумаков</b></h5>
                                <p className="text-center">Сотрудник с 5-летним опытом</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} sm={12} xs={12} className="mt-5 mb-5 cont3">
                    <Col md={12} sm={12} xs={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">Наш блог</h2>
                        <Row md={12} sm={12} xs={12} className="mb-5 mt-5">
                            <Col md={6} sm={12} xs={12}><img src={vlog1} className="resp" alt=""/><br/></Col>
                            <Col md={6} sm={12} xs={12}>
                                <h4 className="text-left mt-3 text-uppercase">как правильно пользоваться пылесосом?</h4>
                                <p className="text-left">Влажная уборка помещения является незаменимым средством, с
                                    помощью которого можно достичь наилучших результатов в борьбе за чистоту и в заботе
                                    о здоровье человека. Эта сфера в современном мире, как и многое другое, получила
                                    роизводителей, среди которых именитые Zelmer (Зелмер), Karcher (Керхер) и Thomas
                                    (Томас), предлагают моющие устройства исключительного качества, которые смогли
                                    оценить миллионы хозяек во всем мире. Для достижения оптимального результата при
                                    механизированной влажной уборке недостаточно просто знать о том, какие аксессуары
                                    для пылесосов необходимо применять. Нужно также уметь правильно пользоваться этим
                                    прибором.</p>
                                <Button className="btn bg float-left" style={{color: "black"}}>читать далше</Button>
                            </Col>
                        </Row>
                        <Row md={12} sm={12} xs={12} className="mb-5 mt-5">
                            <Col md={6} sm={12} xs={12}>
                                <h4 className="text-right mt-3 text-uppercase">Чистка ковра народными средствами</h4>
                                <p className="text-right">Влажная уборка помещения является незаменимым средством, с
                                    помощью которого можно достичь наилучших результатов в борьбе за чистоту и в заботе
                                    о здоровье человека. Эта сфера в современном мире, как и многое другое, получила
                                    роизводителей, среди которых именитые Zelmer (Зелмер), Karcher (Керхер) и Thomas
                                    (Томас), предлагают моющие устройства исключительного качества, которые смогли
                                    оценить миллионы хозяек во всем мире. Для достижения оптимального результата при
                                    механизированной влажной уборке недостаточно просто знать о том, какие аксессуары
                                    для пылесосов необходимо применять. Нужно также уметь правильно пользоваться этим
                                    прибором.</p>
                                <Button className="btn bg float-right" style={{color: "black"}}>читать далше</Button>
                            </Col>
                            <Col md={6} sm={12} xs={12}><img src={vlog2} className="resp" alt=""/><br/></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="btn bg float-center text-lowercase" style={{color: "black"}}>ДРУГИЕ
                                    НОВОСТИ</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className="cont3 bgImg4 mt-5 mb-5">
                    <Col md={12} className="text-center">
                        <Row>
                            <Col md={2}></Col>
                            <Col>
                                <h2 className="text-color text-center mt-5">Профессионально химчистка ковров по
                                    фиксированной цене.</h2>
                                <p className="text-color">Возвращение коврам мягкости, яркости и свежести. Уничтожение и
                                    предотвращение появления бактерий и микробов</p>
                                <Button className="mt-5 mb-5" style={{backgroundColor: "#FEDC45", color: "black"}}>Рассчитать
                                    стоимость химчистки</Button>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className="mt-5 mb-5 cont3">
                    <Col md={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">партнеры</h2>
                        <Row md={14} sm={12} xs={12} className="mb-3 mt-5">
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner3} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner9} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner2} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner6} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner12} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner4} alt=""/></Link></Col>
                        </Row>
                        <Row md={12} sm={12} xs={12} className="mb-3 mt-5">
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner1} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner7} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner11} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner10} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner8} alt=""/></Link></Col>
                            <Col md={2} sm={6} xs={6}><Link to="#"><img className="navbar imgResp" src={partner5} alt=""/></Link></Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} sm={12} xs={12} className="mb-5 cont3">
                    <Col md={12} sm={12} xs={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">ОСТАВТЕ ЗАЯАВКУ</h2>
                        <Row md={12} sm={12} xs={12} className="mb-5">
                            <Col md={6} sm={12} xs={12} style={{backgroundColor: "#FFF6A1"}}>
                                <img src={zayavka} className="zayavka" alt=""/>
                            </Col>
                            <Col md={6} sm={12} xs={12} className="bgImg5 p-5">
                                <div className="bgWhite mt-5 bordered mb-5">
                                    <div className="p-5">
                                        <Form>
                                            <FormGroup>
                                                <Input type="text" name="name" id="name" placeholder="name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="phone" id="phone" placeholder="phone number"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="textarea" name="comment" id="comment"
                                                       placeholder="comment"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Button style={{color: "black"}}
                                                        className="btn-block bg">отправить</Button>
                                            </FormGroup>
                                        </Form>
                                    </div>

                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row md={12} sm={12} xs={12} style={{backgroundColor: "#FEDC45"}} className="mt-5 mb-5 cont3">
                    <Col md={12} sm={12} xs={12} className="text-center">
                        <h2 className="text-center mt-3 text-uppercase">Наши Контакты</h2>
                        <Row md={12} sm={12} xs={12} className="mb-5 mt-5">
                            <Col md={3} sm={6} xs={6}>
                                <h3 className="text-left">LOGO</h3>
                                <p className="text-left">Наша Компания предлагает профессиональные услуги
                                    химчистка ковров и ковровых покрытий с выездом к заказчику на дом или в офис.
                                    Исползуем
                                    только передовые технологи .</p>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <h3 className="text-left">УСЛУГИ</h3>
                                <ul className="list-unstyled text-left">
                                    <li>Химчистка синтетических ковров;</li>
                                    <li>Химчистка шерстяных ковров;</li>
                                    <li>Химчистка ковры ручной работы;</li>
                                    <li>Химчистка шелковые ковров;</li>
                                    <li>Химчистка коворлинов;</li>
                                </ul>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <h3 className="text-left">Меню</h3>
                                <ul className="list-unstyled text-left">
                                    <li><Link to="">Главная</Link></li>
                                    <li><Link to="">О нас</Link></li>
                                    <li><Link to="">Услуги</Link></li>
                                    <li><Link to="">Цены</Link></li>
                                    <li><Link to="">Фото</Link></li>
                                    <li><Link to="">Отзывы</Link></li>
                                    <li><Link to="">Новости</Link></li>
                                    <li><Link to="">FAQ</Link></li>
                                    <li><Link to="">Контакты</Link></li>
                                </ul>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <h3 className="text-left">Контакты</h3>
                                <ul className="list-unstyled text-left">
                                    <li><FaLocationArrow/> г.Москва ул.Свободы2/40</li>
                                    <li><FaEnvelope/> info@ximkovr.uz</li>
                                    <li><FaPhoneAlt/> (+998 71) 123 45 67</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default New