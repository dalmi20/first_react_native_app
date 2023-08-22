import React from 'react'
import { StyleSheet,Text,View ,TouchableOpacity} from "react-native";
export default function TodoItem({item,pressHandler}) {
  return (
   <TouchableOpacity onPress={ ()=>{pressHandler(item.key)} }>
    <Text>{item.text}</Text>
   </TouchableOpacity>
  )
}
 const styles = StyleSheet.create({
   
 })
