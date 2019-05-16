import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: this.props.list
        }
    }
    componentDidMount() {
        axios.get('/api/products')
        .then(
            (data)=> 
            {
                console.log('data server',data);
            },
            (error)=> 
            {
                console.log('bad request list product');
            }
        );
    }
    render() { 
        console.log('----props ProductPage----',this.props);
        const {products}=this.state;
        const list=products.map(p => {
            return ( 
                <li key={p.id}>
                    <img src={p.image} style={{ width: 200 + 'px' }} />
                    {p.name}
                </li>);
        })
        return ( 
            <div>
                <div>List Products</div>
                <ul>
                    {list}
                </ul>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return { 
        list: state.product.list 
    };
}
 
ProductListPage.propTypes = {
    list: PropTypes.array.isRequired
}
export default connect(mapStateToProps, null)(ProductListPage);