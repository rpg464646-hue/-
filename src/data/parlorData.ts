import { MahjongTable, GamePost, MenuItem, TaiRule } from '../types';

export const INITIAL_TABLES: MahjongTable[] = [
  {
    id: 'tbl-vip-01',
    number: 'VIP 01',
    name: '天和・天字壹號尊爵旗艦房',
    roomType: 'vip',
    typeLabel: 'VIP獨立旗艦包廂',
    capacity: '4-8 人 (含觀賽茶席沙發)',
    hourlyRate: 750,
    status: 'available',
    features: [
      '雀友四口過山車四代降噪自動麻將桌',
      '日本加厚42mm烏金晶瓷磁吸牌',
      '醫療級獨立全熱交換排煙新風系統',
      '75吋4K劇院電視 + Switch遊戲機',
      '專屬獨立乾濕分離衛浴',
      '原木功夫茶席 & 專人茶道服務'
    ],
    specs: {
      tableModel: '雀友 Coaster-IV 靜音自動過山車桌',
      tiles: '日本特注 42mm 重感晶瓷玉石綠牌',
      ventilation: '大金獨立新風換氣 + 活性碳除煙機',
      seating: '頭層牛皮人體工學高背電競按摩椅',
      entertainment: '75吋 4K HDR 智慧連網影音劇院'
    },
    image: '/src/assets/images/vip_mahjong_room_1793957191953.jpg'
  },
  {
    id: 'tbl-vip-02',
    number: 'VIP 02',
    name: '九蓮・九寶私密景觀雅閣',
    roomType: 'vip',
    typeLabel: 'VIP獨立旗艦包廂',
    capacity: '4-6 人',
    hourlyRate: 680,
    status: 'in_use',
    estimatedAvailableTime: '21:30 (約剩餘 40 分鐘)',
    features: [
      '雀友過山車自動發牌機 (雙骰連動)',
      '靜音微波烘乾除菌牌洗牌槽',
      '窗景綠意採光與溫控空調',
      '獨立冷飲小冰箱 + 雀巢膠囊咖啡機',
      '人體工學透氣真皮躺椅'
    ],
    specs: {
      tableModel: '雀友 Coaster-III 升降降噪靜音款',
      tiles: '台灣特製 36mm 象牙白賽璐珞麻將',
      ventilation: 'Panasonic nanoeX 空氣除味淨化系統',
      seating: '人體工學無重力高背主管椅'
    },
    image: '/src/assets/images/hero_mahjong_parlor_1793957191674.jpg'
  },
  {
    id: 'tbl-ste-01',
    number: '雅閣 01',
    name: '清一色・雅緻靜音包廂',
    roomType: 'suite',
    typeLabel: '雅緻私密包廂',
    capacity: '4 人專屬',
    hourlyRate: 480,
    status: 'available',
    features: [
      '全新靜音四口自動麻將機',
      '獨立分體變頻冷暖空調',
      '手機無線快充盤與多孔插座',
      '隔音雙層玻璃門隔絕干擾',
      '無限暢飲高山烏龍冷泡茶'
    ],
    specs: {
      tableModel: '東方不敗 尊爵四口自動桌',
      tiles: '加重型 36mm 翡翠墨綠背牌',
      ventilation: '雙向靜音換氣抽風循環風管',
      seating: '多段可調腰靠透氣網布電競椅'
    },
    image: '/src/assets/images/mahjong_craft_tiles_1793957192556.jpg'
  },
  {
    id: 'tbl-ste-02',
    number: '雅閣 02',
    name: '大三元・和風禪意包廂',
    roomType: 'suite',
    typeLabel: '雅緻私密包廂',
    capacity: '4-5 人',
    hourlyRate: 480,
    status: 'reserved',
    estimatedAvailableTime: '22:00 已被預約',
    features: [
      '雀友旋轉雙升降自動麻將機',
      '原木隔音木質飾板',
      '桌邊置杯防傾倒茶幾架',
      '電子籌碼計分螢幕輔助',
      '提供專屬充電線材'
    ],
    specs: {
      tableModel: '雀友 旋風II代 磁吸靜音機',
      tiles: '36mm 象牙米黃玉石牌',
      ventilation: 'HEPA 13 級醫療空氣清淨機',
      seating: '加大座墊厚實人體工學輪椅'
    },
    image: '/src/assets/images/vip_mahjong_room_1793957191953.jpg'
  },
  {
    id: 'tbl-std-01',
    number: '大廳 A01',
    name: '雀聖堂・競技開放桌 A',
    roomType: 'standard',
    typeLabel: '競技開放大廳',
    capacity: '4 人',
    hourlyRate: 320,
    status: 'available',
    features: [
      '全新四口自動桌，洗牌只需3秒',
      '館內競技計分標準尺寸',
      '冷暖空調舒適恆溫環境',
      '自助吧雀巢咖啡、經典茶包無限取用'
    ],
    specs: {
      tableModel: '東方不敗 雲雀快打自動桌',
      tiles: '36mm 經典竹絲青背牌',
      ventilation: '全館中央空調全熱交換',
      seating: '高回彈泡棉電競椅'
    },
    image: '/src/assets/images/hero_mahjong_parlor_1793957191674.jpg'
  },
  {
    id: 'tbl-std-02',
    number: '大廳 A02',
    name: '雀王座・競技開放桌 B',
    roomType: 'standard',
    typeLabel: '競技開放大廳',
    capacity: '4 人',
    hourlyRate: 320,
    status: 'in_use',
    estimatedAvailableTime: '20:45 (約剩餘 15 分鐘)',
    features: [
      '雀友四口超靜音自動麻將機',
      '全館高速Wi-Fi 6覆蓋',
      '座位獨立插座與USB孔',
      '平價透明計費（單人每小時僅80元）'
    ],
    specs: {
      tableModel: '雀友 自動升降桌 典藏版',
      tiles: '36mm 翡翠金絲背牌',
      ventilation: '全館中央靜音除塵通風',
      seating: '高支撐力電競皮椅'
    },
    image: '/src/assets/images/mahjong_craft_tiles_1793957192556.jpg'
  }
];

export const INITIAL_GAMES: GamePost[] = [
  {
    id: 'game-01',
    title: '【今晚熱門】台北傳統16張 300/100 歡樂牌局',
    hostName: '陳會長 (牌齡12年)',
    gameType: '台麻16張',
    stakes: '300底 / 100台',
    ruleNotes: ['打二將 (四圈)', '有鐵八', '見光死', '門清無自摸有算', '全館嚴禁吸菸'],
    targetPlayers: 4,
    currentPlayers: 3,
    startTime: '今晚 20:30',
    roomName: '雅閣 01 靜音包廂',
    isSmoking: false,
    signedUpUsers: ['陳會長', '小林 (大安區)', '阿豪'],
    tag: '3缺1 · 急尋雀友'
  },
  {
    id: 'game-02',
    title: '【週末微醺休閒】100/20 新手友善練功局',
    hostName: 'Emma 姊',
    gameType: '台麻16張',
    stakes: '100底 / 20台',
    ruleNotes: ['新手可問牌', '節奏悠閒輕鬆', '打一將約2小時', '點心茶水自選', '禁止催牌'],
    targetPlayers: 4,
    currentPlayers: 2,
    startTime: '今日 21:15',
    roomName: '雅閣 03 舒適包廂',
    isSmoking: false,
    signedUpUsers: ['Emma 姊', '大衛'],
    tag: '2缺2 · 友善交流'
  },
  {
    id: 'game-03',
    title: '【高階技術流】500/200 緊湊快打賽',
    hostName: '黑桃K',
    gameType: '台麻16張快打',
    stakes: '500底 / 200台',
    ruleNotes: ['思考限時8秒', '連莊拉莊無上限', '嚴禁過水', '打三將', '打完結算'],
    targetPlayers: 4,
    currentPlayers: 3,
    startTime: '今晚 22:00',
    roomName: 'VIP 01 旗艦包廂',
    isSmoking: false,
    signedUpUsers: ['黑桃K', '雀神阿凱', 'Tony'],
    tag: '3缺1 · 高手過招'
  },
  {
    id: 'game-04',
    title: '【日麻愛好者】四人東南戰段位模擬局',
    hostName: '雀魂豪傑・佐藤',
    gameType: '日麻四人東',
    stakes: '以點棒計算 (純技術交流)',
    ruleNotes: ['有食斷、赤寶牌', '有後付け', '點數棒結算', '日麻新手歡迎指導'],
    targetPlayers: 4,
    currentPlayers: 2,
    startTime: '明日 14:00',
    roomName: '雅閣 02 靜音包廂',
    isSmoking: false,
    signedUpUsers: ['雀魂豪傑・佐藤', 'Kenji'],
    tag: '2缺2 · 日麻推廣'
  }
];

export const TAI_RULES: TaiRule[] = [
  // 常見與基本
  { id: 'tai-dealer', name: '莊家', tai: 1, category: 'common', description: '做莊者胡牌或放銃，加計 1 台' },
  { id: 'tai-dealer-streak', name: '連莊 / 拉莊 (每多一連)', tai: 2, category: 'common', description: '莊家連一為連一拉一 (計 2 台)，連二拉二 (計 4 台)，依此類推 (連N拉N = 2N)' },
  { id: 'tai-menqing', name: '門清', tai: 1, category: 'common', description: '整局牌完全沒有吃、碰、明槓，自己靠自己摸牌和胡' },
  { id: 'tai-zimo', name: '自摸', tai: 1, category: 'common', description: '自己親手摸到胡牌的牌張，三家皆須給點' },
  { id: 'tai-menqing-zimo', name: '門清自摸 (一般算3台)', tai: 1, category: 'common', description: '門清 + 自摸額外獎勵 1 台，合計通稱 3 台 (門清1+自摸1+獎勵1)' },
  { id: 'tai-gang-flower', name: '槓上開花', tai: 1, category: 'common', description: '摸到槓牌或花牌後補牌時正好自摸胡牌' },
  { id: 'tai-qiang-gang', name: '搶槓', tai: 1, category: 'common', description: '別家宣告補明槓時，該張牌正好是你聽的胡牌' },
  { id: 'tai-haidi', name: '海底撈月', tai: 1, category: 'common', description: '摸完海底最後一張自摸胡牌' },
  { id: 'tai-dian-pao-di', name: '海底撈火 (撈魚)', tai: 1, category: 'common', description: '別家摸到最後一張牌打出後被你胡牌' },
  
  // 花牌與字牌
  { id: 'tai-wind-seat', name: '門風牌 (自家風)', tai: 1, category: 'honors', description: '持有與自己座位方位相符的風牌刻子 (東/南/西/北)' },
  { id: 'tai-wind-round', name: '圈風牌 (當前圈)', tai: 1, category: 'honors', description: '持有與當前局風相同的風牌刻子 (如東風圈持東風刻子)' },
  { id: 'tai-dragon-red', name: '紅中', tai: 1, category: 'honors', description: '持有紅中刻子 (三張)' },
  { id: 'tai-dragon-green', name: '青發', tai: 1, category: 'honors', description: '持有青發刻子 (三張)' },
  { id: 'tai-dragon-white', name: '白板', tai: 1, category: 'honors', description: '持有白板刻子 (三張)' },
  { id: 'tai-seat-flower', name: '正花 (正座花牌)', tai: 1, category: 'flowers', description: '持有與自家座位對應號碼的花牌 (東1南2西3北4，春夏秋冬/梅蘭竹菊)' },
  { id: 'tai-flower-gang', name: '花槓 (一套花牌4張)', tai: 2, category: 'flowers', description: '集滿春夏秋冬或梅蘭竹菊整組4張花牌' },
  { id: 'tai-seven-rob-one', name: '七搶一', tai: 8, category: 'flowers', description: '手牌已有7張花牌，別家摸到第8張補花時直接胡牌 (視為自摸8台)' },
  { id: 'tai-eight-immortals', name: '八仙過海 (摸齊8張花)', tai: 8, category: 'flowers', description: '一人獨得春夏秋冬梅蘭竹菊全部8張花牌，直接自摸胡牌 (8台)' },

  // 特殊牌型
  { id: 'tai-pinghu', name: '平胡', tai: 2, category: 'patterns', description: '全由順子組成、無字牌、無花牌、聽兩頭，非自摸' },
  { id: 'tai-pengpenghu', name: '碰碰胡 (全求對子刻子)', tai: 4, category: 'patterns', description: '手牌全是刻子 (或槓子) 加一對眼，無順子' },
  { id: 'tai-hun-yi-se', name: '混一色 (花色+字牌)', tai: 4, category: 'patterns', description: '整副手牌僅由一種花色 (萬/筒/索) 加上字牌組成' },
  { id: 'tai-qing-yi-se', name: '清一色 (純單一花色)', tai: 8, category: 'patterns', description: '整副手牌純由單一花色 (全萬、全筒或全索) 組成，無任何字牌' },
  { id: 'tai-three-ankou', name: '三暗刻', tai: 2, category: 'patterns', description: '手牌中有三組自己摸成且未吃碰對手的暗刻' },
  { id: 'tai-four-ankou', name: '四暗刻', tai: 5, category: 'patterns', description: '手牌中有四組自己摸成的暗刻' },
  { id: 'tai-five-ankou', name: '五暗刻 (碰碰胡外加)', tai: 8, category: 'patterns', description: '五組刻子全部由自己摸成，威力驚人' },
  { id: 'tai-small-three-dragons', name: '小三元', tai: 4, category: 'patterns', description: '中、發、白其中兩組為刻子，另一組為雀頭 (對子)' },
  { id: 'tai-big-three-dragons', name: '大三元', tai: 8, category: 'patterns', description: '中、發、白三組全為刻子' },
  { id: 'tai-small-four-winds', name: '小四喜', tai: 8, category: 'patterns', description: '東、南、西、北其中三組為刻子，一組為雀頭' },
  { id: 'tai-big-four-winds', name: '大四喜', tai: 16, category: 'patterns', description: '東、南、西、北四組皆為刻子' },
  { id: 'tai-zi-yi-se', name: '字一色', tai: 16, category: 'patterns', description: '整副牌全部由風牌與三元牌等字牌組成' },
  { id: 'tai-liguligu', name: '嚦咕嚦咕 (八對半)', tai: 8, category: 'patterns', description: '16張牌中正好由七組對子加上一組刻子組成' },

  // 滿貫極品大牌
  { id: 'tai-tian-hu', name: '天胡 (莊家起手自摸)', tai: 16, category: 'rare', description: '莊家開局補完花起手配牌即自摸胡牌' },
  { id: 'tai-di-hu', name: '地胡 (閒家第一手摸胡)', tai: 16, category: 'rare', description: '閒家摸進第一張牌未經吃碰即自摸胡牌' },
  { id: 'tai-ren-hu', name: '人胡 (第一輪別家放銃)', tai: 16, category: 'rare', description: '莊家或閒家打出第一張牌，在無人吃碰情況下立即放銃被胡' }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'food-01',
    name: '天和秘傳原汁極品牛肉麵',
    category: 'hot',
    categoryLabel: '熱食御膳',
    price: 240,
    description: '慢火燉煮8小時牛頰肉，搭配特製半筋半肉與刀削彈牙麵，雀友深夜暖胃首選',
    tags: ['招牌必點', '慢燉8小時'],
    popular: true,
    prepTime: '約 10-15 分鐘'
  },
  {
    id: 'food-02',
    name: '黃金酥脆厚切炸豬排丼',
    category: 'hot',
    categoryLabel: '熱食御膳',
    price: 220,
    description: '精選台灣黑毛豚厚切炸至金黃酥香，佐日式滑蛋與甜鹹洋蔥特調醬汁',
    tags: ['主廚力推', '飽足感滿分'],
    popular: true,
    prepTime: '約 12-15 分鐘'
  },
  {
    id: 'food-03',
    name: '麻油古早味松阪豬麵線',
    category: 'hot',
    categoryLabel: '熱食御膳',
    price: 210,
    description: '純正冷壓黑麻油爆香老薑，爽脆松阪豬肉佐手工滑順麵線，元氣大補',
    tags: ['秋冬限定', '香氣撲鼻'],
    popular: false,
    prepTime: '約 10 分鐘'
  },
  {
    id: 'food-04',
    name: '鮮蝦紅油抄手 (10顆)',
    category: 'hot',
    categoryLabel: '熱食御膳',
    price: 160,
    description: '薄皮裹入整隻鮮脆草蝦與黑豬肉餡，淋上特製大紅袍花椒油，麻香爽口',
    tags: ['麻香開胃'],
    popular: true,
    prepTime: '約 8-10 分鐘'
  },
  {
    id: 'food-05',
    name: '正宗港式黑松露蝦皇燒賣 (4入)',
    category: 'snack',
    categoryLabel: '精緻點心',
    price: 150,
    description: '手打鮮蝦肉餡點綴頂級義大利黑松露醬，皮薄餡豐，桌邊享用不沾手',
    tags: ['精選港點', '不沾手設計'],
    popular: true,
    prepTime: '約 8 分鐘'
  },
  {
    id: 'food-06',
    name: '脆皮鹹酥雞歡樂炸物拼盤',
    category: 'snack',
    categoryLabel: '精緻點心',
    price: 260,
    description: '特選無骨雞米花、甜不辣、酥炸杏鮑菇與花枝丸，四人分享絕配',
    tags: ['四人分享', '雀局必備'],
    popular: true,
    prepTime: '約 10 分鐘'
  },
  {
    id: 'food-07',
    name: '焦糖現烤比利時烈日鬆餅',
    category: 'snack',
    categoryLabel: '精緻點心',
    price: 140,
    description: '珍珠糖外脆內軟香甜，附香草冰淇淋與純蜂蜜，下午茶絕配',
    tags: ['甜點療癒'],
    popular: false,
    prepTime: '約 10 分鐘'
  },
  {
    id: 'food-08',
    name: '阿里山特級樟樹湖冷萃烏龍 (瓶裝)',
    category: 'tea',
    categoryLabel: '極品茗茶',
    price: 120,
    description: '低溫慢萃12小時，花果香清雅回甘，清心醒腦、提升牌局專注度',
    tags: ['回甘清甜', '冰鎮解渴'],
    popular: true,
    prepTime: '現點現出'
  },
  {
    id: 'food-09',
    name: '現泡原片桂花高山金萱 (整壺熱飲)',
    category: 'tea',
    categoryLabel: '極品茗茶',
    price: 180,
    description: '自然奶香金萱茶葉融合天然新鮮桂花，可回沖三次，附專屬陶瓷茶具',
    tags: ['可回沖', '暖心養神'],
    popular: true,
    prepTime: '約 5 分鐘'
  },
  {
    id: 'food-10',
    name: '特級衣索比亞耶加雪菲冰滴黑咖啡',
    category: 'cold_drink',
    categoryLabel: '冷萃飲品',
    price: 150,
    description: '柑橘與茉莉花香調性，深層冰滴淬鍊，通宵摸牌的最佳清醒神物',
    tags: ['提神必備', '單品手沖'],
    popular: true,
    prepTime: '現點現出'
  },
  {
    id: 'food-11',
    name: '港式濃茶凍檸茶 (大杯700cc)',
    category: 'cold_drink',
    categoryLabel: '冷萃飲品',
    price: 110,
    description: '正宗錫蘭紅茶底現切黃檸檬暴捶爆汁，酸甜沁涼，解膩暢快',
    tags: ['經典暢銷', '現捶鮮檸'],
    popular: true,
    prepTime: '約 3 分鐘'
  }
];
