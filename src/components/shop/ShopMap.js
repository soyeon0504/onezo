import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const ShopMap = ({ x, y }) => {
  const [position, setPosition] = useState({ lat: y, lng: x });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({ lat: coords.latitude, lng: coords.longitude });
        },
        error => {
          console.error(error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const containerStyle = {
    width: "100%",
    position: "relative",
    marginTop: "65px",
    marginBottom: "100px",
  };

  const mapStyle = {
    width: "100%",
    height: "400px",
    position: "relative",
    border: "1px solid #2c39b5",
    borderRadius: "10px",
  };

  return (
    // <div style={containerStyle}>
    //   <Map
    //     center={position}
    //     level={3}
    //     style={mapStyle}
    //     apiKey="e68e858bc6425ba8391c100f4203dc1e"
    //   >
    //     <MapMarker position={position} />
    //   </Map>
    // </div>
    <div style={{ margin: "50px 0px", border: "1px solid #572A01" }}>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.8923113328171,
          lng: 128.608559072437,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 35.8923113328171,
            lng: 128.608559072437,
          }}
        />
      </Map>
    </div>
  );
};

export default ShopMap;
