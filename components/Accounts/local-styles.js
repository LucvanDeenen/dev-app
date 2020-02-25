import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Accounts
    accountContainer: {
        justifyContent: 'flex-start',
        flex: 1,
    },
    accountHeader: {
        flex: 1,
        alignItems: 'center',
        maxHeight: '25%',
        backgroundColor: '#52AA8A',
    },
    head: {
        backgroundColor: '#52AA8A',
        paddingTop: 15,
        flexDirection: 'row',
        flex: 1,
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
    accountContent: {
        flex: 1,
    },
    accountCard: {
        flex: 1,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});