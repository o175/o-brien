import * as React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';
import Grid from './Grid';
import Dialog from './Dialog';
const App = () => <Provider store={store}>
    <div>
        <Dialog />
        <Grid />
    </div>
</Provider>

export default App;
