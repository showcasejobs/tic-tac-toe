import { lazy, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Loading from 'pages/loading';
const NotFound = lazy(() => import('pages/not-found'));
const TicTacToe = lazy(() => import('pages/tic-tac-toe'));

const Routes = () => (
    <Suspense fallback={<Loading/>}>
        <BrowserRouter>
            <Switch>
                <Route path='/tic-tac-toe'>
                    <TicTacToe />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    </Suspense>
);

export default Routes;
