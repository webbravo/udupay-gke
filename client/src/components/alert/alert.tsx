import React from 'react';
import { connect } from 'react-redux';

import { AlertContainer } from './alert.styles';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <AlertContainer key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </AlertContainer>
  ));

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
