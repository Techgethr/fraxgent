import { createViemPublicClient } from "../src/viem/createViemPublicClient.js";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import type { Address } from "viem";
import {getCirculatingSupplyForToken} from "../src/frax/handlePrices";

import type { GetCirculatingSupplyArgs } from "../interface/index.js";

/**
 * Get the balance of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getCirculatingSupply: ToolConfig<GetCirculatingSupplyArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_circulatingsupply",
      description: "Get the circulating supply for a token",
      parameters: {
        type: "object",
        properties: {
          token: {
            type: "string",
            pattern: "FPI|FPIS|FRAX|FXS|frxETH|sfrxETH",
            description: "The token to query the circulating supply",
          },
        },
        required: ["token"],
      },
    },
  },
  handler: async ({ token }) => {
    return await getCirculatingSupplyForToken(token);
  },
};
