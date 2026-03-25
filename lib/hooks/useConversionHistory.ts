'use client';

import { useState, useEffect } from 'react';
import { conversionGrapher } from '../graphing';

export type Conversion = {
  category: string;
  value: number;
  from: string;
  to: string;
  result: number;
  date: string;
};

const HISTORY_KEY = 'conversionHistory';

export const useConversionHistory = () => {
  const [history, setHistory] = useState<Conversion[]>([]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Error reading history from localStorage', error);
    }
  }, []);

  const addConversion = (conversion: Omit<Conversion, 'date'>) => {
    try {
      const newConversion = { ...conversion, date: new Date().toISOString() };
      const newHistory = [newConversion, ...history];
      setHistory(newHistory);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      
      // Also add to graphing system
      conversionGrapher.addConversion({
        id: Math.random().toString(36).substr(2, 9),
        fromValue: conversion.value,
        fromUnit: conversion.from,
        toValue: conversion.result,
        toUnit: conversion.to,
        category: conversion.category,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error saving history to localStorage', error);
    }
  };

  return { history, addConversion };
};
