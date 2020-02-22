import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Footer app
    appFooter: {
        flexDirection: 'row',
        borderRadius: 40,
    },
    containerFooter: {
        justifyContent: 'flex-end',
        flex: 1,
    },

    // Globals
    app: {
        backgroundColor: '#ffff',
        flex: 1,
    },
    textStandard: {
        color: '#fff',
        textAlign:'center',
        fontFamily: 'Arial Rounded MT Bold',
    },

    // Menu
    container: {
        borderRadius: 100,
        height: '75%',
        padding: 5,
        marginTop: 30,
        marginHorizontal: 40,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#52AA8A',
    },
    menuTab: {
        justifyContent: 'center',
        flex: 1,
    },
    menuRow: {
        flexDirection: 'row',
        flex: 1,
    },
    menuBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    menuButton: {
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#388659'
    },

    // Home
    contentText: {
        marginTop: 10,
        marginVertical: 10
    },

    // Notes Header
    head: {
        backgroundColor: '#52AA8A',
        paddingTop: 15,
        flexDirection: 'row',
        flex: 1,
        maxHeight: '25%',
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

    // Notes Content
    mainScreen: {
        justifyContent: 'flex-start',
        flex: 1,
    },
});