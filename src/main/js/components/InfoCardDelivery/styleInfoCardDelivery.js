const infoCardForm = {
  backgroundColor: 'Gainsboro',
  height: '210px',
  width: '420px',
  zIndex: '50',
  borderRadius: '0 25px 25px 0',
  marginTop: '2%',
  marginBottom: '2%',
  marginLeft: '5%',
  border: '3px double black',
};

const imagePlace = {
  backgroundColor: 'WhiteSmoke',
  height: '204px',
  width: '204px',
  float: 'left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleProduct = {
  backgroundColor: 'Gainsboro',
  height: '50px',
  borderRadius: '0 25px 0 0',
  display: 'flex',
  alignItems: 'center',
  name: { fontSize: '15pt' },
  description: { fontSize: '10pt' },
};

const price = {
  backgroundColor: 'Gainsboro',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  product: { fontSize: '25pt', marginLeft: '10px', marginBottom: '15px' },
};

const client = {
  backgroundColor: 'Gainsboro  ',
  height: '25px',
  display: 'flex',
  view: { marginLeft: '10px' },
};

const number = {
  backgroundColor: 'Gainsboro',
  height: '25px',
  display: 'flex',
  view: { fontWeight: '500', marginLeft: '10px' },
};

const deliverButton = {
  backgroundColor: 'Gainsboro',
  height: '54px',
  borderRadius: '0 0 25px 0',
  textAlign: 'center',
};

const style = {
  infoCardForm,
  imagePlace,
  titleProduct,
  price,
  deliverButton,
  client,
  number,
};

export default style;
