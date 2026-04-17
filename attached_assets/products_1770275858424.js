// 제품 데이터
const products = [
    // 답례떡
    {
        id: 1,
        name: "3구답례떡[영양+설기+송편]",
        description: "영양찰떡, 설기, 송편으로 구성된\n프리미엄 답례떡.\n결혼, 돌, 백일 등 특별한 날에\n최적화되어 있습니다.\n고급스러운 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "영양찰떡+백설기+송편.jpg"
    },
    {
        id: 2,
        name: "3구답례떡[백설기+경단+꿀떡]",
        description: "백설기, 경단, 꿀떡으로 구성된\n특별한 답례떡.\n달콤하고 고소한 맛의 조합으로\n어린이들이 좋아하는 구성입니다.\n귀여운 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "경단+백설기+꿀떡.jpg"
    },
    {
        id: 3,
        name: "2구답례떡[영양찰떡+송편]",
        description: "영양찰떡과 송편으로 구성된\n답례떡.\n건강한 영양찰떡과 전통적인\n송편의 조합으로 어른들이\n선호하는 구성입니다.\n가벼운 인사나 소규모 모임에\n제격이며, 고급스러운 포장과\n스티커 서비스가 포함되어\n특별한 선물로 완벽합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "영양+송편2.JPEG"
    },
    {
        id: 4,
        name: "2구답례떡[백설기+경단]",
        description: "백설기와 경단으로 구성된\n답례떡.\n깔끔하고 고급스러운 맛의 조합으로\n비즈니스 선물에 적합합니다.\n고급 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "백설기+경단.jpg"
    },
    {
        id: 5,
        name: "2구답례떡[백설기+송편]",
        description: "백설기와 송편으로 구성된\n답례떡.\n가벼운 인사에 제격이며, 상황에\n맞게 설기 위에 모양을\n올려드립니다.\n스티커도 서비스로 제공됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "백설기+송편 (2).jpg"
    },
    {
        id: 6,
        name: "2구답례떡[백설기+꿀떡]",
        description: "백설기와 꿀떡으로 구성된\n답례떡.\n달콤하고 순수한 맛의 조합으로\n생일이나 기념일 선물에\n제격입니다.\n스티커 서비스가 포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "백설기+꿀떡.jpg"
    },
    {
        id: 7,
        name: "돌/백일떡 상차림세트",
        description: "돌잔치, 백일잔치를 위한\n특별한 상차림세트.\n<strong>구성 내용:</strong>\n• 백설기 16조각: 20,000원\n  (百, 백일, 하트100/ 첫돌, 하트1st\n  모양 가능)\n• 수수팥단지 1접시: 20,000원\n  (40알 내외)\n• 오색 경단 1접시: 14,000원\n  (40-50알)\n• 오색 송편 1접시: 14,000원\n  (35-40알)\n• 오색 꿀떡 1접시: 12,000원\n  (70-80알)\n<strong>총 가격: 80,000원</strong>\n고급 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "돌백일떡 상차림세트.png"
    },
    {
        id: 8,
        name: "4구답례떡",
        description: "4가지 떡으로 구성된\n럭셔리 답례떡.\n최고급 떡들로 구성되어 있어\n특별한 날의 선물로\n최적화되어 있습니다.\n럭셔리 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "gift",
        price: "가격 문의",
        icon: "fas fa-gift",
        image: "4구답례떡.jpg"
    },
    
    // 이바지떡
    {
        id: 9,
        name: "이바지떡 소",
        description: "반말, 2단구성, 60-70개 내외.\n소규모 제사나 차례에 적합하며,\n전통적인 상차림 예법에 맞춰\n구성됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "ceremony",
        price: "₩150,000",
        icon: "fas fa-pray",
        image: "KakaoTalk_20250916_160553448_01.jpg"
    },
    {
        id: 10,
        name: "이바지떡 중",
        description: "1말, 3단구성, 90-100개 내외.\n중간 규모의 제사나 차례에\n적합하며, 3단 구성으로\n풍성한 상차림을 연출합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "ceremony",
        price: "₩200,000",
        icon: "fas fa-pray",
        image: "5호2.JPG"
    },
    {
        id: 11,
        name: "이바지떡 대",
        description: "1말반, 3단구성, 120-130개 내외.\n대규모 제사나 차례에 적합하며,\n3단 구성으로 가장 풍성하고\n고급스러운 상차림을 연출합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "ceremony",
        price: "₩250,000",
        icon: "fas fa-pray",
        image: "thumb-2001098473_tAbKjNxC_c3aa069f48c059bc5b48f50fdeca3a8de29d5f47_835x1113.jpg"
    },
    
    // 떡케이크
    {
        id: 12,
        name: "찰떡케잌",
        description: "3-4가지 찰떡으로 구성된\n특별한 케이크.\n생일, 기념일 등 특별한 날에\n완벽한 선물입니다.\n고급스러운 포장과 케이크\n장식이 포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "cake",
        price: "소 ₩60,000 (40개 내외)\n중 ₩80,000 (60개 내외)\n대 ₩100,000 (80개 내외)",
        icon: "fas fa-birthday-cake",
        image: "찰떡케잌.png",
        images: [
            "찰떡케잌.png",
            "20181201_105930.jpg",
            "20181206_093709.jpg",
            "20181206_093712.jpg",
            "20210313_074825.jpg",
            "1543635519393.jpg",
            "1543635519815.jpg",
            "1543636102227.jpg",
            "IMG_2910.JPG",
            "IMG_4213.JPG"
        ]
    },
    {
        id: 13,
        name: "원형설기케잌",
        description: "호박쌀가루로 가운데 호박고지와\n완두배기, 각종 견과류 포함.\n건강하고 고소한 맛으로\n어린이와 어른 모두가\n좋아하는 설기입니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "cake",
        price: "소 ₩30,000 (지름 20cm)\n중 ₩40,000 (지름 24cm)\n대 ₩55,000 (지름 27cm)",
        icon: "fas fa-birthday-cake",
        image: "원형설기케잌.png"
    },
    {
        id: 14,
        name: "돌,백일 설기",
        description: "돌잔치, 백일잔치에 특별한\n설기케잌.\n전통적인 설기 위에 특별한\n장식을 올려 특별한 날을\n더욱 빛나게 합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "cake",
        price: "소 ₩25,000 (지름 20cm)\n중 ₩30,000 (지름 24cm)\n대 ₩35,000 (지름 27cm)",
        icon: "fas fa-birthday-cake",
        image: "돌백일설기.png"
    },
    
    // 일반떡
    {
        id: 15,
        name: "쑥콩설기",
        description: "서리태, 밤, 호박고지 외\n각종 견과류 등 포함.\n건강한 재료로 만든 고급 설기로\n선물용으로도 인기가 많습니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "traditional",
        price: "1말 ₩130,000 (50조각)\n반말 ₩65,000 (25조각)",
        icon: "fas fa-seedling",
        image: "쑥콩설기.png"
    },
    {
        id: 16,
        name: "인절미",
        description: "쫄깃한 식감의 전통 인절미.\n다양한 종류의 인절미를\n선택할 수 있으며, 개별 포장도\n가능합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "traditional",
        price: "1말 ₩120,000\n반말 ₩65,000",
        icon: "fas fa-rice",
        image: "인절미.png",
        hasSubProducts: true
    },
    {
        id: 17,
        name: "쑥인절미/쑥밥알인절미",
        description: "쑥이 들어간 건강한 인절미",
        category: "traditional",
        price: "1말 ₩130,000\n반말 ₩70,000",
        icon: "fas fa-seedling",
        image: "쑥인절미.png"
    },
    {
        id: 18,
        name: "카스테라 인절미",
        description: "카스테라 맛이 나는 특별한 인절미",
        category: "traditional",
        price: "1말 ₩130,000\n반말 ₩70,000",
        icon: "fas fa-birthday-cake",
        image: "인절미.png"
    },
    {
        id: 19,
        name: "흑임자 인절미",
        description: "흑임자의 고소한 맛이 가득한 인절미",
        category: "traditional",
        price: "1말 ₩140,000\n반말 ₩75,000",
        icon: "fas fa-seedling",
        image: "흑임자인절미.png"
    },
    {
        id: 20,
        name: "로투스설기/커피설기",
        description: "로투스와 커피 맛이 나는 특별한 설기",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각)\n반말 ₩50,000 (8*8: 25조각)",
        icon: "fas fa-coffee",
        image: "로투스설기.png"
    },
    {
        id: 21,
        name: "햄치즈설기",
        description: "햄과 치즈가 들어간 맛있는 설기",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각/ 6*6: 72조각)\n반말 ₩50,000 (8*8: 25조각/ 6*6: 36조각)",
        icon: "fas fa-cheese",
        image: "햄치즈설기.png"
    },
    {
        id: 22,
        name: "쑥모찌",
        description: "쑥이 들어간 건강한 모찌",
        category: "traditional",
        price: "1말 ₩150,000 (90개 내외)\n반말 ₩75,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "쑥모찌.png"
    },
    {
        id: 23,
        name: "블루베리 설기",
        description: "블루베리의 상큼한 맛이 가득한 설기",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각/ 6*6: 72조각)\n반말 ₩50,000 (8*8: 25조각/ 6*6: 36조각)",
        icon: "fas fa-berries",
        image: "블루베리설기.png"
    },
    {
        id: 24,
        name: "떡볶이 떡",
        description: "떡볶이에 최적화된 떡",
        category: "traditional",
        price: "1말 ₩70,000\n반말 ₩40,000",
        icon: "fas fa-utensils",
        image: "떡볶이떡.png"
    },
    {
        id: 25,
        name: "수수팥떡",
        description: "백일, 돌을 비롯해 생일때에 먹는 수수팥떡입니다. 찰수수와 찹쌀을 섞어 직접 반죽하여 팥을 묻힌 정통 수수팥떡입니다.",
        category: "traditional",
        price: "1접시 ₩20,000 (40알 내외)",
        icon: "fas fa-seedling",
        image: "수수팥떡.png"
    },
    {
        id: 26,
        name: "호박설기",
        description: "호박의 고소한 맛이 가득한 설기",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각/ 6*6: 72조각)\n반말 ₩50,000 (8*8: 25조각/ 6*6: 36조각)",
        icon: "fas fa-pumpkin",
        image: "호박설기.png"
    },
    {
        id: 27,
        name: "콩설기",
        description: "서리태, 밤, 호박고지 외 각종 견과류 등 포함",
        category: "traditional",
        price: "1말 ₩120,000 (50조각)\n반말 ₩60,000 (25조각)",
        icon: "fas fa-seedling",
        image: "콩설기.png"
    },
    {
        id: 28,
        name: "흑임자찰떡",
        description: "흑임자의 고소한 맛이 가득한 찰떡",
        category: "traditional",
        price: "1말 ₩150,000 (80개 내외)\n반말 ₩75,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "흑임자찰떡.png"
    },
    {
        id: 29,
        name: "호두찰떡",
        description: "호두의 고소한 맛이 가득한 찰떡",
        category: "traditional",
        price: "1말 ₩150,000 (80개 내외)\n반말 ₩75,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "호두찰떡.png"
    },
    {
        id: 30,
        name: "백설기",
        description: "깨끗하고 순수한 맛의 전통 백설기",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각)\n반말 ₩50,000 (8*8: 25조각)",
        icon: "fas fa-seedling",
        image: "백설기.png"
    },
    {
        id: 31,
        name: "꿀설기",
        description: "꿀의 달콤한 맛이 가득한 설기",
        category: "traditional",
        price: "1말 ₩80,000 (6*6cm: 72조각 / 8*8cm: 50조각)\n반말 ₩45,000 (6*6cm: 36조각 / 8*8cm: 25조각)",
        icon: "fas fa-seedling",
        image: "꿀설기.png"
    },
    {
        id: 32,
        name: "꿀떡",
        description: "꿀을 넣어 만든 달콤한 떡",
        category: "traditional",
        price: "1말 ₩120,000 (80개 내외)\n반말 ₩60,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "꿀떡.png"
    },
    {
        id: 33,
        name: "절편",
        description: "전통적인 절편 떡",
        category: "traditional",
        price: "1말 ₩100,000 (100개 내외)\n반말 ₩50,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "절편.png"
    },
    {
        id: 34,
        name: "가래떡",
        description: "길쭉한 모양의 전통 가래떡",
        category: "traditional",
        price: "1말 ₩80,000 (100개 내외)\n반말 ₩40,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "가래떡.png"
    },
    {
        id: 35,
        name: "송편",
        description: "한가위에 먹는 전통 송편",
        category: "traditional",
        price: "1말 ₩120,000 (100개 내외) / 반말 ₩60,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "송편.png"
    },
    {
        id: 36,
        name: "시루떡",
        description: "시루에 찐 전통 떡",
        category: "traditional",
        price: "1말 ₩100,000 (8*8: 50조각)\n반말 ₩50,000 (8*8: 25조각)",
        icon: "fas fa-seedling",
        image: "시루떡.png"
    },
    {
        id: 37,
        name: "쑥개떡",
        description: "쑥이 들어간 건강한 개떡",
        category: "traditional",
        price: "1말 ₩130,000 (80개 내외)\n반말 ₩65,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "쑥개떡.png"
    },
    {
        id: 38,
        name: "모시떡",
        description: "모시잎으로 감싼 전통 떡",
        category: "traditional",
        price: "1말 ₩110,000 (80개 내외)\n반말 ₩55,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "모시떡.png"
    },
    {
        id: 39,
        name: "증편",
        description: "발효시켜 만든 전통 증편",
        category: "traditional",
        price: "1말 ₩100,000 (80개 내외)\n반말 ₩50,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "증편.png"
    },
    {
        id: 40,
        name: "팥소증편/잔기지떡",
        description: "팥소가 들어간 증편과 잔기지떡",
        category: "traditional",
        price: "1말 ₩120,000 (80개 내외)\n반말 ₩60,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "팥소증편,잔기지떡.png"
    },
    {
        id: 41,
        name: "앙금절편",
        description: "앙금을 넣어 만든 절편",
        category: "traditional",
        price: "1말 ₩110,000 (100개 내외)\n반말 ₩55,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "앙금절편.png"
    },
    {
        id: 42,
        name: "바람떡",
        description: "바람에 말린 전통 떡",
        category: "traditional",
        price: "1말 ₩90,000 (100개 내외)\n반말 ₩45,000 (50개 내외)",
        icon: "fas fa-seedling",
        image: "바람떡.png"
    },
    {
        id: 43,
        name: "약식",
        description: "약밥으로 만든 전통 떡",
        category: "traditional",
        price: "1말 ₩130,000 (80개 내외)\n반말 ₩65,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "약식.png"
    },
    {
        id: 44,
        name: "영양찰떡",
        description: "영양이 풍부한 찰떡",
        category: "traditional",
        price: "1말 ₩140,000 (80개 내외)\n반말 ₩70,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "영양찰떡.png"
    },
    {
        id: 45,
        name: "호박찰떡",
        description: "호박이 들어간 고소한 찰떡",
        category: "traditional",
        price: "1말 ₩130,000 (80개 내외)\n반말 ₩65,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "호박찰떡.png"
    },
    {
        id: 46,
        name: "쑥찰떡",
        description: "쑥이 들어간 건강한 찰떡",
        category: "traditional",
        price: "1말 ₩140,000 (80개 내외)\n반말 ₩70,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "쑥찰떡.png"
    },
    {
        id: 47,
        name: "팥찰떡",
        description: "팥이 들어간 고소한 찰떡",
        category: "traditional",
        price: "1말 ₩130,000 (80개 내외)\n반말 ₩65,000 (40개 내외)",
        icon: "fas fa-seedling",
        image: "팥찰떡.png"
    },
    
    // 선물세트
    {
        id: 48,
        name: "종합2호 찰떡세트",
        description: "2가지 찰떡으로 구성된\n프리미엄 선물세트.\n고급스러운 포장과 스티커\n서비스가 포함되어 특별한\n선물로 완벽합니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "special",
        price: "가격 문의",
        icon: "fas fa-box-open",
        image: "종합2호찰떡세트.png"
    },
    {
        id: 49,
        name: "종합4호 찰떡세트",
        description: "4가지 찰떡으로 구성된\n럭셔리 선물세트.\n최고급 찰떡들의 조합으로\n럭셔리한 선물 경험을\n제공합니다.\n고급 포장과 스티커 서비스가\n포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "special",
        price: "가격 문의",
        icon: "fas fa-box-open",
        image: "종합4호찰떡세트.png"
    },
    {
        id: 50,
        name: "찰떡세트모음",
        description: "다양한 찰떡을 한 번에\n즐길 수 있는 특별한 세트.\n4가지 구성으로 선택의 폭이\n넓으며, 고급 포장과\n스티커 서비스가 포함됩니다.\n자세한 사항은 031-334-0015로\n문의해주세요.",
        category: "special",
        price: "가격 문의",
        icon: "fas fa-box-open",
        image: "찰떡세트모음1.png",
        hasSubProducts: true
    }
];

// 페이지네이션 설정
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let filteredProducts = [...products];
let currentCategory = 'all';

// DOM 요소들 (나중에 초기화됨)
let productsGrid;
let pagination;
let productSearch;
let filterBtns;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // DOM 요소들 초기화
    productsGrid = document.getElementById('productsGrid');
    pagination = document.getElementById('pagination');
    productSearch = document.getElementById('productSearch');
    filterBtns = document.querySelectorAll('.filter-btn');
    
    // 요소들이 존재하는지 확인
    if (!productsGrid) {
        console.error('productsGrid 요소를 찾을 수 없습니다.');
        return;
    }
    
    renderProducts();
    renderPagination();
    setupEventListeners();
});

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색 기능
    if (productSearch) {
        productSearch.addEventListener('input', handleSearch);
    }
    
    // 카테고리 필터
    if (filterBtns && filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                filterByCategory(category);
                
                // 활성 버튼 변경
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// 검색 처리
function handleSearch() {
    const searchTerm = productSearch.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = products.filter(product => 
            currentCategory === 'all' || product.category === currentCategory
        );
    } else {
        filteredProducts = products.filter(product => 
            (currentCategory === 'all' || product.category === currentCategory) &&
            (product.name.toLowerCase().includes(searchTerm) || 
             product.description.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// 카테고리별 필터링
function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// 제품 렌더링
function renderProducts() {
    if (!productsGrid) {
        console.error('productsGrid 요소를 찾을 수 없습니다.');
        return;
    }
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3>검색 결과가 없습니다</h3>
                <p>다른 검색어나 카테고리를 시도해보세요.</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// 제품 카드 생성
function createProductCard(product) {
    console.log('제품 카드 생성:', product);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    // 이미지 HTML 생성
    let imageHTML = '';
    if (product.images && product.images.length > 0) {
        // 첫 번째 이미지만 사용 (슬라이더는 나중에 활성화)
        imageHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none;">
                <i class="${product.icon}"></i>
            </div>
        `;
    } else if (product.image) {
        imageHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; console.log('이미지 로드 실패:', '${product.image}');">
            <div class="image-placeholder" style="display: none;">
                <i class="${product.icon}"></i>
            </div>
        `;
    } else {
        imageHTML = `
            <div class="image-placeholder">
                <i class="${product.icon}"></i>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="product-image">
            ${imageHTML}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-details">
                <span class="category-tag">${getCategoryName(product.category)}</span>
                <span class="price-info">${product.price}</span>
            </div>
            ${product.hasSubProducts ? 
                `<span class="view-hint">클릭하여 세부 제품 보기</span>` :
                `<button class="btn btn-primary quote-btn" data-product="${product.name}">
                    <i class="fas fa-calculator"></i> 견적 문의
                </button>`
            }
        </div>
    `;
    
    // 카드 클릭 이벤트
    if (product.hasSubProducts) {
        // 세부 제품이 있는 경우
        card.classList.add('clickable');
        card.addEventListener('click', function() {
            if (product.name === "찰떡세트모음") {
                showRiceCakeSetModal();
            } else {
                showRiceCakeModal();
            }
        });
    } else {
        // 일반 제품인 경우
        const quoteBtn = card.querySelector('.quote-btn');
        if (quoteBtn) {
            quoteBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productName = this.getAttribute('data-product');
                showQuoteModal(productName);
            });
        }
    }
    
    return card;
}

// 인절미 세부 제품 모달 표시
function showRiceCakeModal() {
    const modal = document.getElementById('riceCakeModal');
    const grid = document.getElementById('riceCakeGrid');
    
    // 세부 제품들 렌더링 (이미지 포함)
    const riceCakeProducts = [
        {
            name: "인절미 (기본)",
            description: "쫄깃한 식감의 전통 인절미",
            price: "1말 ₩120,000\n반말 ₩65,000",
            image: "인절미.png"
        },
        {
            name: "쑥 인절미",
            description: "쑥이 들어간 건강한 인절미",
            price: "1말 ₩130,000\n반말 ₩70,000",
            image: "쑥인절미.png"
        },
        {
            name: "쑥밥알 인절미",
            description: "쑥밥알이 들어간 특별한 인절미",
            price: "1말 ₩130,000\n반말 ₩70,000",
            image: "쑥인절미.png"
        },
        {
            name: "카스테라 인절미",
            description: "카스테라 맛이 나는 달콤한 인절미",
            price: "1말 ₩140,000\n반말 ₩75,000",
            image: "인절미.png"
        },
        {
            name: "흑임자 인절미",
            description: "흑임자가 들어간 고급 인절미",
            price: "1말 ₩150,000\n반말 ₩80,000",
            image: "흑임자인절미.png"
        }
    ];
    
    grid.innerHTML = riceCakeProducts.map(product => `
        <div class="rice-cake-item">
            <div class="rice-cake-image">
                <img src="${product.image}" alt="${product.name}" class="rice-cake-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display: none;">
                    <i class="fas fa-rice"></i>
                </div>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button class="quote-btn" onclick="showQuoteModal('${product.name}')">
                <i class="fas fa-calculator"></i> 견적 문의
            </button>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 인절미 모달 닫기
function closeRiceCakeModal() {
    const modal = document.getElementById('riceCakeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 카테고리 이름 가져오기
function getCategoryName(category) {
    const categoryNames = {
        'gift': '답례떡',
        'ceremony': '이바지떡',
        'cake': '떡케이크',
        'traditional': '일반떡',
        'special': '선물세트'
    };
    return categoryNames[category] || category;
}

// 페이지네이션 렌더링
function renderPagination() {
    if (!pagination) {
        console.error('pagination 요소를 찾을 수 없습니다.');
        return;
    }
    
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // 이전 버튼
    paginationHTML += `
        <button class="prev-btn" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHTML += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += '<span class="page-dots">...</span>';
        }
    }
    
    // 다음 버튼
    paginationHTML += `
        <button class="next-btn" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    // 페이지 정보
    paginationHTML += `
        <span class="page-info">
            ${filteredProducts.length}개 중 ${(currentPage - 1) * ITEMS_PER_PAGE + 1}-${Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}개
        </span>
    `;
    
    pagination.innerHTML = paginationHTML;
    
    // 페이지네이션 이벤트 리스너
    setupPaginationListeners();
}

// 페이지네이션 이벤트 리스너 설정
function setupPaginationListeners() {
    const pageBtns = document.querySelectorAll('.page-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            goToPage(page);
        });
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });
    }
}

// 특정 페이지로 이동
function goToPage(page) {
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // 페이지 상단으로 스크롤
    if (productsGrid) {
        window.scrollTo({
            top: productsGrid.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// 견적 문의 모달 표시
function showQuoteModal(productName) {
    const modal = document.getElementById('quoteModal');
    const productInput = document.getElementById('quoteProduct');
    const title = document.getElementById('quoteModalTitle');
    
    if (modal && productInput && title) {
        // 제품명 설정
        productInput.value = productName;
        title.textContent = `${productName} 견적 문의`;
        
        // 모달 표시
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 견적 문의 모달 닫기
function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // 폼 초기화
        const form = document.getElementById('quoteForm');
        if (form) {
            form.reset();
        }
    }
}

// 찰떡세트모음 모달 표시
function showRiceCakeSetModal() {
    const modal = document.getElementById('riceCakeSetModal');
    const grid = document.getElementById('riceCakeSetGrid');
    
    if (modal && grid) {
        // 찰떡세트 정보 렌더링
        const riceCakeSets = [
            {
                name: "찰떡세트모음1",
                description: "기본 찰떡 2종 구성 세트",
                price: "가격 문의",
                image: "찰떡세트모음1.png"
            },
            {
                name: "찰떡세트모음2",
                description: "프리미엄 찰떡 3종 구성 세트",
                price: "가격 문의",
                image: "찰떡세트모음2.png"
            },
            {
                name: "찰떡세트모음3",
                description: "럭셔리 찰떡 4종 구성 세트",
                price: "가격 문의",
                image: "찰떡세트모음3.png"
            },
            {
                name: "찰떡세트모음4",
                description: "특별한 날을 위한 맞춤 찰떡 세트",
                price: "가격 문의",
                image: "찰떡세트모음4.png"
            }
        ];
        
        grid.innerHTML = riceCakeSets.map(set => `
            <div class="rice-cake-set-item">
                <div class="rice-cake-set-image">
                    <img src="${set.image}" alt="${set.name}" class="rice-cake-set-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: none;">
                        <i class="fas fa-box-open"></i>
                    </div>
                </div>
                <h3>${set.name}</h3>
                <p>${set.description}</p>
                <div class="price">${set.price}</div>
                <button class="btn btn-primary quote-btn" onclick="showQuoteModal('${set.name}')">
                    <i class="fas fa-calculator"></i> 견적 문의
                </button>
            </div>
        `).join('');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 찰떡세트모음 모달 닫기
function closeRiceCakeSetModal() {
    const modal = document.getElementById('riceCakeSetModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}


// 견적문의 폼 제출 처리
function handleQuoteSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const productName = document.getElementById('quoteProduct').value;
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const quantity = formData.get('quantity');
    const message = formData.get('message');
    const date = formData.get('date');
    
    // 견적문의 내용을 이메일로 전송
    const subject = `[견적문의] ${productName}`;
    const body = `제품명: ${productName}
이름: ${name}
이메일: ${email}
연락처: ${phone}
수량: ${quantity || '미입력'}
문의내용: ${message || '미입력'}
희망날짜: ${date || '미입력'}

위 내용으로 견적 문의드립니다.`;
    
    const mailtoLink = `mailto:leesh7697@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // 성공 메시지 표시
    alert('견적 문의가 접수되었습니다!\n\n이메일 클라이언트가 열립니다.\n빠른 시일 내에 연락드리겠습니다.');
    
    // 모달 닫기
    closeQuoteModal();
}

