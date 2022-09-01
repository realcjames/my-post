import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function SaveButton(props) {
    return (
        <WrapperDiv
            className='flex-row justify-center align-center'
            onClick={props.onClick}
        >
            <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' />
            </svg>
            {props.text}
        </WrapperDiv>
    )
}

SaveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const WrapperDiv = styled.div`
    width: 390px;
    height: 48px;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    background: radial-gradient(50% 115.18% at 50% -15.18%, #8F00FF 0%, #532BC5 100%);
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }

    svg {
        margin-right: 10px;
        width: 20px;
        height: 16px;
        fill: #FFFFFF;
    }
`