import { StrictMode } from 'react';
import { render } from 'react-dom';

import Routes from './routes';

render(
    <StrictMode>
        <Routes />
    </StrictMode>,
    document.getElementById('root')
);
