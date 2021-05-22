import * as React from 'react';
import { Container, Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Steps from '../steps'

const { useState } = React

function getSteps(type: string) {
    return ['Name', 'Type', type, 'Where to move', 'When to move', 'Select Ticket'];
  }

const Layout = () => {

    const [localState, setLocalState] = useState({
        activeStep: 0
    });
    const steps = getSteps('test');

    const { activeStep } = localState;

    const handleNext = () => {
        setLocalState(prev => ({...prev, activeStep: activeStep + 1}))
    }

    const handleBack = () => {
        setLocalState(prev => ({...prev, activeStep: activeStep - 1}))
    }

    return (
        <Container>
            <Grid container >
                <Grid item>
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
                <Grid item>
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
    )
}

export default Layout;