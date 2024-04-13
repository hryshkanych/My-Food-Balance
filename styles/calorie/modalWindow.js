import { StyleSheet, Dimensions } from 'react-native';
import { mainButtonColors, fontColors, gradientEnd } from '../../styles/general';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const modalWindowStyles = StyleSheet.create({

  back: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // rgba значення для кольору з прозорістю
    position: 'absolute', // Позиціонування абсолютне
    },
    
  container: {
    width: windowWidth * 0.8, // Використовуйте 90% ширини екрана
    height: windowHeight * 0.2, // Використовуйте 30% висоти екрана
    borderRadius: 22,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10, // Додайте цю властивість для Android, вона не впливає на iOS
    position: 'absolute', // Позиціонування абсолютне
    top: (windowHeight - (windowHeight * 0.2)) / 2, // Вертикально посередині екрана
    left: (windowWidth - (windowWidth * 0.8)) / 2, // Горизонтально посередині екрана
  },

  headText:{
    fontSize: 16,
    textAlign: 'center',
    color: fontColors.title,
    lineHeight: 24,
},

  buttonsSection:{
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },

  button: {
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: mainButtonColors.smallButtonColor,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: fontColors.placeholder,
  },

});


export default modalWindowStyles;
