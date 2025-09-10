import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';

const AddNewsScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      if (image) {
        formData.append('image', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        });
      }

      await axios.post('http://localhost:8000/api/news/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      navigation.navigate('NewsList');
    } catch (error) {
      console.error('Error adding news:', error);
      alert('Error adding news');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add News</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Text"
        multiline
        value={text}
        onChangeText={setText}
      />
      <Button title="Select Image" onPress={selectImage} />
      {image && <Image source={{ uri: image.uri }} style={styles.imagePreview} />}
      <Button title="Submit" onPress={handleSubmit} />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
});

export default AddNewsScreen;