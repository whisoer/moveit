import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import { Container, Bar, CurrentExperience } from "./styles";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <Bar>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {currentExperience > 0 && (
          <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </CurrentExperience>
        )}
      </Bar>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}
