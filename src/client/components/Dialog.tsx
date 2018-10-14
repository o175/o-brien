import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as _ from 'lodash';
import { TState, TAssignments } from '../reducers';
import { Button, Row, Input } from './ui';
import styled from 'styled-components';
import { closeEditor, clearCard, editCard } from '../actions';
const StyledDialog = styled.dialog`
    z-index: 3000;
    position: fixed;
    top: 20%;
`
let name = '';
const Dialog = (props: any) =>
    props.state.editingCard !== null ?
        <StyledDialog open id="favDialog">

            <h3>Enter new name</h3>
            <Input onChange={(event) => name = event.target.value} />
            <Row>
                <Button onClick={() => props.actions.editCard(name)} >
                    Save
                </Button>
                <Button onClick={props.actions.clearCard}>Remove</Button>
                <Button onClick={props.actions.closeEditor}>Close</Button>
            </Row>
        </StyledDialog > :
        null

export default connect(
    (state: TState) => ({ state }),
    (dispatch: Dispatch) => ({ actions: bindActionCreators({ closeEditor, clearCard, editCard }, dispatch) })
)(Dialog);
