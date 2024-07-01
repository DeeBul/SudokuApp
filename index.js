/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { View, StyleSheet} from 'react-native';
import SudokuBoard from './components/sudokuBoard';


AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return (
        <View style={styles.container}>
            <SudokuBoard/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default App;
