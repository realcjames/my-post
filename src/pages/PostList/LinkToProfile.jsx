import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function LinkToProfile(props) {
    const handleCopy = () => {
        // TODO
    }

    return (
        <WrapperDiv className='flex-row'>
            <LeftDiv className='flex-row justify-center align-center'>
                <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z' />
                </svg>
            </LeftDiv>
            <RightDiv className='flex-column justify-center'>
                <span>link to your profile</span>
                <div className='flex-row align-center'>
                    {props.link}
                    <svg height='48' viewBox='0 0 48 48' width='48' xmlns='http://www.w3.org/2000/svg' onClick={handleCopy}>
                        <path d='M0 0h48v48h-48z' fill='none' />
                        <path d='M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z' />
                    </svg>
                </div>
            </RightDiv>
        </WrapperDiv>
    )
}

LinkToProfile.propTypes = {
    link: PropTypes.string.isRequired,
};

const WrapperDiv = styled.div`
    margin-top: 48px;
    width: 800px;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

const LeftDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 5px 0 0 5px;
    background: radial-gradient(84.9% 100% at 50% 0%, #8F00FF 0%, #532BC5 100%);

    svg {
        width: 36.33px;
        height: 36.33px;
        fill: white;
    }
`

const RightDiv = styled.div`
    padding: 32px;

    span {
        font-size: 12px;
        color: #606060;
    }

    div {
        margin-top: 10px;
        font-weight: 500;
        font-size: 16px;
        color: #1F1F2C;
    }

    svg {
        margin-left: 12px;
        width: 19px;
        height: 22px;

        &:hover {
            cursor: pointer;
        }
    }
`