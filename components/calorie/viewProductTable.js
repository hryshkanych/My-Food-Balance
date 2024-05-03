import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Feather } from '@expo/vector-icons';
import productTableStyles from '../../styles/calorie/productTable';
import { fontColors } from '../../styles/general';

const ViewProductTable = ({tableData}) => {
    console.log('Table data:', tableData); 

    return (
        <View style={productTableStyles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#C4C8CC' }}>
                <Row 
                    data={['Product Name', 'Weight (gramm)', 'Calories']} 
                    style={productTableStyles.head} 
                    flexArr={[3.4, 1.7, 1.7]} 
                    textStyle={{ ...productTableStyles.headerText }}
                />
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={[
                            rowData.name, 
                            rowData.weight, 
                            rowData.calories, 
                        ]}
                        style={{ backgroundColor: index % 2 ? '#F9FEFF' : '#FFFFF9', ...productTableStyles.row }} 
                        flexArr={[3.4, 1.7, 1.7]}
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

export default ViewProductTable;
