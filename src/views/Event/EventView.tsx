import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { EventContainer } from '~/components/Event';
import { FullHeightGrid } from '~/components/UI';

import { Return } from './EventView.styles';

export const EventView: FC<{}> = () => {
  const { id } = useParams();

  return (
    <FullHeightGrid container alignItems="center" direction="column">
      <Grid item>
        <Return to="/">&lt; Back to all events</Return>
      </Grid>
      <Grid item>
        <EventContainer id={id} />
      </Grid>
    </FullHeightGrid>
  );
};
