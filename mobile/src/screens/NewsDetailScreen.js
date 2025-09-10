import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { news } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.author}>By {news.author}</Text>
      <Text style={styles.date}>{new Date(news.date).toLocaleDateString()}</Text>
      {news.image && (
        <Image
          source={{ uri: `http://localhost:8000${news.image}` }}
          style={styles.image}
        />
      )}
      <Text style={styles.text}>{news.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsDetailScreen;