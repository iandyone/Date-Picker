import { ITheme } from '@appTypes';

export const theme: ITheme = {
  font: {
    bold: 700,
    regular: 400,
    medium: 500,
    semibold: 600,
    size: '14px',
    family: 'Open Sans',
  },
  animation: {
    transformActive: 'scale(0.95)',
    transition: 'all .3s ease',
  },
  colors: {
    active: '#2f80ed',
    border: '#e1e1e1',
    error: '#ff0000',
    hover: '#f1f1f1',
    holiday: '#ff0000',
    inRange: 'rgba(47, 128, 237, 0.10)',
    rangeStart: 'rgba(47, 128, 237, 0.60)',
    rangeEnd: 'rgba(47, 128, 237, 0.60)',
    otherDate: '#aaaaaa',
    text: '#000',
    textLight: '#fff',
  },
  spaces: {
    width: '250px',
    height: '260px',
    padding: '5px',
    borderRadius: '8px',
    inputPadding: '4px 14px',
    loaderSize: '50px',
  },
};
