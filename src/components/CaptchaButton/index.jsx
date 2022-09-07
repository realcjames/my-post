import { useState, useEffect } from "react"
import { getStore, setStore, clearStore } from "../../utils/store";
import styled from 'styled-components';

export default function CaptchaButton() {
    const [countDownNumber, setCountDownNumber] = useState(10)
    const [isClickable, setIsClickable] = useState(true)
    let timer

    const countDown = () => {
        setIsClickable(false)
        timer = setInterval(() => {
            setCountDownNumber(countDownNumber => {
                if (countDownNumber <= 0) {
                    clearInterval(timer)
                    clearStore('lastSendTime')
                    setIsClickable(true)
                    return 10
                }
                return countDownNumber - 1
            })
        }, 1000)
    }

    useEffect(() => {
        const lastSendTime = getStore('lastSendTime')
        if (lastSendTime) {
            const timeDiff = Math.ceil((Date.now() - lastSendTime) / 1000)
            if (timeDiff < 10) {
                setCountDownNumber(10 - timeDiff)
                countDown()
            }
        }
    }, []);

    const handleButtonClick = () => {
        if (!isClickable) {
            return
        }

        setStore('lastSendTime', Date.now())
        countDown()
    }


    return (
        <WrapperDiv onClick={handleButtonClick} isClickable={isClickable}>
            {isClickable ? '获取' : countDownNumber}
        </WrapperDiv>
    )
}


const WrapperDiv = styled.div`
    position: absolute;
    top: 45px;
    right: 0;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 4px;
    background: ${props => props.isClickable ? '#532BC5' : 'grey'};

    &:hover {
        cursor: ${props => props.isClickable ? 'pointer' : 'not-allowed'};
    }
`