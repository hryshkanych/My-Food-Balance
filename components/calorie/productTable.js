
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Feather } from '@expo/vector-icons';
import productTableStyles from '../../styles/calorie/productTable';
import { fontColors } from '../../styles/general';

const ProductTable = ({ tableData, setTableData, setTotalCalories, totalCalories }) => {
    const renderTrashButton = (index) => (
        <View style={productTableStyles.buttonContainer}>
            <TouchableOpacity onPress={() => handleRemoveProduct(index)} style={productTableStyles.buttonTrash}>
                <Feather name="trash-2" size={22} color={fontColors.subtext} />
            </TouchableOpacity>
        </View>
    );

    const handleRemoveProduct = (index) => {
        const [productName, gramm, calories] = tableData[index];
        const newTableData = [...tableData];
        newTableData.splice(index, 1);
        setTableData(newTableData);
        const removedCalories = parseInt(calories);
        setTotalCalories(totalCalories - removedCalories);
    };

    return (
        <View style={productTableStyles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#C4C8CC' }}>
                <Row 
                    data={['Product Name', 'Weight (gramm)', 'Calories', '']} 
                    style={productTableStyles.head} 
                    flexArr={[3.4, 1.7, 1.7, 1.1]} 
                    textStyle={{ ...productTableStyles.headerText }}
                />
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={[
                            rowData[0], // Product Name
                            rowData[1], // Weight (gramm)
                            rowData[2], // Calories
                            renderTrashButton(index), // Trash button
                        ]}
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

export default ProductTable;
