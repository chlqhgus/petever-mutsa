import Header from "../components/funeral/Header";
import LocationButton from "../components/funeral/LocationButton";

const FuneralLocation = () => {
  const locations = [
    {
      name: "㈜펫바라기",
      region: "수도권",
      address: "경기 고양시 일산동구 설문동 null",
      phone: "031-976-3179",
      image: "https://ifh.cc/g/crPXWb.jpg",
      website: "http://www.petbaragi.com",
    },
    {
      name: "씨엘로펫",
      region: "수도권",
      address: "경기도 용인시 처인구 죽양대로 null",
      phone: "1577-7332",
      image: null,
      website: "http://www.cielopet.co.kr",
    },
    {
      name: "펫오케스트라",
      region: "수도권",
      address: "경기도 화성시 비봉면 양노남길 null",
      phone: "1588-1289",
      image: null,
      website: "http://www.petorchestra.co.kr/",
    },
    {
      name: "ROYHILLS",
      region: "수도권",
      address: "경기도 양평군 양동면 양동금곡 null",
      phone: "1855-2004",
      image: null,
      website: "https://www.royhills.co.kr",
    },
    {
      name: "주식회사 패투헤븐",
      region: "강원권",
      address: "강원 원주시 소초면 현촌길 null",
      phone: "033-745-4211",
      image: null,
      website: "https://www.pettoheaven.co.kr",
    },
    {
      name: "강릉 펫사랑",
      region: "강원권",
      address: "강원 강릉시 사천면 구라미길 null",
      phone: "033-645-8888",
      image: null,
      website: "https://gpetlove.modoo.at",
    },
    {
      name: "펫 메모리얼",
      region: "강원권",
      address: "강원 횡성군 공근면 경강로초원 null",
      phone: "1566-4379",
      image: null,
      website: "http://www.petmemorial.co.kr",
    },
    {
      name: "타임투반려동물장례문화원",
      region: "강원권",
      address: "전라남도 함평군 학교면 학교월봉길 null",
      phone: "061-322-0122",
      image: null,
      website: "http://www.timeto.co.kr",
    },
    {
      name: "스마일 어게인",
      region: "충청권",
      address: "충청북도 영동군 추풍령면 작동 null",
      phone: "1544-9262",
      image: null,
      website: "http://www.smileagain.net",
    },
    {
      name: "러블리엔젤",
      region: "충청권",
      address: "충청북도 청주시 서원구 남이면 null",
      phone: "1577-2518",
      image: null,
      website: "http://www.lovelyangel.co.kr",
    },
    {
      name: "리멤버 파크",
      region: "충청권",
      address: "충청남도 논산시 연산면 계백로 null",
      phone: "041-735-1700",
      image: null,
      website: "http://www.rememberpark.kr",
    },
    {
      name: "대전 스카이 펫",
      region: "충청권",
      address: "충청북도 옥천군 이원면 이원로 null",
      phone: "1588-4476",
      image: null,
      website: "https://mamresky.modoo.at/",
    },
    {
      name: "강아지 펫 헤븐",
      region: "영남권",
      address: "경상북도 성주군 선남면 오도리 null",
      phone: "1899-6144",
      image: null,
      website: "http://petheaven.ad-media.kr",
    },
    {
      name: "스윗드림 펫",
      region: "영남권",
      address: "경상북도 칠곡군 가산면 다부거문1길 null",
      phone: "054-974-2220",
      image: null,
      website: "http://www.sweetdreampet.com",
    },
    {
      name: "한별 리멤버파크",
      region: "영남권",
      address: "경상남도 함안군 법수면 이묵골로 null",
      phone: "1899-2610",
      image: null,
      website: "http://hanbyuldog.modoo.at",
    },
    {
      name: "하얀민들레",
      region: "영남권",
      address: "경북 청도군 화양읍 남성현로 null",
      phone: "1599-1627",
      image: null,
      website: "http://www.youngheal.com",
    },
    {
      name: "전주 반려동물 장례식장 아리움",
      region: "호남권",
      address: "전라북도 전주시 완산구 콩쥐팥쥐로",
      phone: "063-223-7942",
      image: null,
      website: "http://www.arium.kr",
    },
    {
      name: "전주 하늘반려동물장례식장",
      region: "호남권",
      address: "전라북도 완주군 소양면 전진로 null",
      phone: "063-432-0600",
      image: null,
      website: "http://전주하늘반려동물장례식장.com",
    },
    {
      name: "오수 펫 추모공원",
      region: "호남권",
      address: "전라북도 임실군 오수면 춘향로 null",
      phone: "063-643-0486",
      image: null,
      website: "http://www.osupet.com",
    },
    {
      name: "전남반려동물장례식장 푸른솔 (주)",
      region: "호남권",
      address: "전라남도 여수시 율촌면 조화길 null",
      phone: "1566-7112",
      image: null,
      website: "https://www.greenssol.com",
    },
  ];
  return (
    <div className="FuneralLocation">
      <Header></Header>
      <LocationButton locations={locations}></LocationButton>
    </div>
  );
};

export default FuneralLocation;
