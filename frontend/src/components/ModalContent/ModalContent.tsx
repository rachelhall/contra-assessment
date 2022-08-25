import React from "react";
import CloseButton from "../CloseButton";

import "./ModalContent.scss";

type IProps = {
    closeModal: () => void;
    subTitle?: string;
title?: string;
}

export const ModalContent: React.FC<IProps> = ({closeModal, title, subTitle}) => {
  

    return (
        <div className="ModalContent"><CloseButton onClick={closeModal}/>
<h1>{title}</h1>
<h2>{subTitle}</h2>
        </div>
    );
};

export default ModalContent;
