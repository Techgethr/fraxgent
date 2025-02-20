import axios from "axios";
import { API_URL} from "../constants/fraxFinance";

export async function getCirculatingSupplyForToken(token:string) {
    // Get the path to be called
    const targetPath = `/v1/priceitems/circulating-supply/${token}`;



    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [Frax Finance API] Get Circulating supply...`);
        const {data} = await axios.get(
            API_URL+targetPath
        )

        console.log(`[Frax Finance API] GET Response:`);
        //console.log(data);
        return data;
    } catch (error) {
        return {
            success: false,
            message: error,
            // routerAddress: "",
            // message: `${error}`
        }
    };

};

export async function getTotalSupplyForToken(token:string) {
    // Get the path to be called
    const targetPath = `/v1/priceitems/total-supply/${token}`;



    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [Frax Finance API] Get Total supply...`);
        const {data} = await axios.get(
            API_URL+targetPath
        )

        console.log(`[Frax Finance API] GET Response:`);
        //console.log(data);
        return data;
    } catch (error) {
        return {
            success: false,
            message: error,
            // routerAddress: "",
            // message: `${error}`
        }
    };

};

