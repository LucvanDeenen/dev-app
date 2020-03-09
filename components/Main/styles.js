import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Globals
    app: {
        justifyContent: 'center',
        height: '100%',
        flex: 1,
        zIndex: 1,
    },
    textStandard: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
    textStandardSide: {
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
    
    textStandardSideHead: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Arial Rounded MT Bold',
    },
    containerApp: {
        flex: 1,
    },

    // Footer app
    containerFooter: {
        position: 'absolute',
        bottom: '15%',
        right: '20%',
    },
    contentFooter: {
        justifyContent: 'center',
        flex: 1,
    },
});