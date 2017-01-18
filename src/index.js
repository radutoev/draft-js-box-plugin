import decorateComponentWithProps from 'decorate-component-with-props';
import Box from './Box';
import boxStrategy from './boxStrategy';
import styles from './styles.css';

const defaultTheme = {
  box: styles.box,
};

export default (config = {}) => { 
    const theme = config.theme ? config.theme : defaultTheme;
    const onSelect = config.onSelect ? config.onSelect : null; 

    return {
        decorators: [
            {
                strategy: boxStrategy,
                component: decorateComponentWithProps(Box, { theme, onSelect })     
            }
        ]            
    }
}
