import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'

function Button() {
  return (
    <AwesomeButtonSocial
      cssModule={AwesomeButtonStyles}
      type="whatsapp"
      sharer={{
        phone: '############',
        message: 'Whatsapp init message'
      }}
    >
      Button
    </AwesomeButtonSocial>
  );
}
export default Button;