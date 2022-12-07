
const wzStrats = [
//53 Total
    ["Operator Classes", "Each member of your squad is only allowed one type of weapon, ie: Pistols, Smgs, Snipers, Lmgs, etc."],
    ["Chicken Dance", "Any time you see any enemy player or AI, you must immediately start to make chicken noises, and run away as far as possible."],
    ["Goodness, Gracious, Great balls of fire!", "The only lethals you are allowed to use are Thermite grenades, and molotovs. Any time you get a kill, you must stand over the body, and mourne the loss of your friend Goose."],
    ["Open Source Callouts", "Turn on open mic, so that your enemies can hear all of your callouts to your team. No sneaky push to talks!"],
    ["Police, Don't Move!!", "Any time you see an enemy player, you must yell POLICE DON'T MOVE, and wait for them to face you with a weapon before you shoot. "],
    ["Uber Me Home Chief", "One of your teamates is assigned as the designated Uber driver. They must land at a vehicle, and drive the squad around the map. The Uber is your only means of getting from place to place. NO WALKING!"],
    ["Protect the President", "A classic battle royale challenge. One of your squad mates is designated President, and isn't allowed any weapons. The rest of the squad are Secret Service, and must protect Sleepy Joe at all costs. Watch out for those stairs."],
    ["Get to Da Choppah!", "You must locate a heavy, or light helo, and engage enemies from within the helicopter. No jumping out unless the chopper is going down. Use Arnold Shwarzenegger voices for more fun."],
    ["All Ghillied Up", "Equip the most green operator skin you have. Any time you spot an enemy you must prone, and attempt to ambush. Take the shot, or let them pass, choice is yours."],
    ["Concealed Carry", "Pistols only. Good luck!"],
    ["Welcome to London Bruv", "Knives, and tear gas only. Meleeing with your fists is also okay."],
    ["Your Walls Mean Nothing!", "The only tacticals, and lethals you can use are snapshots, and drill charges."],
    ["Breach and Clear!", "The only weapons you can use are Riot Shields, and shotguns. A loadout will make this easier."],
    ["Return to Monke", "No callouts. The only sounds you can make for the entire game are ape noises. The louder, the better."],
    ["First is the Worst", "The only gun you can use is from the first chest you open. Better hope it's a good one."],
    ["Missing Evidence", "The only weapons you can use must be looted from dead bodies."],
    ["Friendship is Magic", "Any time you encounter an enemy squad, you must try to make friends with them through proximity chat first. If they decline, you may kill."],
    ["FaZe Montage", "No ADS, only hip fire with automatic weapons. You must attempt to 360 no scope enemies with snipers."],
    ["Four Corners", "Another classic battle royale challenge. Every member of the squad must land in a different corner of the map, and attempt to rejoin the whole squad in the final circles."],
    ["Contract Killer", "You can only kill enemies you have a bounty on, or who have a bounty on you."],
    ["Summon the Chairforce", "Buy as many precisions, and mortar strikes as you can. When you encounter an enemy, you must airstrike them before you can shoot."],
    ["Vehicular Manslaughter", "The only kills you can get are with vehicles. Splat as many players as you can, and keep an eye on that gas gauge."],
    ["Support Class", "One of your teamates is the dedicated support. They are the only ones allowed to revive, pick up and hold extra armor plates, munitions boxes, stims, armor boxes, or self revives. If your support dies, you must do everything you can to get them back, or you'll spend the rest of the game without the items listed."],
    ["Fire Superiority", "The only weapons your team is allowed to carry are lmgs. All of your squad must shoot at the same time when engaging enemies. Keep their heads down!"],
    ["Al Mazrah's Anthem", "You may only use explosives and AK's. If possible, scream Arab sounding words at the enemies through proximity chat."],
    ["No Callouts", "No pings, no callouts. If you see an enemy, you must shout OVER THERE!"],
    ["Choo Chooooo", "You must land on the train, and hold it for as long as possible (Preferably the whole game). You may not drive any other vehicles. If you fall off, and can't get back on, you lose."],
    ["Short Bus", "Find a cargo truck, and drive around the map attempting to recruit people to your pleasure cruise. Ms. Frizzle has nothing on you."],
    ["Open Frequency", "Similar to Open Source Callouts. You must loudly announce everything you are doing over proximity chat, ie: RELOADING! MOVING AROUND THE BUILDING! OUT OF AMMO! RUNNING BEHIND THIS TREE!"],
    ["I Can't See Him!", "You may only shoot at enemies that are currently live marked. I sure hope you know your ping key."],
    ["Suicide Hotline", "One of your teammates is selected as the victim, and must strive to find a way to kill themself at all costs. The rest of the team must try to keep them alive, no matter what. If the victim dies, the team loses."],
    ["Oops, Wrong Sens", "Change your sensitivity to max, and enjoy the ride. Good luck."],
    ["Vape Nation", "Find some smoke grenades. In order to engage enemies, you must throw a smoke at them and use it as cover to attack. If they're in a building, smoke the whole dang thing."],
    ["Not the IRS...", "One of the squad is the designated tax collector. They must take all of your money, and spend it how they think fit, or they can throw it away. Choice is theirs."],
    ["Runaway Rifle", "Once you start shooting at an enemy, you may not stop firing until the magazine is empty. Choose your guns wisely."],
    ["They're Turning the Fricking Frogs Gay!", "There's something in the water. You may not leave the rivers, or ocean for more than 30 seconds. If you have a boat, you may attempt to drive it on land. Don't know how long you'll last though. Stay wet and Wild"],
    ["GET DOWN!", "Crouch or crawl the entire game. No sprinting. Better hope you land in a good spot for the zone."],
    ["Run Forrest!!", "Never stop running. You can strafe to loot, but may never stop moving. No crouching, or proning behind cover."],
    ["Stevie Wonder", "One of your teamates must close their eyes. The rest will try to keep them alive as long as possible by giving them directions."],
    ["Whorezone 2.0", "Any time you take damage, you must moan. Preferable in proximity chat. Pain kinks have never been more interesting."],
    ["Bush Woookie", "Attempt to hide in bushes as much as possible. When you spot an enemy, you must find a bush, and hide. You can shoot, but if shot back at, you can't leave your bush"],
    ["Girl Scouts in Chicago", "You must try to sell items from your inventory to any enemies you see. You can only shoot in self defence. Better hope they're in the market for some cookies."],
    ["Swap Meet", "Every time you open a chest, or kill an enemy. You must swap everything there, with what you're currently holding."],
    ["Picky Looter", "You must choose between the different types of loot tables. Legendary chest, weapon cache, duffle bag, player loot, or ground spawns, and you can only pick up items from that type."],
    ["101st Airborne", "You must locate a light or heavy helo, and fly around the map. If you spot enemies, you must parachute on to them, and engage them while the pilot flies around. Bonus points if you drop on an atv from a heavy helo."],
    ["Only the Best for Me", "Minus your starting pistol. The only weapons you can use are from buy stations, and loadout drops."],
    ["Face the Wall", "The first person to execute an enemy in the actual game (Not the starting lobby) wins, and gets all the money anyone finds."],
    ["Abducted By Aliens", "Find a light or heavy helo, and attempt to get enemies to get in with your squad. Let's hope your first encounter isn't your last."],
    ["Bare Bones", "You may not use any weapons with attachments. The CIA hasn't given your middle east insurrection, funding yet. You don't have much of a budget."],
    ["Anit-vax", "No gas masks, stims, or self revives."],
    ["Last Hope", "No one can be bought back until one player is left alive"],
    ["Opposite Day", "All of your callouts must be wildly incorrect. If they're to the right, say they're behind you. If you're running away, say you're pushing. Saying these through proximity chat will add to the fun."],
    ["Kamikaze", "Get kills by using explosives, and sacrificing yourself for the kill. Crashing helicopters in to enemies counts too."],
    ["You Brought Protection Right?", "You can't re-armor the entire game. No plates, no problem"],
    ["Superhero Landing", "You can never pull your parachute. Yes it's possible to survive this."],


]

const bingoText = ["Get 5 Kills", "Get 10 Squad Kills", "Open A Loadout Drop", "Get A Knockdown With A Lethal", "Get A Roadkill", "Find A Gun With Five Attachments",
    "Direct Hit An Enemy With A Throwable", "Destroy A Vehicle", "Crash A Helicopter", "Flip A Vehicle", "See An Enemy Get A Kill",
    "Win Gulag", "Spend Five Thousand Dollars", "Call In A Precision or Mortar Strike", "Die to Your Own Lethal Equipment", "Disable an Enemy Vehicle",
    "Loot an Enemy's Backpack", "Open a Rare Chest", "Fully Refuel a Vehicle", "See an Enemy Dolphin Dive", "Die to Fall Damage", "See an Enemy Return From Gulag",
    "Kill the Jailor in Gulag", "Get a Sniper Rifle Kill", "Finish an Enemy You Did Not Down", "Capture a Blacksite", "Complete a Bounty Contract",
    "Complete a Safecracker Contract", "Get a Launcher Kill", "Get a Hipfire Kill", "Get a Kill With a Precision or Mortar",
    "Hear an Enemy Through Prox Chat", "Make Friends With an Enemy", "Get Roadkilled", "Drown",
    "Get a Kill With a Shotgun", "Get a Kill in Observatory", "Get a Kill in Al Mazrah City", "Spare a Downed Enemy's Life", "Stun or Flash an Enemy",
    "Buy Armor From a Buy Station", "Buy a Munitions From a Buy Station", "Buy a Weapon From a Buy Station", "End the Game with 0 Dollars",
    "Buy a Backpack Upgrade", "Get a Squad Wipe", "Get 15 Squad Kills", "Get Two Road Kills", "Pick Up an Enemy in Your Vehicle", "Run Completely Out of Ammo", "Fill Your Backpack With Armor Plates",
    "Have Every Kind of Ammo at Once", "Refill at an Ammo Depot", "Pick Up and Keep a Gas Can", "Abandon a Heavy Helo in the Sky", "Beach a Boat On a Road", "Get a Melee Kill", "Reveal an Enemy With a Snapshot",
    "Visit 3 POIS", "Revive a Teammate", "Land in a Body of Water", "Spend the Whole Game in Water", "Get a Claymore Kill", "Make it to Top 10", "Be in First 10 to Die", "Commit a War Crime >:)",
    "Find an Armored Vehicle", "Use a Rappel", "Find a Three Plate Vest", "Get an Execution", "Die With Over 5K", "Kill Both Enemies in Gulag", "Sink a Vehicle", "Die to a Meta Gun", "Complete an Intel Cotract",
    "Survive a Most Wanted Contract", "Get a Vehicle on Top of a Roof", "Crawl for 100 Meters", "Clear out a POI", "Use a UAV", "Counter an Enemy's UAV", "Find a Gas Mask", "Die to Gas", "Stay in the Air for 2 Minutes",
    "Kill an Enemy That's in a Vehicle", "Find a Gun with 3 Attachments", "Find a Gun with 2 Attachments", "Find a Gun with 1 Attachments", "Find a Gun with 4 Attachments", "Tear Gas an Enemy",
    "Steal a Teammate's Crate", "Get a Kill With a Supressed Weapon", "Bust Through 10 Different Doors", "Spot an Enemy with a Spotter Scope", "Break All of a Car's Windows", "Drive 1k Meters", "See an Enemy Loot a Body",
    "Steal an Enemy's Vehicle", "Hold a Funeral for a Killed Enemy", "Destroy an Enemy Helo", "Crash in to an Enemy Vehicle"]




const M4 =  [
                ["Barrel", "Hightower 20inch Barrel", "14inch Carbine Shroud", "11.5inch T-H4 Barrel", "11.5inch Carbine Shroud", "Tempus Trench Pro", "419MM EXF Barrel", "7.5inch Tempus Firebrand"],
                ["Stock", "Demo Fade Pro Stock", "Tempus P80 Strike Stock", "Demo Precision Elite Factory", "Corio Precio Factory", "Demo D50 Buffer Tube", "Ravage-8"],
                ["Magazine", "40 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Phantom Grip", "Support CP90 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["M4"],
                ["./assets/images/Screenshot_110.png"],
            ]
const TAQ56 = [
                ["Barrel", "12inch Tacshort Barrel", "17.5inch Tundra Pro Barrel"],
                ["Stock", "TV LPX-434", "Tactique Brute Stock", "TV Cardinal Stock", "TV Xline Pro"],
                ["Magazine", "40 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Hellscream 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "FSS Combat Grip", "XRK Response Grip", "Demo Cleanshot Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["TAQ-56"],
                ["./assets/images/Screenshot_111.png"],
            ]
const KASTOV762 = [
                ["Barrel", "KAS-7 406MM", "IG-K30 406MM", "Kastovia 343", "342MM Sakin KL", "KAS-10 584MM Barrel"],
                ["Stock", "KSTV-RPK Factory", "FT Tac-Elite Stock", "Kastov-Rama", "Markeev R7 Stock", "Prolite TL3 Stock"],
                ["Magazine", "20 Round Mag", "40 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "KL40-M2", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "7.62 Frangible", "7.62 HollowPoint"," 7.62 Armor Piercing", "7.62 OverPressured +P", "7.62 High Velocity"],
                ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["KASTOV 762"],
                ["./assets/images/Screenshot_112.png"],
            ]
const LACHMANN556 = [
                ["Barrel", "15.9inch Lachmann RAPP Barrel", "LM Aurora 90 Barrel", "10.6inch Lachstrike Barrel", "Lach-12 Barrel", "Lachmann Nova"],
                ["Stock", "LM-S Factory G79 Stock", "RAPP-762 Factory", "Lachmann S76 Factory Stock", "FT Mobile Stock", "Lachmann S9 Factory"],
                ["Magazine", "15 Round Mag", "40 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "LM Cronus Grip", "LMK64 Grip", "S-Grip Zero"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["LACHMANN-556"],
                ["./assets/images/Screenshot_113.png"],
            ]
const STB556 = [
                ["Barrel", "FTAC FB20", "18inch Bruen Guerilla", "24.4inch Bruen S-620", "508MM Rear Guard", "Bruen Turaco 686MM", "16.5inch Bruen S901 Barrel"],
                ["Stock", "Bruen MX9 Stock", "Bruen HCR 56 Stock"],
                ["Comb", "Schlager TTF3", "Bruen TS-30 Comb", "FTAC C11 Riser"],
                ["Magazine", "42 Round Mag", "Single Tap Mod"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "Bruen G305 Grip", "Stip-40 Grip", "Bruen Q900 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["STB 556"],
                ["./assets/images/Screenshot_114.png"],        
            ]
const M16 = [
                ["Barrel", "14inch Carbine Shroud", "Demo 501 Factory", "11.5inch T-H4 Barrel", "11.5inch Carbine Shroud"],
                ["Stock", "Assault-60 Stock Factory", "Demo Fade Pro Stock", "Corio Precio Factory", "Ravage 8"],
                ["Magazine", "15 Round Magazine", "45 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["M16"],
                ["./assets/images/Screenshot_115.png"],
            ]
const KASTOV74U = [
                ["Barrel", "SA Ultra III", "Shorttac 330MM", "BR209 Barrel"],
                ["Stock", "KSTV-RPK Factory", "Ivanov Wood Stock", "Spetznaz S10 Stock", "FT Tac-Elite Stock", "Otrezat Stock", "VLK Stockless", "Markeev R7 Stock"],
                ["Magazine", "20 Round Mag", "45 Round Mag"],
                ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.45 Frangible", "5.45 HollowPoint"," 5.45 Armor Piercing", "5.45 OverPressured +P", "5.45 High Velocity"],
                ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                ["KASTOV-74U"],
                ["./assets/images/Screenshot_116.png"],          
            ]
const KASTOV545 = [
                ["Barrel", "KAS-7 406MM", "Kastovia 406", "IG-K30 406MM", "342MM Sakin KL"],
                ["Stock", "KSTV-RPK Factory", "Ivanoc Wood Stock", "FT Tac-Elite Stock", "Kastov-Rama", "Markeev R7 Stock", "Prolite TL3 Stock"],
                ["Magazine", "20 Round Mag", "45 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "KL40-M2", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "5.45 Frangible", "5.45 HollowPoint"," 5.45 Armor Piercing", "5.45 OverPressured +P", "5.45 High Velocity"],
                ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["KASTOV 545"],
                ["./assets/images/Screenshot_117.png"],            
            ]
const M13B = [
                ["Barrel", "14inch Bruen Echelon", "7inch Bruen B-M20"],
                ["Stock", "Bruen R90 Factory", "Ravage-8", "Bruen Flash V4 Stock"],
                ["Magazine", "45 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                ["Rear Grip", "Bruen GR-500", "D37 Grip", "Bruen Flash Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["M13B"],
                ["./assets/images/Screenshot_118.png"],            
            ]
        
//-------------------------------------------------------------------------------------------------------------------------------
const LACHMANN762 = [
                ["Barrel", "Romeo FT 16inch Barrel", "15.9inch Lachmann RAPP Barrel", "LM Aurora 90 Barrel", "10.6inch Lachstrike Barrel", "Meer-56 11inch Factory Barrel", "Lachmann Nova"],
                ["Stock", "LM-S Factory G79 Stock", "RAPP-762 Factory", "Meer Recoil-56 Factory Stock", "FT Mobile Stock", "Lachmann S9 Factory"],
                ["Magazine", "30 Round Mag", "15 Round Mag", "10 Round Mag", "50 Round Drum"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "7.62 Armor Piercing", "7.62 High Velocity", "7.62 Frangible", "7.62 HollowPoint", "7.62 OverPressured +P", "7.62 Incendiary"],
                ["Rear Grip", "Lachmann TCG-10", "LM Cronus Grip", "LMK64 Grip", "S-Grip Zero"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["LACHMANN-762"],
                ["./assets/images/Screenshot_119.png"],            
            ]
            // SO14: {
            //     ["SO-14"]
            // },
const TAQV = [
                ["Barrel", "Lance-50 12inch Barrel", "18inch Precision-6 Barrel"],
                ["Stock", "TV LPX-434", "Tactique Brute Stock", "TV Cardinal Stock", "TV Xline Pro"],
                ["Magazine", "50 Round Drum", "30 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Hellscream 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "7.62 Frangible", "7.62 HollowPoint"," 7.62 Armor Piercing", "7.62 OverPressured +P", "7.62 High Velocity"],
                ["Rear Grip", "FSS Combat Grip", "XRK Response Grip", "Demo Cleanshot Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                ["TAQ-V"],
                ["./assets/images/Screenshot_121.png"],           
            ]
            // FTACRECON: {
            //     ["FTAC Recond"]
            // },
//-------------------------------------------------------------------------------------------------------------------------------
const VEL46 = [
                ["Barrel", "Tango 228 Barrel", "Schlager RV-B", "Schlager L203 Barrel", "LACH-DX 203MM", "Lachmann Dart 165MM", "LACH-165 Zulu", "LM Series-7"],
                ["Stock", "LM Precision Stock", "Assault-60 Stock", "Demo RXT Stock", "Vel A-568 Collapsed"],
                ["Magazine", "30 Round Mag", "50 Round Mag", "60 Round Mag"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "4.6MM Frangible", "4.6MM Hollow Point", "4.6MM Armor Piercing", "4.6MM OverPressured +P"],
                ["Rear Grip", "Sakin Rubber Grip", "ZLR Combat Grip", "Schlager Soldier Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                ["VEL 46"],
                ["./assets/images/Screenshot_123.png"],           
            ]
            // MX9: {
                
            // },
const LACHMANNSUB = [
                ["Barrel", "FTAC M-SUB 12inch", "Lachmann Pulsar", "L38 Falcon 226MM"],
                ["Stock", "Lachmann S76 Factory Stock", "Meer Recoil-56 Factory Stock", "FT Mobile Stock", "LM Stockless Mod"],
                ["Magazine", "15 Round Magazine", "40 Round Mag", "50 Round Drum"],
                ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "9MM Frangible", "9MM Hollow Point", "9MM Armor Piercing", "9MM OverPressured +P"],
                ["Rear Grip", "Lachmann TCG-10", "LM Cronus Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                ["LACHMANN SUB"],
                ["./assets/images/Screenshot_125.png"],           
            ]
const VAZNEV9K = [
                ["Barrel", "KAS-1 381MM", "SA Response III"],
                ["Stock", "Spetsnaz S10 Stock", "FT TAC-Elite Stock", "Otrezat Stock", "VLK Stockless", "Markeev R7 Stock"],
                ["Magazine","45 Round Mag"],
                ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "9MM Frangible", "9MM Hollow Point", "9MM Armor Piercing", "9MM OverPressured +P"],
                ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                ["VAZNEV-9K"],
                ["./assets/images/Screenshot_126.png"],           
            ]
const FSSHURRICANE = [
                ["Barrel", "FSS Cannonade 16inch", "FSS-X7 Barrel"],
                // [""]
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                //[""],
                ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Phantom Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["FSS HURRICANE"],
                ["./assets/images/Screenshot_127.png"],           
            ]
const MINIBAK = [
                ["Barrel", "BAK-9 279MM Barrel"],
                ["Stock", "Spetsnaz S10 Stock", "FT Tac-Elite Stock", "Markeev R7 Stock", "Otrezat Stock", "VLK Stockless"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ["Ammunition", "9MM Frangible", "9MM Hollow Point", "9MM Armor Piercing", "9MM Over Pressured +P"],
                ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["MINIBAK"],
                ["./assets/images/Screenshot_128.png"],
            ]
            // BASP: {
                
            // },
const PDSW528 = [
                ["Barrel", "9.5inch Duke-30", "FTAC Series IX 14.5inch", "FTAC Defense 14.5inch", "17inch Corvus Prorange", "16inch Cloak 90", "18.75inch Cloak 90"],
                ["Stock", "Hollow Extended Stock", "CQB Stock", "Guard Duty Stock", "FSS Heavy Stock Pro"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "5.7X28MM Frangible", "5.7X28MM Armor Piercing", "5.7X28MM OverPressured +P", "5.7X28MM Hollow Point"],
                ["Rear Grip", "Bruen G305 Grip Wrap", "Stip-40 Grip", "Bruen Q900 Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["Rail", "Integrated Reflex Rail", "GR33 Light Rail"],
                ["Comb", "Mack 8 Ontrak Comb", "FTAC H86 Cheek Rest", "TV Taccomb"],
                ["PDSW 528"],
                ["./assets/images/Screenshot_130.png"],
            ]
const FENNEC45 = [
                ["Barrel", "5.5inch Fennec Minitac", "FTAC 8.5inch Recon", "Forge Tac Ninja", "Fennec Covert Force", "ZLR 16.5inch Ignition Barrel"],
                ["Stock", "Fennec Bullfighter", "FTAC XCommand Stock", "FTAC Locktight Stock", "Agile Assault-7 Stock", "FTAC Stock Cap"],
                ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", ".45 Auto Frangible", ".45 Auto Hollow Point", ".45 Auto OverPressured +P", ".45 Auto Armor Piercing"],
                ["Rear Grip", "Fennec Stippled Grip", "Fennec Textured Grip", "Fennec Rubber Grip"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["Magazine", "Fennec Double Tap Mod", "Fennec Mag 45"],
                ["FENNEC 45"],
                ["./assets/images/Screenshot_131.png"],
            ]
//-------------------------------------------------------------------------------------------------------------------------------
const LOCKWOOD300 = [
                ["Barrel", "Matuzek 812 Barrel", "711MM Matuzek D50", "597MM Matuzek Inferno", "11inch Bryson Special"],
                ["Stock", "Cronen Marshal Stock", "Bryson Natural Series Stock", "Sweetspot Stock", "Heist Stock Mod"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "Sakin DB107", "Tempus VOX", "DB-Dread Comp", "XTEN V1.3 Choke", "XTEN V2.0 Choke", "GW Max-99", "DB-Big Bore Comp", "Mack8 Shotgun Breach", "Bryson Series IX Choke", "Bryson Series XII Choke", "Reckoner Comp"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "12 Gauge Slug"],
                ["Guard", "Buck-Pro", "Bryson Natural Series Handguard", "Demo Carbon Guard"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["LOCKWOOD 300"],
                ["./assets/images/Screenshot_132.png"],
            ]
const EXPEDITE12 = [
                ["Barrel", "18.5inch Emperor Barrel", "14inch Polarize Barrel", "14inch Short Barrel", "18.5inch Battlemaster", "419MM Schlager Salvo"],
                ["Stock", "FSS Frame Stock", "Resonance Stock Collapsed", "Bryson Reverb-55 Stock", "Schlager Resonance"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "SA Schweigen DX", "Bryson Improved Choke", "SA Schweigen XS", "FTAC Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTEN Quadflash", "Vulture Claw Breacher", "Mack8 Frost Bite", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Choke"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "12 Gauge Explosive", "12 Gauge Slug", "12 Gauge Dragon's Breath"],
                ["Rear Grip/Comb", "Padded Shotgun Comb", "FSS Ammo Sleeve", "Schlager Fang Grip", "Goliath 77 Grip", "Schlager Void Grip"],
                ["Bolt", "Expedite L-Bolt", "Expedite HZ3 Bolt"],
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["EXPEDITE 12"],
                ["./assets/images/Screenshot_133.png"],
            ]
const BRYSON800 = [
                ["Barrel", "21.5inch Recourse Barrel", "18inch Demo Firewall", "29.5inch Rifled Barrel", "21.5inch Bryson Shredder", "16inch Bryson Factory Barrel", "16inch Bryson Shockwave", "8inch XRK CQB Barrel"],
                ["Stock", "FTAC Apollo Stock", "FSS Guardian Stock", "FSS Watchman", "XTEN Ripcord Stock", "Stockless Pistol Grip", "Sawed Off Mod"],
                ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                ["Muzzle", "SA Schweigen DX", "Bryson Improved Choke", "SA Schweigen XS", "FTAC Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTEN Quadflash", "Vulture Claw Breacher", "Mack8 Frost Bite", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Choke"],
                ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ["Ammunition", "12 Gauge Explosive", "12 Gauge Slug", "12 Gauge Dragon's Breath"],
                //guard: [""]
                ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                ["BRYSON 800"],
                ["./assets/images/Screenshot_134.png"],
            ]
// const BRYSON890 = [
//                 ["Barrel", "21.5inch Recourse", "21.5inch Bryson Tacfire", "18inch Demo Firewall", "21.5inch Bryson Shredder", "16inch Bryson Shockwave"],
//                 // [""],
//                 // [""],
//                 // [""],
//                 // [""],
//                 ["Ammunition", "12 Gauge Slug", "Dragon's Breath"],
//                 ["Guard", "Demo X50 Tactical Pump", "Lockwood Series II", "Demo Dropzone Pump"],
//                 ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
//                 ["BRYSON 890"],
//                 ["./assets/images/Screenshot_135.png"],
//             ]


    const equipmentList = {
        tactical: ["Flash Grenade", "Shock Stick", "Smoke Grenade", "Stun Grenade", "Decoy Grenade", "Spotter Scope", "Stim", "Heartbeat Sensor", "Snapshot Grenade", "Tear Gas"],

        lethal: ["Frag Grenade", "Proximity Mine", "Drill Charge", "Molotov Cocktail", "Semtex", "C4", "Claymore", "Thermite", "Throwing Knife"]
    }

    const perksList = ["Overkill", "Double Time", "Battle Hardened", "Scavenger", "Bomb Squad", "Tracker", "Strong Arm", "Extra Tactical"]

    let attachmentArray = []
    let attachmentTypeArray = []

    function generateLoadout(){

        let perksArray = []
        for(let i = 1; i < 3; i++){

            let randomPerk = Math.floor(Math.random() * perksList.length)

            if(perksArray.includes(randomPerk)){
                randomPerk = Math.floor(Math.random() * perksList.length)
            }

            perksArray.push(randomPerk)

            $(`#perk${i}Name`).html(perksList[randomPerk])
            $(`#perk${i}Img`).attr("src", `./assets/images/perk_${randomPerk}.png`)


        }

            let randomTac = Math.floor(Math.random() * equipmentList.tactical.length)
            let randomLeth = Math.floor(Math.random() * equipmentList.lethal.length)

            $("#tacName").html(equipmentList.tactical[randomTac])
            $("#tacImg").attr("src", `./assets/images/tactical_${randomTac}.png`)

            $("#lethalName").html(equipmentList.lethal[randomLeth])
            $("#lethalImg").attr("src", `./assets/images/lethal_${randomLeth}.png`)


    //--------------------------------------------------------------------------------------------------

    if($("#perk1Name").html() == "Overkill" || $("#perk2Name").html() == "Overkill"){
        generateWeapons(1)
        generateWeapons(2)
    } else {
        generateWeapons(1)
    }

    function generateWeapons(count){

    let randomPrimary = Math.floor(Math.random() * 21)
    let selectedGun;

    if(randomPrimary == 0){
        selectedGun = M4
    } else if (randomPrimary == 1){
        selectedGun = TAQ56
    } else if (randomPrimary == 2){
        selectedGun = KASTOV762
    } else if (randomPrimary == 3){
        selectedGun = LACHMANN556
    } else if (randomPrimary == 4){
        selectedGun = STB556
    } else if (randomPrimary == 5){
        selectedGun = M16
    } else if (randomPrimary == 6){
        selectedGun = KASTOV74U
    } else if (randomPrimary == 7){
        selectedGun = KASTOV545
    } else if (randomPrimary == 8){
        selectedGun = M13B
    } else if (randomPrimary == 9){
        selectedGun = LACHMANN762
    } else if (randomPrimary == 10){
        selectedGun = TAQV
    } else if (randomPrimary == 11){
        selectedGun = VEL46
    } else if (randomPrimary == 12){
        selectedGun = LACHMANNSUB
    } else if (randomPrimary == 13){
        selectedGun = VAZNEV9K
    } else if (randomPrimary == 14){
        selectedGun = FSSHURRICANE
    } else if (randomPrimary == 15){
        selectedGun = MINIBAK
    } else if (randomPrimary == 16){
        selectedGun = PDSW528
    } else if (randomPrimary == 17){
        selectedGun = FENNEC45
    } else if (randomPrimary == 18){
        selectedGun = LOCKWOOD300
    } else if (randomPrimary == 19){
        selectedGun = EXPEDITE12
    } else if (randomPrimary == 20){
        selectedGun = BRYSON800
    }

    $(`#weapon${count}Img`).attr("src", `${selectedGun.slice(-1)}`)

    let attachmentTypeArray = []
    console.log(`Array: ${attachmentTypeArray}`)

    for(let i = 1; i < 6; i++){

        var randomAttachType = Math.floor(Math.random() * (selectedGun.length - 2))
        var randomAttachItem = Math.floor(Math.random() * selectedGun[randomAttachType].length)

        while(jQuery.inArray(randomAttachType, attachmentTypeArray) >= 0){
            randomAttachType = Math.floor(Math.random() * (selectedGun.length - 2))
            console.log(`Fix: ${randomAttachType}`)
            console.log(`Array: ${attachmentTypeArray}`)
        }

        attachmentTypeArray.push(randomAttachType)
        if(selectedGun[randomAttachType][randomAttachItem] === undefined){
            randomAttachItem = 1
            console.log("Undefined Fix")
        }

        if(randomAttachItem == 0){
            $(`.attachments${count}`).children().eq(i).html(`${selectedGun[randomAttachType][0]}: ${selectedGun[randomAttachType][1]}`)
            console.log(`RandomItem: ${randomAttachItem}`)
        } else {
            $(`.attachments${count}`).children().eq(i).html(`${selectedGun[randomAttachType][0]}: ${selectedGun[randomAttachType][randomAttachItem]}`)
            console.log("All good")
            console.log(randomAttachItem)
        }

        console.log(attachmentTypeArray)



    }


    }

    }

generateLoadout()

    let bingoArray = []

function generateBingo(){

    for(let i = 1; i < 25; i++){

        let randomText = Math.floor(Math.random() * 101)

        if(bingoArray.includes(randomText)){
            randomText = Math.floor(Math.random() * 101)
        }

        // console.log(bingoArray)

        $(`#grid-${i}`).children("p").empty()
        $(`#grid-${i}`).children("p").html(bingoText[randomText])

        bingoArray.push(randomText)
    }


}

generateBingo();

let generatedArray = []

function generateNumb(){


    $(".strat-area").empty()

   let randomNumber = Math.floor(Math.random() * 55)

   if(generatedArray.includes(randomNumber)){
    $(".strat-area").empty()
    return generateNumb()
   }

   let stratContent = `
   <h2>${wzStrats[randomNumber][0]}</h2>
   <p>${wzStrats[randomNumber][1]}</p>
   `

   $(".strat-area").append(stratContent)

    generatedArray.push(randomNumber)

    // console.log(generatedArray)

    if(generatedArray.length == 55){
        generatedArray = []
       }

}

$(".gridSquare").on("click", function(){

    if($(this).hasClass("green")){
        $(this).css("background-color", "white")
        $(this).removeClass("green")
    } else {
        $(this).css("background-color", "rgb(12, 208, 12)")
        $(this).addClass("green")
    }


})

$(".strat-button").on("click", generateNumb)

$(".back-button").on("click", function(){
    history.back()
})

$(".rerollBtn").on("click", generateBingo)

$("#loadoutBtn").on("click", function(){
    generateLoadout()
})