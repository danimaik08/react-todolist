import '~/index.css';
import '~/assets/fonts/stylesheet.css';
import { createRoot } from 'react-dom/client';
import React from 'react';

import RootComponent from './components/App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('div with id="root" not found');
}

const container = createRoot(root);

container.render(React.createElement(RootComponent));
