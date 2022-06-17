export type Betting = {
  "version": "0.1.0",
  "name": "betting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "openArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        },
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "betSide",
          "type": "u8"
        },
        {
          "name": "refKey",
          "type": "publicKey"
        },
        {
          "name": "hashKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "endArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initUserState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "claimReferralReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "arenaState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lockedPrice",
            "type": "u64"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "upAmount",
            "type": "u64"
          },
          {
            "name": "upCount",
            "type": "u64"
          },
          {
            "name": "downAmount",
            "type": "u64"
          },
          {
            "name": "downCount",
            "type": "u64"
          },
          {
            "name": "finalPrice",
            "type": "u64"
          },
          {
            "name": "endTimestamp",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "pythAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "arenaDuration",
            "type": "u64"
          },
          {
            "name": "platformFeeRate",
            "type": "u64"
          },
          {
            "name": "referralFeeRate",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userBetState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "betTimestamp",
            "type": "u64"
          },
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isUp",
            "type": "u8"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "isRefInited",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ArenaStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Opened"
          },
          {
            "name": "Started"
          },
          {
            "name": "EndSuccess"
          },
          {
            "name": "EndFail"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowedAuthority",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6002,
      "name": "BetResultMisMatch",
      "msg": "You are not winner."
    },
    {
      "code": 6003,
      "name": "AlreadyClaimed",
      "msg": "You already claimed reward."
    },
    {
      "code": 6004,
      "name": "FinishedArena",
      "msg": "This Arena is finished"
    },
    {
      "code": 6005,
      "name": "ArenaNotFinished",
      "msg": "This Arena is not finished"
    },
    {
      "code": 6006,
      "name": "ArenaNotStarted",
      "msg": "This Arena is not started"
    },
    {
      "code": 6007,
      "name": "ArenaNotOpened",
      "msg": "This Arena is not opened or already started"
    },
    {
      "code": 6008,
      "name": "ReferrerMisMatch",
      "msg": "Incorrect Referrer"
    },
    {
      "code": 6009,
      "name": "InvalidReferrerHash",
      "msg": "Incorrect Referrer Hash"
    },
    {
      "code": 6010,
      "name": "ReduceAmountExceed",
      "msg": "Reduce amount exceeds deposit amount"
    },
    {
      "code": 6011,
      "name": "ReduceNotAccepted",
      "msg": "Reduce is not accepted by client or freelancer"
    },
    {
      "code": 6012,
      "name": "UnexpectedAction",
      "msg": "This action is not expected."
    }
  ]
};

export const IDL: Betting = {
  "version": "0.1.0",
  "name": "betting",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "openArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "startArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        },
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "betSide",
          "type": "u8"
        },
        {
          "name": "refKey",
          "type": "publicKey"
        },
        {
          "name": "hashKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "endArena",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "arenaState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "refUserVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arenaId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initUserState",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userKey",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "claimReferralReward",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userVaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "arenaState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lockedPrice",
            "type": "u64"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "upAmount",
            "type": "u64"
          },
          {
            "name": "upCount",
            "type": "u64"
          },
          {
            "name": "downAmount",
            "type": "u64"
          },
          {
            "name": "downCount",
            "type": "u64"
          },
          {
            "name": "finalPrice",
            "type": "u64"
          },
          {
            "name": "endTimestamp",
            "type": "u64"
          },
          {
            "name": "betResult",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "pythAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "arenaDuration",
            "type": "u64"
          },
          {
            "name": "platformFeeRate",
            "type": "u64"
          },
          {
            "name": "referralFeeRate",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userBetState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "betTimestamp",
            "type": "u64"
          },
          {
            "name": "arenaId",
            "type": "u64"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "isUp",
            "type": "u8"
          },
          {
            "name": "isClaimed",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          },
          {
            "name": "isRefInited",
            "type": "u8"
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ArenaStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Opened"
          },
          {
            "name": "Started"
          },
          {
            "name": "EndSuccess"
          },
          {
            "name": "EndFail"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowedAuthority",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6002,
      "name": "BetResultMisMatch",
      "msg": "You are not winner."
    },
    {
      "code": 6003,
      "name": "AlreadyClaimed",
      "msg": "You already claimed reward."
    },
    {
      "code": 6004,
      "name": "FinishedArena",
      "msg": "This Arena is finished"
    },
    {
      "code": 6005,
      "name": "ArenaNotFinished",
      "msg": "This Arena is not finished"
    },
    {
      "code": 6006,
      "name": "ArenaNotStarted",
      "msg": "This Arena is not started"
    },
    {
      "code": 6007,
      "name": "ArenaNotOpened",
      "msg": "This Arena is not opened or already started"
    },
    {
      "code": 6008,
      "name": "ReferrerMisMatch",
      "msg": "Incorrect Referrer"
    },
    {
      "code": 6009,
      "name": "InvalidReferrerHash",
      "msg": "Incorrect Referrer Hash"
    },
    {
      "code": 6010,
      "name": "ReduceAmountExceed",
      "msg": "Reduce amount exceeds deposit amount"
    },
    {
      "code": 6011,
      "name": "ReduceNotAccepted",
      "msg": "Reduce is not accepted by client or freelancer"
    },
    {
      "code": 6012,
      "name": "UnexpectedAction",
      "msg": "This action is not expected."
    }
  ]
};
