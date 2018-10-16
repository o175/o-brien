import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as _ from 'lodash';
import { TState, TAssignments } from '../reducers';
import { Button, Row, Input } from './ui';
import styled from 'styled-components';
import { closeEditor, clearCard, editCard } from '../actions';

import enhanceWithClickOutside from 'react-onclickoutside';

const StyledDialog = styled.dialog`
    z-index: 3000;
    position: fixed;
    top: 20%;
`

class _Container extends React.Component<{ onClickOutside: any }> {
    handleClickOutside = () => this.props.onClickOutside();
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}
const Container = enhanceWithClickOutside(_Container);

class Dialog extends React.Component<any, { name: string }> {
    state = { name: '' }
    componentDidMount() {
        this.setState({
            name: this.props.state.assignments[this.props.state.editingCard]
        });
        if (this.textInput) {
            console.log(this.textInput)
            this.textInput.focus();
        }
    }
    textInput: any;

    setTextInputRef = (element: any) => this.textInput = element;
    inputRef = React.createRef();
    onChange = (event: any) => this.setState({ name: event.target.value });
    onSave = () => this.props.actions.editCard(this.state.name);

    render() {
        return <StyledDialog open id="favDialog">
            <Container
                stopPropagation={true}
                preventDefault={true}
                onClickOutside={this.props.actions.closeEditor}>
                <h3>Enter new name</h3>
                <Input
                    innerRef={this.setTextInputRef}
                    onChange={this.onChange}
                    value={this.state.name}
                />
                <Row>
                    <Button onClick={this.onSave} >
                        Save
                    </Button>
                    <Button onClick={this.props.actions.clearCard}>
                        Remove
                    </Button>
                    <Button onClick={this.props.actions.closeEditor}>
                        Close
                    </Button>
                </Row>
            </Container>
        </StyledDialog >
    }
}

const DialogWrapper = (props: any) => props.state.editingCard !== null ? <Dialog
    {...props}
/> : null
export default connect(
    (state: TState) => ({ state }),
    (dispatch: Dispatch) => ({ actions: bindActionCreators({ closeEditor, clearCard, editCard }, dispatch) })
)(DialogWrapper);
