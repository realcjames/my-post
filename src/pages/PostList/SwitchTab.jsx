import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SwitchTab(props) {
    // todo 吸顶

    return (
        <WrapperDiv className='flex-row'>
            <LeftDiv className='flex-row justify-center align-center'>
                Settings
            </LeftDiv>
            <RightDiv className='flex-row justify-center align-center'>
                Posts
                <div className='post-count'>
                    {props.postCount}
                </div>
            </RightDiv>
        </WrapperDiv>
    )
}

SwitchTab.propTypes = {
    postCount: PropTypes.number,
};
SwitchTab.defaultProps = {
    postCount: 0,
};

const WrapperDiv = styled.div`
    margin-top: 48px;
    height: 40px;
    font-size: 14px;

    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const LeftDiv = styled.div`
    flex: 1;    
    color: #606060;
    border-radius: 5px 0 0 5px;
`

const RightDiv = styled.div`
    flex: 1;
    color: #FFFFFF;
    background: #532BC5;
    border-radius: 0 5px 5px 0;

    .post-count {
        margin-left: 10px;
        width: 24px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: #532BC5;
        background: #FFFFFF;
        border-radius: 10px;
    }
`