import React, { useState } from 'react';
import { collect } from 'react-recollect';

import Container from './components/Container';
import Title from './components/Title';
import Row from './components/Row';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import ListItem from './components/ListItem';
import Grid from './components/Grid';

import {
    addTask,
    handleCompleted,
    completeAll,
} from './updaters';

const App = ({ store }) => {
    const [task, setTask] = useState('');
    const [checked, setChecked] = useState(false);

    const handleCompleteAll = () => {
        completeAll(checked);

        setChecked(!checked);
    }

    return (
        <Container>
            <Title>Recollect DEMO - Todolist</Title>
            <Row>
                <Input
                    value={task}
                    placeholder="Add new task..."
                    onChange={(event) => setTask(event.target.value)}
                />
                <Button onClick={() => addTask(task)}>Add</Button>
            </Row>
            <List>
                {store.tasks.length > 0 && (
                    <ListItem>
                        <Grid align="center" flex="unset">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCompleteAll}
                            />
                        </Grid>
                        <Grid>Select All</Grid>
                    </ListItem>
                )}
                {store.tasks.map((task, index) => (
                    <ListItem key={index} completed={task.completed}>
                        <Grid align="center" flex="unset">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleCompleted(index)}
                            />
                        </Grid>
                        <Grid>{task.text}</Grid>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default collect(App);