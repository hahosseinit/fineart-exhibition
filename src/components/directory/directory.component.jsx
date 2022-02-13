import React from 'react';

import './directory.styles.scss'

import MenuItem from "../menue-item/menu-item.component";
//this should be a clss because we do need to store the state value of those menu item that we wanna pass and create out enu items with.

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
    render() {
        return (
            //we want to map through our sections
            <div className='directory-menu'>
            {
                //instead of adding all of the elements in the array u can use sectionprops
                this.state.sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItem key={id} {...otherSectionProps} />
                    // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                )
            }
            </div>
        )
    }
}

export default Directory;