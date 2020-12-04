import React from 'react';

import Aux from '../../hoc/wrapper';
import classes from './layout.css';

const Layout=(props)=>(

    <Aux>
        <div>ToolBar,SideDrawer,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;