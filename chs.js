/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Unlocked omega (v1.0)": "解锁欧米伽 (v1.0)",
    "DISCORD HERE": "加入DISCORD",
    "GUIDE HERE": "指南",
    "Incremental": "增量",
    "Note: Buyables MAY have a 1.5 sec delay due to performance issues.": "注意：由于性能问题，可购买 可能会有 1.5 秒的延迟。",
    "Keep Playing": "继续游戏",
    "leaves per second.": "叶子 每秒。",
    "Leaves to beat a tree": "叶子 去 击败一棵树",
    "points per second.": "点数 每秒。",
    "Start Playing": "开始游戏",
    "Start producing leaves.": "开始产生树叶。",
    "Trees": "树",
    "trees.": "树。",
    "Upgrades": "升级",
    "(Always buying max just deal with it it's easier like that.)": "（总是购买 最大 只是处理它，这样更容易。）",
    "Buyables": "可购买",
    "Don't Stop Playing": "不要停止游戏",
    "Point Multiplier": "点数乘数",
    "Leaf Multiplier": "叶子乘数",
    "Never End Your Playing": "永远不要结束你的游戏",
    "Softcap Extender": "软上限扩展器",
    "Holdup another layer?": "撑起另一层？",
    "How Are We Back In This Section?": "我们是如何回到这个部分的？",
    "HOW DOES THIS FEATURE WORK??": "这个功能是如何工作的？？",
    "I'M BROKEN :(": "我崩溃了 :(",
    "I'M EVEN MORE BROKEN": "我更崩溃了",
    "1 1/2 Infinities!": "1 1/2 无穷大！",
    "1 Point for each realm": "每个领域 1 点",
    "A Heaping Teaspoon of Replicanti Died for this.": "一茶匙的复制人为此而死。",
    "A Lot Of Replicanti Died For This.": "许多复制人为此而死。",
    "A Whole Lotta Points": "整点积分",
    "Absorb the power of the void.": "吸收虚空之力。",
    "Almost as Cool as Zuckerberg": "几乎和扎克伯格一样酷",
    "Another One": "另一个",
    "Antimatter Dimensions PTSD": "反物质维度 PTSD",
    "Antimatter Dimensions Reference": "反物质维度参考",
    "Ayo the Naming?": "Ayo 命名？",
    "Beat the advanced challenge.": "战胜高级挑战。",
    "Beat the easy challenge.": "战胜简单的挑战。",
    "Beat the hard challenge.": "战胜艰难的挑战。",
    "Blessed Up": "有福了",
    "Booster Bandit": "助推器强盗",
    "Break Infinity.": "打破无限。",
    "Buy the first 4 crypto upgrades.": "购买前 4 个加密升级。",
    "Cooler than Zuckerberg": "比扎克伯格还酷",
    "Degree In Computer Science": "计算机科学学位",
    "Demonic Infinity": "恶魔无限",
    "Demonic Infinity Power": "恶魔无限力量",
    "DILATION FROM ANTIMATTER DIMENSIONS????": "反物质维度的膨胀？？？？",
    "Dimensional Multi Millionaire": "次元百万富翁",
    "Do a singularity reset.": "进行奇点重置。",
    "Don't forget...": "别忘了...",
    "Easiest AD Challenge, but Harder?": "最简单的 AD 挑战，但更难？",
    "ee6": "ee6",
    "Even In The Void Eternity Is Gone.": "即使在虚无中，永恒也已逝去。",
    "Extend mod softcap to 50.": "将 mod softcap 扩展到 50。",
    "Extend tree softcap to 20.": "将树软顶扩展到 20。",
    "Get 1 code experience.": "获得 1 次代码体验。",
    "Get 1 infinity point.": "获得1个无限点。",
    "Get 1 jacorbian energy.": "获得 1 个雅可比能量。",
    "Get 1 point per second.": "每秒获得 1 点。",
    "Get 1 prestige power.": "获得 1 点声望力量。",
    "Get 1 Tree.": "获得 1 棵树。",
    "Get 1 void singularity.": "获得 1 个虚无奇点。",
    "Get 1.33e154 points and 1 infinity.": "获得 1.33e154 点和 1 个无穷大。",
    "Get 1.79e308 infinity points while absorbing void.": "吸收虚空获得1.79e308无限点数。",
    "Get 1000 willpower.": "获得1000意志。",
    "Get 1024 bytes.": "得到 1024 字节。",
    "Get 115.74 points per second.": "每秒获得 115.74 点。",
    "Get 150 leaves": "获得150片叶子",
    "Get 1e100 code experience.": "获得 1e100 代码体验。",
    "Get 1e456 jacorbian energy.": "获得 1e456 雅可比能量。",
    "Get 1e6 willpower.": "获得1e6意志。",
    "Get 250 leaf multipliers.": "获得 250 个叶倍增器。",
    "Get 4000 void singularities.": "获得4000个虚无奇点。",
    "Get 50 mods for each realm.": "每个领域获得 50 个模组。",
    "Get 500 of each energy type.": "获得每种能量类型 500。",
    "Get 60 trees.": "得到60棵树。",
    "INFINITE REPLICANTI?": "无限复制人？",
    "Infinitely More Realms": "无限更多的境界",
    "Infinitillionaire": "亿万富翁",
    "Infinity Dimensions After Replicanti?": "复制品 之后的无限维度？",
    "Inflated Singularity": "膨胀的奇点",
    "Jacorb Running Through Your Veins!": "Jacorb在你的血管中奔跑！",
    "Just Like Elon": "就像Elon",
    "Kilobyte": "千字节",
    "Make 4 mods.": "制作 4 个模组。",
    "Man of Many Realms": "多界之人",
    "More Mods Than Ducdat": "比 Ducdat 更多的模组",
    "Multiplyer Man": "乘法人",
    "MY BELOVED ETERNITY, WHERE IS IT????": "我心爱的永恒，它在哪里？？？？",
    "No Buyables?": "没有可购买？",
    "Not a Hevipelle Reference": "不是 Hevipelle 参考资料",
    "Not Even Close to Despacit": "甚至没有接近绝望",
    "Note: Some achievements are worth more than others": "注意：有些成就比其他成就更有价值",
    "Oh God Not Another Challenge.": "哦上帝不是另一个挑战。",
    "Photosynthesis Lover": "光合作用爱好者",
    "Pi Devourer": "Pi 吞噬者",
    "Pi Eater": "Pi 食客",
    "Pi Extremist": "Pi 极端分子",
    "Pi Fangirl": "Pi 迷妹",
    "Pi Muncher": "Pi 咀嚼者",
    "Pi on Drugs.": "Pi 上的药物。",
    "Reached ee2 Points!": "达到了ee2点！",
    "Seriously, where is eternity?": "说真的，永恒在哪里？",
    "Shrineful": "神圣",
    "Shrinetastic": "神庙",
    "Shrinetatious": "供奉",
    "Singularitree": "奇点树",
    "Softcap beginner": "软帽初学者",
    "Softcap Trainee": "软顶实习生",
    "Still Single Even In The Void?": "即使在虚空中仍然单身？",
    "Still Single???": "还是单身？？？",
    "The Big Hundred": "大百",
    "The Incremental God Tree\n\t\t\t\t\t\t\tDiscord": "增量神树\n\t\t\t\t\t\t\tDiscord",
    "THE INFLATION IS COMING.": "通胀即将来临。",
    "The Meta-Achievement": "元成就",
    "The Year This Mod Was Made?": "这个 Mod 是哪一年制作的？",
    "Theory Master": "理论大师",
    "True Virginity.": "真正的童贞。",
    "Unlock crypto dimensions.": "解锁加密维度。",
    "Unlock the hub.": "解锁集线器。",
    "Very first tree": "第一棵树",
    "Very powerful indeed.": "确实非常强大。",
    "Welcome to the Crypto Club": "欢迎来到加密俱乐部",
    "Where is my precious eternity?": "我宝贵的永恒在哪里？",
    "WHERE'S MY 1E800 POINTS?": "我的 1E800 积分在哪里？",
    "Where's My Inflation?": "我的通货膨胀在哪里？",
    "Why Can't I Have Reality As Well?": "为什么我也不能拥有现实？",
    "Willionaire": "亿万富翁",
    "Yay! I got my 1e800 Points!": "耶！ 我得到了我的 1e800 点！",
    "You are a Modder Now": "你现在是模组制作者",
    "Currently:": "当前：",
    "Double Trees": "双倍树",
    "Pointy Leaves": "尖叶",
    "Requirement Shortener": "需求缩短器",
    "Self explanatory.": "自我解释。",
    "Boosts point generation based on how much leaves you have for trees.": "根据你有多少树叶来增加点数生成。",
    "Unlock Something": "解锁一些东西",
    "Computer": "计算机",
    "crypto.": "加密。",
    "Main": "主界面",
    "on reset. (Based on points)": "在重置时。（基于点数）",
    "Reset for crypto": "重置以获得加密",
    "Boosts leaf generation based on crypto.": "基于加密提升叶子生成。",
    "Boosts point generation based on crypto.": "基于加密提升点数生成。",
    "Boosts tree generation based on crypto.": "基于加密提升树生成。",
    "Engineering": "工程",
    "Softcap starts later based on crypto.": "软上限 稍后基于 加密 启动。",
    "Inflated Game": "膨胀游戏",
    "Mega Tree Booster": "终级树助推器",
    "Unlocks crypto dimensions.": "解锁加密维度。",
    "x boost to point and leaf gain.": "x 提升点数和叶子增益。",
    "Crypto Dimensions": "加密维度",
    "Autobuys tree buyables and unlocks byte buyables": "自动购买树 可购买 并解锁字节 可购买",
    "Keep upgrades on crypto reset": "在加密重置时保留升级",
    "Metaverse": "元宇宙",
    "Supremely Inflated": "膨胀到极点",
    "Blockchain Technology": "区块链技术",
    "Crypto Multiplier": "加密乘数",
    "Crypto Dimension Multiplier": "加密维度乘数",
    "Point, Leaf and Tree Multiplier": "点数、叶子和树乘数",
    "Extremely Inflated": "极度膨胀",
    "boost to crypto dimensions.": "提升到加密维度",
    "boost to point and leaf gain.": "提升到点数和叶子增益。",
    "Coding": "编码",
    "code experience.": "编码经验。",
    "lines of code per second. (Based on code experience)": "行代码每秒。 （基于编码经验）",
    "Lines of code to make a mod": "制作 模组 的代码行",
    "mods.": "模组。",
    "Reset for code experience": "重置获得编码经验",
    "on reset. (Based on crypto)": "在重置时。（基于加密）",
    "Unlocks something.": "介绍新东西。",
    "Boosts crypto gain based on mods.": "提升加密增益基于模组。",
    "Make Your Mods NFTS!": "让你的模组 NFTS！",
    "seeds per second.": "种子每秒。",
    "seeds, which make trees ^1 stronger": "种子，增强树 ^1",
    "Aarex Running Through Your Veins": "Aarex 穿过你的血管",
    "Beat δ Challenge I.": "击败 δ 挑战 I.",
    "Beta Male Moment": "测试男性时刻",
    "Don't Forget...": "别忘了…",
    "Don't you already have more than a few thousand of these?": "你不是已经有几千个了吗？",
    "Epsilionaire": "Epsilionaire",
    "Enough Antimatter Dimensions References!": "足够的反物质维度参考！",
    "Gain 1000 aarexian energy.": "获得 1000 aarexian 能量。",
    "Gain 1000000 ε.": "获得 1000000 ε.",
    "Gain eee9 points.": "获得 eee9 点数.",
    "Get 1000 β.": "获得 1000 β.",
    "GUIDE HERE (Currently outdated)": "指南在这里（目前已过时）",
    "Get TS level 10.": "获得 TS 10 级。",
    "Get a x11 β dimensions sacrifice multiplier.": "获得 x11 β 维度牺牲乘数。",
    "Get 6 ω.": "获得 6 ω.",
    "Get 65 singularity energy.": "获得65奇点能量。",
    "Omega Layers Reference?": "欧米伽层级参考？",
    "Pi Body Pillow Owner": "Pi 身体枕头所有者",
    "Pi on Drugs": "Pi 药物",
    "Pi Tier 3 Sub": "Pi 层级 3 Sub",
    "Quest Lord": "任务领主",
    "There Will Always Be More Challenges": "总会有更多的挑战",
    "Triple E's": "三倍 E's",
    "Autobuys tree buyables and keep tree upgrades on crypto reset.": "自动购买 树可购买 并在加密重置时保留树升级。",
    "Ugh, Too Much Repetition.": "呃，太多的重复操作。",
    "Black Friday": "黑色星期五",
    "": "",
    "Lowers the price growth of tree buyables.": "降低 树可购买 的价格增长。",
    "Autobuys crypto dimensions and buyables.": "自动购买加密尺寸和可购买物品。",
    "Boosts crypto dimensions production based on when the mod softcap starts.": "根据 模组软上限 开始的时间提高加密维度的生产。",
    "creation mods.": "创作模组。",
    "Creator Realm Lore": "造物主领域传说",
    "Crypto Dimensions go BRR": "加密维度到 BRR",
    "Cryptomator": "加密器",
    "Currently making mods powered by the CREATOR REALM.": "目前正在制作由 造物主领域 提供支持的模组。",
    "Deposit ALL of your mods to the Creator Realm.": "将您所有的模组存入 造物主领域。",
    "Keeps all upgrades on code reset.": "在代码重置时保持所有升级。",
    "loop=true hidden=true autostart=true": "循环=真隐藏=真自动启动=真",
    "No more microtasks!": "没有更多的微任务！",
    "Oh yay a new feature!": "哦耶一个新功能！",
    "On top of the multiverse, lies the mankind.": "在多元宇宙之上，是人类。",
    "Realm Mods": "领域模组",
    "Select the realm you want to deal with.": "选择您要处理的领域。",
    "The humans live yet they can not see": "人活着却看不见",
    "The other realms hiding underneath": "隐藏在下面的其他领域",
    "Toggle Music: Unmute": "切换音乐：取消静音",
    "Unlocks realm mods and gain 6% of crypto per second.": "解锁领域模组并每秒获得 6% 的加密。",
    "Which boost tree and leaf gain by x1.00": "哪一棵树和叶子增加了 x1.00",
    "Yet they can control them with their mind,": "然而他们可以用意念控制他们，",
    "A very liminal place, a horror-filled maze.": "一个非常有限的地方，一个充满恐怖的迷宫。",
    "A very strange world filled with powerful gods": "一个充满强大神灵的非常奇怪的世界",
    "All the stories, made by humans in mankind,": "人类在人类中创造的所有故事，",
    "At the dimensional realm, is where they all reside.": "在维度领域，是他们都居住的地方。",
    "Backrooms Lore": "密室传说",
    "But their vision of paradise, might make it worse.": "但他们对天堂的看法可能会使情况变得更糟。",
    "Currently making mods powered by the BACKROOMS.": "目前正在制作由 BACKROOMS 提供支持的模组。",
    "Currently making mods powered by the DEATH REALM.": "目前正在制作由 DEATH REALM 驱动的模组。",
    "Currently making mods powered by the DIMENSIONAL REALM.": "目前正在制作由 DIMENSIONAL REALM 提供支持的模组。",
    "Currently making mods powered by the HIGHER PLANE.": "目前正在制作由 HIGHER PLANE 驱动的模组。",
    "Currently making mods powered by the VOID.": "目前正在制作由 VOID 提供支持的模组。",
    "Death Realm Lore": "死亡领域传说",
    "Deposit ALL of your mods to the Backrooms.": "将所有模组存入后台。",
    "Deposit ALL of your mods to the Death Realm.": "将所有模组存入死亡领域。",
    "Deposit ALL of your mods to the Dimensional Realm.": "将所有模组存入维度领域。",
    "Deposit ALL of your mods to the Higher Plane.": "将你所有的 mod 存放到更高的平面。",
    "Deposit ALL of your mods to the Void.": "将所有模组存入 Void。",
    "dimensional mods.": "维度模组。",
    "Dimensional Realm Lore": "维度领域知识",
    "divine mods.": "神圣的模组。",
    "fatal mods.": "致命的模组。",
    "Higher Plane Lore": "更高层面的知识",
    "It is very deep, but also very shallow.": "它很深，但也很浅。",
    "It's a boring place, and all signs of life, they lack.": "这是一个无聊的地方，他们缺乏所有生命迹象。",
    "It's like a never ending shadow.": "就像一个永无止境的影子。",
    "liminal mods.": "阈限模组。",
    "Once you noclip in, you are never getting back.": "一旦你进入 noclip，你就再也回不来了。",
    "Realistic, fictional, even ones that don't make sense.": "现实的，虚构的，甚至那些没有意义的。",
    "shadow mods.": "影子模组。",
    "The angels and demons must make their choice.": "天使和恶魔必须做出他们的选择。",
    "The good people can go to heaven, which is great!": "好人能上天堂，真好！",
    "The sinners go to hell, which they will hate.": "罪人会下地狱，这是他们所憎恶的。",
    "There are only two colors, which are grey and black.": "只有两种颜色，灰色和黑色。",
    "They look underneath for chosen ones": "他们在下面寻找被选中的人",
    "They try to spread good through the multiverse": "他们试图通过多元宇宙传播善",
    "Tons of levels, it's like a stack.": "成吨的等级，它就像一个堆栈。",
    "Tons of worlds of many sizes,": "无数大小不一的世界，",
    "Void Lore": "虚空传说",
    "When a being reaches their fate,": "当一个生命到达他们的命运时，",
    "Which makes mod softcap start x1.00 later": "这使得 模组软上限 稍后启动 x1.00",
    "Yet somewhat calm, bringing you in a nostalgic haze.": "又有些沉稳，带你进入怀旧的阴霾。",
    "A long time has passed since the war. The higher plane of existence and the death realms made an alliance.": "战争已经过去很长时间了。 存在的更高层面和死亡领域结盟。",
    "Antimatter Dimensions": "反物质维度",
    "Beginning": "开始",
    "But it was no use. The death realm was all powerful.": "但这没有用。 死界都是强大的。",
    "But one day, the higher plane saw their weapon and wanted to join them.": "但是有一天，更高位面看到了他们的武器，想要加入他们。",
    "Chapter 1": "第1章",
    "Each of the nobles has made great contributions to the backrooms and the void.": "每个贵族都为密室和虚空立下了汗马功劳。",
    "He revolutionized incrementals. He formed a lot of powerful beings known as celestials.": "他彻底改变了增量。 他形成了许多被称为天体的强大生物。",
    "In order to gain the dimensional realm, the backrooms and void used their own energy to create four legendary nobles.": "为了获得次元境界，密室和虚空用自己的能量造就了四位传奇贵族。",
    "Lore": "知识",
    "Meta-Prestige": "元声望",
    "Potential": "潜能",
    "The backrooms and void have made an alliance, but are still against the higher plane and death realms.": "密室和虚空已经结盟，但仍然反对更高的位面和死亡领域。",
    "The death realm and higher plane cut ties with each other.": "死界与上位面断绝了联系。",
    "The death realm won, and three of the four nobles were exiled.": "死亡领域获胜，四位贵族中的三位被放逐。",
    "The gods from the death realm searched for the incremental nobles.": "死界诸神寻找增量贵族。",
    "The higher plane joined the backrooms and the void, to bring back the exiled nobles and to bring the weapon back.": "更高位面连接密室和虚空，带回被流放的贵族，带回武器。",
    "The knight of upgrades. The ranger of numbers.": "升级骑士。 数字护林员。",
    "The mage of automation. The warrior of infinity.": "自动化法师。 无限战士。",
    "The void and backrooms were unsure, but the death realm was mad at the higher plane.": "虚空和密室不确定，但死亡领域在更高位面是疯狂的。",
    "The warrior of infinity changed his identity. He changed his name to Hevipelle.": "无限战士改变了身份。 他改名为赫维佩尔。",
    "They also extracted power from darkness, and made a POWERFUL WEAPON with most of the energy from the void.": "他们还从黑暗中提取能量，并用大部分来自虚空的能量制造了强大的武器。",
    "They fought in another long war, in order for justice to be made.": "为了伸张正义，他们又进行了一场漫长的战争。",
    "They helped increase the limit of backrooms levels the backrooms could make.": "他们帮助提高了幕后级别的限制。",
    "They were the incremental nobles. They had power of gods and the minds of prodigies.": "他们是增量贵族。 他们拥有神的力量和神童的头脑。",
    "This weapon was so powerful, it could beat THE MULTIVERSAL SPLITTER.": "这把武器太强大了，可以打败 多元宇宙分离器。",
    "To free the other nobles, Hevipelle used his antimatter dimensions to fight back against the death realm.": "为了解放其他贵族，赫维佩尔利用他的反物质维度反击死亡领域。",
    "Willpower": "意志",
    "YOU WILL USE THE WEAPON.": "您将使用该武器。",
    "All entities lived in harmony.": "所有实体都和睦相处。",
    "All of this \"realm\" stuff is nonsense.": "所有这些“领域”的东西都是胡说八道。",
    "All universes in the dimensional realm were made of this matter.": "空间界的宇宙都是由这个物质构成的。",
    "And finally, Pelle.": "最后，佩尔。",
    "boost to willpower gain.": "提升意志。",
    "But humans can affect the other realms using their imagination.": "但是人类可以利用他们的想象力影响其他领域。",
    "But one day, an unknown entity split the multiverse into six realms:": "但是有一天，一个未知的实体将多元宇宙分为六个领域：",
    "But she could only sit and watch.": "但她只能坐视。",
    "Despite being very forgetful, Ra tried to help as well.": "尽管非常健忘，Ra 也试图提供帮助。",
    "Each celestial had its own reality, to hinder the destroyer.": "每个天界都有自己的现实，以阻碍破坏者。",
    "Each one fell down, one by one.": "一个个倒下，一个接一个。",
    "Eventually, a very long five-way multiversal war begun.": "最终，一场漫长的五路多元宇宙战争开始了。",
    "Eventually, it got hold of reality machines.": "最终，它掌握了现实机器。",
    "Everyone was confused by Pelle's words.": "所有人都被佩莱的话给弄糊涂了。",
    "Everything goes away and you wake up on your floor. You check your phone.": "一切都消失了，你在地板上醒来。 你检查你的电话。",
    "Gain 50% of prestige power per second.": "每秒获得 50% 的声望能量。",
    "He converted many dimensions into antimatter in order to fight the death realm.": "他将许多维度转化为反物质，以对抗死亡领域。",
    "He explained everything about the realms, the war, and the split.": "他解释了关于领域、战争和分裂的一切。",
    "He found a lot of them. He manipulated them in a way to improve antimatter production.": "他发现了很多。 他以一种改善反物质生产的方式操纵它们。",
    "He had created the infamous V achievements.": "他创造了臭名昭著的 V 成就。",
    "He put Teresa to do very intensive research.": "他让特蕾莎做非常深入的研究。",
    "He realized the damage he done. He quit.": "他意识到自己造成的伤害。 他辞职了。",
    "He spoke many about a \"destroyer\".": "他多次谈到“破坏者”。",
    "He started a more calm lifestyle.": "他开始了一种更加平静的生活方式。",
    "He started treating his celestials as children.": "他开始像对待孩子一样对待他的天神。",
    "He trusted Pelle.": "他信任佩尔。",
    "Hevipelle asked Lai'tela to research from other paths,": "Hevipelle让Lai'tela从其他途径研究，",
    "Hevipelle put Effarig to find the glyphs forgotten by the time before the realms.": "Hevipelle 让 Effarig 去寻找那些在诸国度之前被时间遗忘的字形。",
    "Hevipelle put Pelle in control of everything.": "Hevipelle让Pelle掌控一切。",
    "Hevipelle put The Nameless Ones to manipulate time and find methods for doing so.": "Hevipelle 让 The Nameless Ones 操纵时间并找到这样做的方法。",
    "Hevipelle watched, as all of his children fell.": "Hevipelle 看着他所有的孩子都倒下了。",
    "However, he started acting rather strange. He spoke strange.": "然而，他开始表现得很奇怪。 他说话很奇怪。",
    "However, Hevipelle knew something bad was coming.": "然而，Hevipelle 知道不好的事情要来了。",
    "However, the creator realm was the most interesting realm.": "不过，造物主界才是最有趣的。",
    "However, the destroyer kept on growing.": "然而，驱逐舰仍在不断壮大。",
    "In fear, Lai'Tela banished Ra.": "出于恐惧，莱特拉放逐了拉。",
    "In grief, he locked himself away in the void.": "悲痛之下，他将自己锁在虚空之中。",
    "In the beginning, there was only matter.": "一开始，只有物质。",
    "Infinity": "无限",
    "Infinity, eternity, reality. All in it's control.": "无限，永恒，真实。 一切尽在掌控之中。",
    "Instead of going the usual route of quantum and ghosts,": "而不是走量子和幽灵的通常路线，",
    "It grew fast, and stronger.": "它长得很快，也更强壮。",
    "Its manipulation was never seen before.": "它的操纵以前从未见过。",
    "Its power in antimatter only grew and grew.": "它在反物质方面的力量只会越来越大。",
    "Its power was no match to the celestials.": "它的力量不是天界的对手。",
    "Manipulating the power of dark matter and energy.": "操纵暗物质和能量的力量。",
    "Many of them left, but seven stayed with him.": "他们中的许多人离开了，但有七个留在了他身边。",
    "Many people lost their lives.": "许多人失去了生命。",
    "Matter made up everything. It was a very great thing.": "物质构成了一切。 这是一件非常棒的事情。",
    "Most humans in the creator realm aren't aware of other realms' existence.": "造物主领域的大多数人都不知道其他领域的存在。",
    "Nah. Bro looked like he came staight out of BFDI.": "不。 兄弟看起来像是直接从 BFDI 出来的。",
    "Never to be seen again, giving the destroyer this very nickname.": "永远不会再出现，给驱逐舰这个绰号。",
    "No supernatural entities live there, only humans.": "那里没有超自然的实体，只有人类。",
    "Omega": "欧米茄",
    "One of them, Ra was so confused they lost all their memories of the others.": "其中之一，Ra 非常困惑，以至于失去了对其他人的所有记忆。",
    "Only the most powerful can get past them.": "只有最强大的人才能越过他们。",
    "Over time, many new lifeforms evolved in these realms.": "随着时间的推移，许多新的生命形式在这些领域进化。",
    "Pelle was the eldest, and the one who was the most close to Hevipelle.": "佩尔是最年长的，也是与赫维佩尔最亲近的人。",
    "Prestige Power": "声望力量",
    "Prestige Power: 2.29 Potential.": "声望力量：2.29 潜力。",
    "Ra supported the other celestials, like finding new glyphs and studies.": "Ra 支持其他天神，例如寻找新的字形和研究。",
    "Ra, Lai'tela, and Pelle.": "Ra、Lai'tela 和 Pelle。",
    "Ra's powers corrupted, and actually helped the destroyer.": "Ra 的力量腐败了，实际上帮助了驱逐舰。",
    "Reality machines are very powerful, and can cause lots of destruction.": "现实机器非常强大，可以造成大量破坏。",
    "Red Diamond proceeded to bend the reality around you.": "Red Diamond 开始扭曲你周围的现实。",
    "Red Diamond: A loyal hero will REUNITE THE REALMS.": "红钻：忠诚的英雄将重新统一王国。",
    "Red Diamond: Before you become a god, you must start small. Start with the TREES.": "红钻：成神之前，必须从小事做起。 从树开始。",
    "Red Diamond: Hi. I am Red Diamond.": "红钻：你好。 我是红钻石",
    "Red Diamond: I believe it will be you.": "红钻：我相信会是你。",
    "Red Diamond: I believe you are THE CHOSEN ONE for the ANCIENT PROPHECY.": "Red Diamond：我相信你是古代预言的被选中者。",
    "Red Diamond: I come from the higher plane of existence.": "红钻：我来自更高的存在层面。",
    "REQ: 1e308 Willpower (Can't do this in this update)": "REQ: 1e308 Willpower (不能在这个更新中这样做)",
    "She offered the destroyer to join the celestials.": "她提议驱逐舰加入天界。",
    "Shrine of Omega Layers": "欧米茄层神殿",
    "Shrine of True Singularity": "真奇点神殿",
    "Shrine of ω": "ω 神庙",
    "Shrines": "神庙",
    "Since the beginning of time,": "自古以来，",
    "Singularity": "奇点",
    "Teresa found a new layer. Reality.": "特蕾莎发现了一个新层。 现实。",
    "Aarex's Blessing": "艾瑞克斯的祝福",
    "Aarexian Energy": "艾瑞西亚能源",
    "Adjusters": "调节器",
    "Assembly Line": "流水线",
    "Autobuys RBG energy buyables and singularity shrines.": "自动购买 RBG 能源可购买物品和奇点神殿。",
    "Autobuys replicanti buyables that cost replicanti.": "Autobuys replicanti 可购买的成本 replicanti。",
    "Autobuys willpower generators and infinity shrines.": "自动购买意志发电机和无限神殿。",
    "Boost infinity point gain based on potential.": "根据潜力提升无限点增益。",
    "Boost Those Infinity Points!": "提升那些无限点数！",
    "Break Those Infinities!": "打破那些无限！",
    "Buyables and Upgrades": "购买和升级",
    "Can I be the Aa to your Rex?": "我可以成为你的 Rex 的 Aa 吗？",
    "Cosine Booster": "余弦增强器",
    "Finally, time to BREAK INFINITY!!!": "终于到了打破无限的时候了！！！",
    "Gain 100% of aarexian energy per second.": "每秒获得 100% 的 aarexian 能量。",
    "Give all energy to Aarex for aarexian energy": "为 Aarexian 能量提供所有能量给 Aarex",
    "Harvests the energy in the line": "收集线路中的能量",
    "Make Those Infinities!": "创造无穷大！",
    "More Energy!": "更多能量！",
    "QoL is amazing.": "生活质量是惊人的。",
    "Reset Cosine": "重置余弦",
    "Reset for 4e9 prestige power": "重置为 4e9 威望力量",
    "Reset Sine": "重置正弦波",
    "Reset Tangent": "重置切线",
    "Sine Booster": "正弦放大器",
    "Sweet, Sweet, Automation.": "甜蜜，甜蜜，自动化。",
    "Tangent Booster": "切线助推器",
    "Teresa knew the destroyer was here.": "特蕾莎知道驱逐舰就在这里。",
    "Teresa, Effarig, The Nameless Ones, V.": "Teresa, Effarig, 无名者, V.",
    "That's also how The Nameless Ones lost their names.": "这也是 The Nameless Ones 失去名字的原因。",
    "The destroyer was here.": "破坏者就在这里。",
    "The infinity keeper.": "无限守护者。",
    "The true story lies within the micro, not the macro.": "真正的故事在于微观，而不是宏观。",
    "These are worth x5 shrine power.": "这些价值 x5 神社力量。",
    "They were prepared, and anticipated until the day came.": "他们做好了准备，期待着那一天的到来。",
    "Timewall Upgrade (Yes it is worth it).": "时间墙升级（是的，这是值得的）。",
    "Trigonometry Boosters": "三角学助推器",
    "Turns out, you can store time in black holes, even from the creator realm.": "事实证明，你可以将时间存储在黑洞中，即使是在造物主领域。",
    "Unlock Break Infinity": "解锁打破无限",
    "Unlocks a unique prestige layer.": "解锁一个独特的声望层。",
    "Unlocks aarexian energy.": "解锁 aarexian 能量。",
    "Unlocks achievement points (in achievements layer).": "解锁成就点（在成就层）。",
    "Unlocks cosine booster.": "解锁余弦增强器。",
    "Unlocks omega shrines.": "解锁欧米茄神殿。",
    "Unlocks sine booster.": "解锁正弦增强器。",
    "Unlocks tangent booster.": "解锁切线助推器。",
    "Unlocks the assembly line.": "解锁装配线。",
    "Unlocks trig booster adjusters.": "解锁触发助推器调节器。",
    "Until one day, Hevipelle brought antimatter to the multiverse.": "直到有一天，Hevipelle 将反物质带入了多元宇宙。",
    "Using singularities, similar to you.": "使用奇点，类似于你。",
    "V, who had power in ego, made his way achieving as much as possible.": "拥有自我力量的 V 尽可能多地取得成就。",
    "When it arrived, Teresa tried being friendly.": "当它到达时，特蕾莎试图表现得友好。",
    "Who the hell is Aarex?": "Aarex 到底是谁？",
    "Willpower Generator": "意志发生器",
    "Willpower Generator II": "意志发生器 II",
    "You would really want this.": "你真的想要这个。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "i": "i",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Current endgame: ": "当前残局：",
    "trees, which produce ": "树，产生 ",
    "Leaves Booster ": "叶子助推器 ",
    "Points Booster ": "点数助推器 ",
    "Trees Booster ": "树助推器 ",
    "Notation: ": "符号：",
    "Softcap Booster ": "软上限助推器 ",
    "You are making ": "你制造了 ",
    "bytes, which give a ": "字节，它给出了 ",
    "You will gain ": "你将获得 ",
    "You beat ": "你击败了 ",
    "mods, which give a x": "模组，给了一个 x",
    "You are writing  ": "你写了 ",
    "You have  ": "你有 ",
    "You made  ": "你制造了 ",
    "Your code experience gives a x": "你的编码经验给了一个 x",
    "Unlocked Cante (": "解锁 Cante (",
    "Which boost code experience gain by ": "提升编码经验 ",
    "Which boost crypto dimensions gain by ": "提升加密维度 ",
    "Which boost crypto production by ": "将加密生产提高 ",
    "Which boost lines of code gain by ": "提升代码行增益 ",
    "Your shrine power give a x": "你的神庙力量给了一个x",
    "You are picking for slot ": "您选择了插槽 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    " Point Generation.": " 点数生成。",
    " Tree Generation": " 树木生成",
    " Tree Generation.": " 树木生成。",
    " Leaf Generation.": " 树叶生成。",
    " Crypto Dimensions Generation": " 加密维度生成",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^ ([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\(([\d\.,]+)$/,
    /^\(e([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Get (.+) singularity blessings$/, '获得 $1 奇点祝福'],
    [/^Get (.+) infinities.$/, '获得 $1 无限。'],
    [/^Get (.+) broken infinities.$/, '获得 $1 突破无限。'],
    [/^Get (.+) replicanti.$/, '获得 $1 复制品。'],
    [/^Get (.+) replicanti mods.$/, '获得 $1 复制品模块。'],
    [/^Get (.+) mods.$/, '获得 $1 模块。'],
    [/^Get (.+) 1st crypto dimensions.$/, '获得 $1 第1加密维度。'],
    [/^Get (.+) singularity theorems.$/, '获得 $1 奇点定理。'],
    [/^Get (.+) shrine power.$/, '获得 $1 神庙力量。'],
    [/^Get (.+) shrine power.$/, '获得 $1 神庙力量。'],
    [/^Get (.+) crypto.$/, '获得 $1 加密。'],
    [/^Get (.+) singularity power$/, '获得 $1 奇点力量'],
    [/^Get (.+) singularity power.$/, '获得 $1 奇点力量。'],
    [/^Get (.+) achievement power.$/, '获得 $1 成就力量。'],
    [/^Get (.+) singularity trees.$/, '获得 $1 奇点树。'],
    [/^Get (.+) infinity power.$/, '获得 $1 无限力量。'],
    [/^Get (.+) infinity points.$/, '获得 $1 无限点数。'],
    [/^Get (.+) code experience.$/, '获得 $1 编码经验。'],
    [/^Get (.+) points.$/, '获得 $1 点数。'],
    [/^After (.+) mods, lines of code gain is divided by (.+) \(Based on mods\)$/, '在 $1 模组后，代码行增益除以 $2（基于模组）'],
    [/^Reach (.+) points.$/, '达到 $1 点数。'],
    [/^Tree softcap starts (.+) later.$/, '树的软上限在 $1 之后开始。'],
    [/^You have ([\d\.]+)e([\d\.,]+)$/, '你有 $1e$2'],
    [/^You have (.+) achievement power.$/, '你有 $1 成就力量。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) points.$/, '你有 $1 点数。'],
    [/^You have (.+) willpower.$/, '你有 $1 意志。'],
    [/^You have (.+) prestige power.$/, '你有 $1 声望力量。'],
    [/^You have (.+) blue energy.$/, '你有 $1 蓝色能量。'],
    [/^You have (.+) red energy.$/, '你有 $1 红色能量。'],
    [/^You have (.+) green energy.$/, '你有 $1 绿色能量。'],
    [/^You have (.+) potential.$/, '你有 $1 潜能。'],
    [/^You have (.+) shrine power.$/, '你有 $1 神庙力量。'],
    [/^You have (.+) aarexian energy.$/, '你有 $1 aarexian 能量。'],
    [/^You have (.+) aarexian energy, which give a (.+) boost to assembly line speed.$/, '你有 $1 aarexian 能量，这使装配线速度提高了 $2。'],
    [/^You specifically have (.+) potential.$/, '你具体有 $1 潜能。'],
    [/^After (.+) trees, leaf gain is divided by (.+) \(Based on trees\)$/, '$1 棵树后，叶子增益除以 $2（基于树）'],
    [/^which makes tree softcap start (.+) later.\n(.+)Cost: (.+) Points$/, '这会使 树 的软上限在 $1 之后开始。\n$2成本：$3 点数'],
    [/^which are shortening tree requirement by (.+).\n(.+)Cost: (.+) Trees$/, '这会使降低 树 的需求 $1。\n$2成本：$3 树'],
    [/^which are boosting your point gain by x(.+).\n(.+)Cost: (.+) Trees$/, '这会使您的 点数 增益提升 x$1。\n$2成本：$3 树'],
    [/^which are boosting your ω by x(.+).\n(.+)Cost: (.+) Aarexian Energy$/, '这会使您的 ω 提升 x$1。\n$2成本：$3 Aarexian 能量'],
    [/^which are boosting your omega layers resources by x(.+).\n(.+)Cost: (.+) Aarexian Energy$/, '这会使您的 欧米伽层资源 提升 x$1。\n$2成本：$3 Aarexian 能量'],
    [/^which are boosting your true singularity xp gain by x(.+).\n(.+)Cost: (.+) Aarexian Energy$/, '这会使您的 真奇点经验增益 提升 x$1。\n$2成本：$3 Aarexian 能量'],
    [/^which are boosting your point, leaf and tree gain by x(.+).\n(.+)Cost: (.+) Trees$/, '这会使您的 点数，叶子和树的增益 提升 x$1。\n$2成本：$3 树'],
    [/^which are boosting your point, leaf and tree gain by x(.+).\n(.+)Cost: (.+) Bytes$/, '这会使您的 点数，叶子和树的增益 提升 x$1。\n$2成本：$3 字节'],
    [/^which are boosting your crypto gain by x(.+).\n(.+)Cost: (.+) Bytes$/, '这会使您的 加密 增益提升 x$1。\n$2成本：$3 字节'],
    [/^which boosts all crypto dimension production by x(.+).\n(.+)Cost: (.+) Bytes$/, '这会使您的 全部加密维度生产 提升 x$1。\n$2成本：$3 字节'],
    [/^which are boosts all crypto dimension production x(.+).\n(.+)Cost: (.+) Bytes$/, '这会使您的 全部加密维度生产 提升 x$1。\n$2成本：$3 字节'],
    [/^which are boosting your leaf gain by x(.+).\n(.+)Cost: (.+) Points$/, '这会使您的 叶子 增益提升 x$1。\n$2成本：$3 点数'],
    [/^which gives (.+) bytes per second.\n(.+)Cost: (.+) Crypto\n(.+)$/, '给予 $1 字节每秒。\n$2成本：$3 加密\n$4'],
    [/^which gives (.+) crypto dimension (.+) per second.\n(.+)Cost: (.+) Crypto\n(.+)$/, '给予 $1 加密维度 $2 每秒。\n$3成本：$4 加密\n$5'],
    [/^which gives (.+) willpower per second.\n(.+)Cost: (.+) Willpower$/, '每秒给予 $1 意志。\n$3成本：$3 意志'],
    [/^which gives a (.+) boost to willpower per second.\n(.+)Cost: (.+) Willpower$/, '每秒给予 $1 提升到意志。\n$3成本：$3 意志'],
    [/^You are gaining (.+) points per second.$/, '你每秒获得 $1 点数。'],
    [/^You are gaining (.+) willpower per second.$/, '你每秒获得 $1 意志。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Your prestige power gives a (.+) boost to willpower.$/, '您的声望力量可以 $1 提升意志。'],
    [/^(.+) Points a day$/, '$1 点数一天'],
    [/^(.+) Trees a minute$/, '$1 树一分钟'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^You made ([\d\.]+)$/, '你制造了 $1'],
    [/^You have ([\d\.]+)$/, '你有 $1'],
    [/^You have ([\d\.]+)e([\d\.,]+)$/, '你有 $1e$2'],
    [/^You have ([\d\.,]+)$/, '你有 $1'],
    [/^Crypto Dimension ([\d\.]+)$/, '加密维度 $1'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^x([\d\.]+) Infinity Generation$/, 'x$1 无限世代'],
    [/^x([\d\.]+) Broken Infinity Generation.$/, 'x$1 打破的无限世代'],
    [/^([\d\.]+) aarexian energy$/, '$1 aarexian 能量'],
    [/^\+([\d\.]+) CR$/, '\+$1 加密重置'],
    [/^\+([\d\.]+) CE$/, '\+$1 编码经验'],
    [/^\+([\d\.,]+) CE$/, '\+$1 编码经验'],
    [/^\+([\d\.]+)e([\d\.,]+) CR$/, '\+$1e$2 加密重置'],
    [/^\+([\d\.]+)e([\d\.,]+) CE$/, '\+$1e$2 编码经验'],
    [/^\+([\d\.]+) CE$/, '\+$1 编码经验'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Potential$/, '$1 潜能'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Slot ([\d\.,]+)$/, '插槽 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) Code Experience$/, '成本：$1 编码经验'],
    [/^Cost: (.+) Prestige Power$/, '成本：$1 声望力量'],
    [/^Cost: (.+) Willpower$/, '成本：$1 意志'],
    [/^Cost: (.+) Aarexian Energy$/, '成本：$1 Aarexian 能量'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Crypto$/, '成本：$1 加密'],
    [/^Cost: (.+) Points$/, '成本：$1 点数'],
    [/^Sine: (.+) boost to willpower.$/, '正弦：$1 提升到意志'],
    [/^Cosine: (.+) boost to willpower.$/, '余弦：$1 提升到意志'],
    [/^Tangent: (.+) boost to willpower.$/, '正切：$1 提升到意志'],
    [/^Cost: (.+) Trees$/, '成本：$1 树'],
    [/^Willpower: (.+) Potential.$/, '意志：$1 潜能。'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);