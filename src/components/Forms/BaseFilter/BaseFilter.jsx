import { selectStyles } from './SelectBase.styled';

import Select from 'react-select';

const BaseFilter = ({ defaultValue, options, onChange }) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        options={options}
        styles={selectStyles}
        onChange={selected => onChange(selected?.value || '')}
      />
    </>
  );
};
export default BaseFilter;
