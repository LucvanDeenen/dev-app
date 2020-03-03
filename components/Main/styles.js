import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Globals
    app: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        height: '100%',
        position: 'relative',
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
    containerFooter: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    contentFooter: {
        justifyContent: 'center',
        flex: 1,
    },
});