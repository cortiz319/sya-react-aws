import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { replySubmissionAction } from "../actions/replySubmissionAction";

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 500,
    width: 500
  }
};

/** The function returns a card that holds all the artist information that 
 * sent art to the business.
 */
function BusinessSubmissionCards(props) {
  const handleReplySubmission = event => {
    props.replySubmission(
      props.date,
      props.artistName,
      props.artTitle,
      props.url,
      props.descript,
      props.businessID,
      props.reviewID
    );
  };

  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.url}
            title={props.artTitle}
            style={styles.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              <strong>Title: </strong>{props.artTitle}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              <strong>Artist: </strong>{props.artistName}
            </Typography>
          </CardContent>
          <CardContent style={{ flex: 1, flexWrap: "wrap", maxWidth: 500 }}>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              <strong>Description: </strong>{props.descript}
            </Typography>
            {props.replied ? (
              <Typography gutterBottom variant="h5" component="h2" align="left">
                <strong>Reply: </strong>{props.reply}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!props.replied ? (
            <LinkContainer to="/ReplySubmission">
              <Button
                size="large"
                align="center"
                fullWidth
                onClick={handleReplySubmission}
              >
                <strong>REPLY</strong>
              </Button>
            </LinkContainer>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
}

BusinessSubmissionCards.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  replySubmission: replySubmissionAction
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(BusinessSubmissionCards));
