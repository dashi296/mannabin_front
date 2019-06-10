import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.verse.book_title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.verse.book_abbr}
        </Typography>
        <Typography>
          {props.verse.chapter_no+"章"+props.verse.verse_no+"節"}
        </Typography>
        
        <Typography variant="body2" component="p">
          {props.verse.verse_content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function Verses(props){
  let verses = props.verses;

  let listVerses = verses.map((verse) => (
    <SimpleCard verse={verse} key={verse.verse_id} />
  ));

  
  return (
    <div className="verse-list">
      {listVerses}
    </div>
  );
}

export default Verses;