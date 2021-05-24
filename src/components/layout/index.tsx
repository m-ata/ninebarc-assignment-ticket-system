import * as React from 'react';
import { Container, Grid, Stepper, Step, StepLabel, Button, Typography, StepIconProps } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Steps from '../steps'
import appReducer from '../../store/reducers';
import AppContext from '../../store/context';
import { initialState } from '../../store/constants';
import Ticket from '../ticket';
import { useStyles, useColorlibStepIconStyles, ColorlibConnector } from './style';
import clsx from 'clsx'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CategoryIcon from '@material-ui/icons/Category';;
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlarmIcon from '@material-ui/icons/Alarm';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

const { useState } = React

const ColorlibStepIcon = (props: StepIconProps) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <AccessibilityIcon />,
    2: <CategoryIcon />,
    3: <LocationOnIcon />,
    4: <AlarmIcon />,
    5: <DirectionsBusIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

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
    dispatch({ type: 'RESET' })
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
    switch (activeStep) {
      case 0:
        return !state?.answers?.name?.trim();
      case 1:
        return (state?.answers?.ticketUsage) < 1 && (state?.answers?.ticketUsage) > 7;
      case 2:
        return !(state?.answers?.from && state?.answers?.to);
      case 4:
        return !state?.ticket?.location;
      default:
        return false
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Container className={classes.layout}>
        <Grid container justify={'center'}>
          <Grid item xs={12}>
            <Typography component={'h2'} variant={'h2'} className={classes.heading} >
              Hello
            </Typography>
            <Typography component={'h4'} variant={'h4'} className={classes.heading}>
              What do you want to explore ?
            </Typography>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={12}>
            <Stepper connector={<ColorlibConnector />} alternativeLabel activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
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
          <Button disabled={handleDisableNext()} className={classes.nextButton} onClick={handleNext}> {activeStep === finalStep ? 'Finish' : 'Next'} </Button>
        </Grid>
      </Container>
      {
        isRenderTicket && <Ticket resetState={handleReset} />
      }
    </AppContext.Provider>

  )
}

export default Layout;