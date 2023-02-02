import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface componentNameProps {
  user: User;
}

const UserHolder = ({ user }: componentNameProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: 'https://picsum.photos/200/300?random=' + user.id,
          }}
        />
      </View>

      <View>
        <Text style={styles.firstText}>{user.first_name}</Text>
        <Text style={styles.secondText}> {user.last_name}</Text>
      </View>
    </View>
  );
};

export default UserHolder;
