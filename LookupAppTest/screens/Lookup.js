import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import globalStyles from '../styles/global';
import lookupStyles from '../styles/lookup';

import SearchParams from '../components/SearchParams';

const Lookup = ({route}) => {
    console.log('route.params.data', route);
    const data = route.params.data || [];

    const [getUserData, setUserData] = useState(data);
    const [getSearchText, setSearchText] = useState('');
    const [getShowParamData, setShowParamData] = useState(false);
    

    const lookupParams = getShowParamData ? <SearchParams paramData={getUserData} /> : null

    return (
        <View style={globalStyles.container}>            
            <Text style={globalStyles.title}>Lookup page</Text>
            <View style={globalStyles.marginTop20}>
                <Text style={lookupStyles.label}>Plate Number</Text>
                <TextInput
                    onChangeText={ (text) => setSearchText(text) }
                    style={lookupStyles.inputs}
                />
                <TouchableOpacity
                    style={globalStyles.button}
                >
                    <Text
                        style={[globalStyles.textBlack , globalStyles.textCenter , globalStyles.textButton]}
                        onPress={ () => setShowParamData(true)}
                    >SEARCH
                    </Text>
                </TouchableOpacity>
            </View>
            {lookupParams}
        </View>
    )


}

export default Lookup