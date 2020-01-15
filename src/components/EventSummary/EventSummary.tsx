import React, { FC } from 'react';
import moment from 'moment';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Avatar, Card } from '~/components/UI';
import { useIcon } from '~/lib/hooks';
import { Event as IEvent } from '~/lib/interfaces';

import { Container } from './EventSummary.styles';

export const EventSummary: FC<Partial<IEvent>> = ({
  id,
  comments,
  creator,
  guests,
  location,
  time,
  title,
  type,
  ...rest
}) => {
  const icon = useIcon(type);
  return (
    <Container to={`event/${id}`} {...rest}>
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
    </Container>
  );
};
