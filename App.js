import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Prouduct from './src/helper/componet/Prouduct';
import {Provider} from 'react-redux';
import store from './src/helper/componet/reduxs/Store';
import {products} from './src/helper/Dummy';
import Heder from './src/helper/componet/Heder';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Heder />
        <Prouduct props={products} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
