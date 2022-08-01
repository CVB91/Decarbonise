import React, { useState, useEffect } from 'react';
import { getData } from './GetData';

function useA() {
  const [valueA, setValueA] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [loadingA, setLoadingA] = useState(true);
  async function getA() {
    try {
      setLoadingA(true);
      const valueA = await getData();
      setValueA(valueA.filter((el) => el.name != null));
    } catch (e) {
      setErrorA(e);
    } finally {
      setLoadingA(false);
    }
  }
  useEffect(() => {
    getA();
  }, []);

  return [valueA, errorA, loadingA]; // highlight-line
}

export function HandleAirportFetch() {
  const [valueA, errorA, loadingA] = useA(); // highlight-line
  if (errorA) return 'Failed to load resource A';
  return loadingA ? 'Loading...' : valueA;
}
