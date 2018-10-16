import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FlippingCard, Front, Back } from './FlippingCard';
import { startEditing } from '../actions'

const CellPrimitive = styled.div`
    border: solid grey;
    background-color: ${props => props.isEditing ? 'yellow' : 'white'};
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

class Cell extends React.Component<{
    number: number,
    name?: string,
    actions?: any,
    isEditing: boolean,
}> {
    startEditing = () => this.props.actions.startEditing(this.props.number);
    render() {
        const props = this.props;
        if (props.isEditing) {
            return <CellPrimitive
                isEditing={props.isEditing}
                onClick={this.startEditing}>
                <CellText>{props.number}</CellText>
            </CellPrimitive>

        } else {
            return props.name ? <FlippingCard onClick={this.startEditing}>
                <Front>
                    <CellText>
                        {props.number}
                    </CellText>
                </Front>
                <Back>
                    <div>{props.name}</div>
                </Back>
            </FlippingCard>
                :
                <CellPrimitive onClick={this.startEditing}>
                    <CellText>{props.number}</CellText>
                </CellPrimitive>

        }

    }
}


export default connect(
    () => { },
    (dispatch: Dispatch) => ({ actions: bindActionCreators({ startEditing }, dispatch) })
)(Cell);
