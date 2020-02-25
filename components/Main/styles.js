import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Globals
    app: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        height: '100%',
        flex: 1,
    },
    textStandardDark: {
        textAlign: 'center',
        color: '#52AA8A',
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
    textStandardDarkSide: {
        color: '#52AA8A',
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
    textStandard: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Arial Rounded MT Bold',
    },
    textStandardSide: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
    containerApp: {
        flex: 1,
    },
    
    // Footer app
    appFooter: {
        borderRadius: 40,
        marginBottom: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerFooter: {
        zIndex: 2,
        backgroundColor: '#94C9A9',
    },
});