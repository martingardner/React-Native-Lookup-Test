import React, { useState , useEffect } from 'react';
import { View , Text , TextInput , TouchableOpacity  } from 'react-native';

import globalStyles from '../styles/global';
import loginStyles from '../styles/login';

import {fetchCall} from '../dataCalls/fetch';

const Login = ({navigation}) => {
    //console.log('navigation', navigation);

    const [getUserName , setUserName] = useState('');
    const [getPassword , setPassword] = useState('');
    

    async function LoginSubmit() {
        if(getUserName.trim().length > 0 && getPassword.trim().length > 0){
            const login = await fetchCall('https://jsonplaceholder.typicode.com/users');
            /* if successful call and not an error */                        
            navigation.navigate('Lookup', {data: login})            
        } else {
            alert('A Username and Password are required to submit');
        }
    }



    return (
        <View style={globalStyles.container}>            
            <Text style={globalStyles.title}>Login</Text>
            <View style={loginStyles.formView}>
                <View>
                    <Text style={loginStyles.label}>User Name { getUserName }</Text>
                    <TextInput 
                        style={loginStyles.inputs} 
                        onChangeText={ (text) => setUserName(text)} 
                    />
                </View>
                <View>
                    <Text style={loginStyles.label}>Password { getPassword }</Text>
                    <TextInput 
                        style={loginStyles.inputs} 
                        onChangeText={ (text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity 
                    style={globalStyles.button} 
                    onPress={ () => LoginSubmit() }                   
                >
                    <Text 
                        style={[globalStyles.textBlack , globalStyles.textCenter , globalStyles.textButton]}
                        
                    >Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default Login;