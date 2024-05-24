const minTablet = '@media only screen and (min-width: 768px)';

export const selectStyles = {
  container: baseStyles => ({
    ...baseStyles,
    position: 'absolute',
    top: '40px',
    right: '20px',
    [minTablet]: {
      right: '40px',
    },
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 120,
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #3e3e3e',
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      borderColor: '#3e3e3e',
    },
    '& .css-tj5bde-Svg': {
      transform: state.menuIsOpen && 'rotate(180deg)',
    },
    [minTablet]: {
      width: 153,
      padding: '14px',
    },
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33333,
    color: '#f9f9f9',
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571,
    },
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit',
  }),
  input: baseStyles => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    height: 16,
    width: 16,
    color: '#f9f9f9',
    '&:hover': {
      color: '#f9f9f9',
    },
    '& .css-tj5bde-Svg': {
      width: '100%',
      height: '100%',
      transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    width: 120,
    marginTop: '4px',
    marginBottom: 0,
    paddingTop: '7px',
    paddingRight: '8px',
    paddingBottom: '7px',
    zIndex: 10,
    backgroundColor: '#262626',
    borderRadius: '12px',
    boxShadow: 'none',
    border: 'none',
    [minTablet]: {
      width: 153,
    },
  }),
  menuList: baseStyles => ({
    ...baseStyles,

    height: '100%',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      background: '#3e3e3e',
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '14px',
    paddingRight: '14px',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.3333,
    letterSpacing: '-0.02em',
    color: state.isSelected ? '#f9f9f9' : '#686868',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#f9f9f9',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571,
    },
  }),
};
