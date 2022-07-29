import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button';
function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Çiçek Fitness Salonu</Text>
      <Button text="Üye kaydı olustur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
