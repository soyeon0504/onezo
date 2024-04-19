import React from 'react'
import { Banner, MainWrap, MainWrapInner, MenuButtonWrap, MenuMain, MenuTitle, MenuTop, MenuWrap } from '../../styles/main/mainStyle'

const MainPage = () => {
  return (
    <MainWrap>
      <MainWrapInner>
        <Banner>
          <button></button>
          <button></button>
          <img src='*' className='banner1'/>
          <img src='*' className='banner2'/>
          <img src='*' className='banner3'/>
        </Banner>
        <MenuWrap>
         <MenuTop>
          <MenuTitle>
            <img src=''/>메뉴보기
          </MenuTitle>
          <MenuButtonWrap>
            <button>전체</button>
            <button>세트</button>
            <button>치킨</button>
            <button>사이드</button>
            <button>소스</button>
            <button>음료</button>
          </MenuButtonWrap>
         </MenuTop>
         <MenuMain>
          <div>
            <img src='/' alt='메뉴 이미지'/>
          </div>
          <div className='menu-title'>원조 후라이드</div>
          <div className='menu-price'>18,000</div>
         </MenuMain>
        </MenuWrap>
      </MainWrapInner>
    </MainWrap>
  )
}

export default MainPage

// import React from 'react'

// const MainPage = () => {
//   return (
//     <div>
//       <p>테스트 메인 페이지 입니다.</p>
//     </div>
//   )
// }

// export default MainPage