import type { ToolConfig } from "./allTools.js";
import {getTotalSupplyForToken} from "../src/frax/handlePrices";

import type { GetCirculatingSupplyArgs } from "../interface/index.js";

/**
 * Get the balance of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getTotalSupply: ToolConfig<GetCirculatingSupplyArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_totalsupply",
      description: "Get the total supply for a token",
      parameters: {
        type: "object",
        properties: {
          token: {
            type: "string",
            pattern: "FPI|FPIS|FRAX|FXS|frxETH|sfrxETH",
            description: "The token to query the total supply",
          },
        },
        required: ["token"],
      },
    },
  },
  handler: async ({ token }) => {
    return await getTotalSupplyForToken(token);
  },
};
