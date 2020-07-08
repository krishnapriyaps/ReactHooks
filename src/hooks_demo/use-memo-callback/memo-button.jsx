import React from "react";
import Button from "../color-changer/Button";

const MemoButton = React.memo(props => <Button {...props} />);

export default MemoButton;
