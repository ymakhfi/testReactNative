import { RPW } from 'app/config/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 96,
  },
  filterLetters: {
    color: 'black',
    fontSize: RPW(3),
  },
  card: {
    margin: 4,
  },
  content: { flexDirection: 'row', justifyContent: 'space-between' },
  text: {
    backgroundColor: 'red',
  },
});

export default styles;
