import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function PageHeader(props) {
    return (
        <Div>
            {props.title}
        </Div>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string,
};

const Div = styled.div`
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #1F1F2C;
`
