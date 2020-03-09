import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    head: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
        flex: 1,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 2,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerSubmit: {
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 25
    },

    input: {
        height: 30,
        width: '80%',
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderBottomLeftRadius: 15,
        padding: 10,
        margin: 10,
    },
    context: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});