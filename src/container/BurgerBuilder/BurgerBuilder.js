import React, { Component } from 'react';

import Aux from '../../hoc/wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {  }
    render() { 
        return ( 
            <Aux>
                <Burger/>
                <div>
                    Build Controls
                </div>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;