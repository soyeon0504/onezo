import axios from 'axios';
import '../../styles/shop/ShopModal.css';
import React, { useEffect, useState } from "react";

const { kakao } = window;

export const ShopModal = ({ onCloseModal }) => {
    let initlocation = { location_x: 35, location_y: 127 }; //초기값 설정
    const [location, setLocation] = useState(initlocation); //초기값 설정

    // 가게아이디, 가게이름, 주소 배열 
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('/api/store/storeList');
            setShopList(response.data);
            console.log(response.data);
        }
        getData();

        const { geolocation } = navigator;

        if (!geolocation) {
            return
        }
        geolocation.getCurrentPosition(handleSuccess)
    }, [])

    var marker;

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    var coords;
    for (let i = 0; i < shopList.length; i++) {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(shopList[i].address, function (result, status) {
            console.log("주소조회오나");
            console.log("주소조회 = " + shopList[i].address);
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
                // 결과값도 조회해본다
                console.log(result)
                coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // // 좌표를 주소로 변환합니다
                console.log("위도경도오나");
                console.log("위도경도 = " + coords);
                const [latitude, longitude] = coords
                    .slice(1, -1) // 괄호 제거
                    .split(', ')  // 쉼표와 공백으로 분할
                    .map(parseFloat); // 각 값에 parseFloat 적용

                console.log("위도 값:", latitude);
                console.log("경도 값:", longitude);
                // 결과값으로 받은 위치를 마커로 표시합니다
                marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                // map.setCenter(coords);
                // }
            }
        });
    }

    var map;

    const drawMap = () => {
        var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        var options = {
            center: new kakao.maps.LatLng(
                location.location_x,
                location.location_y
            ), //지도의 중심좌표
            level: 7,
        };
        map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



        // 선택한 주소를 지도에 마크되도록
        // setLocation({
        //     location_x: latitude,
        //     location_y: longitude,
        // });

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        var geoMarkerPosition = new kakao.maps.LatLng(
            location.location_x,
            location.location_y
        );


        // 지도에 표시할 원을 생성합니다
        var circle = new kakao.maps.Circle({
            center: new kakao.maps.LatLng(
                location.location_x,
                location.location_y
            ), // 원의 중심좌표
            radius: 2000, // 미터 단위의 원의 반지름입니다 
            strokeWeight: 5, // 선의 두께입니다 
            strokeColor: '#75B8FA', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
        });

        var radius = circle.getRadius(); // 반지름


        // 각도를 라디안으로 변환하는 함수
        function calculateDistance(lat1, lon1, lat2, lon2) {
            // 위도와 경도를 라디안으로 변환
            const R = 6371000; // 지구 반지름 (단위: km -> m)
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // 두 지점 간의 거리 (단위: km)
            return distance;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

        var distances = [];
        function calculateDistancesFromCurrentLocation(currentLat, currentLon, locations) {
            for (let i = 0; i < shopList.length; i++) {
                distances.push(calculateDistance(location.location_x, location.location_y, shopList[i].latlng.Ma, shopList[i].latlng.La));
            }

            return distances;
        }

        var distancess = calculateDistancesFromCurrentLocation(location.location_x, location.location_y, shopList); // 리스트 안에 리스트를 담아서 배열형태가 아니라서 오류가 났던거다
        function calculateDistancesAndShowMarkers() {
            var aroundMarker = [];
            var allMarker = [];
            // 가게들과 중심의 길이가 반경보다 짧으면 보이도록
            for (let i = 0; i < shopList.length; i++) {
                // 모든 가게목록
                allMarker.push(shopList[i].storeName);
                if (distancess[i] < radius) {
                    marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        title: shopList[i].storeName, // 마커의 타이틀을 표시
                        position: coords[i] // 마커를 표시할 위치
                    });
                    // 반경내 가게목록
                    aroundMarker.push(shopList[i].storeName);
                }
            }
            console.log("모든주소 = " + allMarker);
            console.log("근처주소 = " + aroundMarker);
        }

        // calculateDistancesAndShowMarkers 함수 호출
        calculateDistancesAndShowMarkers();



        //해당 위치 마커 표시
        marker = new kakao.maps.Marker({
            position: geoMarkerPosition, // 마커를 표시할 위치
            image: markerImage // 마커 이미지 
        });

        // 지도에 마커 표시
        marker.setMap(map);

        // 지도에 원을 표시합니다 
        circle.setMap(map);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    }



    const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords
        setLocation({
            location_x: latitude,
            location_y: longitude,
        });
        drawMap();
    }



    return (
        <div id='mapmap'>
            <div className='modal_cancle'>
                <div className='store_modal_cancle'>
                    <img src="/images/my/bt_cancel.svg" onClick={onCloseModal} />
                </div>
            </div>
            <h1 className='store_h1'>근처매장</h1>
            <div className='scroll_y'>
                <div className='store_list_main'>
                    {
                        shopList.map((shopList, index) => (
                            <div className='store_list' key={index}>
                                <img src="images/my/store.png" />
                                <div style={{ width: "970px" }}>
                                    <p>{shopList.storeName}</p>
                                    <h3>{
                                        JSON.stringify(store.latlng).slice(0, 20)
                                    }</h3>
                                </div>
                                <button className='btn_choice'>포장</button>
                                <button className='btn_choice'>매장</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
            <h1 className='store_h1'>모든매장</h1>
            <div className='scroll_y'>
                <div className='store_list_main'>
                    {
                        shopList.map((store, index) => (
                            <div className='store_list' key={index}>
                                <img src="images/my/store.png" />
                                <div style={{ width: "970px" }}>
                                    <p>{store.title}</p>
                                    <h3>{
                                        JSON.stringify(store.latlng).slice(0, 20)
                                    }</h3>
                                </div>
                                <button className='btn_choice'>포장</button>
                                <button className='btn_choice'>매장</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='my_location'>
                <button className='btn_my_location' style={{ marginBottom: '1rem' }} onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setLocation({
                            location_x: position.coords.latitude,
                            location_y: position.coords.longitude
                        })
                    });
                    drawMap();
                }}>내위치 찾기</button>
            </div>
            <div id="map"></div>
        </div>
    );
}
export default ShopModal;