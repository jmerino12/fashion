import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}
const Button = ({variant, label, onPress}: ButtonProps) => {
  const backgroundColor =
    variant == 'primary' ? '#2cb9b0' : 'rgba(12,13,25,0.05)';
  const color = variant == 'primary' ? 'white' : '#0c0d34';
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};
export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontFamily:
      Platform.OS == 'ios' ? 'SFProText-Regular' : 'SF-Pro-Text-Regular',
    textAlign: 'center',
  },
});
