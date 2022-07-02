import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss'

import MenuItem from "../menue-item/menu-item.component";
//this should be a class because we do need to store the state value of those menu item that we wanna pass and create out enu items with.

const Directory = ({ sections }) => (
            //we want to map through our sections
            <div className='directory-menu'>
            {
                //instead of adding all of the elements in the array u can use sectionprops
                sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItem key={id} {...otherSectionProps} />
                    // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                )
            }
            </div>);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);