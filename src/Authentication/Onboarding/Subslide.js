import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import {Button} from '../../components';

interface SubslideProps {
  title: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? 'Comencemos' : 'Siguiente'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default Subslide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontFamily:
      Platform.OS == 'ios' ? 'SFProText-Semibold' : 'SF-Pro-Text-Semibold',
    fontSize: 24,
    lineHeight: 38,
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontFamily:
      Platform.OS == 'ios' ? 'SFProText-Regular' : 'SF-Pro-Text-Regular',
    fontSize: 16,
    lineHeight: 25,
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 40,
  },
});
