import useWindowSize from "../../hooks/useWindowSize";
import * as S from "./styles";

export default function Main() {
  const links = [
    {
      id: 1,
      name: "Site",
      label: "Acesse meu site",
      link: "http://bit.ly/diegorenatopersonal",
      icon: <S.WebsiteIcon size="20" />,
    },
    {
      id: 2,
      name: "Instagram",
      label: "Conheça meu instagram",
      link: "https://www.instagram.com/diegorenatopersonal/",
      icon: <S.InstagramIcon size="20" />,
    },
    {
      id: 3,
      name: "Whatsapp",
      label: "Entre em contato comigo",
      link: "https://www.bit.ly/casa_da_vovo_diego",
      icon: <S.WhatsappIcon size="20" />,
    },
  ];
  const [{ windowSize }] = useWindowSize();

  return (
    <S.Container>
      <S.CardContent>
        <S.Header>
          <S.ProfileImage src="/profile_closer.jpg" />
          <S.HeaderTextContent>
            <S.HeaderTitle>Diego Renato Personal</S.HeaderTitle>
            <S.HeaderSubtitle>
              Especialista em treinamento personalizado
            </S.HeaderSubtitle>
          </S.HeaderTextContent>
        </S.Header>
        <S.List>
          {links.map((link) => (
            <a href={link.link} target="_blank" key={link.id}>
              <S.Button id={link.name}>
                {link.icon}
                {link.label}
              </S.Button>
            </a>
          ))}
        </S.List>
      </S.CardContent>
      <S.BackGround
        src={windowSize > 430 ? "/bg.jpg" : "/bg_mobile.png"}
        alt=""
      />
    </S.Container>
  );
}
