import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { LinkContainer } from "react-router-bootstrap";

//Styling
const styles = theme => ({
  card: {
    width: 'auto',
    minWidth: 150
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'left'
  }
});

  /*
  //This Function will provide all the formatting neccessary for buisness cards to
  //be displayed on the /BusinessChoice page
  //This function is called in SendToBusiness.js and displays multiple cards
  //using information from the database
  */
  function BusinessMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar 
                  src={props.img} className={classes.avatar}>
              </Avatar>
            }
            action={
              props.disabled? null :
              <LinkContainer to="/ConfirmReviewRequest">
                <IconButton color="secondary">
                  <AddIcon />
                </IconButton>
              </LinkContainer>
            }
            title= {props.title}
            subheader= {props.subheader}
          />
          <CardContent>
            <Typography component="h2" variant="h4" align="left" gutterBottom>
              About:
            </Typography>
            <Typography variant="p" align="left" children={props.about} gutterBottom>
            
            </Typography>
            <Typography component="h2" variant="h4" align="left" gutterBottom>
              The Good:
            </Typography>
            <Typography variant="p" align="left" children={props.theGood} gutterBottom>
            
            </Typography>
            <Typography component="h2" variant="h4" align="left" gutterBottom>
              Additional Notes:
            </Typography>
            <Typography variant="p" align="left" children={props.addNotes} gutterBottom>
            
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>

          </CardActions>
          
        </Card>
      );
  }

BusinessMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessMediaCard);