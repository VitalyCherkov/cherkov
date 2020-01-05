// @flow

import * as React from 'react';
import { LayoutBackgroundPortal } from 'components/Layout';

const WhoAmI = () => {
  return (
    <>
      <LayoutBackgroundPortal>
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'url(https://scontent.xx.fbcdn.net/v/t51.2885-15/76873280_473191886605346_6930029970835697151_n.jpg?_nc_cat=106&_nc_oc=AQntFCm3XqlRWsrRlTbOpGtgLBhaHjGuZLfBn5Wh9kX_PbF9W2zzY7Bthc0KGXYmegc&_nc_ht=scontent.xx&oh=def44242ba0c14cc2c6124bd64911b9e&oe=5E9C2018) no-repeat center',
            backgroundSize: 'cover'
          }}
        />
      </LayoutBackgroundPortal>
      <div>Who Am I</div>
    </>
  );
};

export default WhoAmI;
