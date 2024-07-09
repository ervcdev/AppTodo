import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p> ¿Quieres sincronizar tus  TODOs? </p>
        <button
          onClick={toggleShow}
        >
          Yes!!
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };