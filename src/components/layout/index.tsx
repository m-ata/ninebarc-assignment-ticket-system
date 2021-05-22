import * as React from 'react';
import { Container, Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Steps from '../steps'
import appReducer from '../../store/reducer';
import AppContext from '../../store/context';
import { initialState } from '../../store/constants';

const { useState, useEffect } = React

function getSteps() {
    return ['Name', 'Type', 'Where to move', 'When to move', 'Select Ticket'];
}

const Layout = () => {

    const [state, dispatch] = React.useReducer(appReducer, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    const [localState, setLocalState] = useState({
        activeStep: 0
    });
    const steps = getSteps();

    const { activeStep } = localState;

    const handleNext = () => {
        setLocalState(prev => ({ ...prev, activeStep: activeStep + 1 }))
    }

    const handleBack = () => {
        setLocalState(prev => ({ ...prev, activeStep: activeStep - 1 }))
    }

    return (
        <AppContext.Provider value={{state,dispatch}}>
            <Container>
                <Grid container >
                    <Grid item xs={12}>
                        <Stepper alternativeLabel activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Steps activeStep={activeStep} />
                    </Grid>
                </Grid>
                <Grid container>
                    {
                        activeStep > 0 && <Button onClick={handleBack}> Back </Button>
                    }
                    <Button onClick={handleNext}> Next </Button>
                </Grid>
            </Container>
        </AppContext.Provider>

    )
}

export default Layout;