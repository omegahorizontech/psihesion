// React Component
// components/Flow/index.js 

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sankey from './Sankey';
import axios from 'axios';

const Flow = ({ /* 'Props' from paraent component */ }) => {
    const [data, setData] = useState(null);

    let { fileName } = useParams();

    useEffect(() => {
        axios(`http://localhost:5000/sankeys/${fileName}`)
            .then((response) => {
            setData(response.data.data);
            })
            .catch((error) => {
            console.log(error);
            });
        }, []);
      
    return (
        <>
            <div style={{
                "paddingTop": "1rem",
                "fontSize": "2rem"

            }}>
                Sankey Diagram
            </div>
            <div style={{
                "paddingBottom": "2rem"
            }}>
                Click on each bar to view more information about a specific step.
            </div>
            <Sankey data={data} />
        </>
    )

}

export default Flow;