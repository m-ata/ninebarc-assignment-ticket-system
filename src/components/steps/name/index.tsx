import * as React from 'react';
import { TextField, Grid, FormControl } from '@material-ui/core';
import AppContext from '../../../store/context';

const { useContext } = React

const Name = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        dispatch({
            type: 'SET_ANSWER',
            field: 'name',
            payload: event.target.value
        })
    }

    return (
        <Grid container>
            <FormControl component="fieldset">
                <TextField size={'small'} variant={'outlined'} id="name" type="text" value={state?.answers?.name} onChange={handleChange} />
            </FormControl>
        </Grid>
    )
}
export default Name;