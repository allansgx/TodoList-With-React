import React from 'react';
import styles from './index.module.css';
import { Box, Card, CardHeader, Divider, Grid, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const ListTasks = ({tasks, handleDeleteTask, handleCompleteTask}) => {

    const colors = {
        'Low': 'borderGreen',
        'Medium': 'borderYellow',
        'High': 'borderRed',
        'Very high': 'borderRed',
    }

    const CardListTasks = ({title, listTasks, type}) => (
        <Grid item xs={12} md={6}>
            <Card>
                <CardHeader
                    sx={{ px: 2, py: 1 }}
                    title={title}
                />
                <Divider />
                <List
                    sx={{
                        height: 430,
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        padding: 2
                    }}
                    dense
                    component="div"
                    role="list"
                >
                    {listTasks?.map((task, index) =>
                        <ListItem
                            key={index}
                            className={
                                `${styles.cardTask} ${styles[colors[task.priority] ?? '']}`
                            }
                            role="listitem"
                        >
                            <ListItemText id={index}>
                                <Typography noWrap={true}>
                                    {task.title}
                                </Typography>
                            </ListItemText>
                            <IconButton onClick={() => handleDeleteTask(index, type)}>
                                <Tooltip title={'Delete'}>
                                    <DeleteIcon />
                                </Tooltip>
                            </IconButton>

                            {type === 'todo' ? (
                                <IconButton onClick={() => handleCompleteTask(index, type)}>
                                    <Tooltip title={'Conclude'}>
                                        <CheckIcon />
                                    </Tooltip>
                                </IconButton>
                            ) : ''}
                        </ListItem>
                    )}
                </List>
            </Card>
        </Grid>
    )

    return (
        <Box marginTop={'5%'}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <CardListTasks
                    title={`To do | ${tasks?.todo?.length ?? 0}`}
                    listTasks={tasks?.todo}
                    type={'todo'}
                />

                <CardListTasks
                    title={`Done | ${tasks?.done?.length ?? 0}`}
                    listTasks={tasks?.done}
                    type={'done'}
                />
            </Grid>
        </Box>
    )
}

export default ListTasks;