<!-- // skrypt pobrano z http://szablony.freeware.info.pl
miesiac = new Array(12)
miesiac[0] = "stycznia "
miesiac[1] = "lutego "
miesiac[2] = "marca "
miesiac[3] = "kwietnia "
miesiac[4] = "maja "
miesiac[5] = "czerwca "
miesiac[6] = "lipca "
miesiac[7] = "sierpnia "
miesiac[8] = "września "
miesiac[9] = "października "
miesiac[10] = "listopada "
miesiac[11] = "grudnia "
dzien = new Array(7)
dzien[0] = "niedziela "
dzien[1] = "poniedziałek "
dzien[2] = "wtorek "
dzien[3] = "środa "
dzien[4] = "czwartek "
dzien[5] = "piątek "
dzien[6] = "sobota "
function podaj_date(){
var Dzisiaj = new Date()
var Tygodnia = Dzisiaj.getDay()
var Miesiac = Dzisiaj.getMonth()
var Dnia = Dzisiaj.getDate()
var Rok = Dzisiaj.getFullYear()
if(Rok <= 99) Rok += 1900
return dzien[Tygodnia] + "," + " " + Dnia + " " + miesiac[Miesiac] + ", " + Rok +" r." }
//-->
