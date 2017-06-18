import React from 'react';
import { View } from 'react-native';

const CardSectionButton = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 12,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSectionButton };
