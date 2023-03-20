addLayer("i", {
    name: "Incremental", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        autobuyinterval: new Decimal(0),
        //Trees
        trees: new Decimal(0),
        leaves: new Decimal(0),
        leavespersecond: new Decimal(0),
        treereq: new Decimal(10),
        treesoftcapstart: new Decimal(15),
        treesoftcap: new Decimal(1),
        treegen: new Decimal(1),
        //Computer
        cryptopause: new Decimal(0),
        crypto: new Decimal(0),
        cryptotoget: new Decimal(0),
        bytes: new Decimal(0),
        bytespersecond: new Decimal(0),
        byteseffect: new Decimal(0),
        cryptodim1: new Decimal(0),
        cryptodim1mult: new Decimal(1),
        cryptodim1persecond: new Decimal(0),
        cryptodim2: new Decimal(0),
        cryptodim2mult: new Decimal(1),
        cryptodim2persecond: new Decimal(0),
        cryptodim3: new Decimal(0),
        cryptodim3mult: new Decimal(1),
        cryptodim3persecond: new Decimal(0),
        cryptodim4: new Decimal(0),
        cryptodim4mult: new Decimal(1),
        //Coding
        codeexperiencepause: new Decimal(0),
        codeexperience: new Decimal(0),
        codeexperiencetoget: new Decimal(0),
        codeexperienceeffect: new Decimal(0),
        mods: new Decimal(0),
        linesofcode: new Decimal(0),
        linesofcodepersecond: new Decimal(0),
        modreq: new Decimal(10),
        modsoftcapstart: new Decimal(15),
        modsoftcap: new Decimal(1),
        modgen: new Decimal(1),
        modeffect: new Decimal(1),
        //Realm Mods
        currentdisplay: new Decimal(0),
        creatormods: new Decimal(0),
        highmods: new Decimal(0),
        deathmods: new Decimal(0),
        dimensionalmods: new Decimal(0),
        backroomsmods: new Decimal(0),
        voidmods: new Decimal(0),
        creatormodseffect: new Decimal(0),
        highmodseffect: new Decimal(0),
        deathmodseffect: new Decimal(0),
        dimensionalmodseffect: new Decimal(0),
        backroomsmodseffect: new Decimal(0),
        voidmodseffect: new Decimal(0),
        totalrealmmods: new Decimal(0),
        jacorbianenergyunlocked: new Decimal(0),
        jacorbianenergy: new Decimal(0),
        jacorbianenergytoget: new Decimal(0),
        jacorbianenergyeffect: new Decimal(0),
        //infinity
        infinitypause: new Decimal(0),
        infinities: new Decimal(0),
        infinitypoints: new Decimal(0),
        infinitiestoget: new Decimal(0),
        infinitypointstoget: new Decimal(0),
        ippassive: new Decimal(0),
        resetrecord: ["", "", "", "", "", "", ""],
        infinityresets: new Decimal(1),
        infinitytime: new Decimal(0),
        infinitypointgeneration: new Decimal(0),
        preinfinityresourcemult: new Decimal(0), //This is so it can also multiply points//
        apoints: new Decimal(0.001), //HARD CHALLENGE ONLY//
        upgradeautobuyer: new Decimal(0),
        autocruncher: new Decimal(0),
        //breakinfinity
        brokeninfinities: new Decimal(0),
        brokeninfinitiestoget: new Decimal(0),
        infinitybroken: new Decimal(0),
        ipautobuyamount: new Decimal(1e100),
        ipinput: new Decimal(0),
        //replicanti
        replicanti: new Decimal(1),
        replicantimultiplier: new Decimal(1),
        replicantiinterval: new Decimal(5),
        replicantieffect: new Decimal(1),
        replicantitimer: new Decimal(1),
        replicantimax: new Decimal("1.8e308"),
        replicantimods: new Decimal(0),
        replicantimodgain: new Decimal(0),
        replicantimodseffect: new Decimal(1),
        replicantimodseffect2: new Decimal(1),
        //infinitydimensions
        infinitypower: new Decimal(0),
        infinitypowereffect: new Decimal(1),
        infinitypowerpersecond: new Decimal(0),
        infinitydim1: new Decimal(0),
        infinitydim1mult: new Decimal(1),
        infinitydim1persecond: new Decimal(0),
        infinitydim2: new Decimal(0),
        infinitydim2mult: new Decimal(1),
        infinitydim2persecond: new Decimal(0),
        infinitydim3: new Decimal(0),
        infinitydim3mult: new Decimal(1),
        infinitydim3persecond: new Decimal(0),
        infinitydim4: new Decimal(0),
        infinitydim4mult: new Decimal(1),
        //singularity
        singularityunlocked: new Decimal(0),
        singularitycutscene: new Decimal(1),
        singularityscene: new Decimal(0),
        singularitypause: new Decimal(0),
        singularities: new Decimal(0),
        singularitypoints: new Decimal(0),
        singularitiestoget: new Decimal(0),
        singularitypointstoget: new Decimal(0),
        singularitytime: new Decimal(0),
        singularitypointeffect: new Decimal(0),
        presingularityresourcemult: new Decimal(0),
        singularitypower: new Decimal(0),
        singularitypowereffect: new Decimal(1),
        singularitypowerpersecond: new Decimal(0),
        singularitydim1: new Decimal(0),
        singularitydim1mult: new Decimal(1),
        singularitydim1persecond: new Decimal(0),
        singularitydim2: new Decimal(0),
        singularitydim2mult: new Decimal(1),
        singularitydim2persecond: new Decimal(0),
        singularitydim3: new Decimal(0),
        singularitydim3mult: new Decimal(1),
        singularitydim3persecond: new Decimal(0),
        singularitydim4: new Decimal(0),
        singularitydim4mult: new Decimal(1),
        singularitydim4persecond: new Decimal(0),
        singularitydim5: new Decimal(0),
        singularitydim5mult: new Decimal(1), //unlocked after void singularity
        singularitydim5persecond: new Decimal(0),
        singularitydim6: new Decimal(0),
        singularitydim6mult: new Decimal(1), //unlocked after void singularity
        singularityupgradeautobuyer: new Decimal(0),
        singularitytrees: new Decimal(0),
        singularityleaves: new Decimal(0),
        singularityleavespersecond: new Decimal(0),
        singularitytreereq: new Decimal(10),
        singularitytreesoftcapstart: new Decimal(5),
        singularitytreesoftcap: new Decimal(1),
        singularitytreegen: new Decimal(1),
        singularitytreeeffect: new Decimal(1),
        //singularity studies
        singularitytheorems: new Decimal(0),
        singularitytheoremsrespec: new Decimal(0),
        singularityblessings: new Decimal(0),
        singularityblessingspersecond: new Decimal(0),
        replicantimodblessings: new Decimal(0),
        replicantimodblessingspersecond: new Decimal(0),
        replicantimodblessingseffect: new Decimal(1),
        infinitydimensionblessings: new Decimal(0),
        infinitydimensionblessingspersecond: new Decimal(0),
        infinitydimensionblessingseffect: new Decimal(1),
        infinitypointblessings: new Decimal(0),
        infinitypointblessingspersecond: new Decimal(0),
        infinitypointblessingseffect: new Decimal(1),
        preinfinitybuyableincreaser: new Decimal(1),
        //secret jacorb stuff
        jacorbianunlock: new Decimal(0),
        jacorbiantrialunlock: new Decimal(0),
        jacorbcutscene: new Decimal(1),
        jacorbscene: new Decimal(0),
        imaginarytest: new Decimal(0),
        jacorbmods: new Decimal(0),
        jacorbmodseffect: new Decimal(0),
        jacorbmodspersecond: new Decimal(0), 
        //voidsingularities
        voidsingularities: new Decimal(0),
        voidsingularitiestoget: new Decimal(0),
        voidsingularitypoints: new Decimal(0),
        voidsingularitypointspersecond: new Decimal(0),
        voidsingularitypointeffect1: new Decimal(0),
        voidsingularitypointeffect2: new Decimal(0),
        voidsingularitypointeffect3: new Decimal(0),
        voidsingularitypointeffect4: new Decimal(0),
    }
    },
    autobuy() {
        if (hasUpgrade('i', 32) || hasUpgrade('i', 38)) {
                buyBuyable(this.layer, 11)
                buyBuyable(this.layer, 12)
                buyBuyable(this.layer, 13)
                buyBuyable(this.layer, 14)
        }
        if (hasUpgrade('i', 41)) {
            buyBuyable(this.layer, 15)
            buyBuyable(this.layer, 16)
            buyBuyable(this.layer, 17)
            buyBuyable(this.layer, 18)
            buyBuyable(this.layer, 19)
            buyBuyable(this.layer, 21)
            buyBuyable(this.layer, 22)
        }
        if (hasUpgrade('i', 65)) {
            buyBuyable(this.layer, 23)
            buyBuyable(this.layer, 24)
            buyBuyable(this.layer, 25)
            buyBuyable(this.layer, 26)
        }
        if (player.i.upgradeautobuyer.eq(1)) {
            buyUpgrade(this.layer, 11)
            buyUpgrade(this.layer, 12)
            buyUpgrade(this.layer, 13)
            buyUpgrade(this.layer, 14)
            buyUpgrade(this.layer, 15)
            buyUpgrade(this.layer, 16)
            buyUpgrade(this.layer, 17)
            buyUpgrade(this.layer, 18)
            buyUpgrade(this.layer, 19)
            buyUpgrade(this.layer, 21)
            buyUpgrade(this.layer, 22)
            buyUpgrade(this.layer, 23)
            buyUpgrade(this.layer, 24)
            buyUpgrade(this.layer, 25)
            buyUpgrade(this.layer, 26)
            buyUpgrade(this.layer, 27)
            buyUpgrade(this.layer, 28)
            buyUpgrade(this.layer, 29)
            buyUpgrade(this.layer, 31)
            buyUpgrade(this.layer, 32)
            buyUpgrade(this.layer, 33)
            buyUpgrade(this.layer, 34)
            buyUpgrade(this.layer, 35)
            buyUpgrade(this.layer, 36)
            buyUpgrade(this.layer, 37)
            buyUpgrade(this.layer, 38)
            buyUpgrade(this.layer, 39)
            buyUpgrade(this.layer, 41)
            buyUpgrade(this.layer, 42)
            buyUpgrade(this.layer, 43)
            buyUpgrade(this.layer, 44)
            buyUpgrade(this.layer, 45)
            buyUpgrade(this.layer, 46)
            buyUpgrade(this.layer, 47)
            buyUpgrade(this.layer, 48)
            buyUpgrade(this.layer, 49)
            buyUpgrade(this.layer, 51)
            buyUpgrade(this.layer, 52)
            buyUpgrade(this.layer, 53)
        }
        if (hasUpgrade('h', 15)) {
            buyBuyable(this.layer, 34)
            buyBuyable(this.layer, 35)
        }
        if (hasMilestone("i", 12)) {
            buyBuyable(this.layer, 11)
            buyBuyable(this.layer, 12)
            buyBuyable(this.layer, 13)
            buyBuyable(this.layer, 14)
            buyBuyable(this.layer, 15)
            buyBuyable(this.layer, 16)
            buyBuyable(this.layer, 17)
            buyBuyable(this.layer, 18)
            buyBuyable(this.layer, 19)
            buyBuyable(this.layer, 21)
            buyBuyable(this.layer, 22)
            buyBuyable(this.layer, 23)
            buyBuyable(this.layer, 24)
            buyBuyable(this.layer, 25)
            buyBuyable(this.layer, 26)
            buyBuyable(this.layer, 27)
            buyBuyable(this.layer, 28)
            buyBuyable(this.layer, 29)
            buyBuyable(this.layer, 31)
            buyBuyable(this.layer, 32)
            buyBuyable(this.layer, 33)
            buyBuyable(this.layer, 34)
            buyBuyable(this.layer, 35)
            buyBuyable(this.layer, 36)
            buyBuyable(this.layer, 37)
            buyBuyable(this.layer, 38)
            buyBuyable(this.layer, 39)
            buyBuyable(this.layer, 41)
            buyBuyable(this.layer, 42)
            buyBuyable(this.layer, 43)
            buyBuyable(this.layer, 44)
            buyBuyable(this.layer, 45)
        }
        if (hasUpgrade("i", 136)) {
            buyBuyable(this.layer, 46)
            buyBuyable(this.layer, 47)
            buyBuyable(this.layer, 48)
            buyBuyable(this.layer, 49)
            buyBuyable(this.layer, 51)
            buyBuyable(this.layer, 52)
            buyBuyable(this.layer, 53)
            buyBuyable(this.layer, 54)
            buyBuyable(this.layer, 55)
            buyBuyable(this.layer, 56)
            buyBuyable(this.layer, 57)
            buyBuyable(this.layer, 58)
            buyBuyable(this.layer, 59)
            buyBuyable(this.layer, 61)
            buyBuyable(this.layer, 62)
            buyBuyable(this.layer, 63)
            buyBuyable(this.layer, 64)
            buyBuyable(this.layer, 65)
            buyBuyable(this.layer, 66)
            buyBuyable(this.layer, 67)
            buyBuyable(this.layer, 68)
            buyBuyable(this.layer, 69)
            buyBuyable(this.layer, 71)
            buyBuyable(this.layer, 72)
            buyBuyable(this.layer, 73)
        }
        if (player.i.singularityupgradeautobuyer.eq(1) && hasMilestone("i", 14)) {
            buyUpgrade(this.layer, 11)
            buyUpgrade(this.layer, 12)
            buyUpgrade(this.layer, 13)
            buyUpgrade(this.layer, 14)
            buyUpgrade(this.layer, 15)
            buyUpgrade(this.layer, 16)
            buyUpgrade(this.layer, 17)
            buyUpgrade(this.layer, 18)
            buyUpgrade(this.layer, 19)
            buyUpgrade(this.layer, 21)
            buyUpgrade(this.layer, 22)
            buyUpgrade(this.layer, 23)
            buyUpgrade(this.layer, 24)
            buyUpgrade(this.layer, 25)
            buyUpgrade(this.layer, 26)
            buyUpgrade(this.layer, 27)
            buyUpgrade(this.layer, 28)
            buyUpgrade(this.layer, 29)
            buyUpgrade(this.layer, 31)
            buyUpgrade(this.layer, 32)
            buyUpgrade(this.layer, 33)
            buyUpgrade(this.layer, 34)
            buyUpgrade(this.layer, 35)
            buyUpgrade(this.layer, 36)
            buyUpgrade(this.layer, 37)
            buyUpgrade(this.layer, 38)
            buyUpgrade(this.layer, 39)
            buyUpgrade(this.layer, 41)
            buyUpgrade(this.layer, 42)
            buyUpgrade(this.layer, 43)
            buyUpgrade(this.layer, 44)
            buyUpgrade(this.layer, 45)
            buyUpgrade(this.layer, 46)
            buyUpgrade(this.layer, 47)
            buyUpgrade(this.layer, 48)
            buyUpgrade(this.layer, 49)
            buyUpgrade(this.layer, 51)
            buyUpgrade(this.layer, 52)
            buyUpgrade(this.layer, 53)
            buyUpgrade(this.layer, 54)
            buyUpgrade(this.layer, 55)
            buyUpgrade(this.layer, 56)
            buyUpgrade(this.layer, 57)
            buyUpgrade(this.layer, 58)
            buyUpgrade(this.layer, 59)
            buyUpgrade(this.layer, 61)
            buyUpgrade(this.layer, 62)
            buyUpgrade(this.layer, 63)
            buyUpgrade(this.layer, 64)
            buyUpgrade(this.layer, 65)
            buyUpgrade(this.layer, 66)
            buyUpgrade(this.layer, 67)
            buyUpgrade(this.layer, 68)
            buyUpgrade(this.layer, 69)
            buyUpgrade(this.layer, 70)
            buyUpgrade(this.layer, 71)
            buyUpgrade(this.layer, 72)
            buyUpgrade(this.layer, 73)
            buyUpgrade(this.layer, 74)
            buyUpgrade(this.layer, 75)
            buyUpgrade(this.layer, 76)
            buyUpgrade(this.layer, 77)
            buyUpgrade(this.layer, 78)
            buyUpgrade(this.layer, 79)
            buyUpgrade(this.layer, 81)
            buyUpgrade(this.layer, 82)
            buyUpgrade(this.layer, 83)
            buyUpgrade(this.layer, 84)
            buyUpgrade(this.layer, 85)
            buyUpgrade(this.layer, 86)
            buyUpgrade(this.layer, 87)
            buyUpgrade(this.layer, 88)
            buyUpgrade(this.layer, 89)
            buyUpgrade(this.layer, 91)
            buyUpgrade(this.layer, 92)
            buyUpgrade(this.layer, 93)
            buyUpgrade(this.layer, 94)
        }
    },
    nodeStyle: {
        background: "linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #77ff00, #00ff00, #00ff77, #00ffff, #0077ff, #0000ff, #7700ff, #ff00ff, #ff0077)",
        "background-origin": "border-box",
    },
    color: "white",
    row: "side", // Row the layer is in on the tree (0 is the first row)
    tooltip: "Incremental", // Row the layer is in on the tree (0 is the first row)
    displayRow: 1, // Row the layer is in on the tree (0 is the first row)
    update(delta) {
        let onepersec = new Decimal(1)
        player.i.autobuyinterval = player.i.autobuyinterval.add(onepersec.mul(delta))

        if (player.points.lt("e1e8")) {
            layers.i.autobuy();
        }
        if (player.i.autobuyinterval.gte(1.5) && player.points.gte("e1e8")) {
            layers.i.autobuy();
            player.i.autobuyinterval = new Decimal(0)
        }

        let preinfinityresourcemult = new Decimal(1)
        if (!inChallenge("i", 18) && !inChallenge("i", 21)) {
            if (hasUpgrade("i", 54)) preinfinityresourcemult = new Decimal(2)
            if (hasUpgrade("i", 57)) preinfinityresourcemult = preinfinityresourcemult.mul(upgradeEffect("i", 57))
            if (inChallenge("i", 14)) preinfinityresourcemult = preinfinityresourcemult.div(10)
            if (hasChallenge("i", 13)) preinfinityresourcemult = preinfinityresourcemult.mul(challengeEffect("i", 13))
            if (hasChallenge("i", 15)) preinfinityresourcemult = preinfinityresourcemult.mul(challengeEffect("i", 15))
            if (hasChallenge("i", 17)) preinfinityresourcemult = preinfinityresourcemult.mul(challengeEffect("i", 17))
            if (hasUpgrade("i", 69)) preinfinityresourcemult = preinfinityresourcemult.mul(upgradeEffect("i", 69))
            preinfinityresourcemult = preinfinityresourcemult.mul(player.i.replicantieffect)
            preinfinityresourcemult = preinfinityresourcemult.mul(player.i.replicantimodseffect)
            preinfinityresourcemult = preinfinityresourcemult.mul(player.i.infinitypowereffect)
            preinfinityresourcemult = preinfinityresourcemult.mul(buyableEffect("h", 12))
            preinfinityresourcemult = preinfinityresourcemult.mul(buyableEffect("i", 43))
            preinfinityresourcemult = preinfinityresourcemult.mul(player.i.presingularityresourcemult)
            if (hasMilestone("i", 11)) preinfinityresourcemult = preinfinityresourcemult.mul(1000)
            if (inChallenge("i", 19)) {
                preinfinityresourcemult = preinfinityresourcemult.pow(0.0001)
            }
            if (inChallenge("i", 22)) {
                preinfinityresourcemult = preinfinityresourcemult.pow(0.001)
            }
            if (inChallenge("i", 23)) {
                preinfinityresourcemult = preinfinityresourcemult.pow(0.01)
            }
            if (inChallenge("i", 24)) {
                preinfinityresourcemult = preinfinityresourcemult.pow(0.2)
            }
        }
        if (inChallenge("i", 18)) {
            if (hasUpgrade("i", 54)) preinfinityresourcemult = new Decimal(1)
            if (hasUpgrade("i", 57)) preinfinityresourcemult = preinfinityresourcemult.div(upgradeEffect("i", 57))
            if (inChallenge("i", 14)) preinfinityresourcemult = preinfinityresourcemult.div(10)
            if (hasChallenge("i", 13)) preinfinityresourcemult = preinfinityresourcemult.div(challengeEffect("i", 13))
            if (hasChallenge("i", 15)) preinfinityresourcemult = preinfinityresourcemult.div(challengeEffect("i", 15))
            preinfinityresourcemult = preinfinityresourcemult.mul(4)
        }
        if (inChallenge("i", 21)) {
            if (hasUpgrade("i", 54)) preinfinityresourcemult = new Decimal(2)
            if (hasUpgrade("i", 57)) preinfinityresourcemult = preinfinityresourcemult.div(upgradeEffect("i", 57))
            if (inChallenge("i", 14)) preinfinityresourcemult = preinfinityresourcemult.div(10)
            if (hasChallenge("i", 13)) preinfinityresourcemult = preinfinityresourcemult.div(challengeEffect("i", 13))
            if (hasChallenge("i", 15)) preinfinityresourcemult = preinfinityresourcemult.div(challengeEffect("i", 15))
            if (hasChallenge("i", 17)) preinfinityresourcemult = preinfinityresourcemult.div(challengeEffect("i", 17))
            if (hasUpgrade("i", 69)) preinfinityresourcemult = preinfinityresourcemult.div(upgradeEffect("i", 69))
            preinfinityresourcemult = preinfinityresourcemult.div(player.i.replicantieffect)
            preinfinityresourcemult = preinfinityresourcemult.div(player.i.replicantimodseffect)
            preinfinityresourcemult = preinfinityresourcemult.div(player.i.infinitypowereffect)
            preinfinityresourcemult = preinfinityresourcemult.div(buyableEffect("h", 12))
            preinfinityresourcemult = preinfinityresourcemult.div(buyableEffect("i", 43))
            preinfinityresourcemult = preinfinityresourcemult.div(player.i.presingularityresourcemult)
            if (hasMilestone("i", 11)) preinfinityresourcemult = preinfinityresourcemult.div(1000)
            preinfinityresourcemult = preinfinityresourcemult.pow(0.0001)
        }
        player.i.preinfinityresourcemult = preinfinityresourcemult

        player.i.preinfinitybuyableincreaser = new Decimal(1)
        if (hasUpgrade("i", 108) && !inChallenge("i", 21) && !inChallenge("i", 22) && !inChallenge("i", 23) && !inChallenge("i", 24)) player.i.preinfinitybuyableincreaser = player.i.preinfinitybuyableincreaser.mul(1000)

        player.i.leaves = player.i.leaves.add(player.i.leavespersecond.mul(delta))
        if (player.i.leaves.gte(player.i.treereq)) {
            player.i.trees = player.i.trees.add(player.i.treegen) 
            player.i.leaves = new Decimal(0)
        }
        player.i.treereq = player.i.trees.pow(1.2).add(10).div(buyableEffect("i", 14))

        let leavespersecond = new Decimal(0)
        if (hasUpgrade("i", 11)) leavespersecond = new Decimal(1)
        if (hasUpgrade("i", 12) && !inChallenge("i", 24)) leavespersecond = leavespersecond.mul(1.2)
        leavespersecond = leavespersecond.mul(buyableEffect("i", 11))
        if (hasUpgrade("i", 19) && !inChallenge("i", 24)) leavespersecond = leavespersecond.mul(2.5)
        if (hasUpgrade("i", 24) && !inChallenge("i", 24)) leavespersecond = leavespersecond.mul(upgradeEffect("i", 24))
        leavespersecond = leavespersecond.mul(player.i.byteseffect)
        leavespersecond = leavespersecond.mul(buyableEffect("i", 19))
        leavespersecond = leavespersecond.mul(player.i.codeexperienceeffect)
        leavespersecond = leavespersecond.mul(player.i.creatormodseffect)
        leavespersecond = leavespersecond.mul(preinfinityresourcemult)
        if (hasUpgrade("i", 55) && !inChallenge("i", 24)) leavespersecond = leavespersecond.mul(upgradeEffect("i", 55))
        if (!inChallenge("i", 12)) {
            player.i.treesoftcapstart = new Decimal(15)
            player.i.treesoftcapstart = player.i.treesoftcapstart.add(buyableEffect("i", 13))
            if (hasUpgrade("i", 14) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.add(15)
            if (hasUpgrade("i", 22) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(1.5)
            if (hasUpgrade("i", 26) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(upgradeEffect("i", 26))
            if (hasUpgrade("i", 28) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.add(300)
            if (hasUpgrade("i", 33) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(3)
            if (hasUpgrade("i", 35) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(10)
            if (hasUpgrade("i", 55) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(upgradeEffect("i", 55))
            if (hasUpgrade("i", 58) && !inChallenge("i", 24)) player.i.treesoftcapstart = player.i.treesoftcapstart.mul(upgradeEffect("i", 58))
        }
        if (inChallenge("i", 12)) player.i.treesoftcapstart = new Decimal(0)
        if (inChallenge("i", 19)) player.i.treesoftcapstart = new Decimal(0)
        if (inChallenge("i", 22)) player.i.treesoftcapstart = new Decimal(0)
        if (player.i.trees.gte(player.i.treesoftcapstart)) {
            if (!inChallenge("i", 19)) player.i.treesoftcap = Decimal.pow(player.i.trees.add(1).sub(player.i.treesoftcapstart), 0.5)
            if (inChallenge("i", 19)) player.i.treesoftcap = Decimal.pow(player.i.trees.pow(100).add(1).sub(player.i.treesoftcapstart), 0.5)
            leavespersecond = leavespersecond.div(player.i.treesoftcap)
        }
        player.i.leavespersecond = leavespersecond

        if (!hasUpgrade("i", 15)) player.i.treegen = new Decimal(1)
        if (hasUpgrade("i", 15) && !inChallenge("i", 24)) player.i.treegen = new Decimal(2)
        if (hasUpgrade("i", 21) && !inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(1.5)
        if (hasUpgrade("i", 25) && !inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(upgradeEffect("i", 25))
        if (hasUpgrade("i", 29) && !inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(3)
        if (!inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(buyableEffect("i", 19))
        if (!inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(player.i.creatormodseffect)
        if (!inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(preinfinityresourcemult)
        if (hasUpgrade("i", 55) && !inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(upgradeEffect("i", 55))
        if (hasUpgrade("i", 59) && !inChallenge("i", 24)) player.i.treegen = player.i.treegen.mul(upgradeEffect("i", 59))
        if (inChallenge("i", 22)) player.i.treegen = new Decimal(1)

        //computer 
        player.i.cryptopause = player.i.cryptopause.sub(1)

        if (player.i.cryptopause.gt(0)) {
            layers.i.cryptoreset();
        }
        player.i.cryptotoget = player.points.div(5000).pow(0.8)
        player.i.cryptotoget = player.i.cryptotoget.mul(buyableEffect("i", 21))
        if (hasUpgrade("i", 37) && !inChallenge("i", 24)) player.i.cryptotoget = player.i.cryptotoget.mul(upgradeEffect("i", 37))
        player.i.cryptotoget = player.i.cryptotoget.mul(player.i.backroomsmodseffect)
        player.i.cryptotoget = player.i.cryptotoget.mul(preinfinityresourcemult)
        if (hasUpgrade("i", 56) && !inChallenge("i", 23)) player.i.cryptotoget = player.i.cryptotoget.mul(upgradeEffect("i", 56))

        let cryptodimbooster = new Decimal(1)
        if (hasUpgrade("i", 34) && !inChallenge("i", 24)) cryptodimbooster = cryptodimbooster.mul(3)
        cryptodimbooster = cryptodimbooster.mul(player.i.modeffect)
        cryptodimbooster = cryptodimbooster.mul(player.i.dimensionalmodseffect)
        if (hasUpgrade("i", 44) && !inChallenge("i", 24)) cryptodimbooster = cryptodimbooster.mul(upgradeEffect("i", 44))
        if (hasUpgrade("i", 46) && !inChallenge("i", 24)) cryptodimbooster = cryptodimbooster.mul(upgradeEffect("i", 46))
        if (inChallenge("i", 13)) cryptodimbooster = cryptodimbooster.div(100)
        cryptodimbooster = cryptodimbooster.mul(preinfinityresourcemult)

        player.i.bytespersecond = player.i.cryptodim1.pow(0.5).mul(player.i.cryptodim1mult.mul(cryptodimbooster).mul(buyableEffect("i", 22)))
        player.i.cryptodim1persecond = player.i.cryptodim2.pow(0.5).mul(player.i.cryptodim2mult.mul(cryptodimbooster).mul(buyableEffect("i", 22)).div(10))
        player.i.cryptodim2persecond = player.i.cryptodim3.pow(0.5).mul(player.i.cryptodim3mult.mul(cryptodimbooster).mul(buyableEffect("i", 22)).div(33))
        player.i.cryptodim3persecond = player.i.cryptodim4.pow(0.5).mul(player.i.cryptodim4mult.mul(cryptodimbooster).mul(buyableEffect("i", 22)).div(100))

        let cryptodim4persecond = new Decimal(0)
        if (hasUpgrade("i", 92) && !inChallenge("i", 24)) cryptodim4persecond = upgradeEffect("i", 92)

        player.i.bytes = player.i.bytes.add(player.i.bytespersecond.mul(delta))
        player.i.cryptodim1 = player.i.cryptodim1.add(player.i.cryptodim1persecond.mul(delta))
        player.i.cryptodim2 = player.i.cryptodim2.add(player.i.cryptodim2persecond.mul(delta))
        player.i.cryptodim3 = player.i.cryptodim3.add(player.i.cryptodim3persecond.mul(delta))
        player.i.cryptodim4 = player.i.cryptodim4.add(cryptodim4persecond.mul(delta))

        if (!inChallenge("i", 22)) player.i.byteseffect = player.i.bytes.pow(0.3).add(1)
        if (inChallenge("i", 22)) player.i.byteseffect = player.i.bytes.pow(0.3).add(1).pow(0.001)
        if (inChallenge("i", 23)) player.i.byteseffect = player.i.bytes.pow(0.3).add(1).pow(0.001)

        if (hasChallenge("i", 11)) player.i.crypto = player.i.crypto.add(player.i.cryptotoget.mul(0.01).mul(delta))
        if (!hasUpgrade("i", 45)) {
            if (hasUpgrade("i", 43)) player.i.crypto = player.i.crypto.add(player.i.cryptotoget.mul(0.06).mul(delta))
        }
        if (!hasUpgrade("i", 51)) {
            if (hasUpgrade("i", 45)) player.i.crypto = player.i.crypto.add(player.i.cryptotoget.mul(0.5).mul(delta))
        }
        if (hasUpgrade("i", 51)) player.i.crypto = player.i.crypto.add(player.i.cryptotoget.mul(1).mul(delta))
        //coding
        player.i.codeexperiencepause = player.i.codeexperiencepause.sub(1)

        if (player.i.codeexperiencepause.gt(0)) {
            layers.i.codereset();
        }
        player.i.codeexperiencetoget = player.i.crypto.div(1e15).pow(0.10)
        player.i.codeexperiencetoget = player.i.codeexperiencetoget.mul(player.i.voidmodseffect)
        player.i.codeexperiencetoget = player.i.codeexperiencetoget.mul(buyableEffect("i", 24))
        player.i.codeexperiencetoget = player.i.codeexperiencetoget.mul(preinfinityresourcemult)
        if (hasUpgrade("i", 56) && !inChallenge("i", 23)) player.i.codeexperiencetoget = player.i.codeexperiencetoget.mul(upgradeEffect("i", 56))
        if (!inChallenge("i", 22)) player.i.codeexperienceeffect = player.i.codeexperience.pow(1.6).add(1)
        if (inChallenge("i", 22)) player.i.codeexperienceeffect = player.i.codeexperience.pow(1.6).add(1).pow(0.001)
        if (inChallenge("i", 23)) player.i.codeexperienceeffect = player.i.codeexperience.pow(1.6).add(1).pow(0.001)

        if (hasChallenge("i", 11)) player.i.codeexperience = player.i.codeexperience.add(player.i.codeexperiencetoget.mul(0.01).mul(delta))
        if (hasUpgrade("i", 51)) player.i.codeexperience = player.i.codeexperience.add(player.i.codeexperiencetoget.mul(0.05).mul(delta))

        player.i.linesofcode = player.i.linesofcode.add(player.i.linesofcodepersecond.mul(delta))
        if (player.i.linesofcode.gte(player.i.modreq)) {
            player.i.mods = player.i.mods.add(player.i.modgen)
            player.i.linesofcode = new Decimal(0)
        }
        player.i.modreq = player.i.mods.mul(100).pow(1.3).add(100).div(buyableEffect("i", 26))
        linesofcodepersecond = player.i.codeexperience
        if (!inChallenge("i", 12)) {
            player.i.modsoftcapstart = new Decimal(15)
            player.i.modsoftcapstart = player.i.modsoftcapstart.mul(player.i.deathmodseffect)
            player.i.modsoftcapstart = player.i.modsoftcapstart.mul(buyableEffect("i", 25))
            player.i.modsoftcapstart = player.i.modsoftcapstart.mul(player.i.jacorbianenergyeffect)
            if (hasUpgrade("i", 58)) player.i.modsoftcapstart = player.i.modsoftcapstart.mul(upgradeEffect("i", 58))
        }
        if (inChallenge("i", 12)) player.i.modsoftcapstart = new Decimal(0)
        if (inChallenge("i", 19)) player.i.modsoftcapstart = new Decimal(0)
        if (inChallenge("i", 22)) player.i.modsoftcapstart = new Decimal("-1e10000")
        if (player.i.mods.gte(player.i.modsoftcapstart)) {
            if (!inChallenge("i", 19)) player.i.modsoftcap = Decimal.pow(player.i.mods.add(1).sub(player.i.modsoftcapstart), 0.8)
            if (inChallenge("i", 19)) player.i.modsoftcap = Decimal.pow(player.i.mods.pow(100).add(1).sub(player.i.modsoftcapstart), 0.8)
            linesofcodepersecond = linesofcodepersecond.div(player.i.modsoftcap)
        }
        player.i.linesofcodepersecond = linesofcodepersecond
        player.i.linesofcodepersecond = player.i.linesofcodepersecond.mul(player.i.highmodseffect)
        player.i.linesofcodepersecond = player.i.linesofcodepersecond.mul(buyableEffect("i", 23))
        player.i.linesofcodepersecond = player.i.linesofcodepersecond.mul(preinfinityresourcemult)

        player.i.modgen = new Decimal(1)
        if (hasUpgrade("i", 48) && !inChallenge("i", 24)) player.i.modgen = new Decimal(2)
        if (hasUpgrade("i", 49) && !inChallenge("i", 24)) player.i.modgen = player.i.modgen.mul(upgradeEffect("i", 49))
        if (hasUpgrade("i", 52) && !inChallenge("i", 24)) player.i.modgen = player.i.modgen.mul(upgradeEffect("i", 52))
        if (hasUpgrade("i", 59) && !inChallenge("i", 24)) player.i.modgen = player.i.modgen.mul(upgradeEffect("i", 59))
        if (hasUpgrade("i", 86) && !inChallenge("i", 24)) player.i.modgen = player.i.modgen.mul(upgradeEffect("i", 86))
        player.i.modgen = player.i.modgen.mul(player.i.jacorbianenergyeffect)
        player.i.modgen = player.i.modgen.mul(preinfinityresourcemult)
        if (inChallenge("i", 22)) player.i.modgen = new Decimal(1)

        player.i.modeffect = player.i.mods.pow(0.7).add(1)
        if (inChallenge("i", 23)) player.i.modeffect = player.i.mods.pow(0.7).add(1).pow(0.001)

        player.i.creatormodseffect = player.i.creatormods.pow(1).add(1) //Trees, Leaves, and Points
        player.i.highmodseffect = player.i.highmods.pow(0.4).add(1) //Lines of Code
        player.i.deathmodseffect = player.i.deathmods.pow(0.2).add(1) //Mod Softcap
        player.i.dimensionalmodseffect = player.i.dimensionalmods.pow(0.45).add(1) //Crypto Dimensions
        player.i.backroomsmodseffect = player.i.backroomsmods.pow(0.7).add(1) //Crypto
        player.i.voidmodseffect = player.i.voidmods.pow(0.15).add(1) //Code Experience

        if (inChallenge("i", 23)) player.i.creatormodseffect = player.i.creatormods.pow(1).add(1).pow(0.001) //Trees, Leaves, and Points
        if (inChallenge("i", 23)) player.i.highmodseffect = player.i.highmods.pow(0.4).add(1).pow(0.001) //Lines of Code
        if (inChallenge("i", 23)) player.i.deathmodseffect = player.i.deathmods.pow(0.2).add(1).pow(0.001) //Mod Softcap
        if (inChallenge("i", 23)) player.i.dimensionalmodseffect = player.i.dimensionalmods.pow(0.45).add(1).pow(0.001) //Crypto Dimensions
        if (inChallenge("i", 23)) player.i.backroomsmodseffect = player.i.backroomsmods.pow(0.7).add(1).pow(0.001) //Crypto
        if (inChallenge("i", 23)) player.i.voidmodseffect = player.i.voidmods.pow(0.15).add(1).pow(0.001) //Code Experience

        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.creatormods = player.i.creatormods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Trees, Leaves, and Points
        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.highmods = player.i.highmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Lines of Code
        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.deathmods = player.i.deathmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Mod Softcap
        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.dimensionalmods = player.i.dimensionalmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Crypto Dimensions
        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.backroomsmods = player.i.backroomsmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Crypto
        if (hasUpgrade("i", 53) && !inChallenge("i", 22)) player.i.voidmods = player.i.voidmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.1).mul(delta)) //Code Experience

        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.creatormods = player.i.creatormods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Trees, Leaves, and Points
        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.highmods = player.i.highmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Lines of Code
        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.deathmods = player.i.deathmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Mod Softcap
        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.dimensionalmods = player.i.dimensionalmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Crypto Dimensions
        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.backroomsmods = player.i.backroomsmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Crypto
        if (hasChallenge("i", 18) && !inChallenge("i", 22)) player.i.voidmods = player.i.voidmods.add(player.i.mods.mul(preinfinityresourcemult).mul(0.04).mul(delta)) //Code Experience

        player.i.totalrealmmods = player.i.creatormods.add(player.i.highmods.add(player.i.deathmods.add(player.i.dimensionalmods.add(player.i.backroomsmods.add(player.i.voidmods)))))

        //infinity
        if (player.points.gte(1.79e308)) { player.i.infinitypause = new Decimal(1) }

        if (player.i.infinitypause.gt(0))
        {
            if (player.i.infinitybroken.eq(0)) {
                layers.i.infinityreset();
            }
        }
        if (hasMilestone("i", 15)) {
            player.i.infinitybroken = new Decimal(1)
        }
        player.i.infinitypointstoget = new Decimal(1)
        if (hasChallenge("i", 12)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(challengeEffect("i", 12))
        if (hasUpgrade("i", 61) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 61))
        if (hasUpgrade("i", 62) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 62))
        if (hasUpgrade("i", 63) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 63))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("i", 27))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("h", 13))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("i", 28))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("i", 36))
        if (hasUpgrade("i", 67) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 67))
        if (player.i.infinitybroken.eq(1)) {
            player.i.infinitypointstoget = player.i.infinitypointstoget.mul(player.points.plus(10).pow(0.025).log10().add(1))
        }
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(player.i.replicantimodseffect2)
        if (hasUpgrade("i", 82) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 82))
        if (hasUpgrade("h", 14) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("h", 14))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("i", 45))
        if (hasUpgrade("i", 89) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 89))
        if (hasUpgrade("i", 93) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 93))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(player.i.presingularityresourcemult)
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(player.i.singularitypowereffect)
        if (hasUpgrade("i", 97) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 97))
        if (hasUpgrade("i", 99) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 99))
        player.i.infinitypointstoget = player.i.infinitypointstoget.mul(player.i.infinitypointblessingseffect)
        if (hasUpgrade("i", 119) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 119))
        if (inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(buyableEffect("i", 67))
        player.i.infinitiestoget = new Decimal(1)
        player.i.infinitiestoget = player.i.infinitiestoget.mul(buyableEffect("h", 14))
        player.i.infinitiestoget = player.i.infinitiestoget.mul(buyableEffect("i", 29))
        if (hasUpgrade("h", 13) && !inChallenge("i", 24)) player.i.infinitiestoget = player.i.infinitiestoget.mul(1.2)
        if (hasUpgrade("i", 72) && !inChallenge("i", 24)) player.i.infinitiestoget = player.i.infinitiestoget.mul(upgradeEffect("i", 72))

        let infinitytimegain = new Decimal(1)
        player.i.infinitytime = player.i.infinitytime.add(infinitytimegain.mul(delta))
        player.i.infinitypointgeneration = player.i.infinitypointstoget.div(player.i.infinitytime.add(0.0000000001))

        let ippassive = new Decimal(1)
        ippassive = challengeEffect("i", 14)
        if (hasUpgrade("i", 77) && !inChallenge("i", 24)) ippassive = ippassive.mul(3)
        if (hasUpgrade("i", 123)) ippassive = player.i.infinitypointstoget.mul(0.01)
        player.i.ippassive = ippassive.div(60) //only for cosmetic purposes
        if (hasChallenge("i", 14)) player.i.infinitypoints = player.i.infinitypoints.add(ippassive.div(60).mul(delta))

        if (player.i.singularitypause.gt(0)) {
            player.i.infinitypoints = new Decimal(0)
        }
        if (inChallenge("i", 16)) {
            player.i.apoints = player.i.apoints.mul(1.07)
            if (player.points.gte(1e100)) {
                player.i.apoints = player.i.apoints.mul(1.2)
            }
            if (player.points.gte(1e200)) {
                player.i.apoints = player.i.apoints.mul(1.5)
            }
            if (player.i.apoints.gt(player.points)) {
                layers.i.infinityreset();
                player.points = new Decimal(10)
                player.i.apoints = new Decimal(1)
            }
        }
        if (!inChallenge("i", 16)) {
            player.i.apoints = new Decimal(0.001)
        }

        let brokeninfinitymult = new Decimal(1)
        if (hasUpgrade("i", 68) && !inChallenge("i", 24)) brokeninfinitymult = brokeninfinitymult.mul(upgradeEffect("i", 68))
        if (hasUpgrade("i", 71) && !inChallenge("i", 24)) brokeninfinitymult = brokeninfinitymult.mul(upgradeEffect("i", 71))
        if (hasUpgrade("i", 73) && !inChallenge("i", 24)) brokeninfinitymult = brokeninfinitymult.mul(upgradeEffect("i", 73))
        brokeninfinitymult = brokeninfinitymult.mul(buyableEffect("i", 31))
        brokeninfinitymult = brokeninfinitymult.mul(buyableEffect("h", 15))
        if (hasUpgrade("h", 12) && !inChallenge("i", 24)) brokeninfinitymult = brokeninfinitymult.mul(1.5)
        if (hasUpgrade("i", 84) && !inChallenge("i", 24)) brokeninfinitymult = brokeninfinitymult.mul(upgradeEffect("i", 84))
        brokeninfinitymult = brokeninfinitymult.mul(buyableEffect("i", 42))
        brokeninfinitymult = brokeninfinitymult.mul(player.i.presingularityresourcemult)
        player.i.brokeninfinitiestoget = player.i.infinities.mul(brokeninfinitymult)
        if (hasUpgrade("i", 103) && !inChallenge("i", 24)) player.i.infinitypointstoget = player.i.infinitypointstoget.mul(upgradeEffect("i", 103))
        if (hasMilestone("i", 17)) player.i.brokeninfinities = player.i.brokeninfinities.add(player.i.brokeninfinitiestoget.mul(0.01).mul(delta))
        if (hasMilestone("i", 18)) player.i.brokeninfinities = player.i.brokeninfinities.add(player.i.brokeninfinitiestoget.mul(delta))

        player.i.ipautobuyamount = player.i.ipinput

        if (player.i.infinitypointstoget.gte(player.i.ipautobuyamount) && player.i.autocruncher.eq(1) && player.i.infinitytime.gt(0.1) || player.i.infinitypointstoget.gte(player.i.infinitypoints.mul(player.i.ipautobuyamount)) && player.i.autocruncher.eq(2) && player.i.infinitytime.gt(0.1)) {
            layers.i.infinityreset();
            consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
            player.i.infinitypause = new Decimal(0)
            player.i.infinitytime = new Decimal(0)
            player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
            player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
            player.i.infinityresets = player.i.infinityresets.add(1)
            autocrunchinterval = new Decimal(0)
        }

        let passiveinfinitygain = new Decimal(0)
        if (hasUpgrade("i", 76) && !inChallenge("i", 24)) passiveinfinitygain = upgradeEffect("i", 76)
        if (hasMilestone("i", 17)) passiveinfinitygain = passiveinfinitygain.add(10)
        player.i.infinities = player.i.infinities.add(passiveinfinitygain.mul(delta))

        //replicanti
        player.i.replicantiinterval = new Decimal(5).div(buyableEffect("i", 33))
        player.i.replicantiinterval = player.i.replicantiinterval.div(buyableEffect("i", 35))
        if (hasUpgrade("i", 83) && !inChallenge("i", 24)) player.i.replicantiinterval = player.i.replicantiinterval.div(upgradeEffect("i", 83))

        player.i.replicantimultiplier = buyableEffect("i", 32)
        player.i.replicantimultiplier = player.i.replicantimultiplier.mul(buyableEffect("i", 34))
        player.i.replicantimultiplier = player.i.replicantimultiplier.mul(buyableEffect("h", 17))
        if (hasUpgrade("i", 81) && !inChallenge("i", 24)) player.i.replicantimultiplier = player.i.replicantimultiplier.mul(upgradeEffect("i", 81))
        if (hasUpgrade("i", 85) && !inChallenge("i", 24)) player.i.replicantimultiplier = player.i.replicantimultiplier.mul(upgradeEffect("i", 85))
        player.i.replicantimultiplier = player.i.replicantimultiplier.mul(player.i.presingularityresourcemult)
        if (hasUpgrade("i", 112) && !inChallenge("i", 24)) player.i.replicantimultiplier = player.i.replicantimultiplier.pow(15)

        if (player.i.replicanti.gt(1)) player.i.replicantieffect = player.i.replicanti.plus(1).log10().mul(333).pow(1.3).add(1)

        if (hasUpgrade("i", 112)) player.i.replicantimax = new Decimal("1e1000000")

        let replicantigain = new Decimal(1)
        replicantigain = new Decimal(1)
        player.i.replicantitimer = player.i.replicantitimer.add(replicantigain.mul(delta))

        if (player.i.replicantitimer.gte(player.i.replicantiinterval))
        {
            player.i.replicanti = player.i.replicanti.mul(player.i.replicantimultiplier)
            player.i.replicantitimer = new Decimal(0)
        }

        if (player.i.replicanti.gte(player.i.replicantimax)) {
            player.i.replicanti = player.i.replicantimax
        }
        player.i.replicantimodseffect = player.i.replicantimods.mul(4.5).pow(3).add(1)
        player.i.replicantimodseffect2 = player.i.replicantimods.mul(10).pow(1.2).add(1)

        player.i.replicantimodgain = new Decimal(1)
        player.i.replicantimodgain = player.i.replicantimodgain.mul(player.i.presingularityresourcemult)
        player.i.replicantimodgain = player.i.replicantimodgain.mul(player.i.replicantimodblessingseffect)

        if (hasMilestone("i", 13) && player.i.replicanti.gte(1.78e308)) player.i.replicantimods = player.i.replicantimods.add(player.i.replicantimodgain.mul(delta))
        //infinity dimensions
        let infinitydimbooster = new Decimal(1)
        infinitydimbooster = infinitydimbooster.mul(buyableEffect("h", 18))
        infinitydimbooster = infinitydimbooster.mul(buyableEffect("i", 44))
        if (hasUpgrade("i", 88) && !inChallenge("i", 24)) infinitydimbooster = infinitydimbooster.mul(upgradeEffect("i", 88))
        if (hasUpgrade("i", 91) && !inChallenge("i", 24)) infinitydimbooster = infinitydimbooster.mul(upgradeEffect("i", 91))
        infinitydimbooster = infinitydimbooster.mul(player.i.singularitytreeeffect)
        infinitydimbooster = infinitydimbooster.mul(player.i.presingularityresourcemult)
        infinitydimbooster = infinitydimbooster.mul(player.i.infinitydimensionblessingseffect)

        player.i.infinitypowerpersecond = player.i.infinitydim1.mul(player.i.infinitydim1mult.mul(infinitydimbooster))
        player.i.infinitydim1persecond = player.i.infinitydim2.mul(player.i.infinitydim2mult.mul(infinitydimbooster))
        player.i.infinitydim2persecond = player.i.infinitydim3.mul(player.i.infinitydim3mult.mul(infinitydimbooster))
        player.i.infinitydim3persecond = player.i.infinitydim4.mul(player.i.infinitydim4mult.mul(infinitydimbooster))

        player.i.infinitypower = player.i.infinitypower.add(player.i.infinitypowerpersecond.mul(delta))
        player.i.infinitydim1 = player.i.infinitydim1.add(player.i.infinitydim1persecond.mul(delta))
        player.i.infinitydim2 = player.i.infinitydim2.add(player.i.infinitydim2persecond.mul(delta))
        player.i.infinitydim3 = player.i.infinitydim3.add(player.i.infinitydim3persecond.mul(delta))

        let infinitydim4persecond = new Decimal(0)
        if (hasUpgrade("i", 111) && !inChallenge("i", 24)) infinitydim4persecond = upgradeEffect("i", 111)
        player.i.infinitydim4 = player.i.infinitydim4.add(infinitydim4persecond.mul(delta))

        player.i.infinitypowereffect = player.i.infinitypower.pow(2).add(1)

        if (player.i.infinitydim1mult.eq(0)) {
            player.i.infinitydim1mult = new Decimal(1)
        }//bugfix
        if (player.i.infinitydim2mult.eq(0)) {
            player.i.infinitydim2mult = new Decimal(1)
        }//bugfix
        if (player.i.infinitydim3mult.eq(0)) {
            player.i.infinitydim3mult = new Decimal(1)
        }//bugfix
        if (player.i.infinitydim4mult.eq(0)) {
            player.i.infinitydim4mult = new Decimal(1)
        }//bugfix

        //singularity
        player.i.singularitypause = player.i.singularitypause.sub(1)

        if (player.i.singularityscene.eq(21)) {
            player.i.singularitycutscene = new Decimal(0)
        } 
        if (player.i.singularitypause.gt(0)) {
            layers.i.singularityreset();
        }
        player.i.singularitypointstoget = player.i.infinitypoints.div(1e180).pow(0.018)
        player.i.singularitypointstoget = player.i.singularitypointstoget.mul(buyableEffect("h", 24))
        if (hasUpgrade("i", 109)) player.i.singularitypointstoget = player.i.singularitypointstoget.mul(upgradeEffect("i", 109))
        player.i.singularitypointstoget = player.i.singularitypointstoget.mul(buyableEffect("i", 69))
        player.i.singularitiestoget = new Decimal(1)
        player.i.singularitiestoget = player.i.singularitiestoget.mul(buyableEffect("h", 26))
        if (hasUpgrade("h", 22)) player.i.singularitiestoget = player.i.singularitiestoget.mul(upgradeEffect("h", 22))

        if (hasUpgrade("i", 137)) player.i.singularitypoints = player.i.singularitypoints.add(player.i.singularitypointstoget.mul(0.01).mul(delta))

        let singularitytimegain = new Decimal(1)
        player.i.singularitytime = player.i.singularitytime.add(singularitytimegain.mul(delta))

        player.i.presingularityresourcemult = new Decimal(1)
        player.i.presingularityresourcemult = player.i.presingularityresourcemult.mul(player.i.singularitypointeffect)
        player.i.presingularityresourcemult = player.i.presingularityresourcemult.mul(buyableEffect("h", 23))
        if (hasUpgrade("i", 113)) player.i.presingularityresourcemult = player.i.presingularityresourcemult.mul(upgradeEffect("i", 113))
        if (inChallenge("i", 23)) player.i.presingularityresourcemult = player.i.presingularityresourcemult.pow(0.001)
        if (inChallenge("i", 24)) player.i.presingularityresourcemult = player.i.presingularityresourcemult.pow(0.08)

        if (!hasUpgrade("i", 125)) player.i.singularitypointeffect = player.i.singularitypoints.mul(0.2).pow(0.5).add(1)
        if (hasUpgrade("i", 125)) player.i.singularitypointeffect = player.i.singularitypoints.mul(0.2).pow(1).add(1)
        if (inChallenge("i", 24)) player.i.singularitypointeffect = player.i.singularitypointeffect.pow(0.1)

        //singularity dimensions
        let singularitydimbooster = new Decimal(1)
        singularitydimbooster = singularitydimbooster.mul(buyableEffect("h", 25))
        if (hasUpgrade("i", 101)) singularitydimbooster = singularitydimbooster.mul(upgradeEffect("i", 101))
        if (hasUpgrade("h", 23)) singularitydimbooster = singularitydimbooster.mul(upgradeEffect("h", 23))
        if (hasUpgrade("i", 114)) singularitydimbooster = singularitydimbooster.mul(upgradeEffect("i", 114))
        if (hasUpgrade("i", 124)) singularitydimbooster = singularitydimbooster.mul(upgradeEffect("i", 124))
        if (hasUpgrade("i", 132)) singularitydimbooster = singularitydimbooster.mul(upgradeEffect("i", 132))
        singularitydimbooster = singularitydimbooster.mul(buyableEffect("i", 72))
        singularitydimbooster = singularitydimbooster.mul(player.i.voidsingularitypointeffect1)

        player.i.singularitypowerpersecond = player.i.singularitydim1.mul(player.i.singularitydim1mult.mul(singularitydimbooster))
        player.i.singularitydim1persecond = player.i.singularitydim2.mul(player.i.singularitydim2mult.mul(singularitydimbooster))
        player.i.singularitydim2persecond = player.i.singularitydim3.mul(player.i.singularitydim3mult.mul(singularitydimbooster))
        player.i.singularitydim3persecond = player.i.singularitydim4.mul(player.i.singularitydim4mult.mul(singularitydimbooster))
        player.i.singularitydim4persecond = player.i.singularitydim5.mul(player.i.singularitydim5mult.mul(singularitydimbooster))
        player.i.singularitydim5persecond = player.i.singularitydim6.mul(player.i.singularitydim6mult.mul(singularitydimbooster))

        player.i.singularitypower = player.i.singularitypower.add(player.i.singularitypowerpersecond.mul(delta))
        player.i.singularitydim1 = player.i.singularitydim1.add(player.i.singularitydim1persecond.mul(delta))
        player.i.singularitydim2 = player.i.singularitydim2.add(player.i.singularitydim2persecond.mul(delta))
        player.i.singularitydim3 = player.i.singularitydim3.add(player.i.singularitydim3persecond.mul(delta))
        player.i.singularitydim4 = player.i.singularitydim4.add(player.i.singularitydim4persecond.mul(delta))
        player.i.singularitydim5 = player.i.singularitydim5.add(player.i.singularitydim5persecond.mul(delta))

        if (!hasUpgrade("i", 117)) player.i.singularitypowereffect = player.i.singularitypower.pow(1.5).add(1)
        if (hasUpgrade("i", 117)) player.i.singularitypowereffect = player.i.singularitypower.pow(2.5).add(1)
        if (inChallenge("i", 24)) player.i.singularitypowereffect = player.i.singularitypowereffect.pow(0.05)

        //singularity trees
        player.i.singularityleaves = player.i.singularityleaves.add(player.i.singularityleavespersecond.mul(delta))
        if (player.i.singularityleaves.gte(player.i.singularitytreereq)) {
            player.i.singularitytrees = player.i.singularitytrees.add(player.i.singularitytreegen)
            player.i.singularityleaves = new Decimal(0)
        }
        player.i.singularitytreereq = player.i.singularitytrees.pow(2).add(10)

        let singularityleavespersecond = new Decimal(0)
        if (hasUpgrade("i", 95)) singularityleavespersecond = new Decimal(1)
        singularityleavespersecond = singularityleavespersecond.mul(buyableEffect("i", 51))
        if (hasUpgrade("i", 98)) singularityleavespersecond = singularityleavespersecond.mul(upgradeEffect("i", 98))
        if (hasUpgrade("h", 24)) singularityleavespersecond = singularityleavespersecond.mul(upgradeEffect("h", 24))
        singularityleavespersecond = singularityleavespersecond.mul(buyableEffect("h", 27))
        singularityleavespersecond = singularityleavespersecond.mul(player.i.voidsingularitypointeffect2)
        if (hasUpgrade("i", 127)) singularityleavespersecond = singularityleavespersecond.mul(upgradeEffect("i", 127))
        if (hasUpgrade("i", 133)) singularityleavespersecond = singularityleavespersecond.mul(upgradeEffect("i", 133))
        singularityleavespersecond = singularityleavespersecond.mul(buyableEffect("i", 71))
        player.i.singularitytreesoftcapstart = new Decimal(5)
        player.i.singularitytreesoftcapstart = player.i.singularitytreesoftcapstart.mul(buyableEffect("i", 52))
        if (hasUpgrade("i", 102)) player.i.singularitytreesoftcapstart = player.i.singularitytreesoftcapstart.mul(upgradeEffect("i", 102))
        player.i.singularitytreesoftcapstart = player.i.singularitytreesoftcapstart.mul(buyableEffect("h", 28))
        if (hasUpgrade("i", 128)) player.i.singularitytreesoftcapstart = player.i.singularitytreesoftcapstart.mul(upgradeEffect("i", 128))
        if (hasUpgrade("i", 133)) player.i.singularitytreesoftcapstart = player.i.singularitytreesoftcapstart.mul(upgradeEffect("i", 133))
        if (player.i.singularitytrees.gte(player.i.singularitytreesoftcapstart)) {
            player.i.singularitytreesoftcap = Decimal.pow(player.i.singularitytrees.add(1).sub(player.i.singularitytreesoftcapstart), 0.75)
            singularityleavespersecond = singularityleavespersecond.div(player.i.singularitytreesoftcap)
        }
        player.i.singularityleavespersecond = singularityleavespersecond

        player.i.singularitytreegen = new Decimal(1)
        player.i.singularitytreegen = player.i.singularitytreegen.mul(player.i.voidsingularitypointeffect3)
        if (hasUpgrade("i", 127)) player.i.singularitytreegen = player.i.singularitytreegen.mul(upgradeEffect("i", 127))
        if (hasUpgrade("i", 133)) player.i.singularitytreegen = player.i.singularitytreegen.mul(upgradeEffect("i", 133))

        if (!hasUpgrade("i", 117)) player.i.singularitytreeeffect = player.i.singularitytrees.pow(50).add(1)
        if (hasUpgrade("i", 117)) player.i.singularitytreeeffect = player.i.singularitytrees.pow(100).add(1)
        if (inChallenge("i", 24)) player.i.singularitytreeeffect = player.i.singularitytreeeffect.pow(0.001)

        //singularity studies
        if (!hasUpgrade("i", 105)) player.i.singularityblessingspersecond = new Decimal(0)
        if (hasUpgrade("i", 105)) player.i.singularityblessingspersecond = player.i.singularitytheorems.pow(2)

        player.i.singularityblessings = player.i.singularityblessings.add(player.i.singularityblessingspersecond.mul(delta))

        let blessingbooster = new Decimal(1)
        blessingbooster = blessingbooster.mul(buyableEffect("h", 29))
        if (hasUpgrade("i", 106)) blessingbooster = blessingbooster.mul(upgradeEffect("i", 106))
        blessingbooster = blessingbooster.mul(player.i.jacorbmodseffect)
        blessingbooster = blessingbooster.mul(player.i.voidsingularitypointeffect4)
        blessingbooster = blessingbooster.mul(buyableEffect("i", 73))

        player.i.replicantimodblessings = player.i.replicantimodblessings.add(player.i.replicantimodblessingspersecond.mul(delta))
        player.i.replicantimodblessingspersecond = buyableEffect("i", 56)
        player.i.replicantimodblessingspersecond = player.i.replicantimodblessingspersecond.mul(blessingbooster)
        player.i.replicantimodblessingseffect = player.i.replicantimodblessings.pow(0.5).add(1)
        if (inChallenge("i", 24)) player.i.replicantimodblessingseffect = player.i.replicantimodblessingseffect.pow(0.001)

        player.i.infinitydimensionblessings = player.i.infinitydimensionblessings.add(player.i.infinitydimensionblessingspersecond.mul(delta))
        player.i.infinitydimensionblessingspersecond = buyableEffect("i", 57)
        player.i.infinitydimensionblessingspersecond = player.i.infinitydimensionblessingspersecond.mul(blessingbooster)
        player.i.infinitydimensionblessingseffect = player.i.infinitydimensionblessings.pow(14).add(1)
        if (inChallenge("i", 24)) player.i.infinitydimensionblessingseffect = player.i.infinitydimensionblessingseffect.pow(0.001)

        player.i.infinitypointblessings = player.i.infinitypointblessings.add(player.i.infinitypointblessingspersecond.mul(delta))
        player.i.infinitypointblessingspersecond = buyableEffect("i", 58)
        player.i.infinitypointblessingspersecond = player.i.infinitypointblessingspersecond.mul(blessingbooster)
        player.i.infinitypointblessingseffect = player.i.infinitypointblessings.pow(8).add(1)
        if (inChallenge("i", 24)) player.i.infinitypointblessingseffect = player.i.infinitypointblessingseffect.pow(0.001)

        //jacorb secrets

        document.body.style.setProperty('--background', player.i.jacorbianunlock.gte(1) ? "linear-gradient(90deg, #3B0051, #0f0f0f)" : inChallenge("i", 24) ? "linear-gradient(90deg, black, #210069)" : "#0f0f0f");

        if (player.i.jacorbianunlock.eq(1)) {
        makeParticles(jacorbparticle, 1)
        }

        player.i.jacorbianenergytoget = player.i.totalrealmmods.plus(1).log10().pow(0.5)
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("i", 59))
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("i", 61))
        if (hasChallenge("i", 21)) player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(challengeEffect("i", 21))
        if (hasChallenge("i", 22)) player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(challengeEffect("i", 22))
        if (hasUpgrade("i", 115)) player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(upgradeEffect("i", 115))
        if (hasUpgrade("i", 116)) player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(upgradeEffect("i", 116))
        if (hasUpgrade("i", 121)) player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(upgradeEffect("i", 121))
        player.i.jacorbianenergyeffect = player.i.jacorbianenergy.pow(1.1).add(1)
        if (inChallenge("i", 23)) player.i.jacorbianenergyeffect = player.i.jacorbianenergy.pow(1.1).add(1).pow(20)

        if (hasChallenge("i", 19) && player.i.jacorbianunlock.eq(1)) {
            player.i.jacorbianenergy = player.i.jacorbianenergy.add(player.i.jacorbianenergytoget.mul(2.5).mul(delta))
        }
        if (player.i.jacorbscene.eq(8)) {
            player.i.jacorbcutscene = new Decimal(0)
        } 

        player.i.jacorbmodspersecond = buyableEffect("i", 62)
        player.i.jacorbmodspersecond = player.i.jacorbmodspersecond.mul(buyableEffect("i", 63))
        if (hasUpgrade("i", 118)) player.i.jacorbmodspersecond = player.i.jacorbmodspersecond.mul(upgradeEffect("i", 118))

        player.i.jacorbmods = player.i.jacorbmods.add(player.i.jacorbmodspersecond.mul(delta))
        player.i.jacorbmodseffect = player.i.jacorbmods.pow(1.6).add(1)

        //void singularities
        if (player.points.lt(1.79e308)) player.i.voidsingularitiestoget = new Decimal(0)
        if (player.points.gte(1.79e308)) player.i.voidsingularitiestoget = player.points.div(1e308).pow(0.015)
        player.i.voidsingularitiestoget = player.i.voidsingularitiestoget.mul(buyableEffect("i", 65))
        player.i.voidsingularitiestoget = player.i.voidsingularitiestoget.mul(buyableEffect("h", 31))
        if (hasUpgrade("i", 129)) player.i.voidsingularitiestoget = player.i.voidsingularitiestoget.mul(upgradeEffect("i", 129))

        let vspersecond = upgradeEffect("i", 138)
        if (hasUpgrade("i", 138)) player.i.voidsingularities = player.i.voidsingularities.add(vspersecond.mul(delta))

        player.i.voidsingularitypointspersecond = player.i.voidsingularities.pow(1.5)
        player.i.voidsingularitypointspersecond = player.i.voidsingularitypointspersecond.mul(buyableEffect("i", 64))
        player.i.voidsingularitypointspersecond = player.i.voidsingularitypointspersecond.mul(buyableEffect("h", 31))
        player.i.voidsingularitypoints = player.i.voidsingularitypoints.add(player.i.voidsingularitypointspersecond.mul(delta))

        player.i.voidsingularitypointeffect1 = player.i.voidsingularitypoints.pow(1.3).add(1)
        player.i.voidsingularitypointeffect2 = player.i.voidsingularitypoints.pow(1.1).add(1)
        player.i.voidsingularitypointeffect3 = player.i.voidsingularitypoints.pow(0.5).add(1)
        player.i.voidsingularitypointeffect4 = player.i.voidsingularitypoints.pow(1.6).add(1)

        
    },
    infinityreset() {
        for (let i = 0; i < player.i.upgrades.length; i++) {
            if (+player.i.upgrades[i] < 54) {
                player.i.upgrades.splice(i, 1);
                i--;
            }
        }
        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)
        player.i.buyables[16] = new Decimal(0)
        player.i.buyables[17] = new Decimal(0)
        player.i.buyables[18] = new Decimal(0)
        player.i.buyables[19] = new Decimal(0)
        player.i.buyables[20] = new Decimal(0)
        player.i.buyables[21] = new Decimal(0)
        player.i.buyables[22] = new Decimal(0)
        player.i.buyables[23] = new Decimal(0)
        player.i.buyables[24] = new Decimal(0)
        player.i.buyables[25] = new Decimal(0)
        player.i.buyables[26] = new Decimal(0)
        player.points = new Decimal(1)
        player.i.trees = new Decimal(0)
        player.i.leaves = new Decimal(0)
        player.i.leavespersecond = new Decimal(0)
        player.i.treereq = new Decimal(10)
        player.i.treesoftcapstart = new Decimal(15)
        player.i.treesoftcap = new Decimal(1)
        player.i.treegen = new Decimal(1)
        //Computer
        player.i.crypto = new Decimal(0)
        player.i.cryptotoget = new Decimal(0)
        player.i.bytes = new Decimal(0)
        player.i.bytespersecond = new Decimal(0)
        player.i.byteseffect = new Decimal(0)
        player.i.cryptodim1 = new Decimal(0)
        player.i.cryptodim1mult = new Decimal(1)
        player.i.cryptodim1persecond = new Decimal(0)
        player.i.cryptodim2 = new Decimal(0)
        player.i.cryptodim2mult = new Decimal(1)
        player.i.cryptodim2persecond = new Decimal(0)
        player.i.cryptodim3 = new Decimal(0)
        player.i.cryptodim3mult = new Decimal(1)
        player.i.cryptodim3persecond = new Decimal(0)
        player.i.cryptodim4 = new Decimal(0)
        player.i.cryptodim4mult = new Decimal(1)
        //Coding
        player.i.codeexperience = new Decimal(0)
        player.i.codeexperiencetoget = new Decimal(0)
        player.i.codeexperienceeffect = new Decimal(0)
        player.i.mods = new Decimal(0)
        player.i.linesofcode = new Decimal(0)
        player.i.linesofcodepersecond = new Decimal(0)
        player.i.modreq = new Decimal(10)
        player.i.modsoftcapstart = new Decimal(15)
        player.i.modsoftcap = new Decimal(1)
        player.i.modgen = new Decimal(1)
        player.i.modeffect = new Decimal(1)
        //Realm Mods
        player.i.currentdisplay = new Decimal(0)
        player.i.creatormods = new Decimal(0)
        player.i.highmods = new Decimal(0)
        player.i.deathmods = new Decimal(0)
        player.i.dimensionalmods = new Decimal(0)
        player.i.backroomsmods = new Decimal(0)
        player.i.voidmods = new Decimal(0)
        player.i.creatormodseffect = new Decimal(0)
        player.i.highmodseffect = new Decimal(0)
        player.i.deathmodseffect = new Decimal(0)
        player.i.dimensionalmodseffect = new Decimal(0)
        player.i.backroomsmodseffect = new Decimal(0)
        player.i.voidmodseffect = new Decimal(0)
        player.i.totalrealmmods = new Decimal(0)
        player.i.jacorbianenergyunlocked = new Decimal(0)
        player.i.jacorbianenergy = new Decimal(0)
        player.i.jacorbianenergytoget = new Decimal(0)
        player.i.jacorbianenergyeffect = new Decimal(0)
        if (player.i.autocruncher.eq(1) && !hasUpgrade("i", 75)) {
            consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
            player.i.infinitypause = new Decimal(0)
            player.i.infinitytime = new Decimal(0)
            player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
            player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
            player.i.infinityresets = player.i.infinityresets.add(1)
        }
        player.i.replicanti = new Decimal(1)
        if (hasMilestone("i", 16)) player.i.replicanti = new Decimal(1e308)
        player.i.buyables[34] = new Decimal(0)
        player.i.buyables[35] = new Decimal(0)
        player.i.infinitypower = new Decimal(0)
        player.i.infinitydim1 = player.i.buyables[37]
        player.i.infinitydim2 = player.i.buyables[38]
        player.i.infinitydim3 = player.i.buyables[39]
        player.i.infinitydim4 = player.i.buyables[41]
    },
    singularityreset() {
        for (let i = 0; i < player.i.upgrades.length; i++) {
            if (+player.i.upgrades[i] < 93) {
                player.i.upgrades.splice(i, 1);
                i--;
            }
        }
        if (!hasMilestone("i", 13))
        {
            player.i.challenges = []
        }
        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)
        player.i.buyables[16] = new Decimal(0)
        player.i.buyables[17] = new Decimal(0)
        player.i.buyables[18] = new Decimal(0)
        player.i.buyables[19] = new Decimal(0)
        player.i.buyables[20] = new Decimal(0)
        player.i.buyables[21] = new Decimal(0)
        player.i.buyables[22] = new Decimal(0)
        player.i.buyables[23] = new Decimal(0)
        player.i.buyables[24] = new Decimal(0)
        player.i.buyables[25] = new Decimal(0)
        player.i.buyables[26] = new Decimal(0)
        player.i.buyables[27] = new Decimal(0)
        player.i.buyables[28] = new Decimal(0)
        player.i.buyables[29] = new Decimal(0)
        player.i.buyables[31] = new Decimal(0)
        player.i.buyables[32] = new Decimal(0)
        player.i.buyables[33] = new Decimal(0)
        player.i.buyables[34] = new Decimal(0)
        player.i.buyables[35] = new Decimal(0)
        player.i.buyables[36] = new Decimal(0)
        player.i.buyables[37] = new Decimal(0)
        player.i.buyables[38] = new Decimal(0)
        player.i.buyables[39] = new Decimal(0)
        player.i.buyables[40] = new Decimal(0)
        player.i.buyables[41] = new Decimal(0)
        player.i.buyables[42] = new Decimal(0)
        player.i.buyables[43] = new Decimal(0)
        player.i.buyables[44] = new Decimal(0)
        player.i.buyables[45] = new Decimal(0)
        player.points = new Decimal(1)
        player.i.trees = new Decimal(0)
        player.i.leaves = new Decimal(0)
        player.i.leavespersecond = new Decimal(0)
        player.i.treereq = new Decimal(10)
        player.i.treesoftcapstart = new Decimal(15)
        player.i.treesoftcap = new Decimal(1)
        player.i.treegen = new Decimal(1)
        //Computer
        player.i.crypto = new Decimal(0)
        player.i.cryptotoget = new Decimal(0)
        player.i.bytes = new Decimal(0)
        player.i.bytespersecond = new Decimal(0)
        player.i.byteseffect = new Decimal(0)
        player.i.cryptodim1 = new Decimal(0)
        player.i.cryptodim1mult = new Decimal(1)
        player.i.cryptodim1persecond = new Decimal(0)
        player.i.cryptodim2 = new Decimal(0)
        player.i.cryptodim2mult = new Decimal(1)
        player.i.cryptodim2persecond = new Decimal(0)
        player.i.cryptodim3 = new Decimal(0)
        player.i.cryptodim3mult = new Decimal(1)
        player.i.cryptodim3persecond = new Decimal(0)
        player.i.cryptodim4 = new Decimal(0)
        player.i.cryptodim4mult = new Decimal(1)
        //Coding
        player.i.codeexperience = new Decimal(0)
        player.i.codeexperiencetoget = new Decimal(0)
        player.i.codeexperienceeffect = new Decimal(0)
        player.i.mods = new Decimal(0)
        player.i.linesofcode = new Decimal(0)
        player.i.linesofcodepersecond = new Decimal(0)
        player.i.modreq = new Decimal(10)
        player.i.modsoftcapstart = new Decimal(15)
        player.i.modsoftcap = new Decimal(1)
        player.i.modgen = new Decimal(1)
        player.i.modeffect = new Decimal(1)
        //Realm Mods
        player.i.currentdisplay = new Decimal(0)
        player.i.creatormods = new Decimal(0)
        player.i.highmods = new Decimal(0)
        player.i.deathmods = new Decimal(0)
        player.i.dimensionalmods = new Decimal(0)
        player.i.backroomsmods = new Decimal(0)
        player.i.voidmods = new Decimal(0)
        player.i.creatormodseffect = new Decimal(0)
        player.i.highmodseffect = new Decimal(0)
        player.i.deathmodseffect = new Decimal(0)
        player.i.dimensionalmodseffect = new Decimal(0)
        player.i.backroomsmodseffect = new Decimal(0)
        player.i.voidmodseffect = new Decimal(0)
        player.i.totalrealmmods = new Decimal(0)
        player.i.jacorbianenergyunlocked = new Decimal(0)
        player.i.jacorbianenergy = new Decimal(0)
        player.i.jacorbianenergytoget = new Decimal(0)
        player.i.jacorbianenergyeffect = new Decimal(0)
        //infinity
        player.i.infinities = new Decimal(0),
        player.i.infinitypoints = new Decimal(0),
        player.i.infinitiestoget = new Decimal(0),
        player.i.infinitypointstoget = new Decimal(0),
        player.i.ippassive = new Decimal(0),
        resetrecord = ["", "", "", "", "", "", ""],
        player.i.infinityresets= new Decimal(1),
        player.i.infinitytime= new Decimal(0),
        player.i.infinitypointgeneration= new Decimal(0),
        player.i.preinfinityresourcemult= new Decimal(0), //This is so it can also multiply points//
        player.i.apoints= new Decimal(0.001), //HARD CHALLENGE ONLY//
        //breakinfinity
        player.i.brokeninfinities= new Decimal(0),
        player.i.brokeninfinitiestoget= new Decimal(0),
        player.i.infinitybroken= new Decimal(0),
        //replicanti
        player.i.replicanti= new Decimal(1),
        player.i.replicantimultiplier= new Decimal(1),
        player.i.replicantiinterval= new Decimal(5),
        player.i.replicantitimer= new Decimal(1),
        player.i.replicantimods= new Decimal(0),
        //infinitydimensions
        player.i.infinitypower= new Decimal(0),
        player.i.infinitydim1= new Decimal(0),
        player.i.infinitydim1mult= new Decimal(1),
        player.i.infinitydim2= new Decimal(0),
        player.i.infinitydim2mult= new Decimal(1),
        player.i.infinitydim3= new Decimal(0),
        player.i.infinitydim3mult= new Decimal(1),
        player.i.infinitydim4= new Decimal(0),
        player.i.infinitydim4mult = new Decimal(1)

        player.i.singularitytime = new Decimal(0)
        player.i.singularities = player.i.singularities.add(player.i.singularitiestoget)
        player.i.singularitypoints = player.i.singularitypoints.add(player.i.singularitypointstoget)

        player.i.singularitypower = new Decimal(0)
        player.i.singularitydim1 = player.i.buyables[46]
        player.i.singularitydim2 = player.i.buyables[47]
        player.i.singularitydim3 = player.i.buyables[48]
        player.i.singularitydim4 = player.i.buyables[49]

        player.i.jacorbianunlock = new Decimal(0)
        player.i.jacorbiantrialunlock = new Decimal(0)
    },
    cryptoreset() {
                if (!hasUpgrade("i", 38)) {
                    if (!hasUpgrade("i", 31)) {
                        for (let i = 0; i < player.i.upgrades.length; i++) {
                            if (+player.i.upgrades[i] < 17) {
                                player.i.upgrades.splice(i, 1);
                                i--;
                            }
                        }
                    }
        }
        player.i.trees = new Decimal(0)
        player.points = new Decimal(1)
        player.i.leaves = new Decimal(0)
        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.crypto = player.i.crypto.add(player.i.cryptotoget)
    },
    codereset() {
        if (!hasUpgrade("i", 42)) {
            for (let i = 0; i < player.i.upgrades.length; i++) {
                if (+player.i.upgrades[i] < 36) {
                    player.i.upgrades.splice(i, 1);
                    i--;
                }
            }
        }
        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)
        player.i.buyables[16] = new Decimal(0)
        player.i.buyables[17] = new Decimal(0)
        player.i.buyables[18] = new Decimal(0)
        player.i.buyables[19] = new Decimal(0)
        player.i.buyables[20] = new Decimal(0)
        player.i.buyables[21] = new Decimal(0)
        player.i.buyables[22] = new Decimal(0)
        player.i.bytes = new Decimal(0)
        player.i.crypto = new Decimal(0)
        player.i.cryptodim1 = new Decimal(0)
        player.i.cryptodim1mult = new Decimal(1)
        player.i.cryptodim2 = new Decimal(0)
        player.i.cryptodim2mult = new Decimal(1)
        player.i.cryptodim3 = new Decimal(0)
        player.i.cryptodim3mult = new Decimal(1)
        player.i.cryptodim4 = new Decimal(0)
        player.i.cryptodim4mult = new Decimal(1)
        player.i.trees = new Decimal(0)
        player.points = new Decimal(1)
        player.i.leaves = new Decimal(0)
        player.i.codeexperience = player.i.codeexperience.add(player.i.codeexperiencetoget)
    },
    clickables: {
        11: {
            title() { return "<h2>Reset for crypto " },
            canClick() { return player.i.cryptotoget.gte(1) },
            onClick() {
                player.i.cryptopause = new Decimal(3)
            },
            style: { width: '400px', "min-height": '100px' }
        },
        12: {
            title() { return "<h2>Reset for code experience " },
            canClick() { return player.i.codeexperiencetoget.gte(1) },
            onClick() {
                player.i.codeexperiencepause = new Decimal(3)
            },
            style: { width: '400px', "min-height": '100px' }
        },
        13: {
            title() { return "<img src='resources/symbolcreator.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(1) //Each number is assinged to its corresponding realm
            },
        },
        14: {
            title() { return "<img src='resources/symbolhigh.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(2)
            },
        },
        15: {
            title() { return "<img src='resources/symboldeath.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(3)
            },
        },
        16: {
            title() { return "<img src='resources/symboldimension.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(4)
            },
        },
        17: {
            title() { return "<img src='resources/symbolbackrooms.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(5)
            },
        },
        18: {
            title() { return "<img src='resources/symbolvoid.png' style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            onClick() {
                player.i.currentdisplay = new Decimal(6)
            },
        },
        19: {
            title() { return "Deposit ALL of your mods to the Creator Realm." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(1) },
            onClick() {
                player.i.creatormods = player.i.creatormods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        21: {
            title() { return "Deposit ALL of your mods to the Higher Plane." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(2) },
            onClick() {
                player.i.highmods = player.i.highmods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        22: {
            title() { return "Deposit ALL of your mods to the Death Realm." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(3) },
            onClick() {
                player.i.deathmods = player.i.deathmods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        23: {
            title() { return "Deposit ALL of your mods to the Dimensional Realm." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(4) },
            onClick() {
                player.i.dimensionalmods = player.i.dimensionalmods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        24: {
            title() { return "Deposit ALL of your mods to the Backrooms." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(5) },
            onClick() {
                player.i.backroomsmods = player.i.backroomsmods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        25: {
            title() { return "Deposit ALL of your mods to the Void." },
            canClick() { return player.i.mods.gte(1) && !inChallenge("i", 22) },
            unlocked() { return player.i.currentdisplay.eq(6) },
            onClick() {
                player.i.voidmods = player.i.voidmods.add(player.i.mods)
                player.i.mods = new Decimal(0)
            },
        },
        26: {
            title() { return "REQ: 7,777,777 TOTAL REALM MODS" },
            canClick() { return player.i.totalrealmmods.gte(7777777) },
            unlocked() { return player.i.jacorbianenergyunlocked.eq(0)},
            onClick() {
                player.i.jacorbianenergyunlocked = new Decimal(1)
            },
        },
        27: {
            title() { return "Sacrifice your amazing mods to Jacorb" },
            canClick() { return player.i.totalrealmmods.gte(7777777) && !hasUpgrade("i", 65) },
            unlocked() { return player.i.jacorbianenergyunlocked.eq(1) },
            onClick() {
                player.i.creatormods = new Decimal(0)
                player.i.highmods = new Decimal(0)
                player.i.deathmods = new Decimal(0)
                player.i.dimensionalmods = new Decimal(0)
                player.i.backroomsmods = new Decimal(0)
                player.i.voidmods = new Decimal(0)
                player.i.jacorbianenergy = player.i.jacorbianenergy.add(player.i.jacorbianenergytoget)
            },
        },
        28: {
            title() { return "Big crunch due to the excess of everything" },
            canClick() { return true },
            unlocked() { return player.i.infinitypause.gte(1) },
            onClick() {
                consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                player.i.infinitypause = new Decimal(0)
                player.i.infinitytime = new Decimal(0)
                player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                player.i.infinityresets = player.i.infinityresets.add(1)
                layers.i.infinityreset();
            },
            style: { width: '400px', "min-height": '100px' }
        },
        29: {
            title() { return "Upgrade Autobuyer On" },
            canClick() { return player.i.upgradeautobuyer.eq(0) },
            unlocked() { return hasChallenge("i", 16) },
            onClick() {
                player.i.upgradeautobuyer = new Decimal(1) //Each number is assinged to its corresponding realm
            },
        },
        31: {
            title() { return "Upgrade Autobuyer Off" },
            canClick() { return player.i.upgradeautobuyer.eq(1) },
            unlocked() { return hasChallenge("i", 16) },
            onClick() {
                player.i.upgradeautobuyer = new Decimal(0)
            },
        },
        32: {
            title() { return "Autocruncher On" },
            canClick() { return player.i.autocruncher.eq(0) },
            unlocked() { return hasUpgrade("i", 64) },
            onClick() {
                player.i.autocruncher = new Decimal(1) //Each number is assinged to its corresponding realm
            },
        },
        33: {
            title() { return "Autocruncher Off" },
            canClick() { return player.i.autocruncher.neq(0) },
            unlocked() { return hasUpgrade("i", 64) },
            onClick() {
                player.i.autocruncher = new Decimal(0)
            },
        },
        34: {
            title() { return "Break Your Infinities" },
            canClick() { return true },
            unlocked() { return hasUpgrade("h", 11) },
            onClick() {
                player.i.brokeninfinities = player.i.brokeninfinities.add(player.i.brokeninfinitiestoget)
                player.i.infinities = new Decimal(0)
            },
        },
        35: {
            title() { return "Break Infinity" },
            canClick() { return true },
            unlocked() { return hasUpgrade("i", 74) && player.i.infinitybroken.eq(0) },
            onClick() {
                player.i.infinitybroken = new Decimal(1)
            },
        },
        36: {
            title() { return "Fix Infinity" },
            canClick() { return true },
            unlocked() { return hasUpgrade("i", 74) && player.i.infinitybroken.eq(1) },
            onClick() {
                player.i.infinitybroken = new Decimal(0)
            },
        },
        37: {
            title() { return "+" + format(player.i.infinitypointstoget) + " IP" },
            canClick() { return player.i.infinitypause.gte(1) || player.i.infinitypointstoget.gte(1) },
            unlocked() { return hasUpgrade("i", 74) || player.i.singularityunlocked.eq(1) },
            onClick() {
                consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                player.i.infinitypause = new Decimal(0)
                player.i.infinitytime = new Decimal(0)
                player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                player.i.infinityresets = player.i.infinityresets.add(1)
                layers.i.infinityreset();
            },
            style: { width: '150px', "min-height": '60px' }
        },
        38: {
            title() { return "Turn your replicanti into a replicanti mod" },
            canClick() { return player.i.replicanti.gt(1.79e308) },
            unlocked() { return true },
            onClick() {
                player.i.replicantimods = player.i.replicantimods.add(player.i.replicantimodgain)
                player.i.replicanti = new Decimal(1)
                player.i.buyables[34] = new Decimal(0)
                player.i.buyables[35] = new Decimal(0)
            },
            style: { width: '400px', "min-height": '100px' }
        },
        39: {
            title() { return "Unlock Singularity" },
            canClick() { return player.points.gte("1e35000") && player.i.infinitypoints.gte("1e175") && player.i.brokeninfinities.gte("1e35") && player.i.infinities.gte("100000") && player.i.replicantimods.gte("100") && player.i.infinitypower.gte("1e130") && player.h.willpower.gte("1e9") && player.h.prestigepower.gte("100") },
            unlocked() { return true },
            onClick() {
                player.i.singularityunlocked = new Decimal(1)
            },
            style: { width: '200px', "min-height": '60px' }
        },
        41: {
            title() { return "<h2> Next  " },
            canClick() { return player.i.singularitycutscene.neq(0) },
            unlocked() { return player.i.singularitycutscene.neq(0) },
            onClick() {
                player.i.singularityscene = player.i.singularityscene.add(1)
            },
        },
        40: {
            title() { return "Turn all of your earned power into a singularity" },
            canClick() { return player.i.singularitypointstoget.gte(1) },
            unlocked() { return player.i.singularitycutscene.eq(0) },
            onClick() {
                player.i.singularitypause = new Decimal(5)
            },
            style: { width: '400px', "min-height": '100px' }
        },
        42: {
            title() { return "+" + format(player.i.singularitypointstoget) + " SP" },
            canClick() { return player.i.singularitypointstoget.gte(1) },
            unlocked() { return player.i.singularityunlocked.eq(1) },
            onClick() {
                player.i.singularitypause = new Decimal(5)
            },
            style: { width: '150px', "min-height": '60px' }
        },
        43: {
            title() { return "Upgrade Autobuyer On" },
            canClick() { return player.i.singularityupgradeautobuyer.eq(0) },
            unlocked() { return hasMilestone("i", 14) },
            onClick() {
                player.i.singularityupgradeautobuyer = new Decimal(1) //Each number is assinged to its corresponding realm
            },
        },
        44: {
            title() { return "Upgrade Autobuyer Off" },
            canClick() { return player.i.singularityupgradeautobuyer.eq(1) },
            unlocked() { return hasMilestone("i", 14) },
            onClick() {
                player.i.singularityupgradeautobuyer = new Decimal(0)
            },
        },
        45: {
            title() { return "Multiply Mode" },
            canClick() { return player.i.autocruncher.neq(2) },
            unlocked() { return hasMilestone("i", 17) },
            onClick() {
                player.i.autocruncher = new Decimal(2)
            },
        },
        46: {
            title() { return "Respec on" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                    player.i.singularitytheoremsrespec = new Decimal(1)
            },
            style: { width: '150px', "min-height": '60px' }
        },
        47: {
            title() { return "Respec off" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.i.singularitytheoremsrespec = new Decimal(0)
            },
            style: { width: '150px', "min-height": '60px' }
        },
        48: {
            title() { return "Implement Jacorbian Balancing" },
            display: "Req: 10,000 Jacorbian Energy (Please don't do this)",
            canClick() { return player.i.jacorbianenergy.gte("10000") && !hasUpgrade("i", 65) },
            unlocked() { return player.i.singularityunlocked.eq(1) && player.i.jacorbianunlock.eq(0)  },
            onClick() {
                player.i.jacorbianunlock = new Decimal(1)
        makeParticles(jacorbparticle, 1)
            },
            style: { width: '400px', "min-height": '60px' }
        },
        49: {
            title() { return "BEGIN THE TRIALS OF JACORB, THE HIGH GOD OF A FEW GAMES" },
            display: "Req: 10,000,000 Jacorbian Energy (DO THIS NOW)",
            canClick() { return player.i.jacorbianenergy.gte("1e7") && !hasUpgrade("i", 65) },
            unlocked() { return player.i.singularityunlocked.eq(1) && player.i.jacorbianunlock.eq(1) && player.i.jacorbiantrialunlock.eq(0) },
            onClick() {
                player.i.jacorbiantrialunlock = new Decimal(1)
            },
            style: { width: '400px', "min-height": '60px' }
        },
        51: {
            title() { return "<h2> Next  " },
            canClick() { return player.i.jacorbcutscene.neq(0) },
            unlocked() { return player.i.jacorbcutscene.neq(0) },
            onClick() {
                player.i.jacorbscene = player.i.jacorbscene.add(1)
            },
        },
    },
    upgrades: {
        11:
        {
            title: "Start Playing",
            description: "Start producing leaves.",
            cost: new Decimal(1),
            currencyLocation() { return player },
            currencyDisplayName: "Points",
            currencyInternalName: "points",
        },
        12:
        {
            title: "Keep Playing",
            unlocked() { return hasUpgrade("i", 11) },
            description: "x1.2 Leaf Generation.",
            cost: new Decimal(2),
            currencyLocation() { return player },
            currencyDisplayName: "Points",
            currencyInternalName: "points",
        },
        13:
        {
            title: "Don't Stop Playing",
            unlocked() { return hasUpgrade("i", 12) },
            description: "x1.2 Point Generation.",
            cost: new Decimal(5),
            currencyLocation() { return player },
            currencyDisplayName: "Points",
            currencyInternalName: "points",
        },
        14:
        {
            title: "Never End Your Playing",
            unlocked() { return hasUpgrade("i", 13) },
            description: "Tree softcap starts +15 later.",
            cost: new Decimal(500),
            currencyLocation() { return player },
            currencyDisplayName: "Points",
            currencyInternalName: "points",
        },
        15:
        {
            title: "Double Trees",
            unlocked() { return hasUpgrade("i", 14) },
            description: "x2 Tree Generation.",
            cost: new Decimal(50),
            currencyLocation() { return player.i },
            currencyDisplayName: "Trees",
            currencyInternalName: "trees",
        },
        16:
        {
            title: "Pointy Leaves",
            unlocked() { return hasUpgrade("i", 15) },
            description: "Boosts point generation based on how much leaves you have for trees.",
            cost: new Decimal(75),
            currencyLocation() { return player.i },
            currencyDisplayName: "Trees",
            currencyInternalName: "trees",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            effect() {
                return player.i.leaves.div(player.i.treereq).add(1)
            },
        },
        17:
        {
            title: "Unlock Something",
            unlocked() { return hasUpgrade("i", 16) },
            description: "Self explanatory.",
            cost: new Decimal(100),
            currencyLocation() { return player.i },
            currencyDisplayName: "Trees",
            currencyInternalName: "trees",
        },
        18:
        {
            title: "Points Booster I",
            unlocked() { return player.i.crypto.gt(0)},
            description: "x2 Point Generation.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        19:
        {
            title: "Leaves Booster I",
            unlocked() { return player.i.crypto.gt(0) },
            description: "x2.5 Leaf Generation.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        21:
        {
            title: "Trees Booster I",
            unlocked() { return player.i.crypto.gt(0) },
            description: "x1.5 Tree Generation.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        22:
        {
            title: "Softcap Booster I",
            unlocked() { return player.i.crypto.gt(0) },
            description: "Tree softcap starts 1.5x later.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        23:
        {
            title: "Points Booster II",
            unlocked() { return hasUpgrade("i", 18) },
            description: "Boosts point generation based on crypto.",
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.crypto.pow(0.5).add(1)
            },
        },
        24:
        {
            title: "Leaves Booster II",
            unlocked() { return hasUpgrade("i", 19) },
            description: "Boosts leaf generation based on crypto.",
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.crypto.pow(0.4).add(1)
            },
        },
        25:
        {
            title: "Trees Booster II",
            unlocked() { return hasUpgrade("i", 21) },
            description: "Boosts tree generation based on crypto.",
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.crypto.pow(0.35).add(1)
            },
        },
        26:
        {
            title: "Softcap Booster II",
            unlocked() { return hasUpgrade("i", 22) },
            description: "Softcap starts later based on crypto.",
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.crypto.pow(0.35).add(1)
            },
        },
        27:
        {
            title: "Crypto Dimensions",
            unlocked() { return hasUpgrade("i", 26) },
            description: "Unlocks crypto dimensions.",
            cost: new Decimal(10),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        28:
        {
            title: "Inflated Game",
            unlocked() { return hasUpgrade("i", 27) },
            description: "Tree softcap starts +300 later.",
            cost: new Decimal(100000000),
            currencyLocation() { return player },
            currencyDisplayName: "Points",
            currencyInternalName: "points",
        },
        29:
        {
            title: "Mega Tree Booster",
            unlocked() { return hasUpgrade("i", 27) },
            description: "x3 Tree Generation",
            cost: new Decimal(100000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        31:
        {
            title: "NFT",
            unlocked() { return hasUpgrade("i", 29) },
            description: "Keep upgrades on crypto reset",
            cost: new Decimal(1000000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        32:
        {
            title: "Metaverse",
            unlocked() { return hasUpgrade("i", 31) },
            description: "Autobuys tree buyables and unlocks byte buyables",
            cost: new Decimal(10000000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        33:
        {
            title: "Supremely Inflated",
            unlocked() { return hasUpgrade("i", 29) },
            description: "Tree softcap starts x3 later.",
            cost: new Decimal(500000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Trees",
            currencyInternalName: "trees",
        },
        34:
        {
            title: "Blockchain Technology",
            unlocked() { return hasUpgrade("i", 32) },
            description: "x3 Crypto Dimensions Generation",
            cost: new Decimal(1e10),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        35:
        {
            title: "Extremely Inflated",
            unlocked() { return hasUpgrade("i", 33) },
            description: "Tree softcap starts x10 later.",
            cost: new Decimal(75000000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Trees",
            currencyInternalName: "trees",
        },
        36:
        {
            title: "Unlock Something",
            unlocked() { return hasUpgrade("i", 35) },
            description: "Unlocks something.",
            cost: new Decimal(1e15),
            currencyLocation() { return player.i },
            currencyDisplayName: "Crypto",
            currencyInternalName: "crypto",
        },
        37:
        {
            title: "Make Your Mods NFTS!",
            unlocked() { return player.i.mods.gte(4) },
            description: "Boosts crypto gain based on mods.",
            cost: new Decimal(10),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.mods.pow(0.9).add(1)
            },
        },
        38:
        {
            title: "Ugh, Too Much Repetition.",
            unlocked() { return hasUpgrade("i", 37) },
            description: "Autobuys tree buyables and keep tree upgrades on crypto reset.",
            cost: new Decimal(25),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        39:
        {
            title: "Black Friday",
            unlocked() { return hasUpgrade("i", 38) },
            description: "Lowers the price growth of tree buyables.",
            cost: new Decimal(50),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        41:
        {
            title: "Cryptomator",
            unlocked() { return hasUpgrade("i", 39) },
            description: "Autobuys crypto dimensions and buyables.",
            cost: new Decimal(100),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        42:
        {
            title: "No more microtasks!",
            unlocked() { return hasUpgrade("i", 41) },
            description: "Keeps all upgrades on code reset.",
            cost: new Decimal(250),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        43:
        {
            title: "Oh yay a new feature!",
            unlocked() { return hasUpgrade("i", 42) },
            description: "Unlocks realm mods and gain 6% of crypto per second.",
            cost: new Decimal(1000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        44:
        {
            title: "Crypto Dimensions go BRR",
            unlocked() { return hasUpgrade("i", 43) },
            description: "Boosts crypto dimensions production based on when the mod softcap starts.",
            cost: new Decimal(100000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.modsoftcapstart.pow(0.65).add(1)
            },
        },
        45:
        {
            title: "Moderate the TMT discord server.",
            unlocked() { return hasUpgrade("i", 44) },
            description: "Gain 50% of crypto per second.",
            cost: new Decimal(80),
            currencyLocation() { return player.i },
            currencyDisplayName: "Mods",
            currencyInternalName: "mods",
        },
        46:
        {
            title: "Moderate the TMT forums.",
            unlocked() { return hasUpgrade("i", 45) },
            description: "Boosts crypto dimensions production based on how much code you have for mods.",
            cost: new Decimal(140),
            currencyLocation() { return player.i },
            currencyDisplayName: "Mods",
            currencyInternalName: "mods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.leaves.div(player.i.treereq).add(1)
            },
        },
        47:
        {
            title: "Oh yeah! Buyable Time!",
            unlocked() { return hasUpgrade("i", 46) },
            description: "Unlocks coding buyables.",
            cost: new Decimal(500),
            currencyLocation() { return player.i },
            currencyDisplayName: "Mods",
            currencyInternalName: "mods",
        },
        48:
        {
            title: "Finally, boosting mod gain.",
            unlocked() { return hasUpgrade("i", 47) },
            description: "Boosts mod gain by x2.",
            cost: new Decimal(1200),
            currencyLocation() { return player.i },
            currencyDisplayName: "Mods",
            currencyInternalName: "mods",
        },
        49:
        {
            title: "The more mods the merrier.",
            unlocked() { return hasUpgrade("i", 48) },
            description: "Boosts mod gain based on mods",
            cost: new Decimal(5500),
            currencyLocation() { return player.i },
            currencyDisplayName: "Mods",
            currencyInternalName: "mods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.mods.sqrt().div(5).add(1)
            },
        },
        51:
        {
            title: "Go to the #advanced-help channel on the tmt discord.",
            unlocked() { return hasUpgrade("i", 49) },
            description: "Gives 5% of code experience and 100% of crypto gain per second.",
            cost: new Decimal(1e11),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        52:
        {
            title: "Go to the #mod-creators channel on the tmt discord.",
            unlocked() { return hasUpgrade("i", 51) },
            description: "Boosts mod gain based on total realm mods.",
            cost: new Decimal(1e14),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.totalrealmmods.pow(0.2).add(1)
            },
        },
        53:
        {
            title: "Realm-Wide Delivery",
            unlocked() { return hasUpgrade("i", 52) },
            description: "Gives 10% of mods to each realm per second.",
            cost: new Decimal(1e16),
            currencyLocation() { return player.i },
            currencyDisplayName: "Code Experience",
            currencyInternalName: "codeexperience",
        },
        54:
        {
            title: "Infinity Upgrade I",
            unlocked() { return true },
            description: "Boosts all Pre-Infinity resources gain by x2",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        55:
        {
            title: "Infinity Upgrade II",
            unlocked() { return true },
            description: "Boosts point, leaf, tree and tree softcap extension based on achievement power.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.a.achievementpower.pow(0.5).add(1)
            },
        },
        56:
        {
            title: "Infinity Upgrade III",
            unlocked() { return true },
            description: "Boosts crypto and code experience gain based on unspent infinity points.",
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypoints.pow(0.7).add(1).mul(5)
            },
        },
        57:
        {
            title: "Infinity Upgrade IV",
            unlocked() { return hasUpgrade("i", 54) && hasUpgrade("i", 55) && hasUpgrade("i", 56) },
            description: "Boosts all pre-infinity resources gain based on infinities.",
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinities.pow(0.7).mul(0.1).add(1)
            },
        },
        58:
        {
            title: "Infinity Upgrade V",
            unlocked() { return hasUpgrade("i", 54) && hasUpgrade("i", 55) && hasUpgrade("i", 56) },
            description: "Extends the tree and mod softcap based on infinities.",
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinities.pow(1.25).add(1)
            },
        },
        59:
        {
            title: "Infinity Upgrade VI",
            unlocked() { return hasUpgrade("i", 54) && hasUpgrade("i", 55) && hasUpgrade("i", 56) },
            description: "Boosts tree and mod gain based on infinities.",
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinities.pow(0.95).add(1)
            },
        },
        61:
        {
            title: "Infinity Upgrade VII",
            unlocked() { return hasUpgrade("i", 57) && hasUpgrade("i", 58) && hasUpgrade("i", 59) },
            description: "Boosts infinity point gain based on achievement power.",
            cost: new Decimal(5),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.a.achievementpower.pow(0.4).div(8).add(1)
            },
        },
        62:
        {
            title: "Infinity Upgrade VIII",
            unlocked() { return hasUpgrade("i", 57) && hasUpgrade("i", 58) && hasUpgrade("i", 59) },
            description: "Boosts infinity point gain based on time spent in the infinity.",
            cost: new Decimal(5),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitytime.pow(0.1).div(3).add(1)
            },
        },
        63:
        {
            title: "Infinity Upgrade IX",
            unlocked() { return hasUpgrade("i", 57) && hasUpgrade("i", 58) && hasUpgrade("i", 59) },
            description: "Boosts infinity point gain based on unspent infinity points.",
            cost: new Decimal(5),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypoints.pow(0.2).div(5).add(1)
            },
        },
        64:
        {
            title: "Autocruncher",
            unlocked() { return hasChallenge("i", 15) && hasChallenge("i", 16) && hasChallenge("i", 17) && hasChallenge("i", 18) },
            description: "Big crunches automatically",
            cost: new Decimal(1000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        65:
        {
            title: "Wait Code Buyables Exist?",
            unlocked() { return hasUpgrade("i", 64) },
            description: "Autobuys code buyables and gets rid of a feature you didn't even remember existing.",
            cost: new Decimal(10000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            onPurchase() {
                player.i.jacorbianunlock = new Decimal(0)
                player.i.jacorbiantrialunlock = new Decimal(0)
                player.i.jacorbianenergy = new Decimal(0)
            },
        },
        66:
        {
            title: "UNLOCK SOMETHING SUPER IMPORTANT",
            description: "It's a new layer.",
            unlocked() { return hasUpgrade("i", 65) },
            cost: new Decimal(100000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        67:
        {
            title: "Break Infinity Upgrade I",
            description: "Boosts infinity point gain based on broken infinities.",
            unlocked() { return hasUpgrade("i", 66) },
            cost: new Decimal(1e6),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.brokeninfinities.pow(0.2).div(3).add(1)
            },
        },
        68:
        {
            title: "Break Infinity Upgrade II",
            description: "Boosts broken infinity gain based on broken infinities.",
            unlocked() { return hasUpgrade("i", 67) },
            cost: new Decimal(3e6),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.brokeninfinities.pow(0.17).div(2).add(1)
            },
        },
        69:
        {
            title: "Break Infinity Upgrade III",
            description: "Boosts pre-infinity resource gain based on broken infinities.",
            unlocked() { return hasUpgrade("i", 68) },
            cost: new Decimal(1e7),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.brokeninfinities.pow(0.15).div(4).add(1)
            },
        },
        71:
        {
            title: "Break Infinity Upgrade IV",
            description: "Boosts broken infinity gain based on infinities.",
            unlocked() { return hasUpgrade("i", 69) },
            cost: new Decimal(3e7),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinities.pow(0.2).div(5).add(1)
            },
        },
        72:
        {
            title: "Break Infinity Upgrade V",
            description: "Boosts infinity gain based on infinities.",
            unlocked() { return hasUpgrade("i", 69) },
            cost: new Decimal(1e8),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinities.pow(0.1).div(4).add(1)
            },
        },
        73:
        {
            title: "Break Infinity Upgrade VI",
            description: "Boosts broken infinity gain based on unspent infinity points.",
            unlocked() { return hasUpgrade("i", 69) },
            cost: new Decimal(3e8),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypoints.pow(0.12).div(10).add(1)
            },
        },
        74:
        {
            title: "Actually Break Infinity",
            description: "Gains the ability to break infinity.",
            unlocked() { return hasUpgrade("i", 73) },
            cost: new Decimal(1e5),
            currencyLocation() { return player.i },
            currencyDisplayName: "Broken Infinities",
            currencyInternalName: "brokeninfinities",
        },
        75:
        {
            title: "Autocruncher V2",
            description: "Unlocks the improved autocruncher.",
            unlocked() { return hasUpgrade("i", 74) },
            cost: new Decimal(1e11),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        76:
        {
            title: "More Infinities to Break",
            description: "Passively gain infinities based on time spent in infinity.",
            unlocked() { return hasUpgrade("i", 75) },
            cost: new Decimal(5e14),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id)) + " per second"},
            effect() {
                return player.i.infinitytime.sub(1).pow(-1).abs().pow(0.1)
            },
        },
        77:
        {
            title: "Make that challenge useful!",
            description: "Boosts passive IP gain by x3.",
            unlocked() { return hasUpgrade("i", 76) },
            cost: new Decimal(2e15),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        78:
        {
            title: "Replicanti BEFORE Infinity Dimensions?",
            description: "Unlocks replicanti.",
            unlocked() { return hasUpgrade("i", 77) },
            cost: new Decimal(1e16),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        79:
        {
            title: "Another IP multiplier?",
            description: "Unlocks a third IP multiplier.",
            unlocked() { return hasUpgrade("i", 77) },
            cost: new Decimal(2e6),
            currencyLocation() { return player.i },
            currencyDisplayName: "Broken Infinities",
            currencyInternalName: "brokeninfinities",
        },
        81:
        {
            title: "Replicanti Booster I",
            description: "Boosts replicanti multiplier based on achievement power.",
            unlocked() { return hasUpgrade("i", 79) },
            cost: new Decimal(1),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.a.achievementpower.mul(1.1).pow(1.01).add(1)
            },
        },
        82:
        {
            title: "Replicanti Booster II",
            description: "Boosts infinity points based on replicanti.",
            unlocked() { return hasUpgrade("i", 81) },
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.replicanti.plus(10).log10().add(1)
            },
        },
        83:
        {
            title: "Replicanti Booster III",
            description: "Divides replicanti interval based on replicanti mods.",
            unlocked() { return hasUpgrade("i", 82) },
            cost: new Decimal(3),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return "/" + format(upgradeEffect(this.layer, this.id)) },
            effect() {
                return player.i.replicantimods.pow(0.7).mul(0.5).add(1.5)
            },
        },
        84:
        {
            title: "Replicanti Booster IV",
            description: "Boosts broken infinities based on replicanti.",
            unlocked() { return hasUpgrade("i", 83) },
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.replicanti.plus(10).log10().pow(0.5).add(1)
            },
        },
        85:
        {
            title: "Replicanti Booster V",
            description: "Boosts replicanti multiplier based on replicanti.",
            unlocked() { return hasUpgrade("i", 84) },
            cost: new Decimal(6),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.replicanti.plus(10).log10().pow(0.3).add(1)
            },
        },
        86:
        {
            title: "Replicanti Booster VI",
            description: "Boosts mod gain based on replicanti.",
            unlocked() { return hasUpgrade("i", 85) },
            cost: new Decimal(10),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.replicanti.pow(0.04).add(1)
            },
        },
        87:
        {
            title: "Copying Antimatter Dimensions Again?",
            description: "Unlocks infinity dimensions.",
            unlocked() { return hasUpgrade("i", 85) },
            cost: new Decimal(1e30),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        88:
        {
            title: "Replicanti Booster VII",
            description: "Boosts infinity dimensions production based on replicanti.",
            unlocked() { return hasUpgrade("i", 87) },
            cost: new Decimal(1e50),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.replicanti.plus(10).log10().pow(0.4).add(1)
            },
        },
        89:
        {
            title: "Replicanti Booster VIII",
            description: "Boosts infinity points gain based on points.",
            unlocked() { return hasUpgrade("i", 88) },
            cost: new Decimal(1e60),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.points.plus(10).log10().pow(1.25).add(1)
            },
        },
        91:
        {
            title: "Replicanti Booster IX",
            description: "Boosts infinity dimensions gain based on infinity power.",
            unlocked() { return hasUpgrade("i", 89) },
            cost: new Decimal(1e80),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypower.pow(0.1).add(1)
            },
        },
        92:
        {
            title: "Replicanti Booster X",
            description: "Produces crypto dimension 4 based on infinity power.",
            unlocked() { return hasUpgrade("i", 91) },
            cost: new Decimal(1e110),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "/s" },
            effect() {
                return player.i.infinitypower.pow(20).add(1)
            },
        },
        93:
        {
            title: "Replicanti Booster XI",
            description: "Boosts infinity point gain based on infinity points on reset.",
            unlocked() { return hasUpgrade("i", 92) },
            cost: new Decimal(50),
            currencyLocation() { return player.i },
            currencyDisplayName: "Replicanti Mods",
            currencyInternalName: "replicantimods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypoints.pow(0.08).add(2)
            },
        },
        94:
        {
            title: "Another Layer?",
            description: "Unlocks the next layer.",
            unlocked() { return hasUpgrade("i", 93) },
            cost: new Decimal(1e150),
            currencyLocation() { return player.i },
            currencyDisplayName: "Infinity Points",
            currencyInternalName: "infinitypoints",
        },
        95:
        {
            title: "Singularity Unlock I",
            description: "Unlocks a new tab.",
            unlocked() { return hasMilestone("i", 17) },
            cost: new Decimal(10000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        96:
        {
            title: "Singularity Unlock II",
            description: "Unlocks a new tab.",
            unlocked() { return hasUpgrade("i", 95) },
            cost: new Decimal(1e12),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        97:
        {
            title: "Study I",
            description: "Multiplier to IP based on time spent in singularity.",
            unlocked() { return true },
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effect() {
                return player.i.singularitytime.pow(2).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        98:
        {
            title: "Study II",
            description: "Multiplier to singularity leaves based on singularity trees.",
            unlocked() { return true },
            cost: new Decimal(3),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effect() {
                return player.i.singularitytrees.pow(0.3).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        99:
        {
            title: "Study III",
            description: "Multiplier to IP based on points.",
            unlocked() { return true },
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effect() {
                return player.points.plus(1).log10().pow(1.3).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        101:
        {
            title: "Study IV",
            description: "Multiplier to singularity dimensions based on singularities.",
            unlocked() { return true },
            cost: new Decimal(2),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effect() {
                return player.i.singularities.pow(0.3).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
        },
        102:
        {
            title: "Study V",
            description: "Extends singularity tree softcap based on leaves you have for trees.",
            unlocked() { return true },
            cost: new Decimal(3),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularityleaves.div(player.i.singularitytreereq).add(1)
            },
        },
        103:
        {
            title: "Study VI",
            description: "Multiplies broken infinities based on milliseconds since 1970.",
            unlocked() { return true },
            cost: new Decimal(4),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return Date.now()
            },
        },
        104:
        {
            title: "Singularity Unlock III",
            description: "Unlocks a new tab.",
            unlocked() { return hasUpgrade("i", 96) },
            cost: new Decimal(1e25),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        105:
        {
            title: "Start Producing Singularity Blessings",
            unlocked() { return true },
            cost: new Decimal(6),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",

        },
        106:
        {
            title: "Blessing Booster",
            description: "Boosts blessings (not singularity blessings) based on singularity blessings.",
            unlocked() { return hasUpgrade("i", 105) },
            cost: new Decimal(7),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularityblessings.plus(1).log10().add(1)
            },
        },
        107:
        {
            title: "Singularity Unlock IV",
            description: "Unlocks more singularity studies.",
            unlocked() { return hasUpgrade("i", 104) },
            cost: new Decimal(1e50),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        108:
        {
            title: "Study VII",
            description: "Boosts effects of pre-infinity buyables by ^1000.",
            unlocked() { return hasUpgrade("i", 107) },
            cost: new Decimal(8),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        109:
        {
            title: "Study VIII",
            description: "Boosts singularity point gain based on singularity theorems.",
            unlocked() { return hasUpgrade("i", 108) },
            cost: new Decimal(14),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularitytheorems.pow(1.2).add(1)
            },
        },
        111:
        {
            title: "Study IX",
            description: "Gives infinity dimension 4 based on singularity power.",
            unlocked() { return hasUpgrade("i", 109) },
            cost: new Decimal(6),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "/s" },
            effect() {
                return player.i.singularitypower.pow(6).add(1)
            },
        },
        112:
        {
            title: "Study X",
            description: "Extends replicanti cap to 1e1000000 and its multiplier is boosted by ^15.",
            unlocked() { return hasUpgrade("i", 111) },
            cost: new Decimal(10),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        113:
        {
            title: "Study XI",
            description: "Boosts pre-singularity multiplier based on singularities.",
            unlocked() { return hasUpgrade("i", 112) },
            cost: new Decimal(14),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularities.pow(5).add(1)
            },
        },
        114:
        {
            title: "Study XII",
            description: "Multiplies singularity dimensions based on singularity dimension 4s.",
            unlocked() { return hasUpgrade("i", 113) },
            cost: new Decimal(50),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularitydim4.plus(1).log10().pow(3).add(1)
            },
        },
        115:
        {
            title: "Jacorbian Booster I",
            description: "Multiplies jacorbian energy based on jacorbian mods.",
            unlocked() { return player.i.jacorbianunlock.eq(0) },
            cost: new Decimal(200),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.jacorbmods.pow(0.3).add(1)
            },
        },
        116:
        {
            title: "Jacorbian Booster II",
            description: "Multiplies jacorbian energy based on singularity points.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 115) },
            cost: new Decimal(6000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularitypoints.plus(1).log10().pow(0.4).add(1)
            },
        },
        117:
        {
            title: "Jacorbian Booster III",
            description: "Improves the effects of singularity power and singularity trees.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 116) },
            cost: new Decimal(100000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
        },
        118:
        {
            title: "Jacorbian Booster IV",
            description: "Multiplies jacorbian mods based on jacorbian mods.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 117) },
            cost: new Decimal(1000000),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.jacorbmods.pow(0.2).add(1)
            },
        },
        119:
        {
            title: "Jacorbian Booster V",
            description: "Multiplies infinity points based on jacorbian mods.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 118) },
            cost: new Decimal(5e7),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.jacorbmods.mul(10).pow(12).add(1)
            },
        },
        121:
        {
            title: "Jacorbian Booster VI",
            description: "Multiplies jacorbian energy based on infinity points.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 119) },
            cost: new Decimal(5e8),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.infinitypoints.plus(1).log10().add(1)
            },
        },
        122:
        {
            title: "Jacorbian Booster VII",
            description: "Unlocks more singularity studies.",
            unlocked() { return player.i.jacorbianunlock.eq(0) && hasUpgrade("i", 121) },
            cost: new Decimal(1e10),
            currencyLocation() { return player.i },
            currencyDisplayName: "Jacorbian Mods",
            currencyInternalName: "jacorbmods",
        },
        123:
        {
            title: "Study XIII",
            description: "Gives 1% of infinity points per second.",
            unlocked() { return hasUpgrade("i", 122) },
            cost: new Decimal(100),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        124:
        {
            title: "Study XIV",
            description: "Multiplier to singularity dimensions based on singularity blessings.",
            unlocked() { return hasUpgrade("i", 123) },
            cost: new Decimal(200),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularityblessings.pow(2).add(1)
            },
        },
        125:
        {
            title: "Study XV",
            description: "Improves the singularity point effect.",
            unlocked() { return hasUpgrade("i", 124) },
            cost: new Decimal(150),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        126:
        {
            title: "Singularity Unlock V",
            description: "Unlocks a new tab.",
            unlocked() { return hasUpgrade("i", 107) },
            cost: new Decimal("1e450"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        127:
        {
            title: "Void Singularity Upgrade I",
            description: "Boosts singularity leaf and tree gain based on void singularity points.",
            unlocked() { return true },
            cost: new Decimal("25000"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.voidsingularitypoints.pow(0.8).add(1)
            },
        },
        128:
        {
            title: "Void Singularity Upgrade II",
            description: "Extends singularity tree softcap based on void singularities.",
            unlocked() { return true },
            cost: new Decimal("7500000"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.voidsingularities.pow(4).add(1)
            },
        },
        129:
        {
            title: "Void Singularity Upgrade III",
            description: "Boosts void singularities based on achievement power.",
            unlocked() { return true },
            cost: new Decimal("500000000"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.a.achievementpower.pow(0.3).add(1)
            },
        },
        131:
        {
            title: "Study XVI",
            description: "Unlocks the fifth singularity dimension.",
            unlocked() { return hasUpgrade("i", 129) },
            cost: new Decimal(300),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        132:
        {
            title: "Void Singularity Upgrade IV",
            description: "Boosts singularity dimensions based on singularity power.",
            unlocked() { return hasUpgrade("i", 129) },
            cost: new Decimal("1e10"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularitypower.pow(0.06).add(1)
            },
        },
        133:
        {
            title: "Void Singularity Upgrade V",
            description: "Boosts singularity leaves and trees and softcap based on singularity trees.",
            unlocked() { return hasUpgrade("i", 132) },
            cost: new Decimal("1e13"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" },
            effect() {
                return player.i.singularitytrees.pow(0.6).add(1)
            },
        },
        134:
        {
            title: "Study XVII",
            description: "Unlocks the sixth singularity dimension.",
            unlocked() { return hasUpgrade("i", 131) },
            cost: new Decimal(1000),
            currencyLocation() { return player.i },
            currencyDisplayName: "ST",
            currencyInternalName: "singularitytheorems",
        },
        135:
        {
            title: "Singularity Unlock VI",
            description: "Unlocks a new tab.",
            unlocked() { return hasUpgrade("i", 126) },
            cost: new Decimal("1e1675"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
        136:
        {
            title: "Void Singularity Upgrade VI",
            description: "Autobuys singularity and singularity void buyables without spending.",
            unlocked() { return hasUpgrade("i", 133) },
            cost: new Decimal("1e150"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
        },
        137:
        {
            title: "Void Singularity Upgrade VII",
            description: "Gives 1% of SP per second.",
            unlocked() { return hasUpgrade("i", 136) },
            cost: new Decimal("1e6000"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
        },
        138:
        {
            title: "Void Singularity Upgrade VIII",
            description: "Passively gain void singularities based on singularity points.",
            unlocked() { return hasUpgrade("i", 137) },
            cost: new Decimal("1e50000"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Void Singularity Points",
            currencyInternalName: "voidsingularitypoints",
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id)) + " per second." },
            effect() {
                return player.i.singularitypoints.pow(0.0075).add(1)
            },
        },
        139:
        {
            title: "Singularity Unlock VII",
            description: "Unlocks the next layer.",
            unlocked() { return hasUpgrade("i", 135) },
            cost: new Decimal("e1e30"),
            currencyLocation() { return player.i },
            currencyDisplayName: "Singularity Points",
            currencyInternalName: "singularitypoints",
        },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(player.i.preinfinitybuyableincreaser) },
            unlocked() { return hasUpgrade("i", 13) && !inChallenge("i", 15) },
            canAfford() { return player.points.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Leaf Multiplier"
            },
            display() {
                return "which are boosting your leaf gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.1
                if (hasUpgrade("i", 39)) growth = 1.05
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 38)) {
                    if (!hasUpgrade("i", 32)) player.points = player.points.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        12: {
            cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(5) },
            effect(x) { return new Decimal(0).add(getBuyableAmount(this.layer, this.id)).div(2).add(1).pow(player.i.preinfinitybuyableincreaser) },
            unlocked() { return hasUpgrade("i", 13) && !inChallenge("i", 15) },
            canAfford() { return player.i.trees.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point Multiplier"
            },
            display() {
                return "which are boosting your point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Trees"
            },
            buy() {
                let base = new Decimal(5)
                let growth = 1.15
                if (hasUpgrade("i", 39)) growth = 1.08
                let max = Decimal.affordGeometricSeries(player.i.trees, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 38)) {
                    if (!hasUpgrade("i", 32)) player.i.trees = player.i.trees.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        13: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect() {
                return player[this.layer].buyables[this.id].mul(2).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 13) && !inChallenge("i", 15) },
            canAfford() { return player.points.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Softcap Extender"
            },
            display() {
                return "which makes tree softcap start " + format(tmp[this.layer].buyables[this.id].effect) + " later.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.2
                if (hasUpgrade("i", 39)) growth = 1.1
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 38)) {
                    if (!hasUpgrade("i", 32)) player.points = player.points.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        14: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(25)},
            effect() {
                return player[this.layer].buyables[this.id].pow(0.2).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 14) && !inChallenge("i", 15) },
            canAfford() { return player.i.trees.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Requirement Shortener"
            },
            display() {
                return "which are shortening tree requirement by /" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Trees"
            },
            buy() {
                let base = new Decimal(25)
                let growth = 1.2
                if (hasUpgrade("i", 39)) growth = 1.12
                let max = Decimal.affordGeometricSeries(player.i.trees, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 38)) {
                    if (!hasUpgrade("i", 32)) player.i.trees = player.i.trees.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        15: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            unlocked() { return hasUpgrade("i", 27) },
            canAfford() { return player.i.crypto.gte(this.cost()) },
            title() {
                return format(player.i.cryptodim1) + "<br/>Crypto Dimension 1"
            },
            display() {
                return "which gives " + format(player.i.bytespersecond) + " bytes per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crypto\n\
                    (" + format(player.i.cryptodim1mult) + "x)"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.crypto, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.crypto = player.i.crypto.sub(cost)
                player.i.cryptodim1mult = player.i.cryptodim1mult.add(max.div(100))
                player.i.cryptodim1 = player.i.cryptodim1.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        16: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            unlocked() { return hasUpgrade("i", 27) },
            canAfford() { return player.i.crypto.gte(this.cost()) },
            title() {
                return format(player.i.cryptodim2) + "<br/>Crypto Dimension 2"
            },
            display() {
                return "which gives " + format(player.i.cryptodim1persecond) + " crypto dimension 1 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crypto\n\
                    (" + format(player.i.cryptodim2mult) + "x)"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.crypto, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.crypto = player.i.crypto.sub(cost)
                player.i.cryptodim2mult = player.i.cryptodim2mult.add(max.div(100))
                player.i.cryptodim2 = player.i.cryptodim2.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        17: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e5) },

            unlocked() { return hasUpgrade("i", 27) },
            canAfford() { return player.i.crypto.gte(this.cost()) },
            title() {
                return format(player.i.cryptodim3) + "<br/>Crypto Dimension 3"
            },
            display() {
                return "which gives " + format(player.i.cryptodim2persecond) + " crypto dimension 2 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crypto\n\
                    (" + format(player.i.cryptodim3mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e5)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.crypto, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.crypto = player.i.crypto.sub(cost)
                player.i.cryptodim3mult = player.i.cryptodim3mult.add(max.div(100))
                player.i.cryptodim3 = player.i.cryptodim3.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        18: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e10) },
            unlocked() { return hasUpgrade("i", 27) },
            canAfford() { return player.i.crypto.gte(this.cost()) },
            title() {
                return format(player.i.cryptodim4) + "<br/>Crypto Dimension 4"
            },
            display() {
                return "which gives " + format(player.i.cryptodim3persecond) + " crypto dimension 3 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crypto\n\
                    (" + format(player.i.cryptodim4mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e10)
                let growth = 2
                let max = Decimal.affordGeometricSeries(player.i.crypto, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.crypto = player.i.crypto.sub(cost)
                player.i.cryptodim4mult = player.i.cryptodim4mult.add(max.div(100))
                player.i.cryptodim4 = player.i.cryptodim4.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        19: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(player.i.preinfinitybuyableincreaser) },
            unlocked() { return hasUpgrade("i", 32) && !inChallenge("i", 15) },
            canAfford() { return player.i.bytes.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point, Leaf and Tree Multiplier"
            },
            display() {
                return "which are boosting your point, leaf and tree gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Bytes"
            },
            buy() {
                let base = new Decimal(1000)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.i.bytes, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.bytes = player.i.bytes.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        21: {
            cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(2500) },
            effect(x) { return new Decimal(0).add(getBuyableAmount(this.layer, this.id)).div(2.5).add(1).pow(player.i.preinfinitybuyableincreaser) },
            unlocked() { return hasUpgrade("i", 32) && !inChallenge("i", 15) },
            canAfford() { return player.i.bytes.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Crypto Multiplier"
            },
            display() {
                return "which are boosting your crypto gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Bytes"
            },
            buy() {
                let base = new Decimal(2500)
                let growth = 1.15
                let max = Decimal.affordGeometricSeries(player.i.bytes, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.bytes = player.i.bytes.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        22: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(5000) },
            effect() {
                return player[this.layer].buyables[this.id].pow(0.6).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 32) && !inChallenge("i", 15) },
            canAfford() { return player.i.bytes.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Crypto Dimension Multiplier"
            },
            display() {
                return "which boosts all crypto dimension production by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Bytes"
            },
            buy() {
                let base = new Decimal(5000)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.bytes, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 41)) player.i.bytes = player.i.bytes.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        23: {
            cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(100000000) },
            effect() {
                return player[this.layer].buyables[this.id].pow(0.8).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 47) && !inChallenge("i", 15) },
            canAfford() { return player.i.codeexperience.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Lines of Code Multiplier"
            },
            display() {
                return "which are boosting your lines of code gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Code Experience"
            },
            buy() {
                let base = new Decimal(100000000)
                let growth = 1.4
                let max = Decimal.affordGeometricSeries(player.i.codeexperience, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade('i', 65) || !hasMilestone("i", 12)) player.i.codeexperience = player.i.codeexperience.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        24: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(500) },
            effect() {
                return player[this.layer].buyables[this.id].pow(0.7).div(2).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 47) && !inChallenge("i", 15) },
            canAfford() { return player.i.mods.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Code Experience Multiplier"
            },
            display() {
                return "which are boosting your code experience gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Mods"
            },
            buy() {
                let base = new Decimal(500)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.mods, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade('i', 65) || !hasMilestone("i", 12)) player.i.mods = player.i.mods.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        25: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000000000) },
            effect() {
                return player[this.layer].buyables[this.id].pow(0.45).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 47) && !inChallenge("i", 15) },
            canAfford() { return player.i.codeexperience.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Mod Softcap Extender"
            },
            display() {
                return "which makes mod softcap start x" + format(tmp[this.layer].buyables[this.id].effect) + " later.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Code Experience"
            },
            buy() {
                let base = new Decimal(1000000000)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.codeexperience, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade('i', 65) || !hasMilestone("i", 12)) player.i.codeexperience = player.i.codeexperience.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        26: {
            cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(1500) },
            effect() {
                return player[this.layer].buyables[this.id].pow(0.2).add(1).pow(player.i.preinfinitybuyableincreaser)
            },
            unlocked() { return hasUpgrade("i", 47) && !inChallenge("i", 15) },
            canAfford() { return player.i.mods.gte(this.cost()) && !inChallenge("i", 15) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Mod Requirement Shortener"
            },
            display() {
                return "which are shortening mod requirement by /" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Mods"
            },
            buy() {
                let base = new Decimal(1500)
                let growth = 1.4
                let max = Decimal.affordGeometricSeries(player.i.mods, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade('i', 65) || !hasMilestone("i", 12)) player.i.mods = player.i.mods.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        27: {
            cost(x) { return new Decimal(10).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect() {
                return Decimal.pow(2, player[this.layer].buyables[this.id])
            },
            unlocked() { return hasUpgrade("i", 64) },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> IP Multiplier"
            },
            display() {
                return "which are boosting IP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 10
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        28: {
            cost(x) { return new Decimal(5).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect() {
                return Decimal.pow(2, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.brokeninfinities.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> IP Multiplier (Again)"
            },
            display() {
                return "which are boosting IP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Broken Infinities"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 5
                let max = Decimal.affordGeometricSeries(player.i.brokeninfinities, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.brokeninfinities = player.i.brokeninfinities.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        29: {
            cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect() {
                return getBuyableAmount(this.layer, this.id).mul(0.1).add(1)
            },
            unlocked() { return true },
            canAfford() { return player.i.brokeninfinities.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Infinity Multiplier"
            },
            display() {
                return "which are boosting infinity gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Broken Infinities"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 4
                let max = Decimal.affordGeometricSeries(player.i.brokeninfinities, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.brokeninfinities = player.i.brokeninfinities.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        31: {
            cost(x) { return new Decimal(3).pow(x || getBuyableAmount(this.layer, this.id)).mul(5000) },
            effect() {
                return getBuyableAmount(this.layer, this.id).add(1)
            },
            unlocked() { return hasUpgrade("i", 63) },
            canAfford() { return player.i.brokeninfinities.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Broken Infinity Multiplier"
            },
            display() {
                return "which are boosting broken infinity gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Broken Infinities"
            },
            buy() {
                let base = new Decimal(5000)
                let growth = 3
                let max = Decimal.affordGeometricSeries(player.i.brokeninfinities, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.brokeninfinities = player.i.brokeninfinities.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        32: {
            cost(x) { return new Decimal(10).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e16) },
            effect() {
                return getBuyableAmount(this.layer, this.id).mul(0.2).add(1)
            },
            unlocked() { return hasUpgrade("i", 63) },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Replicanti Multiplier"
            },
            display() {
                return "x" + format(player.i.replicantimultiplier) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP"
            },
            buy() {
                let base = new Decimal(1e16)
                let growth = 10
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '200px', height: '120px' }
        },
        33: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e18) },
            unlocked() { return hasUpgrade("i", 63) },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            effect() {
                return getBuyableAmount(this.layer, this.id).mul(0.05).add(1)
            },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Replicanti Interval"
            },
            display() {
                return format(player.i.replicantiinterval) + " Seconds.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP"
            },
            buy() {
                let base = new Decimal(1e18)
                let growth = 100
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
                player.i.replicantiinterval = player.i.replicantiinterval.div(1.05)
            },
            style: { width: '200px', height: '120px' }
        },
        34: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect() {
                return getBuyableAmount(this.layer, this.id).mul(0.2).add(1)
            },
            unlocked() { return hasUpgrade("i", 63) },
            canAfford() { return player.i.replicanti.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Replicanti Multiplier"
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Replicanti"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 100
                let max = Decimal.affordGeometricSeries(player.i.replicanti, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("h", 15)) player.i.replicanti = player.i.replicanti.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '200px', height: '60px' }
        },
        35: {
            cost(x) { return new Decimal(100000).pow(x || getBuyableAmount(this.layer, this.id)).mul(100000) },
            unlocked() { return hasUpgrade("i", 63) },
            canAfford() { return player.i.replicanti.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Replicanti Interval"
            },
            effect() {
                return getBuyableAmount(this.layer, this.id).mul(0.05).add(1)
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Replicanti"
            },
            buy() {
                let base = new Decimal(100000)
                let growth = 100000
                let max = Decimal.affordGeometricSeries(player.i.replicanti, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("h", 15)) player.i.replicanti = player.i.replicanti.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
                player.i.replicantiinterval = player.i.replicantiinterval.div(1.05)
            },
            style: { width: '200px', height: '60px' }
        },
        36: {
            cost(x) { return new Decimal(1e308).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e308) },
            effect() {
                return Decimal.pow(2, player[this.layer].buyables[this.id])
            },
            unlocked() { return hasUpgrade("i", 79) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> IP Multiplier (Again^2)"
            },
            display() {
                return "which are boosting IP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(1e308)
                let growth = 1e308
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.points = player.points.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        37: {
            cost(x) { return new Decimal(1e5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e30) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(player.i.infinitydim1) + "<br/>Infinity Dimension 1"
            },
            display() {
                return "which gives " + format(player.i.infinitypowerpersecond) + " infinity power per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP\n\
                    (" + format(player.i.infinitydim1mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e30)
                let growth = 1e5
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                player.i.infinitydim1mult = player.i.infinitydim1mult.mul(max.mul(10))
                player.i.infinitydim1 = player.i.infinitydim1.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        38: {
            cost(x) { return new Decimal(1e10).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e35) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(player.i.infinitydim2) + "<br/>Infinity Dimension 2"
            },
            display() {
                return "which gives " + format(player.i.infinitydim1persecond) + " infinity dimension 1 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP\n\
                    (" + format(player.i.infinitydim2mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e35)
                let growth = 1e10
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                player.i.infinitydim2mult = player.i.infinitydim2mult.mul(max.mul(10))
                player.i.infinitydim2 = player.i.infinitydim2.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        39: {
            cost(x) { return new Decimal(1e15).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e40) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(player.i.infinitydim3) + "<br/>Infinity Dimension 3"
            },
            display() {
                return "which gives " + format(player.i.infinitydim2persecond) + " infinity dimension 2 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP\n\
                    (" + format(player.i.infinitydim3mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e40)
                let growth = 1e15
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                player.i.infinitydim3mult = player.i.infinitydim3mult.mul(max.mul(10))
                player.i.infinitydim3 = player.i.infinitydim3.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        41: {
            cost(x) { return new Decimal(1e20).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e45) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return format(player.i.infinitydim4) + "<br/>Infinity Dimension 4"
            },
            display() {
                return "which gives " + format(player.i.infinitydim3persecond) + " infinity dimension 3 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP\n\
                    (" + format(player.i.infinitydim4mult) + "x)"
            },
            buy() {
                let base = new Decimal(1e45)
                let growth = 1e20
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                player.i.infinitydim4mult = player.i.infinitydim4mult.mul(max.mul(10))
                player.i.infinitydim4 = player.i.infinitydim4.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        42: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(10000) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypower.gte(this.cost())},
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Broken Infinity Multiplier"
            },
            display() {
                return "which are boosting your broken infinity gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Power"
            },
            buy() {
                let base = new Decimal(10000)
                let growth = 1.8
                let max = Decimal.affordGeometricSeries(player.i.infinitypower, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypower = player.i.infinitypower.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        43: {
            cost(x) { return new Decimal(10).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e6) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(2) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypower.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Pre-Infinity Resource Multiplier"
            },
            display() {
                return "which are boosting your pre-infinity resource gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Power"
            },
            buy() {
                let base = new Decimal(1e6)
                let growth = 10
                let max = Decimal.affordGeometricSeries(player.i.infinitypower, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypower = player.i.infinitypower.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        44: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e8) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypower.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Infinity Dimension Multiplier"
            },
            display() {
                return "which are boosting your infinity dimensions by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Power"
            },
            buy() {
                let base = new Decimal(1e8)
                let growth = 100
                let max = Decimal.affordGeometricSeries(player.i.infinitypower, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypower = player.i.infinitypower.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        45: {
            cost(x) { return new Decimal(1000).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e10) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(1.2) },
            unlocked() { return true },
            canAfford() { return player.i.infinitypower.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> IP Multiplier (again^3)"
            },
            display() {
                return "which are boosting IP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Power"
            },
            buy() {
                let base = new Decimal(1e10)
                let growth = 1000
                let max = Decimal.affordGeometricSeries(player.i.infinitypower, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasMilestone("i", 12)) player.i.infinitypower = player.i.infinitypower.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        46: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim1) + "<br/>Singularity Dimension 1"
            },
            display() {
                return "which gives " + format(player.i.singularitypowerpersecond) + " singularity power per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim1mult) + "x)"
            },
            buy() {
                let base = new Decimal(2)
                let growth = 2
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim1mult = player.i.singularitydim1mult.mul(max.mul(2))
                player.i.singularitydim1 = player.i.singularitydim1.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        47: {
            cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(4) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim2) + "<br/>Singularity Dimension 2"
            },
            display() {
                return "which gives " + format(player.i.singularitydim1persecond) + " singularity dimension 1 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim2mult) + "x)"
            },
            buy() {
                let base = new Decimal(4)
                let growth = 4
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim2mult = player.i.singularitydim2mult.mul(max.mul(2))
                player.i.singularitydim2 = player.i.singularitydim2.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        48: {
            cost(x) { return new Decimal(8).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim3) + "<br/>Singularity Dimension 3"
            },
            display() {
                return "which gives " + format(player.i.singularitydim2persecond) + " singularity dimension 2 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim3mult) + "x)"
            },
            buy() {
                let base = new Decimal(8)
                let growth = 8
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim3mult = player.i.singularitydim3mult.mul(max.mul(2))
                player.i.singularitydim3 = player.i.singularitydim3.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        49: {
            cost(x) { return new Decimal(16).pow(x || getBuyableAmount(this.layer, this.id)).mul(16) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim4) + "<br/>Singularity Dimension 4"
            },
            display() {
                return "which gives " + format(player.i.singularitydim3persecond) + " singularity dimension 3 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim4mult) + "x)"
            },
            buy() {
                let base = new Decimal(16)
                let growth = 16
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim4mult = player.i.singularitydim4mult.mul(max.mul(2))
                player.i.singularitydim4 = player.i.singularitydim4.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        51: {
            cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(100000) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Singularity Leaf Booster"
            },
            display() {
                return "which are boosting your singularity leaf gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal(100000)
                let growth = 4
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        52: {
            cost(x) { return new Decimal(1e4).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e8) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Singularity Tree Softcap Extender"
            },
            display() {
                return "which are extending singularity tree softcap start by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal(1e8)
                let growth = 1e4
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        53: {
            cost(x) { return new Decimal(10).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e10) },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP"
            },
            buy() {
                let base = new Decimal(1e10)
                let growth = 10
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitytheorems = player.i.singularitytheorems.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '140px', height: '90px' }
        },
        54: {
            cost(x) { return new Decimal(1e250).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e500") },
            unlocked() { return true },
            canAfford() { return player.i.infinitypoints.gte(this.cost()) },
            title() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " IP"
            },
            buy() {
                let base = new Decimal("1e500")
                let growth = 1e250
                let max = Decimal.affordGeometricSeries(player.i.infinitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.infinitypoints = player.i.infinitypoints.sub(cost)
                player.i.singularitytheorems = player.i.singularitytheorems.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '140px', height: '90px' }
        },
        55: {
            cost(x) { return new Decimal("1e50000").pow(x || getBuyableAmount(this.layer, this.id)).mul("1e100000") },
            unlocked() { return true },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal("1e100000")
                let growth = "1e50000"
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.points = player.points.sub(cost)
                player.i.singularitytheorems = player.i.singularitytheorems.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '140px', height: '90px' }
        },
        56: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id) },
            unlocked() { return true },
            canAfford() { return player.i.singularityblessings.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Replicanti Mod Blessing Generator"
            },
            display() {
                return "which are producing " + format(tmp[this.layer].buyables[this.id].effect) + " blessings per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Blessings."
            },
            buy() {
                let base = new Decimal(10)
                let growth = 2
                let max = Decimal.affordGeometricSeries(player.i.singularityblessings, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularityblessings = player.i.singularityblessings.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '340px', height: '90px' }
        },
        57: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id) },
            unlocked() { return true },
            canAfford() { return player.i.replicantimodblessings.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Infinity Dimension Blessing Generator"
            },
            display() {
                return "which are producing " + format(tmp[this.layer].buyables[this.id].effect) + " blessings per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Replicanti Mod Blessings."
            },
            buy() {
                let base = new Decimal(100)
                let growth = 2
                let max = Decimal.affordGeometricSeries(player.i.replicantimodblessings, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.replicantimodblessings = player.i.replicantimodblessings.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '340px', height: '90px' }
        },
        58: {
            cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id) },
            unlocked() { return true },
            canAfford() { return player.i.infinitydimensionblessings.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Infinity Point Blessing Generator"
            },
            display() {
                return "which are producing " + format(tmp[this.layer].buyables[this.id].effect) + " blessings per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Infinity Dimension Blessings."
            },
            buy() {
                let base = new Decimal(1000)
                let growth = 4
                let max = Decimal.affordGeometricSeries(player.i.infinitydimensionblessings, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.infinitydimensionblessings = player.i.infinitydimensionblessings.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '340px', height: '90px' }
        },
        //JACORB STUFF
        59: {
            cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(10000) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(1.1) },
            unlocked() { return player.i.jacorbianunlock.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost())},
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Jacorbian Booster"
            },
            display() {
                return "which are boosting your jacorbian energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(10000)
                let growth = 1.4
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        61: {
            cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(500000) },
            effect(x) { return new Decimal(1).add(getBuyableAmount(this.layer, this.id)).pow(1.5) },
            unlocked() { return player.i.jacorbianunlock.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Jacorbian Balancer"
            },
            display() {
                return "which are boosting your jacorbian energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(500000)
                let growth = 2
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        62: {
            cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(2) },
            unlocked() { return player.i.jacorbianunlock.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Jacorbian Code Writer"
            },
            display() {
                return "which is producing " + format(tmp[this.layer].buyables[this.id].effect) + " jacorbian mods per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(1e10)
                let growth = 4
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        63: {
            cost(x) { return new Decimal(3).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(3).add(1) },
            unlocked() { return player.i.jacorbianunlock.eq(1) },
            canAfford() { return player.i.jacorbmods.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Jacorbian Mod Tester"
            },
            display() {
                return "which is boosting jacorbian mod gain by x" + format(tmp[this.layer].buyables[this.id].effect) + "\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Mods"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 3
                let max = Decimal.affordGeometricSeries(player.i.jacorbmods, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.jacorbmods = player.i.jacorbmods.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        64: {
            cost(x) { return new Decimal(10).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect() {
                return Decimal.pow(2, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.voidsingularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Void Singularity Point Multiplier"
            },
            display() {
                return "which are boosting void singularity point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Void Singularity Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 10
                let max = Decimal.affordGeometricSeries(player.i.voidsingularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.voidsingularitypoints = player.i.voidsingularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        65: {
            cost(x) { return new Decimal(1000).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
            effect() {
                return Decimal.pow(2, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.voidsingularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Void Singularity Multiplier"
            },
            display() {
                return "which are boosting void singularity gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Void Singularity Points"
            },
            buy() {
                let base = new Decimal(1000)
                let growth = 1000
                let max = Decimal.affordGeometricSeries(player.i.voidsingularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.voidsingularitypoints = player.i.voidsingularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        66: {
            cost(x) { return new Decimal(32).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e600") },
            unlocked() { return hasUpgrade("i", 131) },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim5) + "<br/>Singularity Dimension 5"
            },
            display() {
                return "which gives " + format(player.i.singularitydim4persecond) + " singularity dimension 4 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim5mult) + "x)"
            },
            buy() {
                let base = new Decimal("1e600")
                let growth = 32
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim5mult = player.i.singularitydim5mult.mul(max.mul(2))
                player.i.singularitydim5 = player.i.singularitydim5.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        67: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e8) },
            effect() {
                return Decimal.pow(18, player[this.layer].buyables[this.id])
            },
            unlocked() { return hasUpgrade("i", 133) },
            canAfford() { return player.i.voidsingularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Void Absoprbing IP Multiplier"
            },
            display() {
                return "which are boosting IP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + " on absorb.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Void Singularity Points"
            },
            buy() {
                let base = new Decimal(1e8)
                let growth = 100
                let max = Decimal.affordGeometricSeries(player.i.voidsingularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.voidsingularitypoints = player.i.voidsingularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        68: {
            cost(x) { return new Decimal(64).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e1200") },
            unlocked() { return hasUpgrade("i", 134) },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(player.i.singularitydim6) + "<br/>Singularity Dimension 6"
            },
            display() {
                return "which gives " + format(player.i.singularitydim5persecond) + " singularity dimension 5 per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " SP\n\
                    (" + format(player.i.singularitydim6mult) + "x)"
            },
            buy() {
                let base = new Decimal("1e1200")
                let growth = 64
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                player.i.singularitydim6mult = player.i.singularitydim6mult.mul(max.mul(5))
                player.i.singularitydim6 = player.i.singularitydim6.add(max)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '280px', height: '160px' }
        },
        69: {
            cost(x) { return new Decimal(1e4).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e1500") },
            effect() {
                return Decimal.pow(4, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> SP Multiplier"
            },
            display() {
                return "which are boosting SP gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal("1e1500")
                let growth = 1e4
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        71: {
            cost(x) { return new Decimal(1e10).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e1550") },
            effect() {
                return Decimal.pow(5, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Singularity Leaf Multiplier"
            },
            display() {
                return "which are boosting singularity leaf gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal("1e1550")
                let growth = 1e10
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        72: {
            cost(x) { return new Decimal(1e15).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e1600") },
            effect() {
                return Decimal.pow(6, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Singularity Dimension Multiplier"
            },
            display() {
                return "which are boosting singularity dimensions by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal("1e1600")
                let growth = 1e15
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
        73: {
            cost(x) { return new Decimal(1e20).pow(x || getBuyableAmount(this.layer, this.id)).mul("1e1650") },
            effect() {
                return Decimal.pow(7, player[this.layer].buyables[this.id])
            },
            unlocked() { return true },
            canAfford() { return player.i.singularitypoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Blessing Multiplier"
            },
            display() {
                return "which are boosting blessings by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Singularity Points"
            },
            buy() {
                let base = new Decimal("1e1650")
                let growth = 1e20
                let max = Decimal.affordGeometricSeries(player.i.singularitypoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 136)) player.i.singularitypoints = player.i.singularitypoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
        },
    },
    milestones: {
        11: {
            requirementDescription: "1 Singularity",
            done() { return player.i.singularities.gte(1) },
            effectDescription: "Gives a x1000 Pre-Infinity multiplier.",
        },
        12: {
            requirementDescription: "2 Singularities",
            done() { return player.i.singularities.gte(2) },
            effectDescription: "Autobuys all buyables and infinity dimensions without spending.",
        },
        13: {
            requirementDescription: "3 Singularities",
            done() { return player.i.singularities.gte(3) },
            effectDescription: "Keeps challenge completions on reset and gives replicanti mods per second at 1.79e308 replicanti.",
        },
        14: {
            requirementDescription: "4 Singularities",
            done() { return player.i.singularities.gte(4) },
            effectDescription: "Autobuys all the infinity and pre-infinity upgrades.",
        },
        15: {
            requirementDescription: "10 Singularities",
            done() { return player.i.singularities.gte(10) },
            effectDescription: "Infinity is always broken.",
        },
        16: {
            requirementDescription: "20 Singularities",
            done() { return player.i.singularities.gte(20) },
            effectDescription: "Start singularity with 1e308 replicanti.",
        },
        17: {
            requirementDescription: "50 Singularities",
            done() { return player.i.singularities.gte(50) },
            effectDescription: "Gain 10 infinities per second and gain 1% of broken infinities on break and unlocks another autocruncher option.",
        },
        18: {
            requirementDescription: "1000 Singularities",
            done() { return player.i.singularities.gte(1000) },
            effectDescription: "Gain 100% of broken infinities on break.",
        },
    },
    challenges: {
        11: {
            name: "The Easiest Challenge",
            challengeDescription: "Disables Jacorbian Energy.",
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Always produce 1% of crypto and code experience per second.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
        },
        12: {
            name: "Easy Challenge",
            challengeDescription: "Softcaps always start at 0.",
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Multiplies infinity point gain based on infinities.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.i.infinities.div(20).pow(0.6).add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        13: {
            name: "Slightly Easy Challenge",
            challengeDescription: "Divides crypto dimensions production by 100.",
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Boost Pre-Infinity resource gain based on time spent in infinity.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.i.infinitytime.div(1000).pow(0.1).add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        14: {
            name: "Medium Challenge",
            challengeDescription: "Divides all pre-infinity resource production by 5.",
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Passively gain IP per minute based on IP on reset.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.i.infinitypointstoget.div(10).pow(0.9)
            },
            rewardDisplay() { return format(this.rewardEffect()) + " IP per minute" }, // Add formatting to the effect
        },
        15: {
            name: "Advanced Challenge",
            challengeDescription: "Disables ALL buyables except for crypto dimensions.",
            unlocked() { return hasChallenge("i", 11) && hasChallenge("i", 12) && hasChallenge("i", 13) && hasChallenge("i", 14) },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Boosts Pre-Infinity resource gain based on achievement power.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.a.achievementpower.div(15).pow(0.55).add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        16: {
            name: "Hard Challenge",
            challengeDescription: "Introduces Anti-Points, which will exponentially grow very fast and if it exceeds points, you reset. Also start with more points.",
            unlocked() { return hasChallenge("i", 11) && hasChallenge("i", 12) && hasChallenge("i", 13) && hasChallenge("i", 14) },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Automatically buys all Pre-Infinity upgrades.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
                player.i.apoints = new Decimal(1)
                player.points = new Decimal(10)
            },
            onExit() {
                player.i.apoints = new Decimal(0.001)
            },
        },
        17: {
            name: "Insane Challenge",
            challengeDescription: "Trees divide point gain.",
            unlocked() { return hasChallenge("i", 11) && hasChallenge("i", 12) && hasChallenge("i", 13) && hasChallenge("i", 14) },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Boost Pre-Infinity resource gain based on points.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.points.plus(10).pow(0.01).log10().add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        18: {
            name: "Demonic Challenge",
            challengeDescription: "Pre-Infinity multiplier divides gain instead of multiplying. (Insane challenge boost don't count)",
            unlocked() { return hasChallenge("i", 11) && hasChallenge("i", 12) && hasChallenge("i", 13) && hasChallenge("i", 14) },
            goal() { return new Decimal("1.79e308") },
            canComplete: function () { return player.points.gte(1.79e308) || player.i.infinitypause.eq(1) },
            rewardDescription: "Always give 4% of mods to realm mods per second.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
        },
        19: {
            name: "Trial I: Death by Softcap",
            challengeDescription: "Pre-Infinity softcaps are ^100 stronger and start at 0, and the pre-infinity multiplier is raised by ^0.0001",
            unlocked() { return true },
            goal() { return new Decimal("1e42000") },
            canComplete: function () { return player.points.gte("1e42000") && player.i.jacorbiantrialunlock.eq(1) },
            rewardDescription: "Always gain 250% of jacorbian energy per second.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
        },
        21: {
            name: "Trial II: Satanic Challenge",
            challengeDescription: "Pre-Infinity multiplier is raised by ^0.0001 and multiplier divides instead of multiplying, study VII is disabled.",
            unlocked() { return hasChallenge("i", 19) },
            goal() { return new Decimal("1e10000") },
            canComplete: function () { return player.points.gte("1e10000") && player.i.jacorbiantrialunlock.eq(1) },
            rewardDescription: "Boosts jacorbian energy based on jacorbian energy.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.i.jacorbianenergy.plus(1).log10().add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        22: {
            name: "Trial III: End of Gains",
            challengeDescription: "Mod softcap starts at -1e10000, tree, mod gain is always 1, study VII and realm mod gain is disabled. Code experience effect, bytes effect and pre-infinity multiplier is raised by ^0.001.",
            unlocked() { return hasChallenge("i", 21) },
            goal() { return new Decimal("1e800") },
            canComplete: function () { return player.points.gte("1e800") && player.i.jacorbiantrialunlock.eq(1) },
            rewardDescription: "Boosts jacorbian energy based on singularities.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
            rewardEffect() {
                return player.i.singularities.pow(0.6).add(1)
            },
            rewardDisplay() { return format(this.rewardEffect()) + "x" }, // Add formatting to the effect
        },
        23: {
            name: "Trial IV: Jacorbian Hell",
            challengeDescription: "Infinity upgrade III and singularity study VII are disabled, code experience, bytes, realm mods, mods effects, pre-singularity and pre-infinity multiplier are raised to the ^0.001. However, Jacorbian energy effect is raised by ^20.",
            unlocked() { return hasChallenge("i", 22) },
            goal() { return new Decimal("1e775") },
            canComplete: function () { return player.points.gte("1e775") && player.i.jacorbiantrialunlock.eq(1) },
            rewardDescription: "Unlocks jacorb's mods.",
            onEnter() {
                layers.i.infinityreset();
                if (player.i.infinitypause.eq(1)) {
                    consolePrint("Infinity Reset #" + format(player.i.infinityresets) + " +" + format(player.i.infinitypointstoget) + " IP, +" + format(player.i.infinitypointgeneration) + " IP per second, " + formatTime(player.i.infinitytime))
                    player.i.infinitypause = new Decimal(0)
                    player.i.infinitytime = new Decimal(0)
                    player.i.infinities = player.i.infinities.add(player.i.infinitiestoget)
                    player.i.infinitypoints = player.i.infinitypoints.add(player.i.infinitypointstoget)
                    player.i.infinityresets = player.i.infinityresets.add(1)
                }
            },
            onExit() {
            },
        },
        24: {
            name: "ABSORB THE VOID",
            challengeDescription: "",
            goalDescription: "1.79e308 points (or else you won't gain any void singularities)",
            rewardDescription() { return "+" + format(player.i.voidsingularitiestoget) + " void singularities on exit" },
            unlocked() { return true },
            canComplete: function () { return false },
            onEnter() {
                player.i.singularitypause = new Decimal(5)
            },
            onExit() {
                player.i.singularitypause = new Decimal(5)
                player.i.voidsingularities = player.i.voidsingularities.add(player.i.voidsingularitiestoget)
            },
            style: { width: '400px', height: '200px' }
        },
    },
    bars: {
        treebar: {
            unlocked() { return true },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.leaves.div(player.i.treereq)
            },
            fillStyle: {
                "background-color": "green",
            },
            display() {
                return "<h5>" + format(player.i.leaves) + "/" + format(player.i.treereq) + "<h5> Leaves to beat a tree</h5>";
            },
        },
        modbar: {
            unlocked() { return true },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.linesofcode.div(player.i.modreq)
            },
            fillStyle: {
                "background-color": "purple",
            },
            display() {
                return "<h5>" + format(player.i.linesofcode) + "/" + format(player.i.modreq) + "<h5> Lines of code to make a mod</h5>";
            },
        },
        singularitytreebar: {
            unlocked() { return true },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.singularityleaves.div(player.i.singularitytreereq)
            },
            fillStyle: {
                "background-color": "red",
            },
            display() {
                return "<h5>" + format(player.i.singularityleaves) + "/" + format(player.i.singularitytreereq) + "<h5> Singularity leaves to beat a singularity tree</h5>";
            },
        },
    },
    infoboxes: {
        creatorrealmlore: {
            title: "Creator Realm Lore",
            body() {
                return "<h3>The humans live yet they can not see<br>\n\
                The other realms hiding underneath<br>\n\
                Yet they can control them with their mind,<br>\n\
                On top of the multiverse, lies the mankind." },
            unlocked() { return player.i.currentdisplay.eq(1) },
        },
        higherplanelore: {
            title: "Higher Plane Lore",
            body() {
                return "<h3>A very strange world filled with powerful gods<br>\n\
                They look underneath for chosen ones<br>\n\
                They try to spread good through the multiverse<br>\n\
                But their vision of paradise, might make it worse." },
            unlocked() { return player.i.currentdisplay.eq(2) },
        },
        deathrealmlore: {
            title: "Death Realm Lore",
            body() {
                return "<h3>When a being reaches their fate,<br>\n\
                The angels and demons must make their choice.<br>\n\
                The good people can go to heaven, which is great!<br>\n\
                The sinners go to hell, which they will hate." },
            unlocked() { return player.i.currentdisplay.eq(3) },
        },
        dimensionalrealmlore: {
            title: "Dimensional Realm Lore",
            body() {
                return "<h3>Tons of worlds of many sizes,<br>\n\
                Realistic, fictional, even ones that don't make sense.<br>\n\
                All the stories, made by humans in mankind,<br>\n\
                At the dimensional realm, is where they all reside." },
            unlocked() { return player.i.currentdisplay.eq(4) },
        },
        backroomslore: {
            title: "Backrooms Lore",
            body() {
                return "<h3>A very liminal place, a horror-filled maze.<br>\n\
                Yet somewhat calm, bringing you in a nostalgic haze.<br>\n\
                Tons of levels, it's like a stack.<br>\n\
                Once you noclip in, you are never getting back." },
            unlocked() { return player.i.currentdisplay.eq(5) },
        },
        voidlore: {
            title: "Void Lore",
            body() {
                return "<h3>It's like a never ending shadow.<br>\n\
                It is very deep, but also very shallow.<br>\n\
                There are only two colors, which are grey and black.<br>\n\
                It's a boring place, and all signs of life, they lack."  },
            unlocked() { return player.i.currentdisplay.eq(6) },
        },
    },
    microtabs: {
        stuff: {
            "Trees": {
                buttonStyle() { return { 'color': 'green' } },
                unlocked() { return !player.i.infinitypause.gt(0) || player.points.gt(1.79e308) || player.i.singularityunlocked.eq(1) },
                content:
                    [
                        ["row", [["bar", "treebar"]]],
                        ["raw-html", function () { return "<h2>You are making " + format(player.i.leavespersecond) + "<h2> leaves per second. " }],
                        ["raw-html", function () { return "<h2>You beat " + formatWhole(player.i.trees) + "<h2> trees, which produce " + format(player.gain) + "<h2> points per second. " }],
                        ["raw-html", function () { return "<h2>You will gain " + format(player.i.treegen, 1) + "<h2> trees." }],
                        ["raw-html", function () { return player.i.trees.gte(player.i.treesoftcapstart) ? "After " + formatWhole(player.i.treesoftcapstart) + " trees, leaf gain is divided by " + format(player.i.treesoftcap) + " (Based on trees)" : "" }, { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                        ["blank", "50px"],
                        ["raw-html", function () { return "<h1>Upgrades</h1>" }],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15]]],
                        ["row", [["upgrade", 16], ["upgrade", 17], ["upgrade", 28], ["upgrade", 33], ["upgrade", 35]]],
                        ["blank", "50px"],
                        ["raw-html", function () { return hasUpgrade("i", 13) ? "<h1>Buyables</h1>" : "" }],
                        ["raw-html", function () { return hasUpgrade("i", 13) ? "<h3>(Always buying max just deal with it it's easier like that.) " : "" }],
                        ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13], ["buyable", 14]]],
                        ["blank", "50px"],
                        ["raw-html", function () { return hasUpgrade("i", 13) && inChallenge("i", 15) ? "<h1>WELL TOO BAD THERE ARE NO BUYABLES!</h1>" : "" }],
                    ]

            },
            "Computer": {
                unlocked() { return hasUpgrade("i", 17) || player.i.crypto.gt(0) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': 'blue' } },
                content:
                    [
                        ["microtabs", "computer", { 'border-width': '0px' }],
                    ]

            },
            "Coding": {
                unlocked() { return hasUpgrade("i", 36) || player.i.codeexperience.gt(0) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["microtabs", "coding", { 'border-width': '0px' }],
                    ]

            },
            "Infinity": {
                unlocked() { return player.i.infinities.gt(0) || player.i.infinitypause.gt(0) || player.i.brokeninfinities.gt(0) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["microtabs", "infinity", { 'border-width': '0px' }],
                    ]

            },
            "Singularity": {
                unlocked() { return hasUpgrade("i", 94) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["microtabs", "singularity", { 'border-width': '0px' }],
                    ]

            },
            "Omega": {
                unlocked() { return hasUpgrade("i", 139) /*|| player.i.omegaunlocked.eq(0)*/ },
                buttonStyle() { return { 'color': 'orange' } },
                content:
                    [
                        ["microtabs", "omega", { 'border-width': '0px' }],
                    ]

            },
        },
        computer:
        {
            "Main": {
                unlocked() { return hasUpgrade("i", 17) || player.i.crypto.gt(0) },
                buttonStyle() { return { 'color': 'blue' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.crypto) + "<h2> crypto." }],
                        ["raw-html", function () { return "<h2>You will gain " + format(player.i.cryptotoget) + "<h2> on reset. (Based on points)" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 11]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Upgrades</h1>" }],
                        ["row", [["upgrade", 18], ["upgrade", 19], ["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25], ["upgrade", 26]]],
                        ["row", [["upgrade", 27], ["upgrade", 29], ["upgrade", 31], ["upgrade", 32], ["upgrade", 34], ["upgrade", 36]]],
                    ]

            },
            "Crypto Dimensions": {
                unlocked() { return hasUpgrade("i", 27)},
                buttonStyle() { return { 'color': 'blue' } },
                content:
                    [
                        ["raw-html", function () { return hasUpgrade("i", 27) ? "<h1>Crypto Dimensions</h1>" : "" }],
                        ["raw-html", function () { return hasUpgrade("i", 27) ? "<h2>You have " + format(player.i.bytes) + "<h2> bytes, which give a " + format(player.i.byteseffect) + "<h2>x boost to point and leaf gain." : "" }],
                        ["row", [["buyable", 15], ["buyable", 16], ["buyable", 17], ["buyable", 18]]],
                        ["blank", "50px"],
                        ["raw-html", function () { return hasUpgrade("i", 32) ? "<h1>Buyables</h1>" : "" }],
                        ["row", [["buyable", 19], ["buyable", 21], ["buyable", 22]]],
                        ["blank", "50px"],
                        ["raw-html", function () { return hasUpgrade("i", 32) && inChallenge("i", 15) ? "<h1>WELL TOO BAD THERE ARE NO BUYABLES!</h1>" : "" }],
                    ]

            },
        },
        coding:
        {
            "Main": {
                unlocked() { return hasUpgrade("i", 36) || player.i.codeexperience.gt(0) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.codeexperience) + "<h2> code experience. " }],
                        ["raw-html", function () { return "<h2>Your code experience gives a x" + format(player.i.codeexperienceeffect) + "<h2> boost to point and leaf gain. " }],
                        ["raw-html", function () { return "<h2>You will gain  " + format(player.i.codeexperiencetoget) + "<h2> on reset. (Based on crypto) " }],
                        ["blank", "25px"],
                        ["row", [["clickable", 12]]],
                        ["blank", "25px"],
                        ["row", [["bar", "modbar"]]],
                        ["raw-html", function () { return "<h2>You are writing  " + format(player.i.linesofcodepersecond) + "<h2> lines of code per second. (Based on code experience) " }],
                        ["raw-html", function () { return "<h2>You made  " + formatWhole(player.i.mods) + "<h2> mods, which give a x " + format(player.i.modeffect) + "<h2> boost to crypto dimensions. " }],
                        ["raw-html", function () { return "<h2>You will gain  " + format(player.i.modgen, 1) + "<h2> mods." }],
                        ["raw-html", function () { return player.i.mods.gte(player.i.modsoftcapstart) ? "After " + formatWhole(player.i.modsoftcapstart) + " mods, lines of code gain is divided by " + format(player.i.modsoftcap) + " (Based on mods)" : "" }, { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                        ["blank", "50px"],
                        ["raw-html", function () { return "<h1>Upgrades</h1>" }],
                        ["row", [["upgrade", 37], ["upgrade", 38], ["upgrade", 39], ["upgrade", 41], ["upgrade", 42], ["upgrade", 43], ["upgrade", 44], ["upgrade", 45]]],
                        ["row", [["upgrade", 46], ["upgrade", 47], ["upgrade", 48], ["upgrade", 49], ["upgrade", 51], ["upgrade", 52], ["upgrade", 53]]],
                    ]

            },
            "Realm Mods": {
                unlocked() { return hasUpgrade("i", 43) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [ 
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.mods, 0) + "<h2> mods. " }],
                        ["blank", "25px"],
                        //cr
                        ["raw-html", function () { return player.i.currentdisplay.eq(1) ? "<h2>You made " + format(player.i.creatormods, 0) + "<h2> creation mods. " : "" }, { "color": "red", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(1) ? "Currently making mods powered by the CREATOR REALM." : "" }, { "color": "red", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(1) ? "<h2>Which boost tree and leaf gain by x " + format(player.i.creatormodseffect, 2) : "" }, { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                        //hpoe
                        ["raw-html", function () { return player.i.currentdisplay.eq(2) ? "<h2>You made " + format(player.i.highmods, 0) + "<h2> divine mods. " : "" }, { "color": "orange", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(2) ? "Currently making mods powered by the HIGHER PLANE." : "" }, { "color": "orange", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(2) ? "<h2>Which boost lines of code gain by x" + format(player.i.highmodseffect, 2) : "" }, { "color": "orange", "font-size": "16px", "font-family": "monospace" }],
                        //der
                        ["raw-html", function () { return player.i.currentdisplay.eq(3) ? "<h2>You made " + format(player.i.deathmods, 0) + "<h2> fatal mods. " : "" }, { "color": "yellow", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(3) ? "Currently making mods powered by the DEATH REALM." : "" }, { "color": "yellow", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(3) ? "<h2>Which makes mod softcap start x" + format(player.i.deathmodseffect, 2) + " later" : "" }, { "color": "yellow", "font-size": "16px", "font-family": "monospace" }],
                        //dir
                        ["raw-html", function () { return player.i.currentdisplay.eq(4) ? "<h2>You made " + format(player.i.dimensionalmods, 0) + "<h2> dimensional mods. " : "" }, { "color": "green", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(4) ? "Currently making mods powered by the DIMENSIONAL REALM." : "" }, { "color": "green", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(4) ? "<h2>Which boost crypto dimensions gain by x" + format(player.i.dimensionalmodseffect, 2) : "" }, { "color": "green", "font-size": "16px", "font-family": "monospace" }],
                        //br
                        ["raw-html", function () { return player.i.currentdisplay.eq(5) ? "<h2>You made " + format(player.i.backroomsmods, 0) + "<h2> liminal mods. " : "" }, { "color": "blue", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(5) ? "Currently making mods powered by the BACKROOMS." : "" }, { "color": "blue", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(5) ? "<h2>Which boost crypto production by x" + format(player.i.backroomsmodseffect, 2) : "" }, { "color": "blue", "font-size": "16px", "font-family": "monospace" }],
                        //tv
                        ["raw-html", function () { return player.i.currentdisplay.eq(6) ? "<h2>You made " + format(player.i.voidmods, 0) + "<h2> shadow mods. " : "" }, { "color": "purple", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(6) ? "Currently making mods powered by the VOID." : "" }, { "color": "purple", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentdisplay.eq(6) ? "<h2>Which boost code experience gain by x" + format(player.i.voidmodseffect, 2) : "" }, { "color": "purple", "font-size": "16px", "font-family": "monospace" }],
                        ["row", [["clickable", 19], ["clickable", 21], ["clickable", 22], ["clickable", 23], ["clickable", 24], ["clickable", 25]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 13], ["clickable", 14], ["clickable", 15], ["clickable", 16], ["clickable", 17], ["clickable", 18]]],
                        ["raw-html", function () { return "<h3>Select the realm you want to deal with. " }],
                        ["blank", "25px"],
                        ["row", [["infobox", "creatorrealmlore"], ["infobox", "higherplanelore"], ["infobox", "deathrealmlore"], ["infobox", "dimensionalrealmlore"], ["infobox", "backroomslore"], ["infobox", "voidlore"]]],
                    ]

            },
            "Buyables": {
                unlocked() { return hasUpgrade("i", 47) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.mods, 0) + "<h2> mods. " }],
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.codeexperience) + "<h2> code experience. " }],
                        ["blank", "50px"],
                        ["raw-html", function () { return "<h1>Buyables</h1>" }],
                        ["row", [["buyable", 23], ["buyable", 24], ["buyable", 25], ["buyable", 26]]],
                        ["raw-html", function () { return inChallenge("i", 15) ? "<h1>WELL TOO BAD THERE ARE NO BUYABLES!</h1>" : "" }],
                    ]

            },
            "Jacorbian Energy": {
                unlocked() { return hasUpgrade("i", 51) && !inChallenge("i", 11) && !hasUpgrade("i", 65) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.totalrealmmods, 0) + "<h2> total realm mods. " }, { "color": "purple", "font-size": "16px", "font-family": "monospace" }],
                        ["row", [["clickable", 26], ["clickable", 27]]],
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.jacorbianenergy) + "<h2> jacorbian energy. " }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>Your jacorbian energy give a x " + format(player.i.jacorbianenergyeffect) + "<h3> boost to mod gain and mod softcap extension. " }, { "color": "purple", "font-size": "16px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You will gain  " + format(player.i.jacorbianenergytoget) + "<h3> on reset. (Based on total realm mods) " }, { "color": "purple", "font-size": "16px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 48], ["clickable", 49]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.jacorbianunlock.eq(1) ? "<h3>Note: Buying the upgrade that disables this feature or doing a singularity reset stops jacorbian balancing. " :"" }, { "color": "purple", "font-size": "16px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 59], ["buyable", 61]]],
                    ]

            },
            "The Trials of Jacorb": {
                unlocked() { return player.i.jacorbiantrialunlock.eq(1) || inChallenge("i", 19) || inChallenge("i", 21) || inChallenge("i", 22) || inChallenge("i", 23) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.jacorbianenergy) + "<h2> jacorbian energy. " }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["challenge", 19], ["challenge", 21], ["challenge", 22], ["challenge", 23]]],
                    ]

            },
            "Jacorb's Mods": {
                unlocked() { return hasChallenge("i", 23) },
                buttonStyle() { return { 'color': 'purple' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.jacorbianenergy) + "<h2> jacorbian energy. " }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.jacorbscene.gte(1) && player.i.jacorbscene.lt(8) ? "<h2> Hey you. It's me, Jacorb.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(2) && player.i.jacorbscene.lt(8) ? "<h2> I know who you are. You will bring the realms together.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(3) && player.i.jacorbscene.lt(8) ? "<h2> I can finally be free, but the trials have only broke 25% of my lock.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(4) && player.i.jacorbscene.lt(8) ? "<h2> I just want to thank you. I am powerless in this exile.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(5) && player.i.jacorbscene.lt(8) ? "<h2> However, I have another proposition for you.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(6) && player.i.jacorbscene.lt(8) ? "<h2> In the near future, I want you to acquire VOID SINGULARITIES.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.jacorbscene.gte(7) && player.i.jacorbscene.lt(8) ? "<h2> But for now, take this feature as a gift. Good luck.  " : "" }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 51]]],
                        ["raw-html", function () { return "You have " + format(player.i.jacorbmods) + " jacorbian mods, which give a x" + format(player.i.jacorbmodseffect) + " boost to blessings." }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["raw-html", function () { return "You are gaining " + format(player.i.jacorbmodspersecond) + " jacorbian mods per second." }, { "color": "purple", "font-size": "20px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 62], ["buyable", 63]]],
                        ["row", [["upgrade", 115], ["upgrade", 116], ["upgrade", 117], ["upgrade", 118], ["upgrade", 119], ["upgrade", 121], ["upgrade", 122]]],
                    ]

            },
        },
        infinity:
        {
            "Main": {
                unlocked() { return true },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["row", [["clickable", 28]]],
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.infinitypoints) + "<h2> infinity points. " }],
                        ["raw-html", function () { return "<h2>You will gain  " + format(player.i.infinitypointstoget) + "<h2> on reset. " }],
                        ["raw-html", function () { return "<h3>You have  " + format(player.i.infinities) + "<h3> infinities. " }],
                        ["raw-html", function () { return "<h3>You will gain  " + format(player.i.infinitiestoget) + "<h3> on reset. " }],
                        ["raw-html", function () { return hasChallenge("i", 14) ? "<h3>+" + format(player.i.ippassive) + "<h3> passive IP per second. " : ""}],
                        ["row", [["upgrade", 54], ["upgrade", 55], ["upgrade", 56], ["upgrade", 57], ["upgrade", 58], ["upgrade", 59]]],
                        ["row", [["upgrade", 61], ["upgrade", 62], ["upgrade", 63], ["upgrade", 64], ["upgrade", 65], ["upgrade", 66]]],
                        ["raw-html", function () { return "<h3>You have a x" + format(player.i.preinfinityresourcemult) + "<h3> pre-infinity resource multiplier. " }],
                        ["blank", "25px"],
                        ["row", [["buyable", 27], ["buyable", 36]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 31], ["clickable", 29]]],
                        ["row", [["clickable", 33], ["clickable", 32]]],
                        ["blank", "25px"],
                    ]

            },
            "Challenges": {
                unlocked() { return player.i.infinities.gte(1) || player.i.brokeninfinities.gt(0) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["raw-html", function () { return player.i.singularityunlocked.eq(1) ? "<h2>If a challenge is unbeatable after Singularity, try refreshing." : "" }],
                        ["row", [["challenge", 11], ["challenge", 12], ["challenge", 13], ["challenge", 14]]],
                        ["row", [["challenge", 15], ["challenge", 16], ["challenge", 17], ["challenge", 18]]],
                    ]

            },
            "Break Infinity": {
                unlocked() { return hasUpgrade("h", 11) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.infinitypoints) + "<h2> infinity points. " }],
                        ["raw-html", function () { return "<h3>You have " + format(player.i.infinities) + "<h3> infinities. " }],
                        ["blank", "25px"],
                        ["row", [["clickable", 35], ["clickable", 36]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.brokeninfinities) + "<h2> broken infinities. " }],
                        ["raw-html", function () { return "<h2>You will gain " + format(player.i.brokeninfinitiestoget) + "<h2> on break. " }],
                        ["row", [["clickable", 34]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Upgrades</h1>" }],
                        ["row", [["upgrade", 67], ["upgrade", 68], ["upgrade", 69], ["upgrade", 71], ["upgrade", 72], ["upgrade", 73]]],
                        ["row", [["upgrade", 74], ["upgrade", 75], ["upgrade", 76], ["upgrade", 77], ["upgrade", 78], ["upgrade", 79]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Buyables</h1>" }],
                        ["row", [["buyable", 28], ["buyable", 29], ["buyable", 31]]],
                    ]

            },
            "Replicanti": {
                unlocked() { return hasUpgrade("i", 78) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["raw-html", function () { return "<h3>You have " + format(player.i.infinitypoints) + "<h3> infinity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.replicanti) + "/" + format(player.i.replicantimax) + "<h2> replicanti. " }],
                        ["raw-html", function () { return "<h2>Which translates to a x" + format(player.i.replicantieffect) + "<h2> multiplier to Pre-Infinity resources. " }],
                        ["blank", "25px"],
                        ["row", [["buyable", 32], ["buyable", 33]]],
                        ["row", [["buyable", 34], ["buyable", 35]]],
                        ["row", [["clickable", 38]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h3>(Replicanti are set to 1 on infinity reset) " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have  " + format(player.i.replicantimods) + "<h2> replicanti mods. " }],
                        ["raw-html", function () { return "<h3>Which translates to a x" + format(player.i.replicantimodseffect) + "<h3> multiplier to Pre-Infinity resources. " }],
                        ["raw-html", function () { return "<h3>Which also translates to a x" + format(player.i.replicantimodseffect2) + "<h2> multiplier to IP. " }],
                        ["raw-html", function () { return "<h2>You will gain  " + format(player.i.replicantimodgain) + "<h2> replicanti mods. " }],
                        ["blank", "25px"],
                        ["row", [["upgrade", 81], ["upgrade", 82], ["upgrade", 83], ["upgrade", 84], ["upgrade", 85], ["upgrade", 86], ["upgrade", 87]]],
                        ["row", [["upgrade", 88], ["upgrade", 89], ["upgrade", 91], ["upgrade", 92], ["upgrade", 93], ["upgrade", 94]]],
                    ]

            },
            "Infinity Dimensions": {
                unlocked() { return hasUpgrade("i", 87) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["raw-html", function () { return "<h3>You have " + format(player.i.infinitypoints) + "<h3> infinity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h3>You have " + format(player.i.infinitypower) + "<h3> infinity power. " }],
                        ["raw-html", function () { return "<h3>Which gives a x" + format(player.i.infinitypowereffect) + "<h3> boost to pre-infinity resources. " }],
                        ["raw-html", function () { return "<h3>You are gaining " + format(player.i.infinitypowerpersecond) + "<h3> infinity power per second. " }],
                        ["row", [["buyable", 37], ["buyable", 38], ["buyable", 39], ["buyable", 41]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Buyables</h1>" }],
                        ["row", [["buyable", 42], ["buyable", 43], ["buyable", 44], ["buyable", 45]]],
                    ]

            },
            "Reset Record": {
                unlocked() { return true },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.infinitypoints) + " infinity points. " }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.infinities) + " infinities. " }],
                        ["raw-html", function () { return "<h2>You spent " + formatTime(player.i.infinitytime) + " in this infinity. " }],
                        ["raw-html", () => `<div style="width:$404px;text-align:center;margin:20px;">
                        ${player.i.resetrecord.map((x, i) => `<span style="opacity:1">${x}</span><br/>`).join("")}
                        &gt;`],
                    ]

            },
            "Autocruncher": {
                unlocked() { return hasUpgrade("i", 75) || player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': '#ff69b4' } },
                content:
                    [
                        ["row", [["clickable", 33], ["clickable", 32], ["clickable", 45]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h3>Crunch on " + format(player.i.ipautobuyamount) + " IP. " }],
                        ["text-input", "ipinput", {
                            color: "var(--color)",
                            width: "400px",
                            "font-family": "Calibri",
                            "text-align": "left",
                            "font-size": "32px",
                            border: "2px solid #ffffff17",
                            background: "var(--background)",
                        }],
                        ["raw-html", function () { return "<h3>Choose how much IP you want to autocrunch with. " }],
                        ["raw-html", function () { return "<h3>(Click the input bar, type a number, and then press enter) " }],
                    ]

            },
        },
        singularity:
        {
            "Unlock": {
                unlocked() { return player.i.singularityunlocked.eq(0) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["blank", "25px"],
                        ["row", [["clickable", 39]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "Point Req: " + format(player.points) + "/1e35,000 points." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "IP Req: " + format(player.i.infinitypoints) + "/1e175 IP." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Broken Infinity Req: " + format(player.i.brokeninfinities) + "/1e35 Broken Infinities." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Infinity Req: " + format(player.i.infinities) + "/100,000 Infinities." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Replicanti Mod Req: " + format(player.i.replicantimods) + "/100 Replicanti Mods." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Infinity Power Req: " + format(player.i.infinitypower) + "/1e130 Infinity Power." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Willpower Req: " + format(player.h.willpower) + "/1e9 Willpower." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["raw-html", function () { return "Prestige Power Req: " + format(player.h.prestigepower) + "/100 Prestige Power." }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "The grind is on, my friend." }, { "color": "red", "font-size": "24px", "font-family": "monospace" }],
                    ]

            },
            "Main": {
                unlocked() { return player.i.singularityunlocked.eq(1) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["row", [["clickable", 40]]],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["raw-html", function () { return "<h2>Which boost pre-singularity resource multiplier by " + format(player.i.singularitypointeffect) + "x. " }],
                        ["raw-html", function () { return "<h2>You will gain " + format(player.i.singularitypointstoget) + " on reset. " }],
                        ["raw-html", function () { return "<h3>You have " + format(player.i.singularities) + " singularities. " }],
                        ["raw-html", function () { return "<h3>You will gain " + format(player.i.singularitiestoget) + " on reset. " }],
                        ["raw-html", function () { return "<h3>You spent " + formatTime(player.i.singularitytime) + " this singularity. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Unlockers</h1>" }],
                        ["row", [["upgrade", 95], ["upgrade", 96], ["upgrade", 104], ["upgrade", 107], ["upgrade", 126], ["upgrade", 135], ["upgrade", 139]]],
                        ["raw-html", function () { return player.i.singularityscene.gte(1) && player.i.singularityscene.lt(9) ? "<h2> The power of singularity.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(2) && player.i.singularityscene.lt(9) ? "<h2> Stronger than the power of infinity.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(3) && player.i.singularityscene.lt(9) ? "<h2> For those who reject the path of eternity.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(4) && player.i.singularityscene.lt(9) ? "<h2> For those who reject the path of reality.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(5) && player.i.singularityscene.lt(9) ? "<h2> If you wish to proceed.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(6) && player.i.singularityscene.lt(9) ? "<h2> You will be daunted with a task.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(7) && player.i.singularityscene.lt(9) ? "<h2> You will defeat the lost celestials.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(8) && player.i.singularityscene.lt(9) ? "<h2> The path of reality can't defeat them.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(9) && player.i.singularityscene.lt(16) ? "<h2> Once you beat them,  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(10) && player.i.singularityscene.lt(16) ? "<h2> Godhood will be yours to claim.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(11) && player.i.singularityscene.lt(16) ? "<h2> At the very cost of your own timeline.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(12) && player.i.singularityscene.lt(16) ? "<h2> This task will be perilous.  " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(13) && player.i.singularityscene.lt(16) ? "<h2> The infinity keeper was a fool for not proceeding. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(14) && player.i.singularityscene.lt(16) ? "<h2> They knew the consequences. They did the eternal path. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(15) && player.i.singularityscene.lt(16) ? "<h2> The infinity keeper chose the wrong way. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(16) && player.i.singularityscene.lt(21) ? "<h2> Ah yes, the infinity keeper. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(17) && player.i.singularityscene.lt(21) ? "<h2> The one who brought magnitudes of antimatter to the multiverse. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(18) && player.i.singularityscene.lt(21) ? "<h2> The one who destroyed seven celestials. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(19) && player.i.singularityscene.lt(21) ? "<h2> Their task was never finished. " : "" }],
                        ["raw-html", function () { return player.i.singularityscene.gte(20) && player.i.singularityscene.lt(21) ? "<h2> YOU WILL FINISH THE JOB. " : "" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 41]]],
                        ["raw-html", function () { return "<h3>You have a x" + format(player.i.presingularityresourcemult) + " pre-singularity resource multiplier (multiplies all but infinities). " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Milestones</h1>" }],
                        ["milestone", 11],
                        ["milestone", 12],
                        ["milestone", 13],
                        ["milestone", 14],
                        ["milestone", 15],
                        ["milestone", 16],
                        ["milestone", 17],
                        ["milestone", 18],
                        ["blank", "25px"],
                        ["row", [["clickable", 44], ["clickable", 43]]],
                    ]

            },
            "Features": {
                unlocked() { return player.i.singularitypoints.gt(0) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["microtabs", "singularityfeatures", { 'border-width': '0px' }],
                    ]

            },
            "Void Singularity": {
                unlocked() { return hasUpgrade("i", 126) },
                buttonStyle() { return { 'color': '#210069' } },
                content:
                    [
                        ["microtabs", "voidsingularity", { 'border-width': '0px' }],
                    ]

            },
            "Buyables": {
                unlocked() { return hasUpgrade("i", 135) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Buyables</h1>" }],
                        ["row", [["buyable", 69], ["buyable", 71], ["buyable", 72], ["buyable", 73]]],
                    ]

            },
        },
        singularityfeatures:
        {
            "Singularity Dimensions": {
                unlocked() { return player.i.singularitypoints.gt(0) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypower) + " singularity power. " }],
                        ["raw-html", function () { return "<h2>Which gives a x" + format(player.i.singularitypowereffect) + " boost to IP gain. " }],
                        ["blank", "25px"],
                        ["row", [["buyable", 46], ["buyable", 47], ["buyable", 48], ["buyable", 49]]],
                        ["row", [["buyable", 66], ["buyable", 68]]],
                    ]

            },
            "Singularity Trees": {
                unlocked() { return hasUpgrade("i", 95) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["blank", "25px"],
                        ["row", [["bar", "singularitytreebar"]]],
                        ["raw-html", function () { return "<h2>You are making " + format(player.i.singularityleavespersecond) + " singularity leaves per second. " }],
                        ["raw-html", function () { return "<h2>You beat " + formatWhole(player.i.singularitytrees) + " singularity trees, which give a x" + format(player.i.singularitytreeeffect) + " boost to infinity dimensions. " }],
                        ["raw-html", function () { return "<h2>You will gain " + format(player.i.singularitytreegen, 1) + " singularity trees." }],
                        ["raw-html", function () { return player.i.singularitytrees.gte(player.i.singularitytreesoftcapstart) ? "After " + formatWhole(player.i.singularitytreesoftcapstart) + " singularity trees, singularity leaf gain is divided by " + format(player.i.singularitytreesoftcap) + " (Based on singularity trees)" : "" }, { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 51], ["buyable", 52]]],
                    ]

            },
            "Singularity Studies": {
                unlocked() { return hasUpgrade("i", 96) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.infinitypoints) + " infinity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitytheorems) + " singularity theorems. " }],
                        ["blank", "25px"],
                        ["row", [["buyable", 53], ["buyable", 54], ["buyable", 55]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 97], ["upgrade", 98], ["upgrade", 99], ["upgrade", 101], ["upgrade", 102], ["upgrade", 103]]],
                        ["row", [["upgrade", 108], ["upgrade", 109], ["upgrade", 111], ["upgrade", 112], ["upgrade", 113], ["upgrade", 114]]],
                        ["row", [["upgrade", 123], ["upgrade", 124], ["upgrade", 125], ["upgrade", 131], ["upgrade", 134]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return hasUpgrade("i", 114) ? "<h2>Stuck? " : "" }],
                        ["raw-html", function () { return hasUpgrade("i", 114) ? "<h2>Seek the harbringer of exponential growth. " : ""}],
                        ["raw-html", function ()
                        { return hasUpgrade("i", 114) ? "<h2>Seek the high god of purple flame. " : "" }],
                        ["raw-html", function () { return hasUpgrade("i", 114) ? "<h2>Disable an autobuyer, find a feature forgotten. " : ""}],
                        ["raw-html", function () { return hasUpgrade("i", 114) ? "<h2>Gain the jacorbian energy, the power of the rotten. " : ""}],
                    ]

            },
            "Singularity Blessings": {
                unlocked() { return hasUpgrade("i", 104) },
                buttonStyle() { return { 'color': 'red' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitytheorems) + " singularity theorems. " }],
                        ["blank", "25px"],
                        ["row", [["buyable", 53], ["buyable", 54], ["buyable", 55]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularityblessings) + " singularity blessings. " }],
                        ["raw-html", function () { return "<h2>You are gaining " + format(player.i.singularityblessingspersecond) + " singularity blessings per second (based on singularity theorems). " }],
                        ["blank", "25px"],
                        ["row", [["upgrade", 105], ["upgrade", 106]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "You have " + format(player.i.replicantimodblessings) + " replicanti mod blessings, which give a x" + format(player.i.replicantimodblessingseffect) + " boost to replicanti mods." }],
                        ["raw-html", function () { return "You are gaining " + format(player.i.replicantimodblessingspersecond) + " replicanti mod blessings per second." }],
                        ["blank", "25px"],
                        ["row", [["buyable", 56]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "You have " + format(player.i.infinitydimensionblessings) + " infinity dimension blessings, which give a x" + format(player.i.infinitydimensionblessingseffect) + " boost to infinity dimensions." }],
                        ["raw-html", function () { return "You are gaining " + format(player.i.infinitydimensionblessingspersecond) + " infinity dimension blessings per second." }],
                        ["blank", "25px"],
                        ["row", [["buyable", 57]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "You have " + format(player.i.infinitypointblessings) + " infinity point blessings, which give a x" + format(player.i.infinitypointblessingseffect) + " boost to infinity points." }],
                        ["raw-html", function () { return "You are gaining " + format(player.i.infinitypointblessingspersecond) + " infinity point blessings per second." }],
                        ["blank", "25px"],
                        ["row", [["buyable", 58]]],
                    ]

            },
        },
        voidsingularity:
        {
            "Main": {
                unlocked() { return player.i.singularitypoints.gt(0) },
                buttonStyle() { return { 'color': '#210069' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["blank", "25px"],
                        ["row", [["challenge", 24]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h5>Absorbing void disables the effects of most upgrades and lowers the effects of pre-infinity and pre-singularity multipliers.</h5>" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.voidsingularities) + " void singularities, which produce void singularity points. " }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.voidsingularitypoints) + " void singularity points. " }],
                        ["raw-html", function () { return "<h2>You are gaining " + format(player.i.voidsingularitypointspersecond) + " void singularity points per second. " }],
                        ["raw-html", function () { return "<h3>Which gives a x" + format(player.i.voidsingularitypointeffect1) + " boost to singularity dimensions " }],
                        ["raw-html", function () { return "<h3>Which gives a x" + format(player.i.voidsingularitypointeffect2) + " boost to singularity leaves " }],
                        ["raw-html", function () { return "<h3>Which gives a x" + format(player.i.voidsingularitypointeffect3) + " boost to singularity trees " }],
                        ["raw-html", function () { return "<h3>Which gives a x" + format(player.i.voidsingularitypointeffect4) + " boost to blessings " }],
                    ]

            },
            "Upgrades and Buyables": {
                unlocked() { return hasUpgrade("i", 95) },
                buttonStyle() { return { 'color': '#210069' } },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.singularitypoints) + " singularity points. " }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.voidsingularitypoints) + " void singularity points. " }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Buyables</h1>" }],
                        ["row", [["buyable", 64], ["buyable", 65], ["buyable", 67]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h1>Upgrades</h1>" }],
                        ["row", [["upgrade", 127], ["upgrade", 128], ["upgrade", 129], ["upgrade", 132], ["upgrade", 133], ["upgrade", 136], ["upgrade", 137], ["upgrade", 138]]],
                    ]

            },
        },
        omega:
        {
            "Unlock": {
                unlocked() { return /*player.i.omegaunlocked.eq(0)*/ },
                buttonStyle() { return { 'color': 'orange' } },
                content:
                    [
                        ["raw-html", function () { return "<h1><a href=https://discord.gg/DubGsHrbs2>HOORAY! You reached the endgame. Join the discord server for updates </a></h1>" }],
                    ]

            },
        },
    },

    tabFormat: [
        ["raw-html", function () { return player.i.jacorbianunlock.eq(1) ? "YOU WILL BRING ME ALL YOUR ENERGY" : "" }, { "color": "purple", "font-size": "48px", "font-family": "monospace" }],
        ["raw-html", function () { return "You have " + format(player.points) + " points." }, { "color": "white", "font-size": "32px", "font-family": "monospace" }],
        ["raw-html", function () { return "You are gaining " + format(player.gain) + " points per second."}, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return inChallenge("i", 16) ? "You have " + format(player.i.apoints) + " ANTIPOINTS." : "" }, { "color": "white", "font-size": "16px", "font-family": "monospace" }],
        ["row", [["clickable", 37], ["clickable", 42]]],
        ["microtabs", "stuff", { 'border-width': '0px' }],
        ["blank", "25px"],
    ],
    layerShown() { return true }
})
function consolePrint(line) {
    player.i.resetrecord.push(line.replaceAll(' ', '&nbsp;'))
    player.i.resetrecord.shift()
}
const jacorbparticle = {
    image: "resources/jacorblayer.png",
    x() {
        return (Math.random() + 4) * 300
    },
    y() {
        return (Math.random() + 1) * -400
    },
    spread: 200,
    time: 10,
    dir() {
        return (Math.random() + 1) * 365
    },
    speed() { // Randomize speed a bit
        return (Math.random() + 4) * 4
    },
}