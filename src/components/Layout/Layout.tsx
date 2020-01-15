import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { FullHeightGrid } from '~/components/UI';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout: FC<{}> = ({ children }) => {
  return (
    <FullHeightGrid
      container
      justify="space-between"
      direction="column"
      wrap="nowrap"
    >
      <Grid item>
        <Header />
        <div>{children}</div>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </FullHeightGrid>
  );
};
