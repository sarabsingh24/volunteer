// https://www.material-tailwind.com/docs/react/colors

const BlueGray = {
  _50: '#eceff1',
  _100: '#cfd8dc',
  _200: '#b0bec5',
  _300: '#90a4ae',
  _400: '#78909c',
  _500: '#607d8b',
  _600: '#546e7a',
  _700: '#455a64',
  _800: '#37474f',
  _900: '#263238',
};

const Gray = {
  _50: '#fafafa',
  _100: '#f5f5f5',
  _200: '#eeeeee',
  _300: '#e0e0e0',
  _400: '#bdbdbd',
  _500: '#9e9e9e',
  _600: '#757575',
  _700: '#616161',
  _800: '#424242',
  _900: '#212121',
};

const LightBlue = {
  _50: '#e1f5fe',
  _100: '#b3e5fc',
  _200: '#81d4fa',
  _300: '#4fc3f7',
  _400: '#29b6f6',
  _500: '#03a9f4',
  _600: '#039be5',
  _700: '#0288d1',
  _800: '#0277bd',
  _900: '#01579b',
};

const Blue = {
  _50: '#e3f2fd',
  _100: '#bbdefb',
  _200: '#90caf9',
  _300: '#64b5f6',
  _400: '#42a5f5',
  _500: '#2196f3',
  _600: '#1e88e5',
  _700: '#1976d2',
  _800: '#1565c0',
  _900: '#0d47a1',
};
const Red = {
  _50: '#ffebee',
  _100: '#ffcdd2',
  _200: '#ef9a9a',
  _300: '#e57373',
  _400: '#ef5350',
  _500: '#f44336',
  _600: '#e53935',
  _700: '#d32f2f',
  _800: '#c62828',
  _900: '#b71c1c',
};

const Amber = {
  _50: '#fff8e1',
  _100: '#ffecb3',
  _200: '#ffe082',
  _300: '#ffd54f',
  _400: '#ffca28',
  _500: '#ffc107',
  _600: '#ffb300',
  _700: '#ffa000',
  _800: '#ff8f00',
  _900: '#ff6f00',
};

const lightTheme = {
  white: '#ffffff',
  black: '000000',
  primary: {
    derkest: '',
    darker: '',
    dark: Blue._700,
    main: Blue._600,
    light: '',
    lighter: '',
    lightest: Blue._200,
    lightest100: Blue._100,
    lightest50: Blue._50,
  },
  secondry: {
    derkest: '',
    darker: Gray._800,
    dark: Gray._700,
    main: Gray._600,
    light: Gray._50,
    lighter: Gray._300,
    lightest: Gray._200,
  },

  random: {
    _1: LightBlue._600,

    Red: {
      _400: Red._400,
      _500: Red._500,
    },
  },
};

const darkTheme = {
  white: '#ffffff',
  black: '000000',
  primary: {
    derkest: '',
    darker: '',
    dark: '',
    main: '',
    light: '',
    lighter: '',
    lightest: '',
  },
  secondry: {
    derkest: '',
    darker: '',
    dark: '',
    main: '',
    light: '',
    lighter: '',
    lightest: '',
  },

  random: {
    _1: '',
  },
};

const colorCode = {lightTheme, BlueGray, Gray, LightBlue, Blue, Red, Amber};

export default colorCode;
