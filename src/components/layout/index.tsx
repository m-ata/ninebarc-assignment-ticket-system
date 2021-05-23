import * as React from 'react';
import { Container, Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Steps from '../steps'
import appReducer from '../../store/reducers';
import AppContext from '../../store/context';
import { initialState } from '../../store/constants';
import Ticket from '../ticket';
import { useStyles } from './style';

const { useState } = React

function getSteps() {
    return ['Name', 'Type', 'Where to move', 'When to move', 'Select Ticket'];
}

const Layout = () => {

    const [state, dispatch] = React.useReducer(appReducer, initialState);

    const [localState, setLocalState] = useState({
        activeStep: 0,
        isRenderTicket: false,
    });

    const classes = useStyles();

    const finalStep = 4;
    const steps = getSteps();

    const { activeStep, isRenderTicket } = localState;

    const handleReset = () => {
        setLocalState(prev => ({ ...prev, isRenderTicket: false, activeStep: 0 }));
        dispatch({type: 'RESET'})
    }

    const handleNext = () => {
        if (activeStep === finalStep) {
            setLocalState(prev => ({ ...prev, isRenderTicket: true }))
        } else {
            setLocalState(prev => ({ ...prev, activeStep: activeStep + 1 }))
        }
    }

    const handleBack = () => {
        setLocalState(prev => ({ ...prev, activeStep: activeStep - 1 }))
    }

    const handleDisableNext = () => {
        switch(activeStep) {
            case 0:
                return !state?.answers?.name?.trim();
            case 2:
                return !(state?.answers?.from && state?.answers?.to);
            case 4:
                return !state?.ticket?.location;
            default:
                return false
        }
    }

    return (
        <AppContext.Provider value={{state,dispatch}}>
            <Container className={classes.layout}>
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
                <Grid container className={classes.step} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                        <Steps activeStep={activeStep} />
                    </Grid>
                </Grid>
                <Grid container justify={'flex-end'}>
                    {
                        activeStep > 0 && <Button className={classes.backButton} onClick={handleBack}> Back </Button>
                    }
                    <Button disabled={handleDisableNext()} className={classes.nextButton} onClick={handleNext}> {activeStep === finalStep ?  'Finish' : 'Next'} </Button>
                </Grid>
            </Container>
            {
                isRenderTicket && <Ticket resetState={handleReset} />
            }
        </AppContext.Provider>

    )
}

export default Layout;