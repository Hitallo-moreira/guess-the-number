import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton({ children }) {
  const pressHandler = () => {
    console.log('aaaaa')
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
          style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
          onPress={pressHandler} android_ripple={{ color: ''}}>
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#870848',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
})