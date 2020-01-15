import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '~/components/Layout';
import { EventView } from '~/views/Event';
import { HomeView } from '~/views/Home';

export const Router: FC<{}> = () => {
  return (
    <Suspense fallback={<Layout />}>
      <Layout>
        <Switch>
          <Route path="/event/:id" component={EventView} />
          <Route exact path="/" component={HomeView} />
        </Switch>
      </Layout>
    </Suspense>
  );
};
