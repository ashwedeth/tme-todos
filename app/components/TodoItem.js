import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ({ data, onPress, onDelete, onEdit, editable }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!editable}>
      <View style={styles.container}>
        <Text style={[styles.contentText, { textDecorationLine: data.completed ? 'line-through' : 'none' }]}>{data.content}</Text>
        {
          editable &&
          <TouchableOpacity onPress={onEdit}>
            <Ionicons name={'md-create'} size={24} style={styles.icon} />
          </TouchableOpacity>
        }
        {
          editable &&
          <TouchableOpacity onPress={onDelete}>
            <Ionicons name={'md-trash'} size={24} style={styles.icon} />
          </TouchableOpacity>
        }
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentText: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    marginLeft: 16,
  },
});
