import { StyleSheet } from 'react-native';

const mainButtonColors = { firstColor: '#92A3FD', secondColor: '#9DCEFF', smallButtonColor: "#EBEEEE"};
const fontColors = { title: '#38232D', subtext: '#7B6F72', placeholder: '#ADA4A5', button: 'white' };
const inputColors = { main: '#F1F1F1', border: '#C4C4C4'};
const gradientEnd = { x: 1, y: 0 };


const generalStyles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      equalizer: {
        paddingHorizontal: 32,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerSection: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 5,
      },
});

export { generalStyles, mainButtonColors, fontColors, inputColors, gradientEnd };