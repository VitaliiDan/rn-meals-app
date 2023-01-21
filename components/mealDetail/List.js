import { StyleSheet, Text, View } from "react-native";

export const List = ({textArray}) => textArray.map( (item, index) => (
    <View key={ index } style={ styles.listItem }>
      <Text style={ styles.listItem }>{ item }</Text>
    </View>
  )
)

const styles = StyleSheet.create( {
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listText: {
    color: '#351401',
    textAlign: 'center',
  }
} );