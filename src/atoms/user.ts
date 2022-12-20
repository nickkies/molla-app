import axios from 'axios';
import { selector } from 'recoil';

import { API_HOST } from 'constant';

export interface Test {
  test: number;
}

export const fetchTest = selector<Array<Test>>({
  key: 'fetchTest',
  get: async () => {
    const res = await axios.get(`${API_HOST}/`);

    return res.data;
  },
});
