import '../../styles/modal/FindStore.css';
import React, { useEffect, useState } from "react";
import {
    CartItem,
    CartMain
} from "../../styles/cart/CartStyle.js";

const { kakao } = window;

export const MapComponent = () => {
    let initlocation = { location_x: 35, location_y: 127 }; //초기값 설정
    const [location, setLocation] = useState(initlocation); //초기값 설정

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
        {
            title: 'aa',
            latlng: new kakao.maps.LatLng(35.87114676506123, 128.59538148093827)
        },
        {
            title: 'bb',
            latlng: new kakao.maps.LatLng(35.86941595718792, 128.59271179394966)
        },
        {
            title: 'cc',
            latlng: new kakao.maps.LatLng(35.873761808268775, 128.59660754727423)
        },
        {
            title: 'dd',
            latlng: new kakao.maps.LatLng(35.8692273128927, 128.60417791107864)
        },
        {
            title: 'ee',
            latlng: new kakao.maps.LatLng(35.87729348541937, 128.628877039259)
        },
        {
            title: 'ff',
            latlng: new kakao.maps.LatLng(35.874800430290726, 128.6293131618303)
        },
        {
            title: 'gg',
            latlng: new kakao.maps.LatLng(35.872986632494744, 128.6275045279146)
        },
        {
            title: 'hh',
            latlng: new kakao.maps.LatLng(35.87113921287847, 128.63083248540573)
        },
        {
            title: 'ii',
            latlng: new kakao.maps.LatLng(35.87375608567733, 128.62191788170702)
        },
        {
            title: 'jj',
            latlng: new kakao.maps.LatLng(35.875843607409074, 128.62148156922404)
        },

    ];

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
        var marker;

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
            for (let i = 0; i < positions.length; i++) {
                distances.push(calculateDistance(location.location_x, location.location_y, positions[i].latlng.Ma, positions[i].latlng.La));
            }

            return distances;
        }

        var distancess = calculateDistancesFromCurrentLocation(location.location_x, location.location_y, positions); // 리스트 안에 리스트를 담아서 배열형태가 아니라서 오류가 났던거다
        function calculateDistancesAndShowMarkers() {
            var aroundMarker = [];
            var allMarker = [];
            // 가게들과 중심의 길이가 반경보다 짧으면 보이도록
            for (let i = 0; i < positions.length; i++) {
                // 모든 가게목록
                allMarker.push(positions[i].title);
                if (distancess[i] < radius) {
                    marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        title: positions[i].title, // 마커의 타이틀을 표시
                        position: positions[i].latlng // 마커를 표시할 위치
                    });
                    // 반경내 가게목록
                    aroundMarker.push(positions[i].title);
                }
            }
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

    useEffect(() => {
        const { geolocation } = navigator
        if (!geolocation) {
            return
        }
        geolocation.getCurrentPosition(handleSuccess)
    }, [])

    return (
        <div id='mapmap'>
            <h1>근처매장</h1>
            <div className='scroll_y'>
                <CartMain>
                    <CartItem>
                        <img src="images/my/store.png" />
                        <div style={{ width: "970px" }}>
                            <p>대구점</p>
                            <h3>ㅇㅇ시ㅇㅇ구ㅇㅇ동</h3>
                        </div>
                        <button className='btn_location'>포장</button>
                        <button className='btn_location'>매장</button>
                    </CartItem>
                    <CartItem>
                        <img src="images/my/store.png" />
                        <div style={{ width: "970px" }}>
                            <p>대구점</p>
                            <h3>ㅇㅇ시ㅇㅇ구ㅇㅇ동</h3>
                        </div>
                        <button className='btn_location'>포장</button>
                        <button className='btn_location'>매장</button>
                    </CartItem>
                    <CartItem>
                        <img src="images/my/store.png" />
                        <div style={{ width: "970px" }}>
                            <p>대구점</p>
                            <h3>ㅇㅇ시ㅇㅇ구ㅇㅇ동</h3>
                        </div>
                        <button className='btn_location'>포장</button>
                        <button className='btn_location'>매장</button>
                    </CartItem>
                </CartMain>
            </div>
            <hr />
            <h1>모든매장</h1>
            <div className='scroll_y'>
                <CartMain>
                    <CartItem>
                        <img src="images/my/store.png" />
                        <div style={{ width: "970px" }}>
                            <p>대구점</p>
                            <h3>ㅇㅇ시ㅇㅇ구ㅇㅇ동</h3>
                        </div>
                        <button className='btn_location'>포장</button>
                        <button className='btn_location'>매장</button>
                    </CartItem>
                    <CartItem>
                        <img src="images/my/store.png" />
                        <div style={{ width: "970px" }}>
                            <p>대구점</p>
                            <h3>ㅇㅇ시ㅇㅇ구ㅇㅇ동</h3>
                        </div>
                        <button className='btn_location'>포장</button>
                        <button className='btn_location'>매장</button>
                    </CartItem>
                </CartMain>
            </div>
            <div className='my_location'>
                <button className='btn_location' style={{ marginBottom: '1rem' }} onClick={() => {
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
export default MapComponent;