import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 8,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        backgroundColor: '#52AA8A',
        paddingTop: 15,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
});