import { StyleSheet } from 'react-native';

const cookieStyles = StyleSheet.create({
    cookie: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: '180%',
        backgroundColor: '#b46d3c',
        overflow: 'hidden',
      },
      bite: {
        width: '40%',
        height: '30%',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '50%',
        zIndex: 1,
      },
      firstBite: {
        left: '50%',
      },
      secondBite: {
        left: '70%',
        top: '13%',
      },
      chocolateChip: {
        position: 'absolute',
        width: '7%',
        height: '7%',
        backgroundColor: '#38232D',
        borderRadius: '14%',
      },
      chocolateChip1: {
        left: '40%',
        top: '50%',
      },
      chocolateChip2: {
        left: '70%',
        top: '70%',
      },
      chocolateChip3: {
        left: '40%',
        top: '16%',
      },
      chocolateChip4: {
        left: '15%',
        top: '67%',
      },
      chocolateChip5: {
        left: '50%',
        top: '35%',
      },
      chocolateChip6: {
        left: '17%',
        top: '22%',
      },
      chocolateChip7: {
        left: '77%',
      },
});

export default cookieStyles;