import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
    display: flex;
`;
class App extends Component {
    state = initialData;

    onDragStart = start => {
        const homeIndex = this.state.columnOrder.indexOf(
            start.source.droppableId
        );

        this.setState({ homeIndex });
    };

    // onDragStart = () => {
    //     document.body.style.color = 'orange';
    //     document.body.style.transition = 'background-color 0.2s ease';
    // };

    // onDragUpdate = update => {
    //     const { destination } = update;
    //     const opacity = destination
    //         ? destination.index / Object.keys(this.state.poems).length
    //         : 0;
    //     document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
    // };

    onDragEnd = result => {
        // document.body.style.color = 'inherit';
        // document.body.style.backgroundColor = 'inherit';

        this.setState({ homeIndex: null });
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newPoemIds = Array.from(start.poemIds);
            newPoemIds.splice(source.index, 1);
            newPoemIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                poemIds: newPoemIds
            };

            const newState = {
                ...this.state,
                column: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);
        }

        //Moving from one list to another
        const startPoemIds = Array.from(start.poemIds);
        startPoemIds.splice(source.index, 1);
        const newStart = {
            ...start,
            poemIds: startPoemIds
        };
        const finishPoemIds = Array.from(finish.poemIds);
        finishPoemIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            poemIds: finishPoemIds
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };
        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                // onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Container>
                    {this.state.columnOrder.map((columnId, index) => {
                        const column = this.state.columns[columnId];
                        const poems = column.poemIds.map(
                            poemId => this.state.poems[poemId]
                        );
                        const isDropDisabled = index < this.state.homeIndex;
                        return (
                            <Column
                                key={column.id}
                                column={column}
                                poems={poems}
                                isDropDisaabled={isDropDisabled}
                            />
                        );
                    })}
                </Container>
            </DragDropContext>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
