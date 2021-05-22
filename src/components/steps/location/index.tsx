import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, Grid } from '@material-ui/core'
import AppContext from '../../../store/context';

const { useContext, useState } = React

const Location = () => {

    const { state, dispatch } = useContext(AppContext);

    const [fromInputValue, setFromInputValue] = useState('')
    const [toInputValue, setToInputValue] = useState('')

    const stations = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']

    const handleUpdateState = (value: any, field: string) => {
        dispatch({
            type: 'SET_ANSWER',
            field: field,
            payload: value || ''
        })
    }

    return (
        <Grid container spacing={3} justify={'center'}>
            <Grid item xs={6}>
                <Autocomplete
                    size={'small'}
                    fullWidth={true}
                    id="from"
                    options={stations}
                    value={state?.answers?.from}
                    autoHighlight
                    getOptionLabel={(option) => option}
                    inputValue={fromInputValue}
                    onInputChange={(event, newInputValue) => {
                        setFromInputValue(newInputValue);
                      }}
                    onChange={(e, value) => handleUpdateState(value, 'from')}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="From"
                            variant="outlined"
                            value={fromInputValue}
                            inputProps={{
                                ...params.inputProps,
                            }}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={6}>
                <Autocomplete
                    size={'small'}
                    fullWidth={true}
                    id="to"
                    options={stations}
                    value={state?.answers?.to}
                    autoHighlight
                    getOptionLabel={(option) => option}
                    inputValue={toInputValue}
                    onChange={(e, value) => handleUpdateState(value, 'to')}
                    onInputChange={(event, newInputValue) => {
                        setToInputValue(newInputValue);
                      }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="To"
                            variant="outlined"
                            value={toInputValue}
                            inputProps={{
                                ...params.inputProps,
                            }}
                        />
                    )}
                />
            </Grid>
        </Grid>
    )
}
export default Location;