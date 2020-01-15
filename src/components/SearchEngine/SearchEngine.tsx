// @ts-nocheck
import React, { FC, Suspense, useRef, useState } from 'react';

import { EventListContainer } from '~/components/EventList';
import { theme } from '~/lib/style';

import { SearchInput } from './SearchEngine.styles';

export const SearchEngine: FC<{}> = () => {
  const [search, setSearch] = useState<string>('');
  const ref = useRef();

  return (
    <>
      <SearchInput
        placeholder="Search an event"
        variant="outlined"
        InputProps={{
          style: {
            borderRadius: theme.spacing.s5,
          },
        }}
        inputProps={{
          style: {
            color: theme.colors.primaryDark,
          },
        }}
        value={search}
        onChange={e => {
          setSearch(e.currentTarget.value);
        }}
      />
      <Suspense
        fallback={
          <div
            style={{
              height:
                ref && ref.current && ref.current.clientHeight
                  ? ref.current.clientHeight
                  : '100px',
              width: '100%',
            }}
          />
        }
      >
        <div ref={ref}>
          <EventListContainer search={search} />
        </div>
      </Suspense>
    </>
  );
};
