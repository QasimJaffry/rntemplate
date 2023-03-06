import {borders, colors, fontFamily, fontsSize} from '../constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
  primaryColor: colors.white,
  primaryText: colors.black,
  secondaryText: colors.white,
  errorText: colors.red,
  placeholderText: colors.lightSilver,
  borderColor: colors.lightSilver,
  primaryButton: colors.antiqueWhite,
  disableButton: colors.lightSilver,
  arrivalButton: colors.water,
  departureButton: colors.yellow,
  snackbarError: colors.red,
  snackbarSuccess: colors.antiqueWhite,
};

const FONT_SET = {
  size: {
    xSmall: fontsSize.extraSmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extraLarge,
  },
  family: {},
};

const BORDER_RADIUS = {
  radius1: borders.radius1,
  radius2: borders.radius2,
  radius3: borders.radius3,
  radius4: borders.radius4,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  family: FONT_SET.family,
};
