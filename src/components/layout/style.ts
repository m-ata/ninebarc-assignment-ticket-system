import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      maxWidth: 800,
      margin: 'auto'
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