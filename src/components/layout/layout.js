import React from 'react';

import Aux from '../../hoc/wrapper';
import classes from './Layout.module.css';
import BurgerBuilder from '../../container/BurgerBuilder/BurgerBuilder'

const Layout=(props)=>(

    <Aux>
        <div>ToolBar,SideDrawer,Backdrop</div>
        <main className={classes.Content}>
            {/*props.children*/
            <BurgerBuilder/>
            }
        </main>
    </Aux>
);

export default Layout;