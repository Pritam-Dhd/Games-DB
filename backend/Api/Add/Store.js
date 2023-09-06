import axios from "axios";
import Store from "../../Schema/StoreSchema.js";

const key = "31fee1b1831a4937a5d01fa95657cff4";
const api = "https://api.rawg.io/api/stores?key=";
const API_URL = api + key;

export const fetchAndSaveStores = async () => {
  let nextLink = API_URL;

  try {
    while (nextLink != null) {
      const response = await axios.get(nextLink);
      const storesData = response.data.results;

      for (const storeData of storesData) {
        const { name, domain } = storeData;

        const existingStore = await Store.findOne({ name });

        if (!existingStore) {
          let result = await Store.create({ name, domain });
          if (result) {
            console.log(`Saved Store: ${name}`);
          } else {
            console.log("Error adding data");
          }
        } else {  
          console.log(`Store already exists: ${name}`);
        }
      }

      // Update nextLink with the next page link from the response
      nextLink = response.data.next;
    }

    console.log("All Stores have been checked and saved to the database.");
  } catch (error) {
    console.error("Error fetching and saving Publisher:", error.message);
  }
};
