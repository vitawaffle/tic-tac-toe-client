import FormControl from './FormControl';
import FormControlType, { getDefaultValue } from './FormControlType';

export default ({ type, defaultValue }: FormControlArgs): FormControl => ({
  type,
  value: defaultValue ?? getDefaultValue(type),
});

export type FormControlArgs = {
  type: FormControlType;
  defaultValue: any;
};
