import { StyleSheet, View } from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { FormProvider, useFieldArray } from 'react-hook-form';

import useFormProvider from '~hooks/useFormProvider';
import FormInput from '~components/Form/FormInput';
import TaskItem from '~components/TaskItem';
import Divider from '~components/Divider';

interface Props {
  id: string;
}

const enum NOTE_FIELD {
  TITLE = 'title',
  CONTENT = 'content',
}

interface Content {
  id: string;
  value: string;
}

interface FormValues {
  [NOTE_FIELD.TITLE]: string;
  [NOTE_FIELD.CONTENT]: Content[];
}

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  // content: yup.string().required('Content is required'),
});

const NoteForm: React.FC<Props> = ({ id }) => {
  const defaultValues = {
    title: '',
    content: [
      {
        id: 't1',
        value: 'Try a few principles on practice',
      },
      {
        id: 't2',
        value: 'Try a few principles on practice',
      },
      {
        id: 't3',
        value: 'Try a few principles on practice',
      },
    ],
  };

  const formMethods = useFormProvider<FormValues>({
    validationSchema,
    defaultValues,
  });

  const { fields } = useFieldArray({
    control: formMethods.control,
    name: 'content',
  });

  return (
    <FormProvider {...formMethods}>
      <FormInput name={NOTE_FIELD.TITLE} placeholder='Title' />
      <Divider style={styles.divider} />
      {/* <View>
        {fields.map((field, index) => (
          <TaskItem key={field.id} name={`content.${index}.value`} />
        ))}
      </View> */}
    </FormProvider>
  );
};

export default NoteForm;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
  },
  divider: {
    marginTop: 4,
    marginBottom: 20,
  },
});
