import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

interface SlideProps {
  label: string;
  rigth?: Boolean;
}

const Slide = ({label, rigth}: SlideProps) => {
  return (
    <View style={{width}}>
      <Text>{label} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Slide;
