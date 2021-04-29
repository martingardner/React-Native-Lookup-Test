import React from 'react';
import { View , Text } from 'react-native';

const SearchParams = ({paramData}) => {
    console.log('paramData', paramData);
    const data = paramData[0];

    return (
        <View>
            <View>
                <Text>ID</Text>
                <Text>{data.id}</Text>
            </View>
            <View>
                <Text>Name</Text>
                <Text>{data.name}</Text>
            </View>
            <View>
                <Text>User Name</Text>
                <Text>{data.username}</Text>
            </View>
        </View>
    )

}

export default SearchParams;