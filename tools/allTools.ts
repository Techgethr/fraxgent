import { getBalanceTool } from "./getBalance";
import { getWalletAddressTool } from "./getWalletAddress";
import { sendTransactionTool } from "./sendTransction";
import { deployErc20Tool } from "./deployERC20";
import { getCirculatingSupply } from "./getCirculatingSupply";
import { getTotalSupply } from "./getTotalSupply";
import { getPrice } from "./getPrice";
import { getTokensAvailableFraxSwap } from "./getTokensAvailableFraxSwap";
import { getAvailablePools } from "./getAvailablePools";

export interface ToolConfig<T = any> {
  /**
   * The definition of the tool.
   */
  definition: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: {
        type: "object";
        properties: Record<string, unknown>;
        required: string[];
      };
    };
  };

  /**
   * The handler function that will be called when the tool is executed.
   */
  handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
  // == READ == \\
  /**
   * Get the balance of a wallet.
   */
  get_balance: getBalanceTool,
  /**
   * Get the connected wallet address.
   */
  get_wallet_address: getWalletAddressTool,

  // == WRITE == \\
  /**
   * Send a transaction with optional parameters.
   */
  send_transaction: sendTransactionTool,
  /**
   * Deploy an ERC20 token.
   */
  deploy_erc20: deployErc20Tool,
  /**
   * Get the circulating supply for a token
   */
   get_circulatingsupply: getCirculatingSupply,
  /**
   * Get the total supply for a token
   */
   get_totalsupply: getTotalSupply,
  /**
   * Get the price for a token
   */
   get_pricefortoken: getPrice,
   /**
   * Get the price for a token
   */
    get_tokensavailablefraxswap: getTokensAvailableFraxSwap,
  /**
   * Get the available staking pool in Frax Finance
   */
   get_availablepools: getAvailablePools,
};
