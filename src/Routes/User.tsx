import { Suspense } from 'react';

import { UserList } from 'components/User';

export default function User() {
  return (
    <div>
      <Suspense>
        <UserList />
      </Suspense>
    </div>
  );
}
