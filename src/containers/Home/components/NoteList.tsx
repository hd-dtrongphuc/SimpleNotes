import React from 'react';
import { FormProvider, useFieldArray } from 'react-hook-form';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import * as yup from 'yup';

import TaskItem from '~components/TaskItem';
import useFormProvider from '~hooks/useFormProvider';

const enum NOTE_FIELD {
  NOTES = 'notes',
  ID = 'id',
  VALUE = 'value',
}

interface NoteItem {
  [NOTE_FIELD.ID]: string;
  [NOTE_FIELD.VALUE]: string;
}

interface FormValues {
  [NOTE_FIELD.NOTES]: NoteItem[];
}

const validationSchema = yup.object({
  // content: yup.string().required('Content is required'),
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    value: 'Notes',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    value: 'Today',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    value: 'Tomorrow',
  },
];

const NoteList = () => {
  const formMethods = useFormProvider<FormValues>({
    validationSchema,
    defaultValues: {
      [NOTE_FIELD.NOTES]: DATA,
    },
  });

  const { fields } = useFieldArray({
    name: 'notes',
    control: formMethods.control,
  });

  const renderItem = ({ item, index }: any) => (
    <TaskItem name={`notes.${index}.value`} />
  );

  return (
    <FormProvider {...formMethods}>
      <FlatList data={fields} renderItem={renderItem} />
    </FormProvider>
  );
};

export default NoteList;
