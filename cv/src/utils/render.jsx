import React from 'react';

import Divider from '../components/atoms/divider.jsx';
import { isLastItem } from './utils.js';

export function renderWithDividers(Component, itemIndex, array) {
  return (
    <>
      {Component}
      {!isLastItem(array, itemIndex) && (<Divider />)}
    </>
  );
}
