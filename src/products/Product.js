import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from "axios";
import {Button, Col, Container, Row, Table} from "reactstrap";
class Product extends Component {
    componentDidMount() {
        this.getList();
        localStorage.setItem('name','firdavs')
    }
    state={
        list:[]
    };
    render() {
        return (
            <Container>
               <Row>
                   <Col md={{size:10}}>
                       <Table bordered>
                           <thead>
                           <tr>
                               <th>id</th>
                               <th>brand</th>
                               <th>name</th>
                               <th>price</th>
                               <th>discount</th>
                               <th>slug</th>
                               <th>img</th>
                           </tr>
                           </thead>
                           <tbody>
                           {
                               this.props.productList.map((datum,index)=>{
                                   return <tr key={index}>
                                           <th>{datum.id}</th>
                                           <Button onClick={()=>this.viewData(datum)}>
                                               <th>{datum.brand}</th>
                                           </Button>
                                           <th>{datum.name}</th>
                                           <th>{datum.price}</th>
                                           <th>{datum.discount}</th>
                                           <th>{datum.slug}</th>
                                           <th>
                                               {
                                                   <img src={datum.images?datum.images[0].image:null} width="100px" alt=""/>
                                               }
                                           </th>
                                   </tr>
                               })
                           }
                           </tbody>
                       </Table>
                   </Col>
               </Row>

            </Container>
        );
    }
    getList = () =>{
       axios.get("https://api.fnshop.uz/product-list/")
           .then(inform=>{
               console.log(inform.data.results);
               console.log(inform.data.results.images);
               this.props.getResults(inform.data.results);
           })
    };
    viewData = (datum) => {
        this.props.getProduct(datum.images);
        console.log(datum.slug);
        window.open('/productDesc/'+datum.slug);//shu yerini dinamik qilaman switch routerlar bn
        this.props.getSlug(datum.slug)
    }
}
const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = (dispatch) => ({
    getResults: data => dispatch({type: 'malumot', malumot : data}),
    getProduct: datum => dispatch({type: 'currentDatum',datum : datum}),
    getSlug: slug => dispatch({type: 'slug', slug : slug}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);