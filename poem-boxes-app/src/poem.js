import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 8px;
    background-color: ${props =>
        props.isDragDisabled
            ? 'lightgray'
            : props.isDragging
            ? 'lightgreen'
            : 'white'};

    display: flex;
`;

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 4px;
//     background-color: orange;
//     margin-right: 8px;
// `;

export default class Poem extends Component {
    render() {
        const isDragdisabled = this.props.poem.id === 'poem-1';
        return (
            <Draggable
                draggableId={this.props.poem.id}
                index={this.props.index}
                isDragDisabled={isDragdisabled}
            >
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {/* <Handle {...provided.dragHandleProps} /> */}
                        {this.props.poem.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}
