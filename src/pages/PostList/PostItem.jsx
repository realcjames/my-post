import styled from 'styled-components';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

export default function PostItem(props) {
    const { post } = props

    const handleEditBtnClick = () => {
        if (!post.isEditable) {
            return
        }

        props.handleEditBtnClick(post)
    }

    const handleDeleteBtnClick = () => {
        if (!post.isDeletable) {
            return
        }

        props.handleDeleteBtnClick(post.id)
    }

    const createMarkup = () => {
        return { __html: post.content };
    }

    return (
        <WrapperDiv>
            <Header className='flex-row align-center' isEditable={post.isEditable} isDeletable={post.isDeletable}>
                <div className='post-title'>{post.title}</div>
                <div className='middle-line' />
                <div className='edit-button' onClick={handleEditBtnClick}>
                    <svg height='18px' version='1.1' viewBox='0 0 18 18' width='18px'>
                        <g fill='none' fillRule='evenodd' id='Page-1' stroke='none' strokeWidth='1'>
                            <g fill='#FFFFFF' id='Core' transform='translate(-213.000000, -129.000000)'>
                                <g id='create' transform='translate(213.000000, 129.000000)'>
                                    <path d='M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z' id='Shape' />
                                </g>
                            </g>
                        </g>
                    </svg>
                    Edit
                </div>
                <div className='right-line' />
                <div className='del-button' onClick={handleDeleteBtnClick}>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                        <g>
                            <rect className='cls-1' height='22' width='18' x='7' y='7' />
                            <line className='cls-1' x1='3' x2='29' y1='7' y2='7' />
                            <line className='cls-1' x1='13' x2='19' y1='3' y2='3' />
                            <line className='cls-1' x1='13' x2='13' y1='12' y2='22' />
                            <line className='cls-1' x1='19' x2='19' y1='12' y2='22' />
                        </g>
                    </svg>
                </div>
            </Header>
            <Content>
                <div
                    style={{
                        wordBreak: 'break-all'
                    }}
                    dangerouslySetInnerHTML={createMarkup()}
                />
                <Footer>
                    {dayjs(post.createTime).format('MMM D, YYYY HH:mm ')}
                </Footer>
            </Content>
        </WrapperDiv>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
};

const WrapperDiv = styled.div`
    margin-top: 56px;
`

const Header = styled.div`
    .post-title {
        height: 32px;
        line-height: 32px;
        padding-left: 16px;
        padding-right: 16px;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        background: radial-gradient(50% 115.18% at 50% -15.18%, #8F00FF 0%, #532BC5 100%);
        border-radius: 16px;
    }

    .middle-line {
        flex: 1;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
    }

    .edit-button {
        height: 26px;
        line-height: 26px;
        padding-left: 16px;
        padding-right: 16px;
        text-align: center;
        font-size: 12px;
        color: #FFFFFF;
        background: ${props => props.isEditable ? '#532BC5' : '#C4C4C4'};    
        border-radius: 16px;

        &:hover {
            cursor: pointer;
        }

        svg {
            margin-right: 6px;
            width: 12px;
            height: 12px;
            fill: '#FFFFFF';
        }
    }

    .right-line {
        width: 8px;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
    }

    .del-button {
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background: ${props => props.isDeletable ? '#FF002E' : '#C4C4C4'};
        border-radius: 26px;

        &:hover {
            cursor: pointer;
        }

        svg {
            width: 12px;
            height: 14px;

            .cls-1 {
                fill: none;
                stroke: #FFFFFF;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2px;
            }
        }
    }
`
const Content = styled.div`
    padding: 25px 25px 0 25px;
`

const Footer = styled.div`
    margin-top: 24px;
    font-size: 14px;
    color: #818181;
`