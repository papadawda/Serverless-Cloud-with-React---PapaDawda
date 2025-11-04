import React from "react";

export const CongratulationsMessage = ({ numberOfClicks, threshold }) => {
    return numberOfClicks >= threshold 
        ? <h1>Congratulations! You've reached {threshold} number of click</h1>
        : null;

}