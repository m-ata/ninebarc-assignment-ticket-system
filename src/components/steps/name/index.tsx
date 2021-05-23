import * as React from 'react';
import { TextField, Grid, FormControl, FormLabel } from '@material-ui/core';
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
        <Grid container justify={'center'}>
            <FormControl component="fieldset">
                <FormLabel component="legend"> What is your name ? </FormLabel>
                <TextField size={'small'} style={{marginTop: 8}} variant={'outlined'} id="name" type="text" value={state?.answers?.name} onChange={handleChange} />
            </FormControl>
        </Grid>
    )
}
export default Name;