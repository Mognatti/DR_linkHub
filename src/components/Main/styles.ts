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
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;

export const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const HeaderContent = styled.p`
  margin: 0;
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
  margin-left: -80px;
  margin-right: 80px;
  @media (max-width: 470px) {
    margin-left: -30px;
    margin-right: 30px;
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
  margin-left: -105px;
  margin-right: 105px;
`;

export const BackGround = styled.img`
  position: absolute;
  z-index: -1;
  width: 101vw;
  height: 100vh;
  @media (max-width: 470px) {
    width: 101vw;
  }
`;
