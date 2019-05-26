import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

const Headers = (props) => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {props.childen}
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default Headers;