import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    slider: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    },
    button: {
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