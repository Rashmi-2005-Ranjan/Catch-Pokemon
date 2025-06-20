import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <Pokeball>
        <PokeballTop />
        <PokeballCenter>
          <PokeballButton />
        </PokeballCenter>
        <PokeballBottom />
      </Pokeball>
      <LoadingText>Loading Pokemon</LoadingText>
      <LoadingDots>
        <Dot delay="0s" />
        <Dot delay="0.2s" />
        <Dot delay="0.4s" />
      </LoadingDots>
      <LoadingSubtext>Gotta catch them all...</LoadingSubtext>
    </LoadingContainer>
  );
};

// Animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Styled Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Pokeball = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 2.5rem;
  animation: ${spin} 1.5s linear infinite, ${pulse} 2s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(233, 30, 99, 0.5));
`;

const PokeballSection = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  border-radius: 60px 60px 0 0;
`;

const PokeballTop = styled(PokeballSection)`
  top: 0;
  background: #e91e63;
  border: 6px solid #ffffff;
  border-bottom: none;
  z-index: 1;
  box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.3);
`;

const PokeballBottom = styled(PokeballSection)`
  bottom: 0;
  background: #ffffff;
  border: 6px solid #ffffff;
  border-top: none;
  border-radius: 0 0 60px 60px;
  box-shadow: inset -5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const PokeballCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const PokeballButton = styled.div`
  width: 18px;
  height: 18px;
  background: #e91e63;
  border-radius: 50%;
  border: 3px solid #ffffff;
  animation: ${pulse} 1.5s ease-in-out infinite alternate;
`;

const LoadingText = styled.p`
  font-size: 2.2rem;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: "Urbanist", sans-serif;
  text-align: center;
  text-shadow: 0 0 10px rgba(233, 30, 99, 0.7);
  letter-spacing: 1px;
`;

const LoadingSubtext = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  font-family: "Urbanist", sans-serif;
  font-style: italic;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${(props) => props.delay || "0s"};
  box-shadow: 0 0 10px currentColor;

  &:nth-child(1) {
    background: #e91e63;
    color: #e91e63;
  }

  &:nth-child(2) {
    background: #2ecc71;
    color: #2ecc71;
  }

  &:nth-child(3) {
    background: #3498db;
    color: #3498db;
  }
`;

export default Loading;