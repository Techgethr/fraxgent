import { createViemPublicClient } from "../src/viem/createViemPublicClient.js";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import type { Address } from "viem";
import {getAvailablePoolsToStake} from "../src/frax/handlePrices";

import type { GetWalletAddressArgs } from "../interface/index.js";

/**
 * Get the balance of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getAvailablePools: ToolConfig<GetWalletAddressArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_availablepools",
      description: "Get the available staking pool in Frax Finance",
      parameters: {
        type: "object",
        properties: {
        },
        required: [],
      },
    },
  },
  handler: async () => {
    return await getAvailablePoolsToStake();
  },
};
