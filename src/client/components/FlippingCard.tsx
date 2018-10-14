import * as React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
    perspective: 1000;
    z-index: 1;
    display: flex;
    position: relative;
`
const InnerContainer = styled.div`
    border: solid green;
    position: relative;
    display: inline-block;
    flex-grow: 1;
    transform-style: preserve-3d;
    transition: all 0.1s linear;
    ${OuterContainer}:hover & {
    transform: rotateY(180deg);
    }
`;

export const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #BFB;
    backface-visability: hidden;
`

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visability: hidden;
    transform: rotateY(180deg);
    color: white;
    background-color: #aaa;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    text-align: center;
`

export const FlippingCard = (props: { onClick?: any, children: any }) =>
    <OuterContainer onClick={props.onClick}>
        <InnerContainer>
            {props.children}
        </InnerContainer>
    </OuterContainer>
