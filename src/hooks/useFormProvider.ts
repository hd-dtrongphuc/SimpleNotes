import { useForm, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';

interface Props<T> extends UseFormProps<T> {
  validationSchema?: any;
}

export default function useFormProvider<T>(props: Props<T>) {
  const { validationSchema, defaultValues, ...formProps } = props;

  const formMethods = useForm<T>({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: useMemo(
      () => defaultValues,
      [JSON.stringify(defaultValues)],
    ),
    ...formProps,
  });

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [JSON.stringify(defaultValues)]);

  return formMethods;
}
