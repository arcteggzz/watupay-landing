/* eslint-disable @next/next/no-img-element */
"use client";

import { HaloDisplay } from "@/components/reuseables";
import styles from "../(styles)/OngoingContests.module.scss";
import right_arrow from "./(images)/right_arrow.png";
import Link from "next/link";
import { OngoingContest } from "@/components/specifics";
import { useEffect, useState } from "react";
import { apiRoutePaths } from "@/utils";
import { BASE_URL } from "@/utils/apiRoutePaths";
import { activeContestsResponseType } from "@/types/activeContestsResponse";

const OngoingContests = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [contests, setContests] = useState<activeContestsResponseType[]>([]);

  async function fetchContests() {
    const apiUrl = `${BASE_URL}${apiRoutePaths.getContests}`;
    const response = await fetch(apiUrl);
    const constests = await response.json();
    return constests;
  }

  useEffect(() => {
    const handleFetchContests = async () => {
      try {
        setIsLoading(true);
        const fetchedContests = await fetchContests();
        console.log(fetchedContests);
        setContests(fetchedContests.data);
        setSuccess(true);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setSuccess(false);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchContests();
  }, []);

  return (
    <>
      <section className={styles.OngoingContests}>
        <h2>Ongoing Contests</h2>

        <h6>
          Check out contests that are currently being run on our platform.
          Beauty Peagent, Reality TV show etc
        </h6>

        <div className={styles.ongoingeContests_container}>
          {isLoading ? (
            <p className={styles.message_text}>Loading Contests...</p>
          ) : success && contests.length < 1 ? (
            <p className={styles.message_text}>
              No contests are available right now.
            </p>
          ) : success && contests.length > 1 ? (
            <>
              {contests.map((contest) => {
                return (
                  <OngoingContest
                    key={contest.id}
                    bankDetails={contest.sub_url}
                    bannerImage={contest.banner}
                    description={contest.description}
                    name={contest.name}
                  />
                );
              })}
            </>
          ) : error ? (
            <p className={styles.message_text}>
              We can not load contests right now... Check back Later
            </p>
          ) : (
            <p className={styles.message_text}>Error loading contests...</p>
          )}
        </div>

        <Link href={"#"} className={styles.view_contest}>
          <p>View all contest</p>
          <img src={right_arrow.src} alt="" />
        </Link>

        <HaloDisplay top={80} />
      </section>
    </>
  );
};

export default OngoingContests;
