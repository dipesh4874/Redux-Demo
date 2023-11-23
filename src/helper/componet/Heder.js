import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Heder = () => {
  const cardata = useSelector(state => state.Reducers);
  const [dta, setdta] = useState(0);
  useEffect(() => {
    setdta(cardata.length);
  }, [cardata]);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.textstyle}>{dta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right',
    // alignSelf: 'center',
    // padding: 10,
    backgroundColor: 'gold',
  },
});
export default Heder;
