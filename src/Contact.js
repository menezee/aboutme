import React, {useEffect, useState} from 'react';
import {Typography, Icon} from 'antd';

function Contact() {
  const [spinning, setSpinning] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setSpinning(false);
    }, 1500);
  }, []);

  return (
    <>
      <Typography.Paragraph copyable={{ text: 'erich.menezes1@gmail.com' }}>email address
      </Typography.Paragraph>
      <Icon style={{fontSize: '25px'}} type='linkedin' spin={spinning} />
    </>
  )
}

export default Contact;
