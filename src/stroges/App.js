import React, {Component} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Button, Col, Container, Modal, Row, Spinner, Table} from "reactstrap";

class App extends Component {

    componentDidMount()      {

    }

    constructor() {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size:6}}>
                        <h1>JWT token with react</h1>
                        <form>
                            <input type="text" name="username" onChange={(event)=>{this.setState({username:event.target.value})}}/> <br/>
                            <input type="text" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}/> <br/>
                        </form>
                        <button className="btn btn-primary" onClick={()=>this.getToken()}>login</button>
                    </Col>
                    <Col>
                        <Button type="button" onClick={()=>this.deleteToken()} color="danger">logout</Button>
                    </Col>
                </Row>
                <Row>
                    <Modal isOpen={this.props.isMOpen}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Modal>
                </Row>
                <Row>
                    <Table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>city_name</th>
                            <th>dist-name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.customerList.map((item,index)=>{
                                return <tr key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.city_name}</th>
                                    <th>{item.district_name}</th>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </Row>

            </Container>
        );
    }
    getToken=()=>{
        this.props.ochModal();
        axios.post('https://api.fn-express.uz/auth/login/',{
            username:this.state.username,
            password:this.state.password
        }).then((resp)=>{
            if (resp.status===200){
                localStorage.setItem('login',resp.data.token);
                console.log('storage '+localStorage.getItem('login'));
                axios.get("https://api.fn-express.uz/customer/list/", {
                    headers:{'Authorization':'Token '+localStorage.getItem('login')}
                }).then((res,index)=>{
                    if (res.status===200){
                        this.props.setCustomers(res.data.results)
                        console.log(this.props.customerList)
                        this.props.hideModal();
                    }else {
                        console.log('zzzz')
                    }
                })
            }else {
                console.log('xxxxxxxxx')
            }
        })
    };
    deleteToken = ()=>{
       localStorage.removeItem('login');
        window.location.reload()
    };
}
const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = (dispatch) => ({
    setCustomers: datum => dispatch({type: 'customers',datum : datum}),
    hideModal: () => dispatch({type: 'modalClose', status: false}),
    ochModal: () => dispatch({type: 'modalOpen', status: true})
});
export default connect(mapStateToProps,mapDispatchToProps) (App);