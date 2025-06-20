import styled, { keyframes } from "styled-components";

const Error = ({ errorCode = 404, error }) => {
  return (
    <ErrorContainer>
      <ErrorGlow />
      <ErrorContent>
        <ErrorCode>{errorCode}</ErrorCode>
        <PokeballError>
          <PokeballTop />
          <PokeballCenter>
            <PokeballButton />
          </PokeballCenter>
          <PokeballBottom />
          <ErrorX>X</ErrorX>
        </PokeballError>
        <ErrorMessage>{error}</ErrorMessage>
        <ErrorDescription>
          A wild ERROR appeared! It used Glitch on your request.
        </ErrorDescription>
      </ErrorContent>
    </ErrorContainer>
  );
};

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const flicker = keyframes`
  0%, 80%, 100% { opacity: 1; }
  20%, 60% { opacity: 0.5; }
  40% { opacity: 0.2; }
`;

// Styled Components
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #121212 50%, #000000 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const ErrorGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
  animation: ${float} 8s ease-in-out infinite;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  max-width: 800px;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(to right, #ff6b6b, #ff8e53);
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const PokeballError = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 2rem 0;
  filter: drop-shadow(0 0 15px rgba(255, 107, 107, 0.5));
  opacity: 0.9;
  animation: ${float} 3s ease-in-out infinite;
`;

const PokeballSection = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  border-radius: 60px 60px 0 0;
`;

const PokeballTop = styled(PokeballSection)`
  top: 0;
  background: #ff6b6b;
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
  z-index: 1;
`;

const PokeballBottom = styled(PokeballSection)`
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: none;
  border-radius: 0 0 60px 60px;
`;

const PokeballCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeballButton = styled.div`
  width: 18px;
  height: 18px;
  background: #ff6b6b;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  animation: ${pulse} 1.5s ease-in-out infinite alternate;
`;

const ErrorX = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 900;
  color: white;
  z-index: 3;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.7);
  animation: ${flicker} 1.5s ease-in-out infinite;
`;

const ErrorMessage = styled.h2`
  font-size: 2.8rem;
  color: white;
  margin: 1.5rem 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
`;

const HomeButton = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  background: linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%);
  color: #111;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 0 15px rgba(79, 209, 197, 0.5);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(79, 209, 197, 0.8);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Error;