import { StyleSheet, Text, View } from "react-native";

export const SubTitle = ({children}) => {
  return (
    <View style={ styles.subTitleContainer }>
      <Text style={ styles.subTitle }>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  subTitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})