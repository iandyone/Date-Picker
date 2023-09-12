export const theme: ITheme = {
  fontSize: '14px',
  textColor: '#000',
  transition: 'all .3s ease',
  padding: '5px',
  hoverColor: '#f1f1f1',
  otherDateColor: '#aaaaaa',
  borderColor: '#e1e1e1',
  activeCollor: '#2f80ed',
};

export interface ITheme {
  fontSize: string;
  textColor: string;
  transition: string;
  padding: string;
  hoverColor: string;
  otherDateColor: string;
  borderColor: string;
  activeCollor: string;
}
