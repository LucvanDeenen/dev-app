import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Notes
    mainScreen: {
        justifyContent: 'flex-start',
        flex: 1,
    },
    contentText: {
        flex: 1,
        marginHorizontal: 10,
    },

    // Item
    noteItem: {
        backgroundColor: '#52AA8E',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },

    // Header
    head: {
        backgroundColor: 'rgba(76,53,164,34)',
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