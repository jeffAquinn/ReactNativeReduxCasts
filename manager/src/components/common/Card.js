import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#B4B3B3',
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
