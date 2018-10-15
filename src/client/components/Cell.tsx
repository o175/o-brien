import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FlippingCard, Front, Back } from './FlippingCard';
import { startEditing } from '../actions'

const CellPrimitive = styled.div`
    border: solid grey;
    cursor: pointer;
`;

const CellText = styled.div`
margin-left: auto;
margin-right: auto;
    position: relative;
    top: 50%;
    font-size: 40px;
    text-align: center;
    vertical-align: middle;
    transform: translateY(-50%);
`

const Cell = (props: {
    number: number,
    name?: string,
    actions?: any,
}) => props.name ? <FlippingCard onClick={() => props.actions.startEditing(props.number)}>
    <Front>
        <CellText>
            {props.number}
        </CellText>
    </Front>
    <Back>
        <div>{props.name}</div>
    </Back>
</FlippingCard> :
        <CellPrimitive
            onClick={() => props.actions.startEditing(props.number)}
        >
            <CellText>{props.number}</CellText>
        </CellPrimitive>

export default connect(
    () => { },
    (dispatch: Dispatch) => ({ actions: bindActionCreators({ startEditing }, dispatch) })
)(Cell);
