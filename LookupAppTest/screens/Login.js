import React, { useState } from 'react';
import { View , Text , TextInput , TouchableOpacity  } from 'react-native'

import globalStyles from '../styles/global';
import loginStyles from '../styles/login';

const Login = () => {
    

    return (
        <View style={globalStyles.container}>            
            <Text style={globalStyles.title}>Login</Text>
            <View style={loginStyles.formView}>
                <View>
                    <Text style={loginStyles.label}>User Name</Text>
                    <TextInput style={loginStyles.inputs} />
                </View>
                <View>
                    <Text style={loginStyles.label}>Password</Text>
                    <TextInput style={loginStyles.inputs} />
                </View>
                <TouchableOpacity style={globalStyles.button}>
                    <Text style={[globalStyles.textBlack , globalStyles.textCenter , globalStyles.textButton]}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default Login;