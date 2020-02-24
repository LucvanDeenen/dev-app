import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Home
    contentHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    // Footer app
    appFooter: {
        flexDirection: 'row',
        borderRadius: 40,
    },
    containerFooter: {
        zIndex: 2,
        justifyContent: 'flex-end',
        flex: 1,
    },

    // Globals
    app: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        height: '100%',
        flex: 1,
        zIndex: 1,
    },
    textStandard: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },

    // Menu
    container: {
        borderRadius: 100,
        height: '75%',
        padding: 5,
        marginTop: '20%',
        marginHorizontal: 40,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#52AA8A',
    },
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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

    // Notes
    mainScreen: {
        justifyContent: 'flex-start',
        flex: 1,
    },
    contentText: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
    },
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
});