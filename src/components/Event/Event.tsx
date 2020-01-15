import React, { FC } from 'react';
import moment from 'moment';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Avatar, Card } from '~/components/UI';
import { useIcon } from '~/lib/hooks';
import { Event as IEvent } from '~/lib/interfaces';
import { theme } from '~/lib/style';

export const Event: FC<IEvent> = ({
  id,
  time,
  title,
  creator,
  guests,
  type,
  location,
  comments,
  ...rest
}) => {
  const icon = useIcon(type);
  return (
    <div {...rest}>
      <Card>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={3}>
              <img src={icon} alt={type} title={type} height="80" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body2">{location.name}</Typography>
              <Typography variant="subtitle1">
                {moment(time).format('L')} @ {moment(time).format('LT')}
              </Typography>
              <br />
              <Typography variant="body1">
                People coming:
                {guests.map((guest, index) => (
                  <div key={index}>
                    <em>{guest.name}</em>
                  </div>
                ))}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                src={creator.avatarUrl}
                title={creator.name}
                alt={creator.name}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div>
        {comments.map((comment, index) => (
          <div style={{ marginTop: theme.spacing.s4 }} key={index}>
            <Typography variant="subtitle2" component="span">
              {comment.user.name} - &nbsp;
            </Typography>
            <Typography variant="subtitle2" component="span">
              {moment(comment.timestamp).format('L')} @
              {moment(comment.timestamp).format('LTS')}
            </Typography>
            <Typography>&gt;&nbsp;{comment.message}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
