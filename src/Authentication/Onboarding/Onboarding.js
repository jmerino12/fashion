import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Slide, {SLIDE_HEIGTH} from './Slide';
import Subslide from './Subslide';
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash';
import Animated, {multiply} from 'react-native-reanimated';
const {width} = Dimensions.get('window');

interface ComponentNameProps {}

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Encuentra tus Outfits',
    description:
      'Confundio acerca de tu outif?, no te precipes, encuentra los mejores outfits aqui.',
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Escuchalo primero, usalo primero',
    description:
      'Estas mirando los outfits de tu armario?, explora cientos de ideas de outfits',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Tu estilo, Tu camino',
    description:
      'Creat tu estilo indiviual y unico, y luce espectacular todos los dias',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Verse bien, sentirse bien',
    description:
      'Descubre las ultimas tendecias en moda y explota tu personalidad',
    color: '#FFDDDD',
  },
];

const BORDER_RADIUS = 75;

const Onboarding = () => {
  const scroll = useRef(null);
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
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}>
          {slides.map(({title}, index) => (
            <Slide key={index} rigth={!!(index % 2)} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{translateX: multiply(x, -1)}],
            },
          ]}>
          {slides.map(({subtitle, description}, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({x: width * (index+ 1), animated: true});
                }
              }}
              last={index === slides.length - 1}
              {...{subtitle, description}}
            />
          ))}
        </Animated.View>
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
export default Onboarding;
