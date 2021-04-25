import { URLPRDBLOG } from "../lib/constants";
import { Twitter, Facebook, Whatsapp, Telegram, Linkedin, Mail } from "react-social-sharing";

export default function SocialShare(params) {
  const { urlpost , tittle} = params;

  const styleTelegram = {
    background: '#0088cc'
  };

  const styleMail = {
    background: 'black'
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
        <hr/>
        <strong>
        Compartir
        </strong>
        <br/> 
        <Twitter solid small message={tittle} link={`${URLPRDBLOG}${urlpost}`} />
        <Facebook solid small link={`${URLPRDBLOG}${urlpost}`} />
        <Whatsapp solid small message={tittle} link={`${URLPRDBLOG}${urlpost}`} />
        <Telegram solid small message={tittle} style={styleTelegram} link={`${URLPRDBLOG}${urlpost}`} />
        <Linkedin solid small message={tittle} link={`${URLPRDBLOG}${urlpost}`} />
        <Mail solid small subject={tittle}  style={styleMail} link={`${URLPRDBLOG}${urlpost}`} />

    </div>
  );
}
