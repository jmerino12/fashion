import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Slide, {SLIDE_HEIGTH} from './Slide';
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash';
import Animated from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

interface ComponentNameProps {}

const slides = [
  {label: 'Relaxed', color: '#BFEAF5'},
  {label: 'Playful', color: '#BEECC4'},
  {label: 'Excentric', color: '#FFE4D9'},
  {label: 'Funky', color: '#FFDDDD'},
];

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}>
          {slides.map(({label}, index) => (
            <Slide key={index} rigth={!!(index % 2)} {...{label}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 75,
          }}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGTH,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
export default Onboarding;
