import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${({ $flipped }) =>
    $flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <FlipImageContainer $flipped={flipped}>
        <FrontImage src={front} alt="앞면" />
        <BackImage src={back} alt="뒷면" />
      </FlipImageContainer>
      <button onClick={() => setFlipped((prev) => !prev)}>뒤집기</button>
    </>
  );
}
