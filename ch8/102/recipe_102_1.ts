const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const fetch2 = fetch("https://jsonplaceholder.typicode.com/users/1");

Promise.all([fetch1, fetch2])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json())),
  )
  .then((data) => {
    console.log("POSTデータ:", data[0]);
    console.log("USERデータ:", data[1]);
  })
  .catch((error) => {
    console.log("エラー:", error);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAZgUysAFgRhgXnk1AKAIhSigAcIAuAeioCsJxSAbAQ2ARRCYBMEAnAHRQAnqQCWoXgNABbKqRDQIVNAQCUAbgBQoSLETIUAJiw5DhYmUo16jVu049+Q0RJBTZVAK4R+y1ZpaWgAKfCAyYr4CLExMeADaBqhoADRmqEYAumpaMDBCKAhgeHh8CBAKkOVqWAB8uXkwoeGRCNGxpeWVvhACMiykJWUV4L41mLUww91ttsVqCykNOXkFRSXcLFAs45MA3g15ugxMbUwgAOaEwQDyAMoAKoDjDIA-DID9DBQEaZvb8QAM2W0jRgxy4Z0uhAAqncAKIAJVeHy+MB+LHiaEBDQAvit8sAtvg8PwwnxdjADsDQacBOcrgRABUMgEuGF6fNLEkCkoEwHEaIA
