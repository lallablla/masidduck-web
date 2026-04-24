export interface Product {
  id: number;
  name: string;
  description: string;
  category: "gift" | "ceremony" | "cake" | "regular" | "special";
  subcategory?: "gift-2" | "gift-3" | "gift-4" | "gift-6";
  price: string;
  image: string;
  images?: string[];
  tags?: string[];
}

export const GIFT_SUBCATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'gift-2', label: '2구' },
  { id: 'gift-3', label: '3구' },
  { id: 'gift-4', label: '4구' },
  { id: 'gift-6', label: '6구' },
];

export const products: Product[] = [
  // 답례떡 (Gift)
  // 2구 답례떡
  {
    id: 201,
    name: "2구 답례떡 [백설기+경단]",
    description: "백일 축하 문구가 새겨진 백설기와 알록달록 오색경단으로 구성된 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-gyeongdan.jpg"
  },
  {
    id: 202,
    name: "2구 답례떡 [카네이션설기+경단]",
    description: "카네이션 꽃무늬 백설기와 오색경단으로 구성된 감사 선물 2구 세트. 스승의 날, 어버이날에 추천합니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-gyeongdan-flower.jpg"
  },
  {
    id: 203,
    name: "2구 답례떡 [첫돌백설기+꿀떡]",
    description: "첫돌 문구가 새겨진 백설기와 알록달록 꿀떡으로 구성된 돌잔치 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-kkultteok.jpg",
    images: ["/images/products/gift-2-baekseolgi-kkultteok-alt.jpg"]
  },
  {
    id: 204,
    name: "2구 답례떡 [첫돌백설기+송편]",
    description: "첫돌 문구가 새겨진 백설기와 오색송편으로 구성된 돌잔치 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-songpyeon-dol.jpg"
  },
  {
    id: 205,
    name: "2구 답례떡 [하트백설기+송편]",
    description: "사랑스러운 분홍 하트 메시지가 담긴 백설기와 오색송편으로 구성된 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-songpyeon-heart.jpg"
  },
  {
    id: 206,
    name: "2구 답례떡 [감사백설기+송편]",
    description: "감사합니다 문구가 새겨진 백설기와 오색송편으로 구성된 감사 선물 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-songpyeon-thanks.jpg"
  },
  {
    id: 207,
    name: "2구 답례떡 [합격기원백설기+송편]",
    description: "합격 기원 문구가 새겨진 백설기와 오색송편으로 구성된 응원 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-baekseolgi-songpyeon-exam.jpg"
  },
  {
    id: 208,
    name: "2구 답례떡 [영양찰떡+송편]",
    description: "견과류 가득 영양찰떡과 오색송편으로 구성된 건강한 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-yeongyang-songpyeon.jpg"
  },
  {
    id: 209,
    name: "2구 답례떡 [영양찰떡+꿀떡]",
    description: "영양 가득 찰떡과 알록달록 꿀떡으로 구성된 달콤한 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-yeongyang-kkultteok.jpg"
  },
  {
    id: 210,
    name: "2구 답례떡 [십자가설기+영양찰떡]",
    description: "하트 십자가 문양 백설기와 영양찰떡으로 구성된 세례/축복 기념 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-yeongyang-seolgi-cross.jpg"
  },
  {
    id: 211,
    name: "2구 답례떡 [카네이션설기+영양찰떡]",
    description: "카네이션 꽃무늬 백설기와 영양찰떡으로 구성된 스승의 날 감사 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-yeongyang-seolgi-flower.jpg"
  },
  {
    id: 212,
    name: "2구 답례떡 [영양찰떡+오색송편]",
    description: "영양찰떡과 알록달록 오색송편으로 구성된 풍성한 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-yeongyang-songpyeon-multi.jpg"
  },
  {
    id: 213,
    name: "2구 답례떡 [팥찰떡+경단]",
    description: "고소한 팥찰떡과 알록달록 오색경단으로 구성된 전통 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-pat-gyeongdan.jpg"
  },
  {
    id: 214,
    name: "2구 답례떡 [팥찰떡+송편]",
    description: "고소한 팥찰떡과 오색송편으로 구성된 전통 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-pat-songpyeon.jpg"
  },
  {
    id: 215,
    name: "2구 답례떡 [하트설기+송편 백]",
    description: "사랑스러운 하트 백설기와 오색송편을 투명 백에 담은 생일 답례 2구 세트입니다.",
    category: "gift",
    subcategory: "gift-2",
    price: "가격 문의",
    image: "/images/products/gift-2-heart-seolgi-bag.jpg"
  },
  // 3구 답례떡
  {
    id: 301,
    name: "3구 답례떡 [경단+백설기+꿀떡]",
    description: "오색경단, 백일 백설기, 알록달록 꿀떡으로 구성된 백일잔치 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-gyeongdan-baekseolgi-kkultteok.jpg"
  },
  {
    id: 302,
    name: "3구 답례떡 [경단+백설기+송편]",
    description: "오색경단, 칠순 백설기, 오색송편으로 구성된 칠순잔치 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-gyeongdan-baekseolgi-songpyeon.jpg"
  },
  {
    id: 303,
    name: "3구 답례떡 [깨끼떡+쑥모찌+영양찰떡]",
    description: "깨끼떡, 복 쑥모찌, 영양찰떡으로 구성된 스승의 날 감사 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-kkaekki-ssukmochi-yeongyang.jpg"
  },
  {
    id: 304,
    name: "3구 답례떡 [꿀떡+백설기+쑥모찌]",
    description: "오색꿀떡, 십자가 하트 백설기, 복 쑥모찌로 구성된 세례/영성체 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-kkultteok-baekseolgi-ssukmochi.jpg"
  },
  {
    id: 305,
    name: "3구 답례떡 [바람떡+백설기+송편]",
    description: "바람떡, 감사 메시지 백설기, 오색송편으로 구성된 감사 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-baramtteok-baekseolgi-songpyeon.jpg"
  },
  {
    id: 306,
    name: "3구 답례떡 [백설기+꿀떡+쑥모찌]",
    description: "첫돌/두돌 백설기, 오색꿀떡, 쑥모찌로 구성된 돌잔치 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-baekseolgi-kkultteok-ssukmochi.jpg"
  },
  {
    id: 307,
    name: "3구 답례떡 [블루베리설기+팥찰떡+경단]",
    description: "블루베리설기, 팥찰떡, 오색경단으로 구성된 알찬 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-blueberry-patchal-gyeongdan.jpg"
  },
  {
    id: 308,
    name: "3구 답례떡 [설기+송편+영양찰떡]",
    description: "첫돌 백설기, 오색송편, 영양찰떡으로 구성된 돌잔치 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-seolgi-songpyeon-yeongyang.jpg"
  },
  {
    id: 309,
    name: "3구 답례떡 [송편+백설기+영양찰떡]",
    description: "오색송편, 첫돌 백설기, 영양찰떡으로 구성된 돌잔치 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-songpyeon-baekseolgi-yeongyang.jpg"
  },
  {
    id: 310,
    name: "3구 답례떡 [송편+블루베리설기+영양찰떡]",
    description: "오색송편, 블루베리설기, 영양찰떡으로 구성된 화사한 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-songpyeon-blueberry-yeongyang.jpg",
    images: ["/images/products/gift-3-songpyeon-blueberry-yeongyang-alt.jpg"]
  },
  {
    id: 311,
    name: "3구 답례떡 [송편+블루베리설기+호박찰떡]",
    description: "오색송편, 블루베리설기, 호박찰떡으로 구성된 알록달록 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-songpyeon-blueberry-hobak.jpg"
  },
  {
    id: 312,
    name: "3구 답례떡 [쑥모찌+경단+영양찰떡]",
    description: "쑥모찌, 오색경단, 영양찰떡으로 구성된 건강한 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-ssukmochi-gyeongdan-yeongyang.jpg"
  },
  {
    id: 313,
    name: "3구 답례떡 [쑥모찌+백설기+경단]",
    description: "복 쑥모찌, 하트 백설기, 오색경단으로 구성된 사랑스러운 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-ssukmochi-baekseolgi-gyeongdan.jpg"
  },
  {
    id: 314,
    name: "3구 답례떡 [쑥모찌+백설기+영양찰떡]",
    description: "쑥모찌, 감사 백설기, 영양찰떡으로 구성된 감사 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-ssukmochi-baekseolgi-yeongyang.jpg"
  },
  {
    id: 315,
    name: "3구 답례떡 [쑥모찌+송편+영양찰떡]",
    description: "쑥모찌, 오색송편, 영양찰떡으로 구성된 건강한 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-ssukmochi-songpyeon-yeongyang.jpg"
  },
  {
    id: 316,
    name: "3구 답례떡 [약식+백설기+꿀떡]",
    description: "약식, 하트/리본 백설기, 오색꿀떡으로 구성된 프리미엄 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yaksik-baekseolgi-kkultteok.jpg"
  },
  {
    id: 317,
    name: "3구 답례떡 [약식+찹쌀떡+콩설기]",
    description: "약식, 찹쌀떡, 콩설기로 구성된 견과류 가득 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yaksik-chapssal-kongseolgi.jpg"
  },
  {
    id: 318,
    name: "3구 답례떡 [영양찰떡+경단+설기]",
    description: "영양찰떡, 오색경단, 하트 백설기로 구성된 재향군인의 날 기념 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-gyeongdan-seolgi.jpg"
  },
  {
    id: 319,
    name: "3구 답례떡 [영양찰떡+백설기+경단]",
    description: "영양찰떡, 하트 백설기, 오색경단으로 구성된 사랑스러운 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-baekseolgi-gyeongdan.jpg"
  },
  {
    id: 320,
    name: "3구 답례떡 [영양찰떡+백설기+송편]",
    description: "영양찰떡, 카네이션 백설기, 오색송편으로 구성된 어버이날 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-baekseolgi-songpyeon.jpg"
  },
  {
    id: 321,
    name: "3구 답례떡 [영양찰떡+설기+약식]",
    description: "영양찰떡 2개, 감사 백설기, 약식으로 구성된 감사 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-seolgi-yaksik.jpg"
  },
  {
    id: 322,
    name: "3구 답례떡 [영양찰떡+송편+쑥모찌]",
    description: "영양찰떡, 오색송편, 복 쑥모찌로 구성된 건강한 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-songpyeon-ssukmochi.jpg"
  },
  {
    id: 323,
    name: "3구 답례떡 [영양찰떡+쑥모찌+약식]",
    description: "영양찰떡, 쑥모찌, 약식으로 구성된 정성 가득 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-yeongyang-ssukmochi-yaksik.jpg"
  },
  {
    id: 324,
    name: "3구 답례떡 [호박설기+송편+영양찰떡]",
    description: "호박설기, 오색송편, 영양찰떡으로 구성된 알록달록 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-hobakseolgi-songpyeon.jpg"
  },
  {
    id: 325,
    name: "3구 답례떡 [호박설기+송편+백설기]",
    description: "호박설기, 오색송편, 하트 백설기로 구성된 사랑스러운 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-hobakseolgi-songpyeon-baekseolgi.jpg"
  },
  {
    id: 326,
    name: "3구 답례떡 [송편+백설기+호박찰떡]",
    description: "오색송편, 하트 백설기, 호박찰떡으로 구성된 사랑스러운 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-songpyeon-baekseolgi-hobakchal.jpg"
  },
  {
    id: 327,
    name: "3구 답례떡 [수박설기+영양찰떡+송편]",
    description: "수박설기, 영양찰떡, 오색송편으로 구성된 여름 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-subak-yeongyang-songpyeon.jpg"
  },
  {
    id: 328,
    name: "3구 답례떡 [콩셋티+호박찰떡+영양찰떡]",
    description: "콩셋티, 호박찰떡, 영양찰떡으로 구성된 건강한 3구 세트입니다.",
    category: "gift",
    subcategory: "gift-3",
    price: "가격 문의",
    image: "/images/products/gift-3-kongsetti-hobak-yeongyang.jpg"
  },
  // 4구 답례떡
  {
    id: 401,
    name: "4구 답례떡 [꿀떡+약식+쑥모찌+호박찰떡]",
    description: "오색꿀떡, 약식, 복 쑥모찌, 호박찰떡으로 구성된 건강한 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-kkultteok-yaksik-ssuk-hobak.jpg",
    images: ["/images/products/gift-4-kkultteok-yaksik-ssuk-hobak-alt.jpg"]
  },
  {
    id: 402,
    name: "4구 답례떡 [꿀떡+영양찰떡+송편+백설기]",
    description: "오색꿀떡, 영양찰떡, 오색송편, 백설기로 구성된 알찬 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-kkultteok-yeongyang-songpyeon-baek.jpg"
  },
  {
    id: 403,
    name: "4구 답례떡 [꿀떡+영양찰떡+호박찰떡+약식]",
    description: "오색꿀떡, 영양찰떡, 호박찰떡, 약식으로 구성된 프리미엄 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-kkultteok-yeongyang-hobak-yaksik.jpg"
  },
  {
    id: 404,
    name: "4구 답례떡 [백설기+송편+약식+쑥모찌]",
    description: "하트 백설기, 오색송편, 약식, 쑥모찌로 구성된 사랑스러운 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-songpyeon-yaksik-ssuk.jpg",
    images: ["/images/products/gift-4-baek-songpyeon-yaksik-ssuk-alt.jpg"]
  },
  {
    id: 405,
    name: "4구 답례떡 [백설기+쑥모찌+송편+영양찰떡]",
    description: "감사 메시지 백설기, 쑥모찌, 오색송편, 영양찰떡으로 구성된 감사 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-ssuk-songpyeon-yeongyang.jpg",
    images: ["/images/products/gift-4-baek-ssuk-songpyeon-yeongyang-alt.jpg"]
  },
  {
    id: 406,
    name: "4구 답례떡 [백설기+약식+송편+팥찰떡]",
    description: "십자가 하트 백설기, 약식, 오색송편, 팥찰떡으로 구성된 세례/영성체 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-yaksik-songpyeon-pat.jpg"
  },
  {
    id: 407,
    name: "4구 답례떡 [백설기+영양찰떡+꿀떡+약식]",
    description: "백설기, 영양찰떡, 오색꿀떡, 약식으로 구성된 알찬 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-yeongyang-kkultteok-yaksik.jpg"
  },
  {
    id: 408,
    name: "4구 답례떡 [백설기+영양찰떡+송편+쑥모찌]",
    description: "십자가 하트 백설기, 영양찰떡, 오색송편, 쑥모찌로 구성된 세례/영성체 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-yeongyang-songpyeon-ssuk.jpg"
  },
  {
    id: 409,
    name: "4구 답례떡 [백설기+호두찰떡+송편+쑥모찌]",
    description: "첫돌 백설기, 호두찰떡, 오색송편, 쑥모찌로 구성된 돌잔치 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-hodu-songpyeon-ssuk.jpg"
  },
  {
    id: 410,
    name: "4구 답례떡 [백설기+흑임자찰떡+쑥모찌+호두찰떡]",
    description: "첫돌 백설기, 흑임자찰떡 2개, 복 쑥모찌로 구성된 돌잔치 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-baek-heukimja-ssuk-hodu.jpg"
  },
  {
    id: 411,
    name: "4구 답례떡 [송편+영양찰떡+쑥모찌+블루베리설기]",
    description: "오색송편, 영양찰떡, 복 쑥모찌, 블루베리설기로 구성된 건강한 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-songpyeon-yeongyang-ssuk-blueberry.jpg",
    images: ["/images/products/gift-4-songpyeon-yeongyang-ssuk-blueberry-alt.jpg", "/images/products/gift-4-yeongyang-ssuk-blueberry-songpyeon.jpg"]
  },
  {
    id: 412,
    name: "4구 답례떡 [쑥모찌+꿀떡+호박찰떡+약식]",
    description: "복 쑥모찌, 오색꿀떡, 호박찰떡, 약식으로 구성된 건강한 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-ssuk-kkultteok-hobak-yaksik.jpg"
  },
  {
    id: 413,
    name: "4구 답례떡 [약과+백설기+쑥모찌+찹쌀떡]",
    description: "약과, Thank you 백설기, 복 쑥모찌, 복 찹쌀떡으로 구성된 감사 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-yakgwa-baek-ssuk-chapssal.jpg"
  },
  {
    id: 414,
    name: "4구 답례떡 [콩설기+초코설기+호박설기+블루베리설기]",
    description: "콩설기, 초코설기, 호박설기, 블루베리설기로 구성된 알록달록 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-kong-choco-hobak-blueberry.jpg"
  },
  {
    id: 415,
    name: "4구 답례떡 [블루베리설기+쑥모찌+영양찰떡+송편]",
    description: "블루베리설기, 복 쑥모찌, 영양찰떡, 오색송편으로 구성된 프리미엄 4구 세트입니다.",
    category: "gift",
    subcategory: "gift-4",
    price: "가격 문의",
    image: "/images/products/gift-4-blueberry-ssuk-yeongyang-songpyeon.jpg"
  },

  // 선물세트 (Gift Set)
  {
    id: 901,
    name: "선물세트 5호 (25구)",
    description: "영양찰떡, 호박찰떡, 쑥찰떡, 백설기, 약식 등 5가지 종류의 떡 25개로 구성된 풍성한 선물 세트입니다.",
    category: "giftset",
    price: "가격 문의",
    image: "/images/products/gift-set-5ho-2.jpg"
  },
  {
    id: 902,
    name: "프리미엄 선물세트 (대)",
    description: "쑥찰떡, 영양찰떡, 호박찰떡, 약식, 쑥모찌 등 다양한 찰떡으로 구성된 대형 선물 세트입니다.",
    category: "giftset",
    price: "가격 문의",
    image: "/images/products/gift-set-mixed-1.jpg"
  },
  {
    id: 903,
    name: "프리미엄 선물세트 (중)",
    description: "영양찰떡, 호박찰떡, 백설기, 쑥찰떡 등 15구로 구성된 선물 세트입니다. 고급 포장으로 격식 있는 자리에 어울립니다.",
    category: "giftset",
    price: "가격 문의",
    image: "/images/products/gift-set-mixed-2.jpg"
  },

  // 떡케이크 (Cake)

  // 일반떡 (Traditional)
  {
    id: 16,
    name: "전통 가래떡",
    description: "100% 국내산 햅쌀로 뽑아낸 쫄깃하고 담백한 전통 가래떡. 구워 드시거나 떡국용으로 좋습니다.",
    category: "regular",
    price: "1말 ₩120,000",
    image: "/images/products/garaetteok-plate-1.jpg",
    images: ["/images/products/garaetteok-plate-2.jpg", "/images/products/garaetteok-pack.jpg"]
  },
  {
    id: 20,
    name: "삼색 경단",
    description: "천연 재료로 색을 낸 고운 삼색 경단. 부드러운 팥앙금과 쫄깃한 찹쌀의 조화가 일품입니다.",
    category: "regular",
    price: "1kg ₩15,000",
    image: "/images/products/gyeongdan-bowl.jpg"
  },
  {
    id: 21,
    name: "강원도 감자송편",
    description: "쫄깃한 감자 피 속에 고소한 앙금이 가득. 투명하고 쫄깃한 식감이 매력적인 별미 떡.",
    category: "regular",
    price: "1kg ₩13,000",
    image: "/images/products/gamja-songpyeon.jpg"
  },
  {
    id: 15,
    name: "명품 쑥콩설기",
    description: "서리태, 밤, 호박고지가 듬뿍 들어간 영양 만점 설기.",
    category: "regular",
    price: "1말 ₩130,000",
    image: "/images/products/gipi-sirutteok.jpg"
  },
  {
    id: 22,
    name: "고구마 찰떡",
    description: "달콤한 고구마와 쫄깃한 찰떡의 만남. 보라색 고구마와 노란 호박고지 / 카스테라 고물과 고구마 무스가 어우러진 건강한 간식입니다.",
    category: "regular",
    price: "1말 ₩110,000",
    image: "/images/products/goguma-chaltteok.jpg",
    images: ["/images/products/goguma-chaltteok-alt1.jpg", "/images/products/goguma-chaltteok-alt2.jpg"]
  },
  {
    id: 24,
    name: "오색 꿀떡",
    description: "천연 색소로 예쁘게 물들인 오색 꿀떡. 달콤한 꿀 소가 가득 들어있어 아이들 간식으로 인기 만점입니다.",
    category: "regular",
    price: "1kg ₩12,000",
    image: "/images/products/kkultteok-plate.jpg",
    images: ["/images/products/kkultteok-plate-alt.jpg", "/images/products/kkultteok-rainbow.jpg"]
  },
  {
    id: 25,
    name: "꿀 설기",
    description: "순백의 설기 사이에 달콤한 꿀 층이 숨어 있는 꿀설기. 부드럽고 촉촉한 식감이 일품입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/kkul-seolgi.jpg",
    images: ["/images/products/kkul-seolgi-alt.jpg"]
  },
  {
    id: 26,
    name: "떡볶이떡",
    description: "쫄깃한 식감의 떡볶이용 가래떡. 100% 국내산 쌀로 매일 신선하게 만들어 탄력이 살아있습니다.",
    category: "regular",
    price: "1kg ₩8,000",
    image: "/images/products/tteokbokki-plate.jpg",
    images: ["/images/products/tteokbokki-plate-alt.jpg", "/images/products/tteokbokki-pack.jpg"]
  },
  {
    id: 27,
    name: "모시떡 (모시송편)",
    description: "영광 모시잎으로 만든 진한 초록빛 모시떡. 은은한 모시향과 쫄깃한 식감이 특징입니다.",
    category: "regular",
    price: "1kg ₩15,000",
    image: "/images/products/mosi-tteok.jpg",
    images: ["/images/products/mosi-tteok-slice.jpg", "/images/products/mosi-round.jpg"]
  },
  {
    id: 29,
    name: "바람떡",
    description: "바람을 품은 듯 가볍고 부드러운 바람떡. 쫀득한 식감과 은은한 단맛이 특징입니다.",
    category: "regular",
    price: "1kg ₩12,000",
    image: "/images/products/baram-tteok-plate.jpg",
    images: ["/images/products/baram-tteok-plate-alt.jpg", "/images/products/baram-tteok-tray.jpg"]
  },
  {
    id: 32,
    name: "백설기",
    description: "순백의 아름다움을 담은 전통 백설기. 촉촉하고 부드러운 식감으로 백일, 돌잔치의 필수 떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/baekseolgi-plain.jpg",
    images: ["/images/products/baekseolgi-alt.jpg"]
  },
  {
    id: 43,
    name: "블루베리설기",
    description: "신선한 블루베리를 듬뿍 넣어 만든 보랏빛 설기. 상큼달콤한 맛과 예쁜 색감이 매력적입니다.",
    category: "regular",
    price: "1말 ₩120,000",
    image: "/images/products/blueberry-seolgi.jpg",
    images: ["/images/products/blueberry-seolgi-alt.jpg", "/images/products/blueberry-seolgi-close.jpg"]
  },
  {
    id: 44,
    name: "오색 송편",
    description: "흰색, 노랑, 분홍, 초록, 보라 다섯 가지 색의 전통 송편. 명절과 특별한 날을 위한 필수 떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/songpyeon-plate.jpg",
    images: ["/images/products/songpyeon-plate-alt.jpg", "/images/products/songpyeon-plate-white.jpg"]
  },
  {
    id: 49,
    name: "수박설기",
    description: "분홍과 초록이 어우러진 수박 모양 설기. 여름철 인기 간식으로 아이들이 특히 좋아합니다.",
    category: "regular",
    price: "1말 ₩120,000",
    image: "/images/products/watermelon-seolgi.jpg",
    images: ["/images/products/watermelon-seolgi-alt.jpg", "/images/products/watermelon-seolgi-plate.jpg", "/images/products/watermelon-seolgi-green.jpg"]
  },
  {
    id: 50,
    name: "수수팥떡",
    description: "수수와 팥으로 만든 전통 떡. 고소하고 담백한 맛이 특징으로 백일, 돌잔치에 필수입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/susu-pattteok.jpg"
  },
  {
    id: 51,
    name: "시루떡",
    description: "팥고물을 켜켜이 쌓아 만든 전통 시루떡. 고사떡, 집들이떡으로 사랑받는 떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/siru-tteok.jpg",
    images: ["/images/products/siru-tteok-alt.jpg"]
  },
  {
    id: 52,
    name: "쑥가래떡",
    description: "국산 쑥을 넣어 만든 쫄깃한 가래떡. 구워 먹으면 더욱 맛있는 건강 간식입니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/ssuk-garaetteok.jpg"
  },
  {
    id: 53,
    name: "쑥개떡",
    description: "향긋한 쑥향이 가득한 전통 개떡. 쫄깃한 식감과 진한 쑥향이 일품입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/ssuk-gaetteok.jpg",
    images: ["/images/products/ssuk-gaetteok-plate.jpg", "/images/products/ssuk-gaetteok-plate-alt.jpg"]
  },
  {
    id: 54,
    name: "쑥굴레",
    description: "쑥향 가득한 인절미에 고소한 콩고물을 묻힌 전통 떡. 담백하고 고소한 맛이 일품입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/ssuk-gulle.jpg",
    images: ["/images/products/ssuk-gulle-alt.jpg"]
  },
  {
    id: 55,
    name: "쑥모찌",
    description: "국산 쑥과 다양한 견과류로 속을 채운 프리미엄 쑥모찌. 福(복) 스티커로 정성을 담았습니다.",
    category: "regular",
    price: "개당 ₩5,000",
    image: "/images/products/ssuk-moji-bok.jpg",
    images: ["/images/products/ssuk-moji-plate.jpg", "/images/products/ssuk-moji-plate-alt.jpg"]
  },
  {
    id: 59,
    name: "6구 답례떡 [쑥모찌+감사백설기+영양+호박+송편+약식]",
    description: "쑥모찌, 감사 메시지 백설기, 영양찰떡, 호박설기, 송편, 약식으로 구성된 프리미엄 6구 세트.",
    category: "gift",
    subcategory: "gift-6",
    price: "가격 문의",
    image: "/images/products/gift-6pc-ssuk-thankyou-premium.jpg"
  },
  {
    id: 61,
    name: "6구 답례떡 [쑥모찌+감사백설기+콩+영양+호박+약식]",
    description: "쑥모찌, 감사 백설기, 콩설기, 영양찰떡, 호박설기, 약식으로 구성된 디럭스 6구 세트.",
    category: "gift",
    subcategory: "gift-6",
    price: "가격 문의",
    image: "/images/products/gift-6pc-ssuk-thankyou-deluxe.jpg"
  },
  {
    id: 63,
    name: "앙금절편",
    description: "팥앙금을 넣은 쫄깃한 절편. 흰색과 쑥색의 조화가 아름다운 전통 떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/angeum-jeolpyeon-plate.jpg",
    images: ["/images/products/angeum-jeolpyeon-gift.jpg", "/images/products/angeum-jeolpyeon-gift-alt.jpg"]
  },
  {
    id: 64,
    name: "약밥 (약식)",
    description: "찹쌀에 대추, 밤, 잣, 호두 등을 넣어 만든 영양 가득한 전통 약식입니다.",
    category: "regular",
    price: "1말 ₩120,000",
    image: "/images/products/yaksik-plate.jpg",
    images: ["/images/products/yaksik-plate-alt.jpg", "/images/products/yakbap.jpg", "/images/products/yakbap-packed.jpg", "/images/products/yaksik-close.jpg"]
  },
  {
    id: 68,
    name: "영양찰떡",
    description: "검은콩, 대추, 호두, 잣 등 영양 가득한 재료를 넣은 찰떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/yeonyang-chaltteok-plate.jpg",
    images: ["/images/products/yeonyang-chaltteok-close.jpg", "/images/products/yeonyang-chaltteok-close-alt.jpg", "/images/products/yeonyang-chaltteok-packed.jpg"]
  },
  {
    id: 80,
    name: "유과",
    description: "찹쌀을 튀겨 쌀튀밥을 묻힌 전통 한과. 바삭하고 고소한 맛이 일품입니다.",
    category: "regular",
    price: "1말 ₩80,000",
    image: "/images/products/yugwa.jpg"
  },
  {
    id: 81,
    name: "인절미",
    description: "쫄깃한 찹쌀떡에 고소한 콩가루를 묻힌 전통 떡입니다.",
    category: "regular",
    price: "1말 ₩80,000",
    image: "/images/products/injeolmi-plate.jpg",
    images: ["/images/products/injeolmi-tray.jpg"]
  },
  {
    id: 82,
    name: "절편",
    description: "흰색과 쑥색의 쫄깃한 절편. 깔끔하고 담백한 전통 떡입니다.",
    category: "regular",
    price: "1말 ₩80,000",
    image: "/images/products/jeolpyeon.jpg",
    images: ["/images/products/jeolpyeon-alt.jpg"]
  },
  {
    id: 83,
    name: "증편",
    description: "막걸리로 발효시켜 만든 폭신한 증편. 검은깨를 올려 고급스럽습니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/jeungpyeon.jpg"
  },
  {
    id: 85,
    name: "찰떡 케이크",
    description: "호박찰떡, 약식, 쑥모찌로 화려하게 장식한 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/chaltteok-cake.jpg"
  },
  {
    id: 86,
    name: "찹쌀떡",
    description: "쫄깃한 찹쌀 피에 달콤한 팥소를 가득 넣은 전통 찹쌀떡입니다.",
    category: "regular",
    price: "1말 ₩80,000",
    image: "/images/products/chapssaltteok.jpg",
    images: ["/images/products/chapssaltteok-alt.jpg"]
  },
  {
    id: 87,
    name: "콩송편",
    description: "검은콩 소를 넣은 쫄깃한 송편. 고소하고 담백한 맛이 일품입니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/kong-songpyeon-plate.jpg",
    images: ["/images/products/kong-songpyeon-plate-alt.jpg", "/images/products/kong-songpyeon-tray.jpg"]
  },
  {
    id: 88,
    name: "콩설기",
    description: "검은콩, 호박, 대추 등을 올린 영양 가득한 콩설기입니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/kong-seolgi.jpg"
  },
  {
    id: 89,
    name: "콩쑥 인절미",
    description: "쑥을 넣은 찰떡에 콩가루를 묻힌 고소한 인절미. 팥소가 들어있습니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/kong-ssuk-injeolmi.jpg",
    images: ["/images/products/kong-ssuk-injeolmi-alt.jpg"]
  },
  {
    id: 90,
    name: "팥찰떡",
    description: "팥고물을 입힌 쫄깃한 찰떡. 대추, 호박 등 색색의 고명이 어우러집니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/pat-chaltteok.jpg",
    images: ["/images/products/pat-chaltteok-alt.jpg"]
  },
  {
    id: 94,
    name: "햄치즈 설기",
    description: "햄과 치즈를 넣어 만든 이색 설기. 아이들도 좋아하는 맛있는 떡입니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/ham-cheese-seolgi.jpg",
    images: ["/images/products/ham-cheese-seolgi-alt.jpg", "/images/products/ham-cheese-seolgi-plate.jpg", "/images/products/ham-cheese-seolgi-plate-alt.jpg"]
  },
  {
    id: 95,
    name: "호박설기",
    description: "달콤한 단호박을 넣어 만든 노란 호박설기. 대추, 호두 등 고명이 어우러집니다.",
    category: "regular",
    price: "1말 ₩90,000",
    image: "/images/products/hobak-seolgi.jpg",
    images: ["/images/products/hobak-seolgi-plate.jpg", "/images/products/hobak-seolgi-plate-alt.jpg"]
  },
  {
    id: 96,
    name: "호박찰떡",
    description: "달콤한 단호박으로 만든 쫄깃한 찰떡. 대추, 호두, 콩 등이 어우러집니다.",
    category: "regular",
    price: "1말 ₩100,000",
    image: "/images/products/hobak-chaltteok.jpg",
    images: ["/images/products/hobak-chaltteok-alt.jpg"]
  },
  {
    id: 99,
    name: "떡케이크 - 백설기 이모지",
    description: "알록달록 이모지 장식이 귀여운 백설기 떡케이크. 아이들 생일에 인기입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-baekseolgi-emoji.jpg"
  },
  {
    id: 100,
    name: "떡케이크 - 설기 돌상",
    description: "돌잔치에 어울리는 화려한 설기 떡케이크. 장미꽃 장식이 고급스럽습니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-dolsang.jpg"
  },
  {
    id: 101,
    name: "떡케이크 - 설기 메시지",
    description: "사랑하는 마음을 담은 메시지 설기 떡케이크. 장미꽃 장식이 포인트입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-message.jpg"
  },
  {
    id: 102,
    name: "떡케이크 - 찰떡 생일",
    description: "찰떡과 경단을 예쁘게 둘러 담은 생일 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-chaltteok-birthday.jpg"
  },
  {
    id: 103,
    name: "떡케이크 - 영양찰떡 호박",
    description: "영양찰떡과 호박경단을 올린 건강한 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-yeonyang-hobak.jpg",
    images: ["/images/products/cake-yeonyang-hobak-alt.jpg"]
  },
  {
    id: 104,
    name: "떡케이크 - 백설기 키즈",
    description: "아이들이 좋아하는 귀여운 캐릭터 장식 백설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-baekseolgi-kids.jpg",
    images: ["/images/products/cake-baekseolgi-kids-pink.jpg", "/images/products/cake-baekseolgi-kids-alt.jpg"]
  },
  {
    id: 105,
    name: "떡케이크 - 설기 꽃",
    description: "장미꽃 장식이 아름다운 원형 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-flower.jpg"
  },
  {
    id: 106,
    name: "떡케이크 - 호박찰떡 링",
    description: "호박찰떡과 팥찰떡을 링 형태로 담은 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-hobak-chaltteok.jpg"
  },
  {
    id: 107,
    name: "떡케이크 - 인절미 생일",
    description: "고소한 인절미 위에 축하 메시지를 담은 생일 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-injeolmi-birthday.jpg"
  },
  {
    id: 108,
    name: "떡케이크 - 송편 꽃",
    description: "하얀 송편을 둥글게 담고 장미꽃으로 장식한 우아한 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-songpyeon-flower.jpg"
  },
  {
    id: 109,
    name: "떡케이크 - 인절미 장미",
    description: "노란 인절미 위에 화려한 장미꽃 장식을 올린 생일 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-injeolmi-rose.jpg"
  },
  {
    id: 110,
    name: "떡케이크 - 쑥영양",
    description: "쑥찰떡과 영양찰떡, 경단을 화려하게 담은 건강한 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-ssuk-yeonyang.jpg",
    images: ["/images/products/cake-ssuk-yeonyang-alt.jpg"]
  },
  {
    id: 111,
    name: "떡케이크 - 설기 책",
    description: "책 모양으로 만든 설기 떡케이크. 특별한 메시지를 담을 수 있습니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-book.jpg"
  },
  {
    id: 112,
    name: "떡케이크 - 설기 2단",
    description: "장미꽃으로 장식한 화려한 2단 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-2tier.jpg"
  },
  {
    id: 113,
    name: "떡케이크 - 설기 봄",
    description: "봄꽃 장식이 아름다운 원형 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-spring.jpg"
  },
  {
    id: 114,
    name: "떡케이크 - 설기 학",
    description: "학과 매화 장식이 동양적인 아름다움을 담은 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-crane.jpg"
  },
  {
    id: 115,
    name: "떡케이크 - 설기 잎",
    description: "장미꽃과 나뭇잎 장식이 어우러진 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-rose-leaf.jpg"
  },
  {
    id: 116,
    name: "떡케이크 - 경단 무지개",
    description: "알록달록 오색 경단을 가득 담은 화려한 생일 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-gyeongdan-rainbow.jpg"
  },
  {
    id: 117,
    name: "떡케이크 - 백설기 2단",
    description: "귀여운 캐릭터 장식의 2단 백설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-baekseolgi-2tier.jpg"
  },
  {
    id: 118,
    name: "떡케이크 - 설기 심플",
    description: "심플하고 깔끔한 원형 설기 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-seolgi-simple.jpg"
  },
  {
    id: 119,
    name: "떡케이크 - 영양찰떡",
    description: "영양찰떡을 가득 담아 건강한 맛을 전하는 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-yeonyang-chaltteok.jpg"
  },
  {
    id: 120,
    name: "떡케이크 - 인절미 기념일",
    description: "기념일에 어울리는 대형 인절미 떡케이크. 경단 장식이 포인트입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-injeolmi-anniversary.jpg"
  },
  {
    id: 121,
    name: "떡케이크 - 인절미 축하",
    description: "축하 메시지를 담은 원형 인절미 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-injeolmi-celebration.jpg"
  },
  {
    id: 122,
    name: "떡케이크 - 호박찰떡 링",
    description: "호박찰떡과 팥찰떡을 둥글게 담은 링 형태의 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-hobak-chaltteok-ring.jpg"
  },
  {
    id: 123,
    name: "떡케이크 - 인절미 꽃메시지",
    description: "인절미 위에 꽃 장식과 축하 메시지를 담은 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-injeolmi-flower-msg.jpg",
    images: ["/images/products/cake-injeolmi-flower-msg-alt.jpg"]
  },
  {
    id: 124,
    name: "떡케이크 - 팥찰떡 모찌",
    description: "팥찰떡과 모찌를 함께 담은 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-pat-chaltteok-mochi.jpg"
  },
  {
    id: 125,
    name: "떡케이크 - 백설기 아트",
    description: "귀여운 그림 장식이 돋보이는 백설기 생일 떡케이크입니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-baekseolgi-birthday-art.jpg",
    images: ["/images/products/cake-baekseolgi-birthday-art-alt.jpg"]
  },
  {
    id: 126,
    name: "떡케이크 - 분홍 설기",
    description: "화사한 분홍색 설기 떡케이크. 축하 메시지를 담을 수 있습니다.",
    category: "cake",
    price: "가격 문의",
    image: "/images/products/cake-pink-seolgi.jpg"
  },
  {
    id: 127,
    name: "오색송편 & 모찌세트",
    description: "두가지를 한번에! 반/반 떡 - 알록달록한 오색꿀떡과 인절미(경단)을 함께담은 컵 세트입니다.",
    category: "regular",
    price: "가격 문의",
    image: "/images/products/regular-songpyeon-mochi-cup.jpg"
  },
  {
    id: 128,
    name: "인절미 (맞춤 메시지)",
    description: "개업 및 행사떡에 원하시는 메시지를 담아드립니다~",
    category: "regular",
    price: "가격 문의",
    image: "/images/products/regular-injeolmi-custom-msg.jpg"
  },
  {
    id: 129,
    name: "백설기 (조문 답례)",
    description: "정성을 담은 조문 답례용 백설기입니다. 감사 메시지를 담아드립니다.",
    category: "regular",
    price: "가격 문의",
    image: "/images/products/regular-baekseolgi-condolence.jpg"
  },
  {
    id: 130,
    name: "수박설기 (스틱형)",
    description: "귀여운 수박 모양의 설기떡입니다. 아이들에게 인기 만점! 스틱형으로 먹기 편합니다.",
    category: "regular",
    price: "가격 문의",
    image: "/images/products/regular-watermelon-seolgi.jpg"
  },
  {
    id: 131,
    name: "인절미 & 오색송편 세트",
    description: "수수팥떡 & 오색꿀떡 생일상 차림세트의 기본구성입니다.",
    category: "regular",
    price: "가격 문의",
    image: "/images/products/regular-injeolmi-songpyeon-set.jpg"
  }
];

export const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'gift', label: '답례떡' },
  { id: 'giftset', label: '선물세트' },
  { id: 'cake', label: '떡케이크' },
  { id: 'regular', label: '일반떡' },
];
