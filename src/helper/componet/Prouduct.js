import {View, Text, StyleSheet, Image, Button, FlatList} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addtocart} from './reduxs/Action';

const Prouduct = ({props}) => {
  console.log(props, 'helo');
  // const item = props.item;
  const dispatch = useDispatch();
  const handleaddtocart = item => {
    dispatch(addtocart(item));
  };
  return (
    <View>
      <FlatList
        data={props}
        renderItem={({item}) => {
          return (
            <View style={styles.style}>
              <Text style={styles.textstyle}>{item.name}</Text>
              <Text style={styles.textstyle}>{item.price}</Text>
              <Text style={styles.textstyle}>{item.color}</Text>
              <Image source={{uri: item.image}} style={styles.mobileimage} />

              <Button
                title="Add To Cart"
                onPress={() => handleaddtocart(item)}
              />
              <Button title="Remove Cart" />
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    fontWeight: '600',
  },
  mobileimage: {
    width: 100,
    height: 100,
  },
  style: {
    alignItems: 'center',
    borderBottomColor: 'gold',
    borderBottomWidth: 2,
    padding: 5,
  },
});

export default Prouduct;
