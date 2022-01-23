import React from 'react'
import { View, Text} from 'react-native'
import { CustomText } from './CustomText'

export const PersonPresentation = ()=> {
  return (
    <View style={{ backgroundColor: '#3ba075', zIndex: -1, padding: 10}}>
      <CustomText fontSize={28} color='#fff'>
        AllDevstar
      </CustomText>
      <CustomText fontSize={15} color='#fff'>
        Better Safe than Sorry
      </CustomText>
    </View>
  )
}