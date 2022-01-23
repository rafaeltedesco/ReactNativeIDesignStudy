import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

import { CustomText } from './CustomText'
import { PersonPresentation } from './PersonPresentation'

const pages = [
  'Settings', 'Profile', 'Tasks'
]

export const Header = ()=> {
  const [activePage, setActivePage] = React.useState(1)

  const changePage = (idx)=> {
    setActivePage(idx)
  }

  return (
    <View style={{ }}>
      <View style={{ backgroundColor: '#5DB075', height: 200}}>
        <View style={{ flexDirection: 'row', padding: 60, justifyContent: 'space-between', alignItems: 'center'}} >
          { pages.map((page, idx) => (
            idx === activePage ? (
              <TouchableOpacity key={idx} onPress={()=>changePage(idx)}>
                <CustomText fontSize={28}> {page}</CustomText>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={idx} onPress={()=>changePage(idx)}>
                <CustomText> { page }</CustomText>
              </TouchableOpacity>
            )
          )
          )}
          
        </View>
        <View style={{position: 'absolute', top: '65%', left: '65%' }}>
          <Image source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg' }} style={{borderWidth: 4, borderColor: '#fff',  width: 120, height: 120, borderRadius: 60 }} />
        </View>
        <PersonPresentation/>
      </View>
     
    </View>
  )
}

