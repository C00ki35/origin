import React, { Component } from 'react';
import PreviewCollection from '../../components/preview/PreviewCollection';
import SHOP_DATA from './shopData';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div>
            {
                collections.map(({id, ...restOfCollection} ) => (
                    <PreviewCollection key={id} {...restOfCollection} />
                    )
                )
            }
            </div>
        );
    }
}

export default Shop;