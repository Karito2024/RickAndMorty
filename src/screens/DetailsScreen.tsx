import React from 'react'
import global from '../styles/global'
import { Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'

interface Props {
  route: DetailsScreenRouteProp;
}
const DetailsScreen = ({ route }: Props) => {
  const { character } = route.params;
  return (
    <View style={global.container}>
        <Text style={global.tittle}></Text>
        

    </View>
  )
}
export default DetailsScreen
