import '~/index.css';
import '~/assets/fonts/stylesheet.css';
import { createRoot } from 'react-dom/client';
import React from 'react';

import RootComponent from './RootComponent';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(React.createElement(RootComponent));
