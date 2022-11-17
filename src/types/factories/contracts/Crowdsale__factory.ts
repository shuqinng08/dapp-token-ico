/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { Crowdsale, CrowdsaleInterface } from "../../contracts/Crowdsale";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013cf380380620013cf833981810160405281019062000037919062000242565b60016000819055506000831162000085576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007c906200032f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ef9062000351565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200016b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000162906200030d565b60405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620004ff565b6000815190506200020e81620004b1565b92915050565b6000815190506200022581620004cb565b92915050565b6000815190506200023c81620004e5565b92915050565b6000806000606084860312156200025857600080fd5b600062000268868287016200022b565b93505060206200027b86828701620001fd565b92505060406200028e8682870162000214565b9150509250925092565b6000620002a760248362000373565b9150620002b482620003ea565b604082019050919050565b6000620002ce60148362000373565b9150620002db8262000439565b602082019050919050565b6000620002f560258362000373565b9150620003028262000462565b604082019050919050565b60006020820190508181036000830152620003288162000298565b9050919050565b600060208201905081810360008301526200034a81620002bf565b9050919050565b600060208201905081810360008301526200036c81620002e6565b9050919050565b600082825260208201905092915050565b60006200039182620003c0565b9050919050565b6000620003a582620003c0565b9050919050565b6000620003b98262000384565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f43726f776473616c653a20746f6b656e20697320746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a20726174652069732030000000000000000000000000600082015250565b7f43726f776473616c653a2077616c6c657420697320746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b620004bc8162000398565b8114620004c857600080fd5b50565b620004d681620003ac565b8114620004e257600080fd5b50565b620004f081620003e0565b8114620004fc57600080fd5b50565b610ec0806200050f6000396000f3fe60806040526004361061004e5760003560e01c80632c4e722e1461006a5780634042b66f14610095578063521eb273146100c0578063ec8ac4d8146100eb578063fc0c546a1461010757610065565b366100655761006361005e610132565b61013a565b005b600080fd5b34801561007657600080fd5b5061007f610213565b60405161008c9190610add565b60405180910390f35b3480156100a157600080fd5b506100aa61021d565b6040516100b79190610add565b60405180910390f35b3480156100cc57600080fd5b506100d5610227565b6040516100e2919061099c565b60405180910390f35b610105600480360381019061010091906107bb565b61013a565b005b34801561011357600080fd5b5061011c610251565b60405161012991906109e0565b60405180910390f35b600033905090565b61014261027b565b600034905061015182826102cb565b600061015c82610383565b90508160045461016c9190610b53565b60048190555061017c838261039a565b8273ffffffffffffffffffffffffffffffffffffffff1661019b610132565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b84846040516101e2929190610af8565b60405180910390a36101f483836103a8565b6101fc6103ac565b6102068383610417565b505061021061041b565b50565b6000600354905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260005414156102c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b890610a9d565b60405180910390fd5b6002600081905550565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561033b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033290610a3d565b60405180910390fd5b600081141561037f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037690610abd565b60405180910390fd5b5050565b6000600354826103939190610ba9565b9050919050565b6103a48282610425565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610414573d6000803e3d6000fd5b50565b5050565b6001600081905550565b6104728282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166104769092919063ffffffff16565b5050565b6104f78363a9059cbb60e01b84846040516024016104959291906109b7565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104fc565b505050565b600061055e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105c39092919063ffffffff16565b90506000815111156105be578080602001905181019061057e91906107e4565b6105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490610a7d565b60405180910390fd5b5b505050565b60606105d284846000856105db565b90509392505050565b606082471015610620576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061790610a1d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516106499190610985565b60006040518083038185875af1925050503d8060008114610686576040519150601f19603f3d011682016040523d82523d6000602084013e61068b565b606091505b509150915061069c878383876106a8565b92505050949350505050565b6060831561070b57600083511415610703576106c38561071e565b610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610a5d565b60405180910390fd5b5b829050610716565b6107158383610741565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156107545781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078891906109fb565b60405180910390fd5b6000813590506107a081610e5c565b92915050565b6000815190506107b581610e73565b92915050565b6000602082840312156107cd57600080fd5b60006107db84828501610791565b91505092915050565b6000602082840312156107f657600080fd5b6000610804848285016107a6565b91505092915050565b61081681610c15565b82525050565b61082581610c03565b82525050565b600061083682610b21565b6108408185610b37565b9350610850818560208601610c81565b80840191505092915050565b61086581610c5d565b82525050565b600061087682610b2c565b6108808185610b42565b9350610890818560208601610c81565b61089981610ce3565b840191505092915050565b60006108b1602683610b42565b91506108bc82610cf4565b604082019050919050565b60006108d4602a83610b42565b91506108df82610d43565b604082019050919050565b60006108f7601d83610b42565b915061090282610d92565b602082019050919050565b600061091a602a83610b42565b915061092582610dbb565b604082019050919050565b600061093d601f83610b42565b915061094882610e0a565b602082019050919050565b6000610960601983610b42565b915061096b82610e33565b602082019050919050565b61097f81610c53565b82525050565b6000610991828461082b565b915081905092915050565b60006020820190506109b1600083018461080d565b92915050565b60006040820190506109cc600083018561081c565b6109d96020830184610976565b9392505050565b60006020820190506109f5600083018461085c565b92915050565b60006020820190508181036000830152610a15818461086b565b905092915050565b60006020820190508181036000830152610a36816108a4565b9050919050565b60006020820190508181036000830152610a56816108c7565b9050919050565b60006020820190508181036000830152610a76816108ea565b9050919050565b60006020820190508181036000830152610a968161090d565b9050919050565b60006020820190508181036000830152610ab681610930565b9050919050565b60006020820190508181036000830152610ad681610953565b9050919050565b6000602082019050610af26000830184610976565b92915050565b6000604082019050610b0d6000830185610976565b610b1a6020830184610976565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610b5e82610c53565b9150610b6983610c53565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b9e57610b9d610cb4565b5b828201905092915050565b6000610bb482610c53565b9150610bbf83610c53565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610bf857610bf7610cb4565b5b828202905092915050565b6000610c0e82610c33565b9050919050565b6000610c2082610c33565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c6882610c6f565b9050919050565b6000610c7a82610c33565b9050919050565b60005b83811015610c9f578082015181840152602081019050610c84565b83811115610cae576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43726f776473616c653a2062656e656669636961727920697320746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f43726f776473616c653a20776569416d6f756e74206973203000000000000000600082015250565b610e6581610c03565b8114610e7057600080fd5b50565b610e7c81610c27565b8114610e8757600080fd5b5056fea26469706673582212200e765febdac93538807c71b70dd5cc559bc2440b34d0adc8f62d10792e0f80e464736f6c63430008040033";

type CrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Crowdsale__factory extends ContractFactory {
  constructor(...args: CrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Crowdsale> {
    return super.deploy(
      rate,
      wallet,
      token,
      overrides || {}
    ) as Promise<Crowdsale>;
  }
  override getDeployTransaction(
    rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(rate, wallet, token, overrides || {});
  }
  override attach(address: string): Crowdsale {
    return super.attach(address) as Crowdsale;
  }
  override connect(signer: Signer): Crowdsale__factory {
    return super.connect(signer) as Crowdsale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsaleInterface {
    return new utils.Interface(_abi) as CrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Crowdsale {
    return new Contract(address, _abi, signerOrProvider) as Crowdsale;
  }
}
