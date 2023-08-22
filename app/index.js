import React,{useState} from "react";
import { StyleSheet,Text,View,FlatList, Alert,TouchableWithoutFeedback,Keyboard} from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function App(){

    const [todos,setTodos]=useState([
        {text:"buy cofee",key:'1'},
        {text:"create an app ",key:'2'},
        {text:"play on the switch",key:'3'},
    ])
    const pressHandler =(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo => todo.key != key)
        })
    }
     const submitHandler =(text) =>{
        if(text.length >3){
        setTodos((prevTodos)=>{
             return [{text:text,key:(prevTodos.length +1).toString()},...prevTodos]
        })

     }else{
        Alert.alert("OOPS!",'Todos must be over 3 chars longs',[
            {text:'Understood',onPress:()=>console.log("alert closed")}
        ])
     }

    }
    return(
        
         <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()  }}>
         <View style={styles.container}>
               <Header/>
            <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
             <View style={styles.list}>
             <FlatList
            data={todos}
             renderItem={({ item }) => (
                <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="#333" />  
               <TodoItem item={item} pressHandler ={pressHandler}/>
               </View>
             )}
           />
             </View>
 
            </View>

         </View>
         </TouchableWithoutFeedback>
    ) 
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        padding:40,
        flex:1,
    },
    list:{
       marginTop:20,
       flex:1,// hadi t5li list ta3na tdi ba9i space li kayn oumba3d if lplace jaw fiha bzzf element dir overflow scroll 

    },
    item:{
        flexDirection:'row',
        gap:14,
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
     }
})