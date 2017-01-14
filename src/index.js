import decorateComponentWithProps from 'decorate-component-with-props';
import Box from './Box';
import boxStrategy from './boxStrategy';
import styles from './styles.css';

const defaultTheme = {
  hashtag: styles.hashtag,
};

export default (config = {}) => { 
    const theme = config.theme ? config.theme : defaultTheme;
    return {
        decorators: [
            {
                strategy: boxStrategy,
                component: decorateComponentWithProps(Box, { theme })     
            }
        ]            
    }
}