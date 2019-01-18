import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Poem from './poem';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 380px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const PoemList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable
                    droppableId={this.props.column.id}
                    // type={
                    //     this.props.column.id === 'column-3' ? 'done' : 'active'
                    // }
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <PoemList
                            // innerRef={provided.innerRef}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.poems.map((poem, index) => (
                                <Poem key={poem.id} poem={poem} index={index} />
                            ))}
                            {provided.placeholder}
                        </PoemList>
                    )}
                </Droppable>
            </Container>
        );
    }
}
