# [HTML, CSS, JS] Easy Responsive Navigation

## A layout felépítése és megvalósítása
Klasszikus oldal felépítést választottam.
- fejléc
- navigációs sáv
- tartalom konténer
- lábléc

Grid módot használtam, egy oszloppal és a felsorolt elemek méretezett soraival.

## A navigáció viselkedése
Desktop nézetben a navigációs sávban egymás mellett, balra rendezve jelennek meg a menüpontok.
Mobil nézetben (600 px szélesség alatt) a navigációs sáv eltűnik, helyét a fejléc tölti ki, tehát ott magasabb lesz.
A navigációs sáv helyett egy fixen pozícionált gomb (hamburgermenü) jelenik meg.
A hamburgermenüre kattintva a teljes tartalmat eltakarja és elhomályosítja egy szürke, áttetsző, teljes képernyős box, benne egymás alá rendezve, középre igazítva a menüpontok.
Az áttetsző box jobb-felső sarkában egy bezáró gomb található, amelyre kattintva a box és ezzel a menüpontok eltünnek.

## A navigáció megvalósítása
Desktop nézetben a navigációs sáv a gridünk második sorában helyezkedik el. A hamburgermenü és a bezáró gombok display: none tulajdonsággal el vannak rejtve.
Mobil nézetben a hamburgermenü gomb position: fixed tulajdonséggal a képernyő jobb oldalára ragad. A navigációs sávot elrejtem.
A navigációs konténer ki/bekapcsolásért egy rövidke css class (.show-nav)
```
.show-nav {
    display: flex;
}
```
és egy szintén rövid javascript függvény (navigationToggle) felel.
```
const navigationToggle = () => {
    navContainer.classList.toggle('show-nav');
}
```

A hamburgermenüre kattintva a navigációs konténeren bekapcsolok a show-nav class-t, amely megjeleníti a fentebb említett teljes képernyős boxot.
A bezáró gombra kattintva ugyanez a függvény kerül meghívásra, amely ezúttal leveszi a shownav class-t a boxról (classlist.toggle), elrejtve ezzel azt.