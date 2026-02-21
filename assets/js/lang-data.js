/**
 * YAMU Site UI Translation Dictionary lang-data.js
 * 
 * 包含网站所有静态 UI 元素的双语对照
 * 使用 key 在 HTML 元素中通过 data-i18n="key" 绑定
 */

const uiTranslations = {
    "zh": {
        /* --- 全局导航 & 页脚 --- */
        "nav_back_nexus": "Back To Nexus",
        "nav_return_layer": "Return To Layer",
        "sound_on": "SOUND: ON",
        "sound_off": "SOUND: OFF",
        
        // [修正] 中文模式：CN 高亮 (text-white)
        "lang_switch": "<span class='text-white'>CN</span> / EN",
        
        "initiate_partnership": "INITIATE PARTNERSHIP",
        "footer_rights": "© 2025 YAMU | 生物科技 & 人文 & 艺术",

        /* --- 首页 (Index) --- */
        "hero_line_1": "人类有限的人生，",
        "hero_line_2": "怎么能满足我无尽的好奇心呢？",
        "hero_subtitle": "Curiosity Is the Only Cure for Entropy", 
        
        "card_01_label": "01 / Organic Layer",
        "card_01_title": "生命科学",
        "card_01_desc": "抗衰老机制研究、论文集及生物科普。从第一性原理出发，构建通往长生的潜在路径。",
        "card_01_action": "Access Repository ->",

        "card_02_label": "02 / Logic Layer",
        "card_02_title": "思辨之林",
        "card_02_desc": "人工智能机制分析、人格心理学与哲学评论。探索智能边界，解析后人类时代的意识代码。",
        "card_02_action": "Read Essays ->",

        "card_03_label": "03 / Perception Layer",
        "card_03_title": "感官重构",
        "card_03_desc": "3D 渲染、摄影与绘画。以视觉语言赋予深刻思考具象之美，复刻世界原貌。",
        "card_03_action": "View Gallery ->",

        "card_04_label": "04 / Narrative Layer",
        "card_04_title": "叙事实验",
        "card_04_desc": "散文、诗词、小说创作。在无尽好奇心驱动下，构建超越当下维度的平行现实空间。",
        "card_04_action": "Explore Worlds ->",

        /* --- Layer 01: 生命科学 (Bio-Code) --- */
        "layer_01_tag": "Layer 01 / Organic",
        "bio_page_title": "生命科学与抗衰老研究",
        "bio_page_desc": "从第一性原理出发，解析生物衰老的底层程序。构建通往长生的潜在路径。",
        "bio_repo_label": "Academic Repository", 
        "bio_insights_label": "Public Insights",   
        "bio_repo_peer": "Peer Reviewed",
        "bio_repo_pub": "Published",

        /* --- Layer 02: 思辨之林 (Logic-Matrix) --- */
        "layer_02_tag": "Layer 02 / Logic Matrix",
        "logic_page_title": "思辨之林",
        "logic_page_desc": "跨越学科的边界，在哲学与技术的交汇点上寻找逻辑的共振。",
        "read_analysis": "Read Analysis",
        
        "filter_all": "ALL / 全部",
        "filter_phi": "PHILOSOPHY / 哲学",
        "filter_art": "ART / 艺术",
        "filter_lit": "LITERATURE / 文学",
        "filter_games": "GAMES / 游戏",
        "filter_psy": "PSYCHOLOGY / 心理学",
        "filter_ai": "AI / 人工智能",

        /* --- Layer 03: 感官重构 (Visual-Synapse) --- */
        "layer_03_tag": "Layer 03 / Perception",
        "gallery_page_title": "感官重构",
        "gallery_page_desc": "以视觉语言赋予深刻思考具象之美。通过 3D 渲染、实验视觉与摄影，复刻世界的本质。",
        
        "gal_filter_all": "ALL",
        "gal_filter_render": "3D RENDER",
        "gal_filter_anim": "3D ANIM",
        "gal_filter_fractal": "FRACTAL",
        "gal_filter_photo": "PHOTO",
        "gal_filter_gamephoto": "GAME PHOTO",
        "gal_filter_video": "VIDEO",
        "gal_filter_fineart": "FINE ART",
        "gal_filter_cg": "CG ART",


         /* --- Layer 04: 叙事实验--- */
        "filter_poetry": "POETRY / 诗词",
        "filter_novel": "NOVEL / 小说",
        "filter_prose": "PROSE / 散文",
        
        "art_meta_date": "DATE: ",
        "art_meta_author": " / AUTHOR: YAMU",
        "art_orig_source": "Original Source",
        "art_loading": "载入中...",
        "art_end": "End of File / Return to Top",

        /* --- Profile 个人主页 --- */
        "profile_tag": "Researcher & Creator",
        "profile_name": "雅牧",
        "profile_motto": "“人类有限的人生，怎么能满足我无尽的好奇心呢？”",
        "profile_mission": "我看到了我的使命，我看到无数生命和物种的兴衰都难逃死亡和灭绝的终极命运，我看到了人类是如何从阿法南方古猿一步步演化成智人的，我看到了本世纪人类作为智慧生命治愈衰老的希望，我们终将战胜衰老，谱写生命的奇迹。",
        "profile_bio_label": "CORE BIOGRAPHY",
        "profile_bio_art_title": "跨界背景",
        "profile_bio_art_desc": "毕业于中国美术学院。一位穿梭于艺术与科学之间的探索者。不仅深耕艺术实践与艺术理论，更在细胞生物学领域拥有经年累月的研究积累。",
        "profile_bio_bio_title": "生命科学",
        "profile_bio_bio_desc": "在细胞生物学领域有过同行评审期刊发表经历。目前研究聚焦于抗衰老理论与技术，试图从微观层面寻找延缓熵增的路径。",
        "profile_bio_hum_title": "人文与思辨",
        "profile_bio_hum_desc": "广泛涉猎文学、哲学、历史与心理学。习惯以长文评论的形式，剖析从文学构思到电子游戏叙事结构，以及人工智能对人类文明的冲击。",
        "profile_skill_art_label": "ART & VISUALS",
        "profile_skill_art_desc": "精通架上绘画、 CG 技术与摄影，擅长跨媒体方案设计。",
        "profile_skill_tech_label": "TECH & LOGIC",
        "profile_skill_tech_desc": "擅长生物实验设计，精通多种计算机软件，具备全栈开发能力。",
        "profile_skill_life_label": "LIFESTYLE",
        "profile_skill_life_desc": "生活是另一种形式的艺术创作。",

        "t_s_sketch":"素描", "t_s_water":"水彩", "t_s_3dm":"3D 建模", "t_s_3da":"3D 动画", "t_s_cg":"CG 板绘", "t_s_ph":"摄影", "t_s_vid":"摄像", "t_s_cm":"跨媒体艺术", "t_s_ai":"AI 绘画",
        "t_s_code":"编程", "t_s_quan":"量化交易", "t_s_game":"游戏开发", "t_s_agent":"智能体开发", "t_s_bioe":"生物工程", "t_s_cell":"细胞生物学", "t_s_drug":"计算机辅助药物设计",
        "t_s_hand":"手工", "t_s_cook":"料理", "t_s_bake":"烘焙"

    },

    "en": {
        /* --- Global Nav & Footer --- */
        "nav_back_nexus": "Back To Nexus",
        "nav_return_layer": "Return To Layer",
        "sound_on": "SOUND: ON",
        "sound_off": "SOUND: OFF",
        
        // [修正] 英文模式：EN 高亮 (text-white)
        "lang_switch": "CN / <span class='text-white'>EN</span>",
        
        "initiate_partnership": "INITIATE PARTNERSHIP",
        "footer_rights": "© 2025 YAMU | BIOTECH & HUMANITIES & ART",

        /* --- Home (Index) --- */
        // [修正] 大标题改为全大写，视觉更统一
        "hero_line_1": "HUMAN LIFE IS FINITE,",
        "hero_line_2": "HOW CAN IT SATISFY MY INFINITE CURIOSITY?",
        "hero_subtitle": "CURIOSITY IS THE ONLY CURE FOR ENTROPY",

        "card_01_label": "01 / Organic Layer",
        "card_01_title": "LIFE SCIENCES",
        "card_01_desc": "Anti-aging mechanism research, paper collections, and popular science articles on biology. Building a potential path to longevity from first principles.",
        "card_01_action": "Access Repository ->",

        "card_02_label": "02 / Logic Layer",
        "card_02_title": "LOGIC MATRIX",
        "card_02_desc": "AI mechanism analysis, game narrative reviews, personality psychology, and philosophical commentary. Exploring the boundaries of intelligence.",
        "card_02_action": "Read Essays ->",

        "card_03_label": "03 / Perception Layer",
        "card_03_title": "VISUAL SYNAPSE",
        "card_03_desc": "3D rendering, photography, and painting. Endowing profound thoughts with concrete beauty through visual language.",
        "card_03_action": "View Gallery ->",

        "card_04_label": "04 / Narrative Layer",
        "card_04_title": "NARRATIVE ARC",
        "card_04_desc": "Essays, poetry, and fiction. Constructing parallel reality spaces beyond the current dimension, driven by endless curiosity.",
        "card_04_action": "Explore Worlds ->",

    /* --- Layer 01: Bio-Code --- */
        "layer_01_tag": "Layer 01 / Organic Layer",
        
        "bio_page_title": "Life Science",
        "bio_page_desc": "Decoding the underlying program of biological aging from first principles. Building a potential path to longevity.",
        "bio_repo_label": "Academic Repository",
        "bio_insights_label": "Public Insights",
        "bio_repo_peer": "Peer Reviewed",
        "bio_repo_pub": "Published",

        /* --- Layer 02: Logic-Matrix --- */
        "layer_02_tag": "Layer 02 / Logic Matrix",
        "logic_page_title": "Logic Matrix",
        "logic_page_desc": "Finding logical resonance at the intersection of philosophy and technology, crossing disciplinary boundaries.",
        "read_analysis": "Read Analysis",

        "filter_all": "ALL / 全部",
        "filter_phi": "PHILOSOPHY / 哲学",
        "filter_art": "ART / 艺术",
        "filter_lit": "LITERATURE / 文学",
        "filter_games": "GAMES / 游戏",
        "filter_psy": "PSYCHOLOGY / 心理学",
        "filter_ai": "AI / 人工智能",

        /* --- Layer 03: Visual-Synapse --- */
        "layer_03_tag": "Layer 03 / Perception",
        "gallery_page_title": "Visual Synapse",
        "gallery_page_desc": "Endowing profound thoughts with concrete beauty through visual language. Replicating the essence of the world.",

        "gal_filter_all": "ALL",
        "gal_filter_render": "3D RENDER",
        "gal_filter_anim": "3D ANIM",
        "gal_filter_fractal": "FRACTAL",
        "gal_filter_photo": "PHOTO",
        "gal_filter_gamephoto": "GAME PHOTO",
        "gal_filter_video": "VIDEO",
        "gal_filter_fineart": "FINE ART",
        "gal_filter_cg": "CG ART",

        /* --- Dossier --- */
        "art_meta_date": "DATE: ",
        "art_meta_author": " / AUTHOR: YAMU",
        "art_orig_source": "Original Source",
        "art_loading": "Loading Data Stream...",
        "art_end": "End of File / Return to Top",


        /* --- Profile 个人主页 --- */
        "profile_tag": "Researcher & Creator",
        "profile_name": "YAMU",
        "profile_motto": "“How can a limited human lifespan satisfy my boundless curiosity?”",
        "profile_mission": "I see my mission; I see the rise and fall of countless lives and species bound by the ultimate fate of death and extinction. I see how humanity evolved from Australopithecus to Homo sapiens, and I see the hope for humanity to cure aging in this century. We will eventually overcome aging and write the miracle of life.",
        "profile_bio_label": "CORE BIOGRAPHY",
        "profile_bio_art_title": "Interdisciplinary Background",
        "profile_bio_art_desc": "A graduate of the China Academy of Art, exploring the intersection of art and science. Deeply engaged in both artistic theory and cell biology research with years of accumulation.",
        "profile_bio_bio_title": "Life Sciences",
        "profile_bio_bio_desc": "Contributor to peer-reviewed journals in cell biology. Current research focuses on anti-aging mechanisms and finding pathways to delay entropy at a microscopic level.",
        "profile_bio_hum_title": "Humanities & Inquiry",
        "profile_bio_hum_desc": "Extensive interest in literature, philosophy, and psychology. Analyzing everything from narrative structures in games to the impact of AI on civilization through long-form commentary.",
        "profile_skill_art_label": "ART & VISUALS",
        "profile_skill_art_desc": "Proficient in fine arts, CG techniques, and photography. Expert in cross-media design.",
        "profile_skill_tech_label": "TECH & LOGIC",
        "profile_skill_tech_desc": "Expertise in biological experiment design, proficient in multiple software, with full-stack development capabilities.",
        "profile_skill_life_label": "LIFESTYLE",
        "profile_skill_life_desc": "Life is another form of artistic creation.",

        "t_s_sketch":"Sketch", "t_s_water":"Watercolor", "t_s_3dm":"3D Modeling", "t_s_3da":"3D Animation", "t_s_cg":"Digital Painting", "t_s_ph":"Photography", "t_s_vid":"Videography", "t_s_cm":"Intermedia Art", "t_s_ai":"AI Generation",
        "t_s_code":"Programming", "t_s_quan":"Quant Trading", "t_s_game":"Game Dev", "t_s_agent":"AI Agents", "t_s_bioe":"Bio-Engineering", "t_s_cell":"Cell Biology", "t_s_drug":"CADD",
        "t_s_hand":"Handicraft", "t_s_cook":"Cuisine", "t_s_bake":"Baking"

    }
};