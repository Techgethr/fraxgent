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

export async function getPriceForToken(token:string) {
    // Get the path to be called
    const targetPath = `/v1/priceitems/coin-stats`;



    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [Frax Finance API] Get price...`);
        const {data} = await axios.get(
            API_URL+targetPath
        )

        console.log(`[Frax Finance API] GET Response:`);
        const tokenData = Object.values(data).find((item: any) => item.coin == token);
        return tokenData.price;
    } catch (error) {
        return {
            success: false,
            message: error,
            // routerAddress: "",
            // message: `${error}`
        }
    };

};

export async function getTokensAvailableToSwap() {
    // Get the path to be called
    const targetPath = `/v2/fraxswap/tokens?chain=fraxtal`;



    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [FraxSwap API] Get FraxSwap available tokens...`);
        const {data} = await axios.get(
            API_URL+targetPath
        )

        console.log(`[FraxSwap API] GET Response:`);
        const coins = Object.values(data.tokens).map((item: any) => item.symbol).join(', ');
        return coins;
    } catch (error) {
        return {
            success: false,
            message: error,
            // routerAddress: "",
            // message: `${error}`
        }
    };

};