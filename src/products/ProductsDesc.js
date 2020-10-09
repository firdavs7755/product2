import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {connect} from "react-redux";
import axios from "axios";
class ProductsDesc extends Component {
    componentDidMount() {
        console.log(this.props.match.params.slug+"--------------");
        this.getLists();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{size:4}}>
                    {
                            this.props.productList.filter(items=>items.slug===this.props.match.params.slug)
                                .map((datum,index)=>{
                                    return datum.images.map((img,index)=>{
                                        return <img src={img.image} alt="" height="200px" />
                                    })
                                })
                    }
                    </Col>
                <Col md={{size:6}}>
                    {
                        this.props.productList.filter(items=>items.slug===this.props.match.params.slug)
                            .map((datum,index)=>{
                                return <div key={index}>
                                    <h1>{datum.brand}</h1>
                                    <hr/>
                                    <h3>{datum.name}</h3>
                                    <hr/>
                                    <h4>disCount:{datum.discount}</h4>
                                    <hr/>
                                    <b className="text-danger"><h4>{datum.price}$</h4></b>
                                    <hr/>
                                    <h5>Color:{datum.color.color}</h5>
                                    <br/>
                                    <p>{datum.description}</p>

                                </div>
                            })
                    }
                </Col>

                </Row>
                ProductsDesc
            </Container>
        );
    }
    getLists = () =>{
        axios.get("https://api.fnshop.uz/product-list/")
            .then(inform=>{
                this.props.getResults(inform.data.results);
                console.log("name="+inform.data.results)
            });
    };

}
const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = (dispatch) => ({
    getResults: data => dispatch({type: 'malumot', malumot : data}),
});

export default connect(mapStateToProps,mapDispatchToProps) (ProductsDesc);
