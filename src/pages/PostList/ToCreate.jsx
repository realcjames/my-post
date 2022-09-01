import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export default function ToCreate() {
    const navigate = useNavigate()

    return (
        <WrapperDiv onClick={() => navigate('add')}>
            new
        </WrapperDiv>
    )
}

const WrapperDiv = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 4px;
    background: #532BC5;

    &:hover {
        cursor: pointer;
    }
`