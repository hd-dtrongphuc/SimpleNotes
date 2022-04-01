import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import NoteCard from './NoteCard';

const NoteList = () => {
  return (
    <ScrollView style={styles.container}>
      <Grid>
        <Col style={{ marginRight: 8 }}>
          {Array.from(Array(10)).map((_, i) => {
            return (
              <Row key={i} style={styles.row}>
                <NoteCard height={i % 2 === 0 ? 300 : 80} />
              </Row>
            );
          })}
        </Col>
        <Col style={{ marginLeft: 8 }}>
          {Array.from(Array(10)).map((_, i) => {
            return (
              <Row key={i} style={styles.row}>
                <NoteCard height={i % 2 !== 0 ? 200 : 100} />
              </Row>
            );
          })}
        </Col>
      </Grid>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 8,
  },
  container: {
    paddingVertical: 20,
  },
});

export default NoteList;
