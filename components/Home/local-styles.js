import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Home
    backgroundHome: {
        flex: 1,
    },
    headerHome: {
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        height: '4%',
        shadowColor: 'rgba(0,0,0, 0.2)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#52AA8A',
    },
    contentHome: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
});
