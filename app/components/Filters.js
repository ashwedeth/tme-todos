import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelect('all')}>
        <Text style={[styles.itemText, { textDecorationLine: selected === 'all' ? 'underline' : 'none' }]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('completed')}>
        <Text style={[styles.itemText, { textDecorationLine: selected === 'completed' ? 'underline' : 'none' }]}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('active')}>
        <Text style={[styles.itemText, { textDecorationLine: selected === 'active' ? 'underline' : 'none' }]}>Active</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  itemText: {
    fontSize: 18,
    marginLeft: 12,
  },
});
