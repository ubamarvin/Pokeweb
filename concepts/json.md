import { createMainLayout } from "../public/javascripts/main"

//Pick: Base
{
  "state": {
    "type": "PickPokemonState",
    "player": {
      "pokemons": [],
      "currentPokemon": {
        "id": 4,
        "name": "eevee",
        "hp": 100,
        "moves": [
          {
            "name": "bodyslam",
            "power": 30,
            "moveType": "normal",
            "statusEffect": "none"
          },
          {
            "name": "kick",
            "power": 75,
            "moveType": "normal",
            "statusEffect": "none"
          }
        ],
        "speed": 35,
        "pokeType": "fight",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    },
    "pokedex": {
      "pokedex": {
        "available_pokemon": [
          {
            "id": 6,
            "name": "bulbasaur",
            "hp": 95,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              }
            ],
            "speed": 45,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 7,
            "name": "squirtle",
            "hp": 90,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 40,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 8,
            "name": "Raichu",
            "hp": 105,
            "moves": [
              {
                "name": "thunder",
                "power": 70,
                "moveType": "elektro",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 50,
            "pokeType": "elektro",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 9,
            "name": "oddish",
            "hp": 85,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 30,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 10,
            "name": "zubat",
            "hp": 80,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 25,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 13,
            "name": "psyduck",
            "hp": 90,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 45,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 14,
            "name": "primeape",
            "hp": 110,
            "moves": [
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 60,
            "pokeType": "fight",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 15,
            "name": "gloom",
            "hp": 100,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 16,
            "name": "golduck",
            "hp": 100,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 55,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 17,
            "name": "venusaur",
            "hp": 120,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 70,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 1,
            "name": "pikachu",
            "hp": 100,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "thunder",
                "power": 70,
                "moveType": "elektro",
                "statusEffect": "none"
              }
            ],
            "speed": 30,
            "pokeType": "elektro",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 2,
            "name": "Meowth",
            "hp": 100,
            "moves": [
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 40,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 3,
            "name": "Arbok",
            "hp": 100,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "thunder",
                "power": 70,
                "moveType": "elektro",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 4,
            "name": "eevee",
            "hp": 100,
            "moves": [
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "fight",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 11,
            "name": "wartortle",
            "hp": 100,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              }
            ],
            "speed": 75,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 12,
            "name": "charizard",
            "hp": 100,
            "moves": [
              {
                "name": "firebreath",
                "power": 50,
                "moveType": "fire",
                "statusEffect": "none"
              },
              {
                "name": "burn",
                "power": 0,
                "moveType": "fire",
                "statusEffect": "burn"
              }
            ],
            "speed": 100,
            "pokeType": "fire",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          }
        ]
      }
    },
    "picks": 0,
    "opponent": {
      "pokemons": [
        {
          "id": 5,
          "name": "lugia",
          "hp": 100,
          "moves": [
            {
              "name": "tackle",
              "power": 50,
              "moveType": "normal",
              "statusEffect": "none"
            }
          ],
          "speed": 50,
          "pokeType": "water",
          "currentMove": {
            "name": "empty",
            "power": 0,
            "moveType": "normal",
            "statusEffect": "none"
          },
          "status": {
            "stateType": "NormalState"
          }
        }
      ],
      "currentPokemon": {
        "id": 4,
        "name": "eevee",
        "hp": 100,
        "moves": [
          {
            "name": "bodyslam",
            "power": 30,
            "moveType": "normal",
            "statusEffect": "none"
          },
          {
            "name": "kick",
            "power": 75,
            "moveType": "normal",
            "statusEffect": "none"
          }
        ],
        "speed": 35,
        "pokeType": "fight",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    }
  }
}



#### Event: Player adds Pokemon pikachu to Team
changes in json:
state.player.pokemons add pikachu Object
state.pokedex remove pikachu





pick: Choose Pikachu

{
  "state": {
    "type": "PickPokemonState",
    "player": {
      "pokemons": [
        {
          "id": 1,
          "name": "pikachu",
          "hp": 100,
          "moves": [
            {
              "name": "tackle",
              "power": 50,
              "moveType": "normal",
              "statusEffect": "none"
            },
            {
              "name": "thunder",
              "power": 70,
              "moveType": "elektro",
              "statusEffect": "none"
            }
          ],
          "speed": 30,
          "pokeType": "elektro",
          "currentMove": {
            "name": "empty",
            "power": 0,
            "moveType": "normal",
            "statusEffect": "none"
          },
          "status": {
            "stateType": "NormalState"
          }
        }
      ],
      "currentPokemon": {
        "id": 4,
        "name": "eevee",
        "hp": 100,
        "moves": [
          {
            "name": "bodyslam",
            "power": 30,
            "moveType": "normal",
            "statusEffect": "none"
          },
          {
            "name": "kick",
            "power": 75,
            "moveType": "normal",
            "statusEffect": "none"
          }
        ],
        "speed": 35,
        "pokeType": "fight",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    },
    "pokedex": {
      "pokedex": {
        "available_pokemon": [
          {
            "id": 6,
            "name": "bulbasaur",
            "hp": 95,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              }
            ],
            "speed": 45,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 7,
            "name": "squirtle",
            "hp": 90,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 40,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 8,
            "name": "Raichu",
            "hp": 105,
            "moves": [
              {
                "name": "thunder",
                "power": 70,
                "moveType": "elektro",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 50,
            "pokeType": "elektro",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 9,
            "name": "oddish",
            "hp": 85,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 30,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 10,
            "name": "zubat",
            "hp": 80,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 25,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 13,
            "name": "psyduck",
            "hp": 90,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 45,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 14,
            "name": "primeape",
            "hp": 110,
            "moves": [
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 60,
            "pokeType": "fight",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 15,
            "name": "gloom",
            "hp": 100,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 16,
            "name": "golduck",
            "hp": 100,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 55,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 17,
            "name": "venusaur",
            "hp": 120,
            "moves": [
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              },
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 70,
            "pokeType": "plant",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 2,
            "name": "Meowth",
            "hp": 100,
            "moves": [
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 40,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 3,
            "name": "Arbok",
            "hp": 100,
            "moves": [
              {
                "name": "tackle",
                "power": 50,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "thunder",
                "power": 70,
                "moveType": "elektro",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "normal",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 4,
            "name": "eevee",
            "hp": 100,
            "moves": [
              {
                "name": "bodyslam",
                "power": 30,
                "moveType": "normal",
                "statusEffect": "none"
              },
              {
                "name": "kick",
                "power": 75,
                "moveType": "normal",
                "statusEffect": "none"
              }
            ],
            "speed": 35,
            "pokeType": "fight",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 11,
            "name": "wartortle",
            "hp": 100,
            "moves": [
              {
                "name": "waterjet",
                "power": 50,
                "moveType": "water",
                "statusEffect": "none"
              },
              {
                "name": "vegankick",
                "power": 50,
                "moveType": "plant",
                "statusEffect": "none"
              }
            ],
            "speed": 75,
            "pokeType": "water",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          },
          {
            "id": 12,
            "name": "charizard",
            "hp": 100,
            "moves": [
              {
                "name": "firebreath",
                "power": 50,
                "moveType": "fire",
                "statusEffect": "none"
              },
              {
                "name": "burn",
                "power": 0,
                "moveType": "fire",
                "statusEffect": "burn"
              }
            ],
            "speed": 100,
            "pokeType": "fire",
            "currentMove": {
              "name": "empty",
              "power": 0,
              "moveType": "normal",
              "statusEffect": "none"
            },
            "status": {
              "stateType": "NormalState"
            }
          }
        ]
      }
    },
    "picks": 1,
    "opponent": {
      "pokemons": [
        {
          "id": 5,
          "name": "lugia",
          "hp": 100,
          "moves": [
            {
              "name": "tackle",
              "power": 50,
              "moveType": "normal",
              "statusEffect": "none"
            }
          ],
          "speed": 50,
          "pokeType": "water",
          "currentMove": {
            "name": "empty",
            "power": 0,
            "moveType": "normal",
            "statusEffect": "none"
          },
          "status": {
            "stateType": "NormalState"
          }
        }
      ],
      "currentPokemon": {
        "id": 4,
        "name": "eevee",
        "hp": 100,
        "moves": [
          {
            "name": "bodyslam",
            "power": 30,
            "moveType": "normal",
            "statusEffect": "none"
          },
          {
            "name": "kick",
            "power": 75,
            "moveType": "normal",
            "statusEffect": "none"
          }
        ],
        "speed": 35,
        "pokeType": "fight",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    }
  }
}



### Event: Player press "d" moves from Pick State to Main

empty current pokemon: ?? only when first time to main?
move first pokemon of player.pokemons to current Pokemon 


{
  "state": {
    "type": "MainState",
    "player": {
      "pokemons": [],
      "currentPokemon": {
        "id": 1,
        "name": "pikachu",
        "hp": 100,
        "moves": [
          {
            "name": "tackle",
            "power": 50,
            "moveType": "normal",
            "statusEffect": "none"
          },
          {
            "name": "thunder",
            "power": 70,
            "moveType": "elektro",
            "statusEffect": "none"
          }
        ],
        "speed": 30,
        "pokeType": "elektro",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    },
    "opponent": {
      "pokemons": [],
      "currentPokemon": {
        "id": 5,
        "name": "lugia",
        "hp": 100,
        "moves": [
          {
            "name": "tackle",
            "power": 50,
            "moveType": "normal",
            "statusEffect": "none"
          }
        ],
        "speed": 50,
        "pokeType": "water",
        "currentMove": {
          "name": "empty",
          "power": 0,
          "moveType": "normal",
          "statusEffect": "none"
        },
        "status": {
          "stateType": "NormalState"
        }
      },
      "choice": {

      }
    },
    "roundReport": ""
  }
}