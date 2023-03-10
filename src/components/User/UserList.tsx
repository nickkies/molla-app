import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import bi from 'img/bi.png';
import sord from 'img/sord.png';

const Container = styled.div`
  background-color: ${({ theme }) => theme.wb};
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.wb};
`;

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.bc};
  max-width: 1258px;
  padding: 10px;
  width: calc(100% - 22px);
  min-height: calc(100% - 22px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: inherit;
`;

const Header = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContentWrap = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Btn = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.fc};
  border: 1px solid ${({ theme }) => theme.bc};
  border-radius: 3px;
  color: ${({ theme }) => theme.wb};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.red};
    transition: all 0.5s;
  }
  &:active {
    background-color: ${({ theme }) => theme.red};
  }
`;

const Nav = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  height: 4rem;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.bc};
  border-radius: 5px;
`;

const NavLi = styled.li`
  background-color: ${({ theme }) => theme.fc};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.bc};
  }
  font-size: 3rem;
  word-spacing: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.red};
    transition: all 0.5s;
    text-shadow: #fc0 1px 0 10px;
  }
  &:active {
    background-color: ${({ theme }) => theme.red};
    text-shadow: #fc0 10px 0 20px;
  }
`;

const Content = styled.section`
  margin: 15px 0;
  width: 100%;
  height: 100%;
`;

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: 1.3rem;
  border: 0;
  border-radius: 15px;
  outline: none;
  color: ${({ theme }) => theme.wb};
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.bc};
  @media only screen and (max-width: 1080px) {
    width: calc(100% - 50px);
  }
  margin-right: 10px;
`;

const Icon = styled(BiSearch)`
  display: none;
  @media only screen and (max-width: 1080px) {
    display: inline-block;
    width: 100px;
  }
`;

const CardWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: calc(50% - 7px);
  margin-top: 10px;
  background-color: ${({ theme }) => theme.fc};
  border: 1px solid ${({ theme }) => theme.bc};
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 20px;
  position: relative;
  cursor: pointer;
  p:first-child {
    font-size: 3rem;
    color: ${({ theme }) => theme.c};
    text-shadow: ${({ theme }) => theme.wb} 1px 0 5px;
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const P = styled.p<{ cnt?: number }>`
  flex-grow: 1;
  padding: 10px;
  min-width: ${({ cnt }) =>
    `calc(${cnt ? Math.floor(100 / cnt) : 100}% - 20px)`};
  font-size: 1.5rem;
  z-index: 1;
`;

const CardBackground = styled.div`
  background-image: url(${sord});
  background-repeat: no-repeat;
  opacity: 0.3;
  width: 100%;
  height: 20rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Footer = styled.section``;

export default function UserList() {
  return (
    <Container>
      <Wrap>
        <Header>
          <HeaderContentWrap>
            <Img src={bi} alt="??????????????????" />
          </HeaderContentWrap>
          <HeaderContentWrap>
            <Btn>??? ??? ???</Btn>
          </HeaderContentWrap>
        </Header>
        <Nav>
          <NavUl>
            <NavLi>??? ???</NavLi>
            <NavLi>??? ???</NavLi>
          </NavUl>
        </Nav>
        <Content>
          <InputWrap>
            <Input type="text" placeholder="???????????? ??????" />
            <Icon />
          </InputWrap>
          <CardWrap>
            {Array.from({ length: 20 }).map((_, i) => (
              <Card key={i}>
                <P>???????????? ?????????</P>

                <P cnt={3}>????????????</P>
                <P cnt={3}>??????</P>
                <P cnt={3}>227???</P>

                <P cnt={3}>??????</P>
                <P cnt={3}>??????</P>
                <P cnt={3}>?????????</P>

                <P cnt={2}>?????? ????????? : 12,000</P>
                <P cnt={2}>????????? ????????? : 100,000</P>

                <P>?????????: ????????????(??????), ????????????(??????)</P>

                <P>
                  ?????? ???????????????, ??? ?????? ?????????, ?????? ?????????, ?????? ?????? ??????
                  ??? ??????????????? ????????? ????????? ?????????
                </P>

                <CardBackground />
              </Card>
            ))}
          </CardWrap>
        </Content>
        <Footer></Footer>
      </Wrap>
    </Container>
  );
}
