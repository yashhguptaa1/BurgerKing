import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

// for class based components we use this.props instead of props like for function components
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}>bread bottom shown</div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        BreadTop shown
                        <div className={classes.Seeds1}>Seeds1 shown</div>
                        <div className={classes.Seeds2}>Seeds2 shown</div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}>meat shown</div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}>cheese shown</div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return (
            ingredient
        );
    }
}
//can also be added in same way to functional component
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;