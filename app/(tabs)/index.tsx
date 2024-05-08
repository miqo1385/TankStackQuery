import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { useEffect, useState } from 'react';
import {fetchTopRatedMovies} from '@/.expo/api/movies';
import { useQuery } from '@tanstack/react-query';



export default function TabOneScreen() {

const {data: movies, isLoading, error} = useQuery({
  queryKey: ['movies'],
  queryFn: fetchTopRatedMovies,
});




if (isLoading) {
  return <ActivityIndicator />
}
if(error) return<Text>Error: {error.message}</Text>

  
  return <View style={styles.container}>
      <FlatList data={movies} renderItem={({item}) => <View style={styles.body}><Text style={styles.text}>{item.title}</Text></View>}></FlatList>

  </View>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    color: 'blue',
  }
  
});
