import axios from "axios";
import Publisher from "../../Schema/PublisherSchema.js";

const key = "31fee1b1831a4937a5d01fa95657cff4";
const api = "https://api.rawg.io/api/publishers?key=";
const API_URL = api + key;

export const fetchAndSavePublishers = async () => {
  let nextLink = API_URL;

  try {
    while (nextLink!=null) {
      const response = await axios.get(nextLink);
      const publishersData = response.data.results;

      for (const publisherData of publishersData) {
        const { name } = publisherData;

        const existingPublisher = await Publisher.findOne({ name });

        if (!existingPublisher) {
          let result = await Publisher.create({ name });
          if (result) {
            console.log(`Saved Publisher: ${name}`);
          } else {
            console.log("Error adding data");
          }
        } else {
          console.log(`Publisher already exists: ${name}`);
        }
      }

      // Update nextLink with the next page link from the response
      nextLink = response.data.next;
    }

    console.log("All Publishers have been checked and saved to the database.");
  } catch (error) {
    console.error("Error fetching and saving Publisher:", error.message);
  }
};
