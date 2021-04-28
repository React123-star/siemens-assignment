import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';

const useRequest = (input) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult(input.method, input.url, input.params);
  }, [input.method, input.url, input.params]);

  const getResult = async (method, url, params) => {
    const response = await axios[method](BASE_URL + url, params);
    setResult(response.data);
  };

  return [result];
};

export default useRequest;
