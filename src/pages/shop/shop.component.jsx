import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from  '../../components/preview-collection/preview-collection.component'

//because we need to store the data related to our actual collection on our shop page, we are gonna make our shop page a class component

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;