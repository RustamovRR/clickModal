import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardActionArea } from '@material-ui/core';

export function CharacterItem({ item }) {

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 100,
            paddingTop: '56.25%',
            objectFit: 'cover'
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        content: {
            display: 'flex',
            flexDirection: 'column'
        }
    }));

    const classes = useStyles();

    return (
        <Card className={classes.root} button>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar} src={item.img} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.name}
                subheader={item.nickname}
            />
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.img}
                    title="Paella dish"
                />
                <CardContent className={classes.content}>
                    <Typography color='textPrimary' variant="body1">Occupation: {item.occupation}</Typography>
                    <Typography color='textPrimary' variant="body2">{`Category: ${item.category}\n`}</Typography>
                    <Typography color='textPrimary' variant="caption">Status: {item.status}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
