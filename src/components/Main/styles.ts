import { styled } from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 99vw;
  align-items: center;
  justify-content: center;
  @media (max-width: 470px) {
    justify-content: flex-start;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  padding: 16px 32px 32px 32px;
  border-radius: 18px;
  gap: 3vh;
  @media (max-width: 470px) {
    width: 300px;
    background: none;
    gap: 8vh 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  margin-top: 5vh;
`;

export const HeaderTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  @media (max-width: 470px) {
    margin-top: -8px;
    padding: 16px;
    width: 104.5%;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.4em;
  margin: 1vh 0 2vh 0;
`;

export const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  z-index: 10;
  @media (max-width: 470px) {
    outline: 4px solid #242424;
  }
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 1.1em;
  @media (max-width: 470px) {
    text-align: center;
    width: 350px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3vh 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  width: 400px;
  padding: 16px;
  outline: none;
  transition: 350ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 470px) {
    width: 280px;
  }
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: #075e54;
  margin-left: -88px;
  margin-right: 88px;
  @media (max-width: 470px) {
    margin-left: -35px;
    margin-right: 35px;
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  fill: red;
  margin-left: -88px;
  margin-right: 88px;
  @media (max-width: 470px) {
    margin-left: -38px;
    margin-right: 38px;
  }
`;

export const WebsiteIcon = styled(BiWorld)`
  color: ${(props) => props.theme.colors.secondary};
  margin-left: -113px;
  margin-right: 110px;
  @media (max-width: 470px) {
    margin-left: -60px;
    margin-right: 60px;
  }
`;

export const BackGround = styled.img`
  position: absolute;
  z-index: -1;
  width: 101vw;
  height: 100vh;
  @media (max-width: 470px) {
    width: 101vw;
    height: 100vh;
  }
`;
