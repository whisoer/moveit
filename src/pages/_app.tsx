import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ProfileProvider } from "../contexts/ProfileContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ProfileProvider>
  );
}

export default MyApp;
