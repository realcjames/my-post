import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const navigate = useNavigate()

    return (
        <Div
            className='flex-row align-center'
            onClick={() => navigate(-1)}
        >
            <svg
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
                style={{

                }}>
                <polygon fillRule='evenodd' points='6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13' />
            </svg>
            Back
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
        fill: #606060
    }
`