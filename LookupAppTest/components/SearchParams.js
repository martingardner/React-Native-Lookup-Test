import React from 'react';
import { View , Text } from 'react-native';

import globalStyles from '../styles/global';
import searchParamsStyles from '../styles/searchparams';


const SearchParams = ({paramData}) => {
    const data = paramData[0];

    return (
        <View style={globalStyles.marginTop20}>
            <View style={searchParamsStyles.dataRow}>
                <Text style={searchParamsStyles.dataRowLabel}>ID</Text>
                <Text style={searchParamsStyles.dataRowData}>{data.id}</Text>
            </View>
            <View style={searchParamsStyles.dataRow}>
                <Text style={searchParamsStyles.dataRowLabel}>Name</Text>
                <Text style={searchParamsStyles.dataRowData}>{data.name}</Text>
            </View>
            <View style={[searchParamsStyles.dataRow, searchParamsStyles.borderBottom]}>
                <Text style={searchParamsStyles.dataRowLabel}>User Name</Text>
                <Text style={searchParamsStyles.dataRowData}>{data.username}</Text>
            </View>
        </View>
    )

}

export default SearchParams;