import { Suspense } from 'react';

import styled from 'styled-components';

import { UserList } from 'components/User';

const Div = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export default function User() {
  return (
    <Div>
      <Suspense>
        <UserList />
      </Suspense>
    </Div>
  );
}
