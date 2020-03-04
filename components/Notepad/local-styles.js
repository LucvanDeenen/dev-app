import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Notes
    mainScreen: {
        justifyContent: 'flex-start',
        flex: 1,
    },
    contentText: {
        marginHorizontal: 10,
        flex: 1,
    },

    // Items
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#52AA8E',
        marginTop: 16,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    noteItemClose: {
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },

    // Inspect
    inspectContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 2,
        flex: 1,
    },
    inspectContent: {
        width: '70%',
        backgroundColor: '#ddd',
        height: '40%',
        borderRadius: 20,
        justifyContent: 'center'
    },

    // Input
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        height: '7%',
    },
    input: {
        borderBottomLeftRadius: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        flex: 1,
        paddingHorizontal: 5,
        borderColor: '#ddd',
    },
    submit: {
        borderRadius: 20,
        backgroundColor: '#52AA8A',
        justifyContent: 'center',
        flex: 1,
        maxWidth: '13%',
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },

    // Header
    head: {
        backgroundColor: '#bbb',
        paddingTop: 15,
        flexDirection: 'row',
        flex: 1,
        maxHeight: '13%',
        alignItems: 'flex-end',
        borderBottomEndRadius: 2,
        borderBottomStartRadius: 2,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    leftHead: {
        height: '100%',
        alignItems: 'flex-start',
        marginLeft: 2,
        flex: 1,
    },
    middleHead: {
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    rightHead: {
        height: '100%',
        alignItems: 'flex-end',
        marginRight: 2,
        flex: 1,
    },
});