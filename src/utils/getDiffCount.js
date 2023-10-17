import moment from "moment";

function getDiffCount(durationInSeconds) {
  // Your moment at midnight
  const mmtMidnight = moment().clone().startOf("day");
  // Difference in seconds
  const diffSeconds = moment().diff(mmtMidnight, "seconds");
  const diffSecondsCount = parseInt(diffSeconds / durationInSeconds);

  return { diffSeconds, diffSecondsCount };
}

export default getDiffCount;
