import React, { useState } from "react";
import { View, TextInput, StyleSheet } from 'react-native';

const SudokuBoard = () => {
    const [board, setBoard] = useState ([
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],


    ]);

    const handleInputChange = (value, row, col) => {
        const updatedBoard = [...board];
        updatedBoard[row][col] = value;
        setBoard(updatedBoard);
    };

    return (
        <View style={styles.board}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, colIndex) => (
                        <TextInput 
                        key={colIndex}
                        style={styles.cell}
                        keyboardType="numeric"
                        maxLength={1}
                        value={cell}
                        onChangeText={(value) => handleInputChange(value, rowIndex, colIndex)}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: { padding: 10 },
    row: { flexDirection: 'row' },
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        width: 40,
        height: 40,
        textAlign: 'center',
        fontSize: 18, 
    },
});

export default SudokuBoard; 
