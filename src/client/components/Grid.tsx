import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { TState, TAssignments } from '../reducers';
import Cell from './Cell';
import styled from 'styled-components';

const Container = styled.div`
    width: 90vw;
    height: 90vw;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
`;
const Grid = (props: { assignments: TAssignments, editingCard: number }) => <Container>
    {
        _.range(0, 100)
            .map(
                (x) =>
                    <Cell
                        number={x}
                        name={props.assignments[x]}
                        isEditing={props.editingCard === x}
                    />
            )
    }
</Container>

export default connect(
    (state: TState) => ({
        assignments: state.assignments,
        editingCard: state.editingCard,
    }),
)(Grid);
