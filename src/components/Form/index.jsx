import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import ListTasks from '../ListTasks';
import FormDialog from '../Dialog';
import { useSnackbar } from 'notistack';

const AddNewTask = ({handleRegisterTask}) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [errors, setErros] = useState({
        title: false,
        priority: false,
    });

    const priorities = [
        'Low',
        'Medium',
        'High',
        'Very high',
    ];
    
    const handleChange = (event) => {
        setPriority(event.target.value);
    }

    const handleConfirm = () => {
        if (!title || !priority) {
            setErros({
                title: !title,
                priority: !priority,
            })
            return;
        }

        handleRegisterTask(title, priority);
    }

    return (
        <FormDialog 
            title={'Register task'}
            divOpenModal={
                <Button variant="contained" sx={{ background: '#0B3559'}}>
                    <Add />
                    New Task
                </Button>
            }
            maxWidth={'sm'}
            callback={() => handleConfirm()}
        >
            <Grid container spacing={5} alignItems={'center'}>
                <Grid item xs={12} md={8}>
                    <TextField
                        error={errors && errors.title}
                        helperText={errors && errors.title 
                            ? 'Campo obrigatório' : ''
                        }
                        fullWidth
                        label="Title"
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                        inputProps={{ maxLength: 30 }}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <FormControl fullWidth error={errors && errors.priority}>
                        <InputLabel id="demo-simple-select-label">
                            Priority
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={priority ?? ''}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {priorities?.map((priority, index) => (
                                <MenuItem key={index} value={priority}>
                                    {priority}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText color='red'>
                            {errors && errors.priority 
                                ? 'Campo obrigatório' : ''
                            }
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </FormDialog>
    )
}

const Form = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [tasks, setTasks] = useState({
        todo: [],
        done: [],
    });

    const handleDeleteTask = (indexDelete, type) => {
        let currentTasks = {
            todo: tasks?.todo ?? [],
            done: tasks?.done ?? [],
        };

        const tasksFiltered = currentTasks?.[type].filter((task, index) => 
            index !== indexDelete
        );

        currentTasks[type] = tasksFiltered;

        setTasks(currentTasks);
        enqueueSnackbar('Task deleted successfully', { variant: 'success' });
    }

    const handleCompleteTask = (indexComplete) => {
        const currentTasks = {
            todo: tasks?.todo ?? [],
            done: tasks?.done ?? [],
        };

        const tasksTodo = currentTasks?.todo?.filter((task, index) => 
            index !== indexComplete
        );

        setTasks(prevState => ({
            done: [
                ...prevState.done,
                currentTasks?.todo.find((task, index) => index === indexComplete)
            ],
            todo: tasksTodo
        }));
        enqueueSnackbar('Task completed successfully', { variant: 'success' });
    }

    const handleRegisterTask = (title, priority) => {
        const newTask = {
            title: title,
            priority: priority,
        };

        setTasks(prevState => ({
            done: [...prevState.done],
            todo: [
                ...prevState.todo,
                newTask
            ]
        }));
        enqueueSnackbar('Task registered successfully', { variant: 'success' });
    }

    const ModalRegisterTask = () => (
        <AddNewTask
            handleRegisterTask={handleRegisterTask}
        />
    )

    return (
        <>
            <Box display={'flex'} justifyContent={'end'}>
                <ModalRegisterTask
                    handleRegisterTask={handleRegisterTask}
                />
            </Box>
            <ListTasks
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}
            />
        </>
    )
}

export default Form;