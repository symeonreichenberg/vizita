var app = document.getElementById('quote');
var typewriter = new Typewriter(app, {loop: true, delay: 55,});
typewriter
.pauseFor(500)
.typeString('Já myslím, že <span class="non">v tomhle</span> rozděleném světě plném utrpení je jen jediná jistota - Spojené státy americké')
.pauseFor(700).typeString(' <span class="non">a jejich</span> nikdy neutuchající boj za svobodu.')
.pauseFor(500).typeString(' Za svobodu <span class="non">a spravedlnost</span> pro všechny. Bůh ochraňuj Ameriku! Bez ní bychom')
.pauseFor(300).deleteChars(4).typeString(' bylo lidstvo ztraceno.')
.pauseFor(300).typeString('<br/><br/>Ruby S. Fanucci')
.pauseFor(2500).deleteAll()
.pauseFor(1500)
.typeString('Jak obtížně je pro nás představitelný náš vlastní zánik! ')
.pauseFor(500).typeString('Jak směšně mrháme časem, který nám byl propůjčen! Vždyť život, naše vlastní bezvý')
.pauseFor(300).deleteChars(5).typeString('nepravděpodobná existence, ')
.pauseFor(500).typeString('unikátní shluk buněk, který tvoří naše já, je určen <span class="non">k žití</span> ')
.pauseFor(800).typeString('- teď <span class="non">a pak</span> už nikdy více.')
.pauseFor(300).typeString('<br/><br/>Eva Rožkova')
.pauseFor(2500).deleteAll()
.pauseFor(1500)
.typeString('Když uvidíte umírat dost lidí, zvyknete si,')
.pauseFor(900).typeString(' to ví asi každý. ')
.pauseFor(700).typeString('Ale víte, co je zajímavé? Jako')
.deleteChars(4).pauseFor(300).typeString('<span class="non">I jako</span> lékař můžete vítat smrt nepřátel <span class="non">s radostí.</span> ')
.pauseFor(700).typeString('Ostatně, oni si pro vás nepřáli nic jiného.')
.pauseFor(300).typeString('<br/><br/>Eugene F. Pomeroy')
.pauseFor(2500).deleteAll()
.pauseFor(1500)
.typeString('Smrt není děsivá, pokud je smysluplná. Za války nebo ještě předtím, ')
.pauseFor(900).typeString('za časů boje o naši vlastní svobodu, tehdy jsem se jí neobávala,')
.pauseFor(700).typeString(' tehdy jsem chápala, za co bych svůj život položila. Nyní si ale už nejsem')
.pauseFor(400).typeString(' tak jistá.')
.pauseFor(300).typeString('<br/><br/>Olga Pavlovna Nosova')
.pauseFor(2500).deleteAll()
.start();