import { StyleSheet } from 'react-native';

const searchParamsStyles = StyleSheet.create({
    dataRow : {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    borderBottom : {
        borderBottomWidth: 1
    },
    dataRowLabel : {
        fontSize:18,
        fontWeight: '700',
        flexGrow: 1,
        flexBasis: 0
    },
    dataRowData : {
        fontSize: 18, 
        flexGrow: 1,
        flexBasis: 0
    }
});

export default searchParamsStyles;