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
            title_en: "Discussions related to human cloning",
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
            title_en: "Reflections after reading Cheng Meixin's 'Qiu Zhijie is merely a bridesmaid at the wedding'", 
            date: "2014-07-04", 
            link: "https://www.douban.com/note/366053345", 
            excerpt: "本文通过反驳程美信关于“艺术必须通过政治对抗才能获得自由”的观点，论证了艺术价值的多元本质，并指出将政治标准作为评判艺术唯一尺度的做法本身就是一种思维的局限。",
            // 内部改为单引号
            excerpt_en: "This article refutes Cheng Meixin's view that 'art must achieve freedom through political confrontation', arguing for the multifaceted nature of artistic value and pointing out that using political criteria as the sole measure for judging art is itself a limitation of thought." 
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
            title_en: "Dopamine and national character",
            date: "2021-09-04", 
            link: "https://www.zhihu.com/question/380200645/answer/2072678502", 
            excerpt: "本文探究了不同单胺相关基因在不同民族群体中的差异及对于民族群体整体个性的潜在影响。",
            excerpt_en: "This article explores the differences in various monoamine-related genes across different ethnic groups and their potential impact on the overall personality of these ethnic groups." 
        }
    ],

    // 人工智能 AI
    ai: [
        { 
            id: "ai-2023-nature-of-intelligence",
            title: "关于智能的本质及超越人类的智能的思考", 
            title_en: "Reflections on the Nature of Intelligence and Superintelligence",
            date: "2023-06-19", 
            link: "https://zhuanlan.zhihu.com/p/637286356", 
            excerpt: "定义智能的底层代码：当碳基经验遭遇硅基算力，智能是否能摆脱生物性的枷锁？",
            excerpt_en: "Defining the underlying code of intelligence: Can intelligence break free from biological shackles when carbon-based experience meets silicon-based computing power?" 
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
    ]
};