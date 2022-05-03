import React from "react"
import { ZaposleniWrap, WrapSitneTockice2, WrapSitneTockice } from "./styles.js"
import Zaposlenik from "./Zaposlenik.js"
import foto1 from "../../../../content/assets/fotoDobrodosli.png"
import foto2 from "../../../../content/assets/zrinkazaposleni.png"
import foto3 from "../../../../content/assets/jasminka.png"
import foto4 from "../../../../content/assets/nevena.png"
import sitnetockice2 from "../../../../content/assets/tockiceOrdinacija1.svg"

const Zaposleni = () => {
  return (
    <ZaposleniWrap>
      <WrapSitneTockice>
        <img src={sitnetockice2} alt="little dots 2" />
      </WrapSitneTockice>
      <WrapSitneTockice2>
        <img src={sitnetockice2} alt="little dots 2" />
      </WrapSitneTockice2>
      <Zaposlenik
        text=" Dobrodošli u Ordinaciju dentalne medicine dr. Zrinka Kolega. Želja nam
          je da Vam u opuštenoj i prijateljskoj atmosferi pružimo najbolju
          moguću skrb iz područja dentalne stomatologije i estetske medicine.
          <br />
          <br />
          Znamo da je posjet stomatologu mnogim ljudima stresan i to nas
          motivira da pacijentima pristupamo maksimalno pažljivo i blago. Nakon
          više od dvadeset i pet godina iskustva u brizi za zdravlje čitavih
          obitelji možemo Vam ponuditi da probleme riješimo na obostrano
          zadovoljstvo. K tome, veliku važnost pridajemo preventivi te Vas zato
          nastojimo stalno educirati u održavanju oralne higijene kako Vam zdrav
          i lijep osmijeh ne bi silazio s lica."
        photo={foto1}
        index={1}
        left={false}
        trans="30%"
      />
      <Zaposlenik
        text=" Doktorica Zrinka Kolega rođena je 1969. godine u Zadru gdje je
          završila osnovnu školu i gimnaziju. U ožujku 1994. diplomirala je na
          Stomatološkom fakultetu Sveučilišta u Zagrebu i iste godine počela
          stažiranje u DZ Peščenica. <br /> Od 1995. do 1999. radi u DZ Zadar na
          raznim lokacijama.
          <br />
          1999. otvara svoju privatnu ordinaciju dentalne medicine u Zadru na
          području Arbanasa. Iste godine sklapa i ugovor sa HZZO-om.
          <br />
          2008/2009. upisuje Poslijediplomski specijalistički studij na
          Stomatološkom fakultetu u Zagrebu gdje magistrira 2012. s temom
          'Temporomandibularni poremećaji u ronilaca' uz mentora prof. dr.sc.
          Vjekoslava Jerolimova. Redovito se usavršava na domaćim i stranim
          kongresima i tečajevima, a od 2014. počinje se usavršavati na području
          estetske medicine. Usavršava se u Hrvatskoj, Italiji, Njemačkoj,
          Velikoj Britaniji i Nizozemskoj. Protetika, estetska stomatologija i
          estetska medicina i rad s pacijentima s dentalnom fobijom su područja
          koja je najviše profesionalno zanimaju. <br />
          Doktorica govori engleski, njemački i talijanski, a u slobodno vrijeme
          bavi se trčanjem, plivanjem i ronjenjem."
        photo={foto2}
        index={2}
        left={true}
        trans="-30%"
      />
      <Zaposlenik
        text="Sestra Jasminka Dujić rođena je 1968. godine u Zadru gdje je završila
          Medicinsku školu Ante Kuzmanića 1987. Iste godine odrađuje i staž u
          Općoj bolnici Zadar. Nakon toga radi kao medicinska sestra u
          stomatološkim ordinacijama u Zadru, a od 2001. godine je dio tima
          Ordinacije dentalne medicine dr. Zrinka Kolega. <br />
          <br />
          Zbog svog izrazito stručnog i pažljivog pristupa pacijentima vrlo je
          omiljena među pacijentima i uvelike pridonosi da se osjećate ugodno i
          sigurno.
          <br />
          <br />
          Usavršava se i u području medicinske masaže i limfne drenaže te je
          završila tečajeve Pučkog otvorenog učilišta u Zadru 2018. i limfne
          drenaže u Zagrebu 2019. <br />
          <br />U slobodno vrijeme aktivna je u rukometnim natjecanjima u Zadru
          kao službeni medicinski nadzor."
        photo={foto3}
        index={3}
        left={false}
        trans="30%"
      />
      <Zaposlenik
        text="Naša administratorica Nevena Lonić rođena je 1974. godine u Zadru gdje
          je završila Srednju ekonomsku školu 1991. Svoje iskustvo u radu s
          ljudima stekla je uspješnim dugogodišnjim vođenjem obiteljske tvrtke.
          <br />
          <br />
          Dočekuje pacijente spremna da svojim optimizmom popravi njihovo
          raspoloženje pri ulasku u ordinaciju. Osim što svojom vedrinom
          umanjuje strah ili nelagodu, olakšati će Vam i planiranje daljnjih
          posjeta, što pomaže poštivanju zakazanih termina."
        photo={foto4}
        index={4}
        left={true}
        trans="-30%"
      />
    </ZaposleniWrap>
  )
}

export default Zaposleni
