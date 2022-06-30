function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", background: "" }}
      width="204"
      height="204"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(20 50)">
        <circle r="6" fill="#e30a3e">
          <animateTransform
            attributeName="transform"
            begin="-0.4807692307692307s"
            calcMode="spline"
            dur="1.282051282051282s"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="scale"
            values="0;1;0"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(40 50)">
        <circle r="6" fill="#f2e955">
          <animateTransform
            attributeName="transform"
            begin="-0.3205128205128205s"
            calcMode="spline"
            dur="1.282051282051282s"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="scale"
            values="0;1;0"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(60 50)">
        <circle r="6" fill="#f23d67">
          <animateTransform
            attributeName="transform"
            begin="-0.16025641025641024s"
            calcMode="spline"
            dur="1.282051282051282s"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="scale"
            values="0;1;0"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(80 50)">
        <circle r="6" fill="#24bcf2">
          <animateTransform
            attributeName="transform"
            begin="0s"
            calcMode="spline"
            dur="1.282051282051282s"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="scale"
            values="0;1;0"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
}

export default Loading;
