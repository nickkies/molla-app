import axios from 'axios';
import { selector } from 'recoil';

export interface Test {
  test: number;
}

export const fetchTest = selector<Array<Test>>({
  key: 'fetchTest',
  get: async () => {
    const res = await axios.get('http://localhost:8080/api/');

    return res.data;
  },
});
