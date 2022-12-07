
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


    const gunsList = {

        assaultRifles: {
            M4: {
                barrel: ["Barrel", "Hightower 20inch Barrel", "14inch Carbine Shroud", "11.5inch T-H4 Barrel", "11.5inch Carbine Shroud", "Tempus Trench Pro", "419MM EXF Barrel", "7.5inch Tempus Firebrand"],
                stock: ["Stock", "Demo Fade Pro Stock", "Tempus P80 Strike Stock", "Demo Precision Elite Factory", "Corio Precio Factory", "Demo D50 Buffer Tube", "Ravage-8"],
                magazine: ["Magazine", "40 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Phantom Grip", "Support CP90 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["M4"],
                image: ["../assets/images/Screenshot_110.png"]
            },
            TAQ56: {
                barrel: ["Barrel", "12inch Tacshort Barrel", "17.5inch Tundra Pro Barrel"],
                stock: ["Stock", "TV LPX-434", "Tactique Brute Stock", "TV Cardinal Stock", "TV Xline Pro"],
                magazine: ["Magazine", "40 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Hellscream 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "FSS Combat Grip", "XRK Response Grip", "Demo Cleanshot Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["TAQ-56"],
                image: ["../assets/images/Screenshot_111.png"]
            },
            KASTOV762: {
                barrel: ["Barrel", "KAS-7 406MM", "IG-K30 406MM", "Kastovia 343", "342MM Sakin KL", "KAS-10 584MM Barrel"],
                stock: ["Stock", "KSTV-RPK Factory", "FT Tac-Elite Stock", "Kastov-Rama", "Markeev R7 Stock", "Prolite TL3 Stock"],
                magazine: ["Magazine", "20 Round Mag", "40 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "KL40-M2", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "7.62 Frangible", "7.62 HollowPoint"," 7.62 Armor Piercing", "7.62 OverPressured +P", "7.62 High Velocity"],
                reargrip: ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["KASTOV 762"],
                image: ["../assets/images/Screenshot_112.png"]
            },
            LACHMANN556: {
                barrel: ["Barrel", "15.9inch Lachmann RAPP Barrel", "LM Aurora 90 Barrel", "10.6inch Lachstrike Barrel", "Lach-12 Barrel", "Lachmann Nova"],
                stock: ["Stock", "LM-S Factory G79 Stock", "RAPP-762 Factory", "Lachmann S76 Factory Stock", "FT Mobile Stock", "Lachmann S9 Factory"],
                magazine: ["Magazine", "15 Round Mag", "40 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "LM Cronus Grip", "LMK64 Grip", "S-Grip Zero"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["LACHMANN-556"],
                image: ["../assets/images/Screenshot_113.png"]
            },
            STB556: {
                barrel: ["Barrel", "FTAC FB20", "18inch Bruen Guerilla", "24.4inch Bruen S-620", "508MM Rear Guard", "Bruen Turaco 686MM", "16.5inch Bruen S901 Barrel"],
                stock: ["Stock", "Bruen MX9 Stock", "Bruen HCR 56 Stock"],
                comb: ["Comb", "Schlager TTF3", "Bruen TS-30 Comb", "FTAC C11 Riser"],
                magazine: ["Magazine", "42 Round Mag", "Single Tap Mod"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "Bruen G305 Grip", "Stip-40 Grip", "Bruen Q900 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["STB 556"],
                image: ["../assets/images/Screenshot_114.png"]         
            },
            M16: {
                barrel: ["Barrel", "14inch Carbine Shroud", "Demo 501 Factory", "11.5inch T-H4 Barrel", "11.5inch Carbine Shroud"],
                stock: ["Stock", "Assault-60 Stock Factory", "Demo Fade Pro Stock", "Corio Precio Factory", "Ravage 8"],
                magazine: ["Magazine", "15 Round Magazine", "45 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["M16"],
                image: ["../assets/images/Screenshot_115.png"]
            },
            KASTOV74U: {
                barrel: ["Barrel", "SA Ultra III", "Shorttac 330MM", "BR209 Barrel"],
                stock: ["Stock", "KSTV-RPK Factory", "Ivanov Wood Stock", "Spetznaz S10 Stock", "FT Tac-Elite Stock", "Otrezat Stock", "VLK Stockless", "Markeev R7 Stock"],
                magazine: ["Magazine", "20 Round Mag", "45 Round Mag"],
                underbarrel: ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.45 Frangible", "5.45 HollowPoint"," 5.45 Armor Piercing", "5.45 OverPressured +P", "5.45 High Velocity"],
                reargrip: ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                name: ["KASTOV-74U"],
                image: ["../assets/images/Screenshot_116.png"]            
            },
            KASTOV545: {
                barrel: ["Barrel", "KAS-7 406MM", "Kastovia 406", "IG-K30 406MM", "342MM Sakin KL"],
                stock: ["Stock", "KSTV-RPK Factory", "Ivanoc Wood Stock", "FT Tac-Elite Stock", "Kastov-Rama", "Markeev R7 Stock", "Prolite TL3 Stock"],
                magazine: ["Magazine", "20 Round Mag", "45 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "KL40-M2", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "5.45 Frangible", "5.45 HollowPoint"," 5.45 Armor Piercing", "5.45 OverPressured +P", "5.45 High Velocity"],
                reargrip: ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["KASTOV 545"],
                image: ["../assets/images/Screenshot_117.png"]            
            },
            M13B: {
                barrel: ["Barrel", "14inch Bruen Echelon", "7inch Bruen B-M20"],
                stock: ["Stock", "Bruen R90 Factory", "Ravage-8", "Bruen Flash V4 Stock"],
                magazine: ["Magazine", "45 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "SPW 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "JCZ-390 Muzzle Device", "Silentfire XG6", "XTEN Ported 290", "Cronen OP44"],
                laser: ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ammunition: ["Ammunition", "5.56 Frangible", "5.56 HollowPoint"," 5.56 Armor Piercing", "5.56 OverPressured +P", "5.56 High Velocity"],
                reargrip: ["Rear Grip", "Bruen GR-500", "D37 Grip", "Bruen Flash Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["M13B"],
                image: ["../assets/images/Screenshot_118.png"]            
            }
        },

        battleRifles: {
            LACHMANN762: {
                barrel: ["Barrel", "Romeo FT 16inch Barrel", "15.9inch Lachmann RAPP Barrel", "LM Aurora 90 Barrel", "10.6inch Lachstrike Barrel", "Meer-56 11inch Factory Barrel", "Lachmann Nova"],
                stock: ["Stock", "LM-S Factory G79 Stock", "RAPP-762 Factory", "Meer Recoil-56 Factory Stock", "FT Mobile Stock", "Lachmann S9 Factory"],
                magazine: ["Magazine", "30 Round Mag", "15 Round Mag", "10 Round Mag", "50 Round Drum"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "TL40 Fire Drake", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "7.62 Armor Piercing", "7.62 High Velocity", "7.62 Frangible", "7.62 HollowPoint", "7.62 OverPressured +P", "7.62 Incendiary"],
                reargrip: ["Rear Grip", "Lachmann TCG-10", "LM Cronus Grip", "LMK64 Grip", "S-Grip Zero"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["LACHMANN-762"],
                image: ["../assets/images/Screenshot_119.png"]            
            },
            // SO14: {
            //     name: ["SO-14"]
            // },
            TAQV: {
                barrel: ["Barrel", "Lance-50 12inch Barrel", "18inch Precision-6 Barrel"],
                stock: ["Stock", "TV LPX-434", "Tactique Brute Stock", "TV Cardinal Stock", "TV Xline Pro"],
                magazine: ["Magazine", "50 Round Drum", "30 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Hellscream 40MM", "Corvus Masterkey", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod V9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTEN Stable Shot"],
                muzzle: ["Muzzle", "Polarfire-S", "Kastovia DX90", "Lockshot KT85", "Sakin Tread-40", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 V3", "Cronen Dark KX30", "Husher-65 Silencer", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Tempus GH50", "TY-LR8", "Bore-490", "GL Clear Breach"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "7.62 Frangible", "7.62 HollowPoint"," 7.62 Armor Piercing", "7.62 OverPressured +P", "7.62 High Velocity"],
                reargrip: ["Rear Grip", "FSS Combat Grip", "XRK Response Grip", "Demo Cleanshot Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9", "FTAC Charlie7", "3X RFL-Optic", "Drexsom Prime-90", "Ares Clear Shot"],
                name: ["TAQ-V"],
                image: ["../assets/images/Screenshot_121.png"]           
            },
            // FTACRECON: {
            //     name: ["FTAC Recond"]
            // },
        },

        smgs: {
            VEL46: {
                barrel: ["Barrel", "Tango 228 Barrel", "Schlager RV-B", "Schlager L203 Barrel", "LACH-DX 203MM", "Lachmann Dart 165MM", "LACH-165 Zulu", "LM Series-7"],
                stock: ["Stock", "LM Precision Stock", "Assault-60 Stock", "Demo RXT Stock", "Vel A-568 Collapsed"],
                magazine: ["Magazine", "30 Round Mag", "50 Round Mag", "60 Round Mag"],
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                muzzle: ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                laser: ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ammunition: ["Ammunition", "4.6MM Frangible", "4.6MM Hollow Point", "4.6MM Armor Piercing", "4.6MM OverPressured +P"],
                reargrip: ["Rear Grip", "Sakin Rubber Grip", "ZLR Combat Grip", "Schlager Soldier Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                name: ["VEL 46"],
                image: ["../assets/images/Screenshot_123.png"]           
            },
            // MX9: {
                
            // },
            LACHMANNSUB: {
                barrel: ["Barrel", "FTAC M-SUB 12inch", "Lachmann Pulsar", "L38 Falcon 226MM"],
                stock: ["Stock", "Lachmann S76 Factory Stock", "Meer Recoil-56 Factory Stock", "FT Mobile Stock", "LM Stockless Mod"],
                magazine: ["Magazine", "15 Round Magazine", "40 Round Mag", "50 Round Drum"],
                underbarrel: ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                muzzle: ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                laser: ["Laser", "1MW Quick Fire Laser", "ACCU-Shot 5MW Laser", "VLK LZR 7MW", "Schlager ULO-66 Laser", "Hipshot L20", "FJX Ultrabeam XR", "EXF Solarflare", "1MW Artemis Laser", "7MW Canted Laser", "Stovl Tac Laser", "Point-G3P 04"],
                ammunition: ["Ammunition", "9MM Frangible", "9MM Hollow Point", "9MM Armor Piercing", "9MM OverPressured +P"],
                reargrip: ["Rear Grip", "Lachmann TCG-10", "LM Cronus Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                name: ["LACHMANN SUB"],
                image: ["../assets/images/Screenshot_125.png"]           
            },
            VAZNEV9K: {
                barrel: ["Barrel", "KAS-1 381MM", "SA Response III"],
                stock: ["Stock", "Spetsnaz S10 Stock", "FT TAC-Elite Stock", "Otrezat Stock", "VLK Stockless", "Markeev R7 Stock"],
                magazine: ["Magazine","45 Round Mag"],
                underbarrel: ["Underbarrel", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                muzzle: ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                ammunition: ["Ammunition", "9MM Frangible", "9MM Hollow Point", "9MM Armor Piercing", "9MM OverPressured +P"],
                reargrip: ["Rear Grip", "Ivanov ST-70 Grip", "True-Tac Grip", "Demo-X2 Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00", "XTEN Angel-40", "SZ Bullseye Optic", "SZ Agressor-IR Optic", "Teplo-OP3 Scope", "Hybrid Firepoint", "SZ Oscar-9"],
                name: ["VAZNEV-9K"],
                image: ["../assets/images/Screenshot_126.png"]           
            },
            FSSHURRICANE: {
                barrel: ["Barrel", "FSS Cannonade 16inch", "FSS-X7 Barrel"],
                // stock: [""]
                underbarrel: ["Underbarrel", "Edge-47 Grip", "Demo Firm Grip", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo IMP-44 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTEN Drop Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "XTEN Gravedigger", "XTEN Nexus Grip", "Hex-40 Grip", "OP-X9 Foregrip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
                muzzle: ["Muzzle", "XTEN RR-40", "SA Schalldampfer 99", "Singuard MKV", "EXF Huntress-90", "Bruen Pendulum", "AVR-T90 Comp", "XTEN Razor Comp", "XRk Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral V3.5 Flash Hider", "Fox-202 Flash Hider", "TA Hul-Breach", "Forge DX90-F", "XTEN Black Kite", "FSS Covert IV", "Lacerta Compensator", "FTAC Castle Comp", "XRK Knockout Breach"],
                laser: ["Laser", "SZ 1MW PEQ", "Schlager PEW Box IV", "Corio LAZ-44 V3", "Canted Vibro-Dot 7", "1MW Laser Box", "Stovl DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "FSS Ole-V Laser"],
                //ammunition: [""],
                reargrip: ["Rear Grip", "D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Phantom Grip"],
                optic: ["Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Red Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "XRK On-Point Optic", "DF105 Reflex Sight", "Corvus SOL-76", "SZ Recharge-DX", "SZ SRO-7", "CORIO Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Holotherm", "VLK 4.0 Optic", "Schlager 3.4X", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Schlager Night View", "VX350 Thermal Optic", "DR582 Hybrid Sight", "SZ Vortex-90", "BPZ40 Hybrid", "Angel-40 4.8X", "Thermo-Optic X9", "Teplo Clear Shot", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "SZ Minitac-40", "Aim OP-V4", "Monocle CT90", "Corio RE-X Pro", "SZ Battle Optic", "Corvus Downrange-00"],
                name: ["FSS HURRICANE"],
                image: ["../assets/images/Screenshot_127.png"]           
            },
            // MINIBAK:{

            // },
            // BASP: {

            // },
            // PDSW528: {

            // },
            // FENNEC45: {

            // },
        }

    }

    function generateLoadout(){

    }



    let bingoArray = []

function generateBingo(){

    for(let i = 1; i < 25; i++){

        let randomText = Math.floor(Math.random() * 101)

        if(bingoArray.includes(randomText)){
            randomText = Math.floor(Math.random() * 101)
        }

        console.log(bingoArray)

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

    console.log(generatedArray)

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

