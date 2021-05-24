import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { StepConnector } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      maxWidth: 1000,
      margin: 'auto'
    },
    heading: {
      textAlign: "center",
      fontFamily: 'MuseoSans-100',
      color: '#969393'
    },
    step: {
        minHeight: 280
    },
    nextButton: {
        borderRadius: 5,
        backgroundColor: '#3f51b5',
        marginLeft: 8,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#6d80e8',
        }
    },
    backButton: {
        borderRadius: 5,
        backgroundColor: '#848484',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#adacac',
        }
    }
  }),
);

export const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(63, 81, 181) 0%, rgb(87, 104, 201) 50%, rgb(117, 128, 191) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(63, 81, 181) 0%, rgb(63, 81, 181) 50%, rgb(63, 81, 181) 100%)',
  },
});

export const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(63, 81, 181) 0%,rgb(87, 104, 201) 50%,rgb(117, 128, 191) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(63, 81, 181) 0%,rgb(63, 81, 181) 50%,rgb(63, 81, 181) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);