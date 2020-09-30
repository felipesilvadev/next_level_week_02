import { StyleSheet } from 'react-native';

import useFonts from '../../assets/fonts/useFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    fontFamily: useFonts.archivoBold,
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: useFonts.poppins,
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  okButtonText: {
    fontFamily: useFonts.archivoBold,
    color: '#fff',
    fontSize: 16
  },
});

export default styles;
