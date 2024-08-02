import Header from "../components/Kim/Header";
import LocationButton from "../components/Kim/LocationButton";

const FuneralLocation = () => {
  const locations = [
    {
      id: 1,
      name: "21그램 경기광주점",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 2,
      name: "강릉펫사랑",
      region: "강원권",
      address: "강원도 강릉시 사천면 구라미길 376",
      phone: "033-645-8888",
      image:
        "http://127.0.0.1:8000/media/funeral_images/%EA%B0%95%EB%A6%89%ED%8E%AB%EC%82%AC%EB%9E%91.jpg",
      website: "http://www.gpetlove.modoo.at/",
      created_at: "2024-08-02T08:55:37.302440Z",
    },
    {
      id: 3,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 4,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 5,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 6,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 7,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
    },
    {
      id: 8,
      name: "강아지아지",
      region: "수도권",
      address: "경기도 광주시 오포읍 매자리길 185-35",
      phone: "1688-1240",
      image:
        "http://127.0.0.1:8000/media/funeral_images/21%EA%B7%B8%EB%9E%A8.png",
      website: "https://www.21gram.co.kr/",
      created_at: "2024-08-02T08:49:56.748198Z",
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
