import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { FullHeightGrid } from '~/components/UI';
import { EventListContainer } from '~/components/EventList';
import { SearchEngine } from '~/components/SearchEngine';
import { theme } from '~/lib/style';

export const HomeView: FC<{}> = () => {
  return (
    <FullHeightGrid container justify="center" alignItems="center">
      <Grid item xs={10} sm={8} md={6}>
        <FullHeightGrid
          container
          justify="space-between"
          direction="column"
          wrap="nowrap"
          spacing={4}
        >
          <Grid item style={{ marginTop: theme.spacing.s20 }}>
            <EventListContainer onMap />
          </Grid>
          <Grid item>
            <SearchEngine />
          </Grid>
        </FullHeightGrid>
      </Grid>
    </FullHeightGrid>
  );
};
