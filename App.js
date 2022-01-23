import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Header } from './components/Header'

const Options = ()=> {
  const [activeOption, setActiveOption] = React.useState(1)
  const options = [
    'Posts', 'Photos'
  ]

  const changeOption = (idx)=> {
    setActiveOption(idx)
  }

  return (
    <View style={{ flex: 1, marginTop: 80, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#e7e7e7', width: '80%', borderWidth: 0.3, borderRadius: 2, borderColor: '#888', height: 50}}>
        {
          options.map((option, idx)=> (
            idx === activeOption ? (
              <TouchableOpacity onPress={()=> changeOption(idx)} key={idx} style={{ backgroundColor: '#ccc', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{option}</Text>    
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={()=> changeOption(idx)} key={idx} style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{option}</Text>    
              </TouchableOpacity>
            )
          ))
        }
        
      </View>
    </View>
  )
}


export default function App() {
  return ( 
    <View style={styles.container}>
      <Header />
      <Options />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
});
