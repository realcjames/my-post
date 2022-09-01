import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function CancelButton() {
    const navigate = useNavigate()

    return (
        <Div
            className='flex-row align-center'
            onClick={() => navigate(-1)}
        >
            <svg viewBox='0 0 36 36'>
                <g id='Layer_1' />
                <g id='icons'>
                    <path className='st0' d='M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z' id='close_1_' />
                </g>
            </svg>
            Cancel
        </Div>
    )
}

const Div = styled.div`
    color: #606060;
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }

    svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        fill: #606060;

        .st0{
            fill:#606060;
        }
        
        .st1{
            fill: none;
            stroke: #606060;
            stroke-width: 2.0101;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
        }
        
        .st2{
            fill:#606060;
        }
        
        .st3{
            fill-rule: evenodd;
            clip-rule: evenodd;
            fill: #606060;
        }
    }
`