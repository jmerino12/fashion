import React from 'react';
import {View, Text, Dimensions, StyleSheet, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGTH = 0.61 * height;

interface SlideProps {
  label: string;
  rigth?: Boolean;
}

const Slide = ({label, rigth}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGTH - 100) / 2},
    {translateX: rigth ? width / 2 - 50 : -width / 2 + 50},
    {rotate: rigth ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 80,
    fontFamily: Platform.OS == 'ios' ? 'SFProText-Bold' : 'SF-Pro-Text-Bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});
export default Slide;
