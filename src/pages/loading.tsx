import styled, { keyframes } from 'styled-components/macro'

import { SpinnerIcon } from 'components/icons';

const RotateKeyFrame = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${RotateKeyFrame} 1s infinite;
    }
`;

const Loading = () => (
    <LoadingContainer>
        <SpinnerIcon size={50}/>
    </LoadingContainer>
);

export default Loading;
