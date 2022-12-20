import { useRecoilValue } from 'recoil';

import { fetchTest } from 'atoms/user';

export default function UserList() {
  const users = useRecoilValue(fetchTest);

  return (
    <div>{users && users.map(({ test }) => <div key={test}>{test}</div>)}</div>
  );
}
