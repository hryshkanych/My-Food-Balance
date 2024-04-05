import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Feather } from '@expo/vector-icons';

const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };

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
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => console.log(`Button pressed in row ${index}`)} style={styles.buttonTrash}>
        <Feather name="trash-2" size={22} color={fontColors.subtext} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#C4C8CC' }}>
        <Row 
          data={tableHead} 
          style={styles.head} 
          flexArr={[3.4, 1.7, 1.7, 1.1]} 
          textStyle={{ ...styles.headerText }}
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
            style={{ backgroundColor: index % 2 ? '#F9FEFF' : '#FFFFF9', ...styles.row }} 
            flexArr={[3.4, 1.7, 1.7, 1.1]}
            textStyle={{ ...styles.text }} 
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: '100%',
  },
  head: {
    backgroundColor: '#FEF4FF',
    flexDirection: 'row' 
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    margin: 6,
    textAlign: 'center',
    fontSize: 14,
    color: fontColors.subtext,
  },
  headerText: {
    margin: 6,
    textAlign: 'center',
    fontSize: 14,
    color: fontColors.title,
    fontWeight: '400'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTrash: {
    height: 45,
    width: 45,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleOne;
