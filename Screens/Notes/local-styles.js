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
    inspectBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        width: '100%',
        zIndex: 2,
        flex: 1,
    },
    inspectContainer: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        width: '90%',
        height: '70%',
        backgroundColor: '#ddd',
        borderRadius: 20,
        justifyContent: 'center'
    },
    inspectHeader: {
        backgroundColor: '#52AA8A',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        borderTopEndRadius: 20,
        padding: 5,
        flex: 1,
    },
    inspectContent: {
        flex: 4,
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
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#52AA8A',
        justifyContent: 'center',
        flex: 1,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },

    // Header
    head: {
        backgroundColor: '#52AA8A',
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