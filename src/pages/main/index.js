import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    //método executado assim que o componente é exibido em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response);
    }
    
    render() {
        return <h1>Hello Rocketseat</h1>;
    }
}