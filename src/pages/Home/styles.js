import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
},

header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},

headerText: {
    fontSize: 15,
    color: '#374192'
},

headerTextBold: {
    fontWeight: 'bold'
},

title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 2,
    color: '#374192',
    fontWeight: 'bold'
},

description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
    fontWeight: 'bold'
},

HomeList: {
    marginTop: 32
},

Home: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
},

HomeProperty: {
    fontSize: 14,
    color: '#374192',
    fontWeight: 'bold'
},

HomeValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
},

roomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},

roomButtonText: {
    color: '#374192',
    fontSize: 15,
    fontWeight: 'bold'
},


});