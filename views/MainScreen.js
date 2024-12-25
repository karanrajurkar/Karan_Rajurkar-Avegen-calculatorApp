import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import styles from './MainScreenstyle'
import { ScrollView } from 'react-native';

//import { ScrollView } from 'react-native';
const MainScreen = () => {

    const [value,setvalue]=useState('0')
    const [bracketopen,setBracketopen]=useState(false)
    const ScrollViewRef =useRef()
    
    const handelPress=(val)=>
    {
        console.log('pressed', val)

        if(val== 'AC')
        {
            setvalue(0);
        }
        else if(val== '=')
        {
            try{
                if((value.match(/\(/g) || []).length == (value.match(/\)/g) ||[]).length)
                {
                    // console.log('equal brackets')
                    if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='*' || value.slice(-1)=='/' || value.slice(-1)=='.' || value.slice(-1)=='%')
                    {
                        setvalue(`${eval(value.replace('()','(0)').slice(0,-1))}`)
                    }
                    else{
                        setvalue(`${eval(value.replace('()','(0)'))}`)
                    }
                }
                // else{
                //     console.log('unequal brackets')
                // }
            }
            catch(e)
            {
                setvalue('Format Error')
            }
        }
        else if(val== 'back')
        {
            setvalue(value.slice(0,-1))    
        }
        else if(val== '()')
        {
            if(value=='0')
            {
                setvalue('(')
                setBracketopen(true)
            }
            else if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='*' || value.slice(-1)=='/' || value.slice(-1)=='.' || value.slice(-1)=='%')
            {
                setvalue(value + '(')
                setBracketopen(true)
            }
            else{
                if(bracketopen==true)
                {
                    setvalue(value + ')')
                    setBracketopen(false)
                }
                else{
                    setvalue(value + '(')
                    setBracketopen(true)
                }
            }
        }
        else if(value=='Format Error')
        {
            setvalue(val)
        }
        else
        {
            if(value=='0')
            {
                if(isNaN(val))
                {
                    setvalue(value+val)
                }
                else{
                    setvalue(val)
                }
            }
            else if(isNaN(val))
            {

                if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='*' || value.slice(-1)=='/' || value.slice(-1)=='.' || value.slice(-1)=='%')
                {
                    setvalue(value.slice(0,-1)+val)
                }
                else
                {
                    setvalue(value+val)
                }
                // console.log(value.slice(-1))
                // setvalue(value + val)

            }
            else{
                setvalue(value + val)
            }
            // console.log(isNaN(val))
        }
    }

    // ref={ref=>{this.ScrollView=ref}} style={styles.main_screen_display}

  return (
    <View style={styles.main_screen}>
        <ScrollView style={styles.main_screen_display}
            ref={ScrollViewRef}
            onContentSizeChange={()=> ScrollViewRef.current.scrollToEnd({
                animated:true
            })}
        >
            <Text style={styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
        </ScrollView>

        <View style={styles.main_screen_keypad}>

            
            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handelPress('AC')}>
                    <View style={styles.btn1_outer} >
                        <Text style={styles.bg1_button}>
                            AC
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('()')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            ( )
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('%')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            %
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('/')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            /
                        </Text>
                    </View>
                </Pressable>
            </View>


            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handelPress('7')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            7
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('8')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            8
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('9')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            9
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('*')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            *
                        </Text>
                    </View>
                </Pressable>
            </View>


            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handelPress('4')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            4
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('5')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            5
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('6')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            6
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('-')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            -
                        </Text>
                    </View>
                </Pressable>
            </View>


            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handelPress('1')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            1
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('2')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            2
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('3')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            3
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('+')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>
                            +
                        </Text>
                    </View>
                </Pressable>
            </View>


            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handelPress('0')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            0
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('.')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            .
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('back')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>
                            DEL
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>handelPress('=')}>
                    <View style={styles.btn3_outer}>
                        <Text style={styles.bg3_button}>
                            =
                        </Text>
                    </View>
                </Pressable>
            </View>

        </View>

        <View style={styles.name}>
                <Text style={styles.nameInner}> ☞ Calci By Karan Rajurkar</Text>
        </View>
    </View>
  )
}


export default MainScreen
