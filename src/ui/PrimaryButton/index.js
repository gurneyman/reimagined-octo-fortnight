import React from "react";

import './PrimaryButton.css';

export default function PrimaryButton({children, disabled, onClick}) {
  return (
    <button className="primary-button" onClick={onClick} disabled={disabled}>{children}</button>
  );
}
