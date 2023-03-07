import { Divider } from '@rneui/themed';
import React from 'react';

function CustomDivider(props) {
  return <Divider color={props.dividerColor} style={props.style} />;
}

export default CustomDivider;
