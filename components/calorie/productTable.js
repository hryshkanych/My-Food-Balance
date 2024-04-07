import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Feather } from '@expo/vector-icons';
import productTableStyles from '../../styles/calorie/productTable';
import { fontColors } from '../../styles/general';

const ExampleOne = () => {
  const tableHead = ['Product Name', 'Weight (gramm)', 'Calories', ''];
  const tableData = [
    ['Tomato', '200', '200', ''],
    ['Cucumber', '400', '254', ''],
    ['Pasta', '500', '345', ''],
    ['Olives', '100', '235', ''],
    ['Tomato', '200', '200', ''],
    ['Cucumber', '400', '254', ''],
    ['Pasta', '500', '345', ''],
    ['Olives', '100', '235', ''],
    ['Tomato', '200', '200', ''],
    ['Cucumber', '400', '254', ''],
    ['Pasta', '500', '345', ''],
    ['Olives', '100', '235', '']
  ];

  const renderTrashButton = (index) => (
    <View style={productTableStyles.buttonContainer}>
      <TouchableOpacity onPress={() => console.log(`Button pressed in row ${index}`)} style={productTableStyles.buttonTrash}>
        <Feather name="trash-2" size={22} color={fontColors.subtext} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={productTableStyles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#C4C8CC' }}>
        <Row 
          data={tableHead} 
          style={productTableStyles.head} 
          flexArr={[3.4, 1.7, 1.7, 1.1]} 
          textStyle={{ ...productTableStyles.headerText }}
        />
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData.map((cellData, cellIndex) => {
              if (cellIndex === rowData.length - 1) {
                return renderTrashButton(index);
              }
              return cellData;
            })}
            style={{ backgroundColor: index % 2 ? '#F9FEFF' : '#FFFFF9', ...productTableStyles.row }} 
            flexArr={[3.4, 1.7, 1.7, 1.1]}
            textStyle={{ ...productTableStyles.text }} 
            height={null} 
            minHeight={30} 
            paddingTop={8}
            paddingBottom={8}
            justifyContent='center' 
          />
        ))}
      </Table>
    </View>
  );
}

export default ExampleOne;
