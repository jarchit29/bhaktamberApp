import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const BottomNav = () => {

const navigation = useNavigation()

  return (
    <View style = {styles.menuContainer}>

      <TouchableOpacity style ={styles.menuButtons} onPress={()=>{navigation.navigate('Bhaktamber Storta')}} >
        <Text>
        Bhaktamber Storta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.menuButtons} onPress={()=>{navigation.navigate('Bhaktamber Path')}} >
        <Text>
        Bhaktamber Path
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({})