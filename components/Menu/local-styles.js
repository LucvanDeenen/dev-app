import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Menu
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
        borderBottomRightRadius: 130,
        borderTopRightRadius: 72,
        height: '75%',
        padding: 10,
        marginTop: '20%',
        marginRight: '30%',
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
        margin: 10,
        padding: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#388659'
    },
});