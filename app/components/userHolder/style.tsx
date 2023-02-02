import { RPH, RPW } from 'app/config/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: RPH(2),
  },
  userAvatar: {
    height: RPW(10),
    width: RPW(10),
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 1,
  },
  imageContainer: {
    // height: RPW(10),
    // width: RPW(10),
    marginHorizontal: RPW(4),
  },
  firstText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RPW(3.5),
    marginBottom: RPW(2),
  },
  secondText: {
    color: 'grey',
    //fontWeight: 'bold',
    fontSize: RPW(3),
  },
});
