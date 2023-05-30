import React from "react";

export default function CirclePlus(props) {
    return <svg style={{marginTop:"11px"}} xmlns="http://www.w3.org/2000/svg" fill={props.color} height={props.height} viewBox="0 96 960 960" width={props.width}><path d="M447 616v130q0 15.3 9.975 25.65 9.976 10.35 26.2 10.35 16.225 0 26.025-9.925 9.8-9.925 9.8-26.323V616h131q15.3 0 25.65-9.975 10.35-9.976 10.35-26.2 0-16.225-9.925-26.025-9.925-9.8-26.323-9.8H519V406q0-15.3-9.975-25.65-9.976-10.35-26.2-10.35-16.225 0-26.025 9.925-9.8 9.925-9.8 26.323V544H310q-15.3 0-25.65 9.975-10.35 9.976-10.35 26.2 0 16.225 9.925 26.025 9.925 9.8 26.323 9.8H447Zm33.404 385q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55 664.594 55 575.638q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238 150 480.279 150q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906 486.66 906 575.734q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276 1001 480.404 1001Zm.096-94q137.5 0 234-96.372T811 575.5q0-137.5-96.312-234Q618.375 245 479.5 245q-137.5 0-234 96.312Q149 437.625 149 576.5q0 137.5 96.372 234T480.5 907Zm-.5-331Z"/></svg>
}