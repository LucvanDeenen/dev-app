import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    accountDetails: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        maxHeight: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        maxHeight: '13.5%',
        paddingVertical: 15,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 10,
    },


    addMenuContainer: {
        flexDirection: 'row',
        margin: 5,
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 3,
        shadowRadius: 3,
    },
    inputContainer: {
        padding: 5,
        flex: 1,
    },
    submitContainer: {
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        borderBottomLeftRadius: 15,
        padding: 10,
        margin: 10,
    }
});