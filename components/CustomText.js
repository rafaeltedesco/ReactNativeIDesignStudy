import React from 'react'
import { Text } from 'react-native'

export const CustomText = ( props )=> {
  return (
    <Text style={
      { color: props.color || '#fff', fontSize: props.fontSize || 18 } 
      }>
      {props.children}
     </Text>
  )
}
