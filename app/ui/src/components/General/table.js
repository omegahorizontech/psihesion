import React from 'react';
import { Link } from 'react-router-dom';

// IDEA: Dynamically load image from server
import img1 from './images/pexels-01.jpg'

import { MicrocopyHeading } from '../General/heading'
import CustomButton from '../General/custom-button'

const AffinityBars = (props) => {
    const { affinities } = { ...props };

    let affinitiesArray = JSON.parse(affinities)

    let result = []
    for (const i of affinitiesArray) {
        result.push(
            <div key={i} className='table--general-affinity_bar_element'>
                <div className='table--general-affinity_bar_label'>{i}</div>
                <div className='table--general-affinity_bar' style={{width: i/4 + 'rem'}}></div>
            </div>
        )
    }

    return (
        <div className='table--general-affinity_bar_group'>
            {result}
        </div>
    )
}

const formatPhone = (phone) => {
    const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
};

const TableRow = (props) => {
    const { row } = { ...props }
    
    return (
        <div className='general--table-row'>
            <div className="general--table-1st">{row.id}</div>
            <div className="general--table-2nd">
                <img className="general--table-row-image" src={img1} alt="Profile" />
                <MicrocopyHeading text={row.first_name + ' ' + row.last_name} />
            </div>
            <div className="general--table-3rd">
                <div className="general--table-bold">{row.primary_role}</div>
                <div>{row.primary_location}</div>
                <div>{formatPhone(row.phone)}</div>
                <div>{row.email}</div>
            </div>
            <div className="general--table-4th">
                <AffinityBars affinities={row.affinities}></AffinityBars>
            </div>
            <div className="general--table-5th">
                <Link to={'/profile'}>
                    <CustomButton icon={'permIdentity'} text={'View Profile'}/>
                </Link>
            </div>
        </div>
    );
};

export const ProfileTable = ({ data, children }) => {

    return (
        <div className="general--table">
            <div className='general--table-head'>
                <div className="general--table-1st">ID</div>
                <div className="general--table-2nd">Name</div>
                <div className="general--table-3rd">Headline</div>
                <div className="general--table-4th">Affinities</div>
                <div className="general--table-5th"></div>
            </div>
            <div className='general--table-body'>
                {
                    data.map((row) => 
                        <TableRow key={row.id} row={row}></TableRow>
                    )
                }
            </div>
        </div>
    );
};

export default ProfileTable;