import { useKeyPress } from "@/utils";
import React, { useEffect } from "react";

import "./CloseButton.scss";

interface IProps {
handleClose: () => void;
}

export const CloseButton: React.FC<IProps> = ({handleClose}) => {

    const enterPressed = useKeyPress('enter');

    useEffect(()=> handleClose(), [enterPressed, handleClose])


    return (
        <div tabIndex={1} className="CloseButton" onClick={handleClose}>

        </div>
    );
};

export default CloseButton;
