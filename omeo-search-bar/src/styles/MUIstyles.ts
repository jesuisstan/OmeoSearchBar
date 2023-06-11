import * as color from './colors';

export const modalDialog = {
  width: 'auto',
  maxWidth: '442px',
  minWidth: '300px',
  border: '0px solid #000',
  bgcolor: color.OMEO_WHITE,
  borderRadius: '4px',
  paddingBottom: '30px'
};

export const modalHeader = {
  textTransform: 'uppercase',
  fontSize: '1.2rem',
  letterSpacing: '0.02857em',
  textAlign: 'center',
  fontWeight: 'bold'
};

export const modalClose = {
  position: 'absolute',
  top: 'calc(-1/4 * var(--IconButton-size))',
  right: 'calc(-1/4 * var(--IconButton-size))',
  boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
  borderRadius: '50%',
  bgcolor: color.OMEO_WHITE,
  transition: 'background-color 0.3s ease-in-out',
  ':hover': {
    bgcolor: color.OMEO_NAVY
  }
};

export const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '21px',
  maxWidth: '242px',
  minWidth: '200px',
  alignItems: 'center',
  justifyContent: 'center'
};

export const warningBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  minWidth: '200px',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '11px',
  textAlign: 'center'
};

export const loadButtonBlock = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
