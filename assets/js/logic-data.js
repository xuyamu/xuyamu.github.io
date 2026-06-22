/**
 * assets/js/logic-data.js
 * 包含“思辨之林”层级的所有文章元数据
 * 遵循中英双语结构：title/title_en, excerpt/excerpt_en
 */

const logicData = {
    // 哲学 PHILOSOPHY
    philosophy: [
        { 
            id: "philosophy-2016-on-the-right-to-choose-ones-birth", 
            title: "论出生选择权", 
            title_en: "On the Right to Choose One's Birth",
            date: "2016-09-08",
            link: "https://www.douban.com/note/580618088", 
            excerpt: "本文探讨了人类改善先天条件的渴望与“生育平等权”之间的伦理博弈，揭露了出生选择权缺失下个体难以逃脱的宿命悲剧。",
            excerpt_en: "An exploration of the ethical gamble between the desire to improve innate conditions and the 'equal right to birth,' revealing the tragic destiny of individuals lacking choice over their own existence." 
        },

        { 
            id: "philosophy-2014-human-cloning", 
            title: "克隆人相关讨论", 
            title_en: "Discussions Related to Human Cloning",
            date: "2014-06-29",
            link: "https://www.douban.com/note/364491598", 
            excerpt: "本文从生物进化的基因传递需求、个体心理动机以及法律规制等多个维度，探讨了克隆人所面临的社会困境与合法性难题。",
            excerpt_en: "This article explores the social dilemmas and legal challenges surrounding human cloning from multiple perspectives, including the genetic transmission requirements of biological evolution, individual psychological motivations, and legal regulations." 
        },

        { 
            id: "philosophy-2011-brief-thoughts-of-truth", 
            title: "对于真理观形成的一些小看法", 
            title_en: "Brief Thoughts on the Formation of the Concept of Truth",
            date: "2011-03-14",
            link: "https://www.douban.com/note/139672115", 
            excerpt: "本文通过对关于真理的朴素观念进行批判性审视，并回顾作者个人的认知历程，阐明了一种概念上的转变：将真理视为一个“永无止境的探索过程”，而不是一个“绝对客观的实体”。",
            excerpt_en: "Through a critical examination of naive conceptions of truth and a retrospective of the author's personal cognitive journey, this text illustrates a conceptual shift: viewing truth not as an 'absolute objective entity' but as an 'interminable process of exploration'." 
        },
        { 
            id: "philosophy-2010-fear-of-existence", 
            title: "在世之畏——读海德格尔的一些体会", 
            title_en: "Dread of Being-in-the-World: Reflections on Heidegger",
            date: "2010-12-15",
            link: "https://www.douban.com/note/120401022", 
            excerpt: "在世界黑夜的时代里，人们必须经历并承受世界之深渊。但为此就必须有入于深渊的人们。",
            excerpt_en: "In the age of the world's night, one must experience and endure the abyss. But for this to happen, there must be those who dare to enter it." 
        },
        { 
            id: "philosophy-2010-why-chinese-people-lack-religious-faith", 
            title: "关于中国人为什么没有信仰——听邓晓芒老师讲座感想", 
            title_en: "On Why the Chinese Lack Religious Faith: Reflections on Deng Xiaomang's Lecture",
            date: "2010-11-13",
            excerpt: "本文以理性主义视角剖析了中国人信仰缺失的心理与社会根源，并对“信仰能提升创造力”这一观点提出了理性质疑。",
            excerpt_en: "An analysis of the psychological and social roots of the lack of faith in China from a rationalist perspective, questioning whether faith truly enhances creativity." 
        },
        { 
            id: "philosophy-2010-concept-thinking", 
            title: "关于概念的一些思考", 
            title_en: "Reflections on the Nature of Concepts",
            date: "2010-08-21",
            link: "https://www.douban.com/note/86646047/", 
            excerpt: "本文运用索绪尔的“能指”和“所指”框架，分析概念的构建过程和认知路径，同时批判大众话语中由于缺乏精确思考而导致的对“物质”和“理性”等抽象术语的“庸俗”误解。",
            excerpt_en: "By employing Saussure’s framework of 'signifier' and 'signified,' this text analyzes the construction and cognitive pathways of concepts, while critiquing the 'vulgar' misinterpretations of abstract terms—such as 'matter' and 'rationality'—that arise from a lack of precise speculation in popular discourse." 
        }
    ],

    // 艺术 ART
    art: [

        { 
            id: "art-2014-reflections",
            title: "艺术家的最高任务是与政治相对抗？——读程美信的《邱志杰不过是个陪嫁伴娘》有感", 
            // 内部改为单引号
            title_en: "Reflections After Reading Cheng Meixin's \"Qiu Zhijie Is Merely a Bridesmaid at the Wedding\"",
            date: "2014-07-04", 
            link: "https://www.douban.com/note/366053345", 
            excerpt: "本文通过反驳程美信关于“艺术必须通过政治对抗才能获得自由”的观点，论证了艺术价值的多元本质，并指出将政治标准作为评判艺术唯一尺度的做法本身就是一种思维的局限。",
            // 内部改为单引号
            excerpt_en: "This article refutes Cheng Meixin's view that \"art must achieve freedom through political confrontation\", arguing for the multifaceted nature of artistic value and pointing out that using political criteria as the sole measure for judging art is itself a limitation of thought."
        },

        { 
            id: "art-2013-consolation-of-art",
            title: "艺术的慰藉", 
            title_en: "The Consolation of Art",
            date: "2013-06-21", 
            link: "https://www.douban.com/note/283798731", 
            excerpt: "探讨艺术如何给予创作者与观赏者以慰藉，在无常的世界中寻找感官的锚点。",
            excerpt_en: "Exploring how art provides solace to both creators and observers, seeking a sensory anchor within an impermanent world." 
        }
    ],

    // 文学 LITERATURE
    literature: [
        { 
            id: "literature-2025-wuchengen-journey-to-the-west",
            title: "论吴承恩会如何看待孙悟空与白骨精的恋情", 
            title_en: "How Wu Cheng'en Would View the Romance Between Wukong and the Bone Demon",
            date: "2025-04-07", 
            link: "https://www.zhihu.com/question/1892303191124705652/answer/1892566542459318441", 
            excerpt: "从原著内核及作者偏好出发，剖析现代作品对古典文学角色的二次重塑及其逻辑矛盾。",
            excerpt_en: "Starting from the core of the original work and the author's preferences, this paper analyzes the secondary reshaping of classical literary characters in modern works and its logical contradictions." 
        },

        { 
            id: "literature-2013-lost-meaning",
            title: "桃花源失落的意义", 
            title_en: "The Lost Meaning of the Peach Blossom Spring",
            date: "2013-10-28", 
            link: "https://www.douban.com/note/312943392", 
            excerpt: "桃花源的消失，既是作者现实失意的寄托，也是为了让理想在得不到的神秘想象中保持永恒。",
            excerpt_en: "The disappearance of the Peach Blossom Spring serves both as an expression of the author's disillusionment with reality and as a means of preserving the ideal in the mysterious realm of the unattainable, thus ensuring its eternal existence." 
        }
    ],

    // 游戏 GAMES
    games: [
        { 
            id: "games-2024-black-myth-wukong-analysis",
            title: "《黑神话：悟空》剧情不合理之处分析", 
            title_en: "Analysis of Narrative Inconsistencies in Black Myth: Wukong",
            date: "2024-12-31", 
            link: "https://www.zhihu.com/question/8106790581/answer/68366258300", 
            excerpt: "从文学、政治组织学、历史学角度分析《黑神话：悟空》剧情中关于权力逻辑的不合理之处。",
            excerpt_en: "An analysis of the flawed logic of power within the plot of 'Black Myth: Wukong' through the lenses of literature, political science, and history." 
        }
    ],

    // 心理学 PSYCHOLOGY
    psychology: [
        { 
            id: "psychology-2026-explorations-into-mental-health-issues",
            title: "对于人工智能时代的心理健康问题的一些探讨", 
            title_en: "Some Explorations into Mental Health Issues in the Age of Artificial Intelligence",
            date: "2026-05-04", 
            link: "https://www.zhihu.com/question/2034614995724543663/answer/2034637814399243311", 
            excerpt: "本文探讨了人工智能对人类心理的影响及我们该如何应对这些影响。",
            excerpt_en: "This article explores the psychological impact of artificial intelligence on humans and how we should address these effects." 
        },
        { 
            id: "psychology-2025-analysis-of-the-reasons-why-Feng-Ji-is-single",
            title: "对于冯骥单身原因的分析", 
            title_en: "An Analysis of the Reasons Behind Feng Ji's Single Status",
            date: "2025-10-17", 
            link: "https://www.zhihu.com/question/1953824312189498496/answer/1953831422633705608", 
            excerpt: "本文尝试构建了冯骥的心理画像并对其单身原因进行了分析。",
            excerpt_en: "Attempting to construct a psychological profile of Feng Ji and analyzing the factors contributing to his single life." 
        },
        { 
            id: "psychology-2024-intj-intp-neural-basis",
            title: "INTJ/INTP 的神经基础探究", 
            title_en: "The Neural Basis of INTJ/INTP Personalities",
            date: "2024-08-15", 
            link: "https://www.zhihu.com/question/656406989/answer/3503330735", 
            excerpt: "INTJ/INTP 性格类型的形成可能和造成大脑新皮质扩张有关的基因有关。",
            excerpt_en: "The formation of INTJ/INTP personality types may be related to genes that cause the expansion of the brain's neocortex." 
        },

        { 
            id: "psychology-2021-dopamine-and-national-character",
            title: "多巴胺和民族性格", 
            title_en: "Dopamine and National Character",
            date: "2021-09-04", 
            link: "https://www.zhihu.com/question/380200645/answer/2072678502", 
            excerpt: "本文探究了不同单胺相关基因在不同民族群体中的差异及对于民族群体整体个性的潜在影响。",
            excerpt_en: "This article explores the differences in various monoamine-related genes across different ethnic groups and their potential impact on the overall personality of these ethnic groups." 
        }
    ],

    // 人工智能 AI
    ai: [
        { 
            id: "ai-2026-some-observations-on-the-depreciation",
            title: "对于人工智能时代人类劳动价值贬值现象的一些观察", 
            title_en: "Some Observations on the Depreciation of Human Labor Value in the AI ​​Era",
            date: "2026-05-21", 
            link: "https://www.zhihu.com/question/2021541763731464677/answer/2040910198185906918", 
            excerpt: "本文探讨了人工智能时代人类劳动价值贬值及阶级固化等现象，剖析了其对人类多巴胺奖赏机制和自我价值感带来的心理危机。",
            excerpt_en: "This article explores phenomena such as the devaluation of human labor and social stratification in the AI era, analyzes the psychological crises it inflicts on human dopamine reward mechanisms and self-worth." 
        },
        { 
            id: "ai-2023-nature-of-intelligence",
            title: "关于智能的本质及超越人类的智能的思考", 
            title_en: "Reflections on the Nature of Intelligence and Superintelligence",
            date: "2023-06-19", 
            link: "https://zhuanlan.zhihu.com/p/637286356", 
            excerpt: "本文深入探讨了智能的数学与神经本质，指出智能、自由意志与意识可以相互剥离，并前瞻性地构想了人类通过基因与材料调控智能，以及超级机器智能的未来演进形态。",
            excerpt_en: "This article deeply explores the mathematical and neural nature of intelligence, pointing out that intelligence, free will, and consciousness can be decoupled, while forward-looking conceiving the future evolution of human intelligence via genetic and material modulation, as well as super machine intelligence." 
        },
        { 
            id: "ai-2023-llm-neuroscience-mechanisms",
            title: "大语言模型背后的神经科学机制", 
            title_en: "Neuroscientific Mechanisms Behind Large Language Models",
            date: "2023-06-11", 
            link: "https://zhuanlan.zhihu.com/p/636138307", 
            excerpt: "探讨大语言模型相关的神经科学研究。",
            excerpt_en: "Exploring current neuroscientific research pertaining to the emergent properties and structures of Large Language Models." 
        }
    ],

    // 评论 REVIEW
    reviews: [
        { 
            id: "reviews-2017-angels-wear-white-film-critique",
            title: "游走于现实与隐喻之间：评《嘉年华》的叙事得失", 
            // 如果你希望 title_en 里的电影名也带上引号，也可以把它变成：...of \"Angels Wear White\"
            title_en: "Between Reality and Metaphor: On the Narrative Success and Shortcomings of Angels Wear White",
            date: "2017-11-05", 
            link: "https://movie.douban.com/review/8905450/", 
            excerpt: "本文从情节张力、人物塑造和符号隐喻三个维度，剖析了电影《嘉年华》在展现女性觉醒过程中的艺术尝试与叙事缺憾。",
            // 下方单引号已改为 \" \" 格式
            excerpt_en: "This review analyzes the artistic attempts and narrative shortcomings of the film \"Angels Wear White\" (Carnival) from the perspectives of plot tension, characterization, and symbolic metaphors." 
        },

        {
            id: "reviews-2016-big-fish-and-begonia-film-critique",
            title: "探寻《大鱼海棠》世界观与价值观的进阶可能",
            title_en: "Exploring the Potential Advancement of Worldview and Values in \"Big Fish & Begonia\"",
            date: "2016-08-04",
            link: "https://movie.douban.com/review/8023196/", 
            excerpt: "本文分析了角色行为动机的内在逻辑。同时指出影片在世界观、人生观和思想深度上存在格局较小的局限，并提出了通过深化哲学探讨、融入《庄子》思想及避免“刻奇”来提升电影质感的改进建议。",
            excerpt_en: "This review analyzes the internal logic of the characters' behaviors. It also addresses the film's limited scope in its worldview, life philosophy, and ideological depth, suggesting that the film's quality could be elevated by deepening its philosophical reflections, integrating Zhuangzi's philosophy, and avoiding 'kitsch'."
        },

        {
            "id": "reviews-2015-the-lost-tomb-tv-series-critique",
            "title": "从叙事失格到影像降级：全景剖析《盗墓笔记》的艺术溃败",
            "title_en": "From Narrative Failure to Visual Downgrade: A Panoramic Analysis of the Artistic Collapse in \"The Lost Tomb\"",
            "date": "2015-06-13",
            "link": "https://www.douban.com/group/topic/76348404/?_i=2170367KfhBKv2",
            "excerpt": "本文从剧作（角色塑造、剧情逻辑）、调色、摄影、特效、造型和录音等多个维度，全方位剖析了《盗墓笔记》季播剧先导集因缺乏诚意和制作粗糙而导致的问题与艺术缺憾。",
            "excerpt_en": "This review comprehensively analyzes the poor production quality and lack of sincerity in the pilot episodes of \"The Lost Tomb\" TV series from multiple dimensions, including screenwriting, color grading, cinematography, visual effects, styling, and sound recording."
        },

        { 
            id: "reviews-2014-nymphomaniac-vol-ii-film-critique",
            title: "反庸俗化的女权主义及无性恋相关话题", 
            title_en: "Anti-vulgarization Feminism and Topics Related to Sexuality",
            date: "2014-06-27", 
            link: "https://movie.douban.com/review/6718902/", 
            excerpt: "本文结合电影《女性瘾者：第二部》中角色对话，探讨了女权主义与‘庸俗化女权主义’的界限，并分析了无性恋、禁欲主义的心理机制及影片结局的合理性。",
            excerpt_en: "This review discusses the boundary between feminism and 'vulgarized feminism' based on 'Nymphomaniac: Vol. II', and analyzes the psychological mechanisms of asexuality, asceticism, and the movie's ending." 
        }
    ],

    // 其他
    other: [
        { 
            id: "other-2026-long-network-city-planning-proposal-phase-1",
            title: "长寿网络城市规划书（第一阶段）", 
            title_en: "Longevity Network City Planning Proposal (Phase 1)",
            date: "2026-04-05", 
            // 中文内部的单引号改成了中文双引号 “ ”，不需要转义
            excerpt: "指出 Viva City 的现有局限，并为其规划了向数字化“网络城市”转型的组织架构、居民服务及用户增长策略。",
            // 英文内部的单引号改成了反斜杠转义的 \" \"
            excerpt_en: "This proposal identifies the limitations of Viva City and outlines a strategic framework to transition it into a digital \"Network City\" with robust organizational structures and user growth plans." 
        }
        
    ]
};