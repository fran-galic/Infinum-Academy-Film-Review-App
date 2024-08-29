import { extendTheme } from '@chakra-ui/react';
import { fonts } from './foundations/fonts';
import { radii } from './foundations/border-radius';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fontSizes } from './foundations/font-sizes';
import { fontWeights } from './foundations/font-weights';
import { Button } from './components/button';
import { border_width } from './foundations/border-width';
import { Card } from './components/card';

export const rattingAppTheme = extendTheme({
  components: {
    Button,
    Card,
  },
  fonts,
  fontSizes,
  fontWeights,
  colors,
  radii,
  border_width,
  breakpoints,
});
