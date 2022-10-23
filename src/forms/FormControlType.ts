enum FormControlType {
  Text,
}

export default FormControlType;

export const getDefaultValue = (type: FormControlType) => {
  switch (type) {
    case FormControlType.Text:
      return '';
  }
};
