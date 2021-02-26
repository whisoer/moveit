import { useContext } from "react";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ProfileContext } from "../contexts/ProfileContext";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const { user } = useContext(ProfileContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      {user.name ? (
        <>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </>
      ) : null}
    </div>
  );
}
