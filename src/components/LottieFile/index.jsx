import Lottie from 'lottie-react';

const LottieFile = (props) => {
    return (
        <Lottie 
            animationData={props.animationData}
            {...props}
        />
    )
};
  
export default LottieFile;