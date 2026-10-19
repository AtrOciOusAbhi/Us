/* ================= CONFIGURATION (edit here) ================= */
const CONFIG = {
  // Public URL of the deployed site, used inside QR codes. Leave "" while testing locally.
  // Example after deployment: "https://yourname.github.io/pantnagar-green-trails/index.html"
  SITE_URL: "",
  // Paste your real Google Form link here:
  GOOGLE_FORM_URL: "PLACEHOLDER_GOOGLE_FORM_URL",
  RENTAL_PRICE: 30,                 // ₹ per rental (prototype value; duration is a policy decision)
  CURRENCY: "₹",
  // Discount tiers: highest minimum score (%) first
  DISCOUNT_TIERS: [{min:100,off:50},{min:90,off:40},{min:70,off:25},{min:50,off:10},{min:0,off:0}],
  BIKES: ["BIC-001","BIC-002","BIC-003","BIC-004","BIC-005"],
  COLLEGES: ["College of Agriculture","College of Technology","College of Veterinary & Animal Sciences","College of Home Science","College of Basic Sciences & Humanities","College of Fisheries","Other"],
  YEARS: ["1st Year","2nd Year","3rd Year","4th Year","Postgraduate","PhD","Other"]
};

/* ================= TREE DATA (sample, editable) =================
 img: put a photo URL or a file path (e.g. "img/neem.jpg"). Empty => friendly placeholder.
 quiz item: [question, [4 options], correctIndex, explanation]            */
const TREES = [
{id:"GUL-T001",name:"Gulmohar",sci:"Delonix regia",img:"img/gulmohar.jpg",img2:"img/gulmohar-flower.jpg",tagline:"The tree that sets summer on fire",chips:[["Family","Fabaceae"],["Native to","Madagascar"],["Height","10–15 m"],["Blooms","Summer"]],names:["Gulmohar","Krishnachura (Bengali)","Krishnachuda (Odia)","Krishnasura (Assamese)","Kaalvarippoo (Malayalam)","Royal poinciana","Flamboyant","Flame tree","Peacock flower","Arbol de fuego (Spanish)","Flammenbaum (German)","Semarak api (Malay)"],family:"Fabaceae (subfamily Caesalpinioideae), the pea / bean family",
 aka:"Flame Tree, Royal Poinciana, Krishnachura, Peacock flower",
 id_chars:"Wide, flat, umbrella-shaped crown; 10–15 m tall; broad trunk buttressed at the base; briefly deciduous.",
 leaves:"Feathery, alternate, bipinnately compound, 20–60 cm long, giving lacy shade.",
 bark:"Smooth, grey-brown. Wood is soft and weak.",
 flowers:"Large clusters of five-petalled flowers: four spreading scarlet-orange petals (up to ~8 cm) and one upright 'standard' petal spotted yellow and white; long red-orange stamens. Opens at the end of the dry season; sunbirds are thought to pollinate it.",
 fruits:"Flat, woody, sword-like legume pods, 30–60 cm long, turning dark brown; glossy date-stone-shaped seeds about 2 cm long (roughly 2,000–3,200 per kg). Old pods often cling beside new flowers.",
 native:"Endemic to the dry deciduous forests of north and west Madagascar. Wild populations were rediscovered in the 1930s; it is now planted across the frost-free tropics. Tolerates drought and salty conditions.",
 eco:"Flowers feed nectar-loving birds such as sunbirds; barbets nest in soft, rotting branches of old trees. Weak wood and shallow roots make big trees liable to fall in storms. Naturalised in southern Florida and invasive in parts of Australia.",
 uses:"Shade and ornament; pods and wood as fuel; seeds as beads; seed galactomannan gum studied for textile/food use; cuttings as live fences. Folk remedies exist in Asia and Africa, but clinical evidence is thin. Do not self-treat; ask a doctor.",
 culture:"In Bengal it is Krishnachura ('Krishna's crown'); Odisha: Krishnachuda; Assam: Krishnasura. In Kerala, Kaalvarippoo ('flower of Calvary') ties it to a Saint Thomas Christian tradition. It is the national flower of St Kitts and Nevis. These are folk traditions that grew after the tree arrived in India, not ancient scripture.",
 facts:["Its wild origin was unknown to science for a long time because it had been planted around the tropics for centuries.","The genus name Delonix comes from Greek 'delos' (evident) and 'onyx' (claw), a nod to the claw-like petals.","The song 'Poinciana' was inspired by the tree in Cuba."],
 did:"Many guides say the Gulmohar 'fixes nitrogen'. It is a legume, but Delonix regia is a non-nodulating legume, so it does not form the root nodules that enrich soil.",
 extra:{cls:["Kingdom: Plantae","Clade: Tracheophytes → Angiosperms → Eudicots → Rosids","Order: Fabales","Family: Fabaceae","Subfamily: Caesalpinioideae","Genus: Delonix","Species: Delonix regia (Bojer ex Hook.) Raf."],
  history:["Early 1800s: Austrian naturalist Wenzel Bojer finds the tree in Madagascar","1829: Hooker publishes it as Poinciana regia","1837: Rafinesque creates the genus Delonix","1800s onward: planted as a shade and street tree across the tropics","1930s: wild trees rediscovered in Madagascar"],
  checks:["Nitrogen fixing: often claimed, but it is a non-nodulating legume.","Flowering season varies: roughly April–June in India, November–January on Réunion.","Conservation: wild Malagasy trees are threatened, yet one IUCN listing shows Least Concern. Sources differ."]},
 quiz:[["What is the scientific name of the Gulmohar?",["Delonix regia","Cassia fistula","Bombax ceiba","Ficus religiosa"],0,"Gulmohar is Delonix regia."],
  ["Where is the Gulmohar native?",["Brazil","Madagascar","Australia","Himalayas"],1,"It grows wild only in Madagascar's dry forests."],
  ["Which claim is a common myth?",["It is a legume","It has bipinnate leaves","It fixes nitrogen in root nodules","Its pods are woody"],2,"Delonix regia is a non-nodulating legume."],
  ["Which plant family does the Gulmohar belong to?",["Fabaceae","Moraceae","Myrtaceae","Malvaceae"],0,"Fabaceae, the pea / bean family."],
  ["What colour is the upright 'standard' petal?",["Plain red","Spotted yellow and white","Pure white","Blue-purple"],1,"The standard petal is spotted yellow and white."],
  ["What kind of leaves does it have?",["Heart-shaped","Needle-like","Bipinnate, fern-like","Palmate with 5 leaflets"],2,"Its feathery leaves are bipinnately compound, 20-60 cm long."],
  ["How long are the woody pods?",["2-5 cm","10 cm","30-60 cm","2 m"],2,"Pods are flat, sword-like and 30-60 cm long."],
  ["In Bengal, Krishnachura means…",["Krishna's crown","Fire of summer","King's flower","Peacock's tail"],0,"Krishnachura means 'Krishna's crown'."],
  ["Which country has the poinciana as its national flower?",["India","St Kitts and Nevis","Madagascar","Malaysia"],1,"It is the national flower of St Kitts and Nevis."],
  ["Which birds nest in the soft, rotting branches of old trees?",["Barbets","Eagles","Parrots only","Penguins"],0,"Barbets nest in soft, rotting branches."]]},
{id:"MAN-T002",name:"Mango",sci:"Mangifera indica",img:"",family:"Anacardiaceae",
 id_chars:"Large evergreen with dense rounded crown.",leaves:"Glossy, lance-shaped, reddish when young.",bark:"Dark grey-brown, rough, finely cracked.",flowers:"Small yellowish-pink flowers in large branched clusters.",fruits:"Fleshy drupe with a single large flat stone.",
 native:"South Asia; cultivated widely in the tropics.",eco:"Flowers attract insects; dense canopy gives shade and bird habitat.",uses:"Edible fruit, shade, timber and widely used in festivals.",culture:"Mango is India's national fruit; mango leaves are used in many Indian ceremonies.",
 facts:["Mango has been cultivated for thousands of years.","Young leaves are often reddish before turning green.","Each fruit has one large stone."],did:"The mango is related to cashew and pistachio.",
 quiz:[["Mango belongs to which family?",["Fabaceae","Anacardiaceae","Moraceae","Meliaceae"],1,"Mangifera indica is in Anacardiaceae."],["What type of fruit is a mango?",["Pod","Berry","Drupe","Capsule"],2,"It has fleshy flesh around one stone: a drupe."],["Mango is the national fruit of?",["India","Brazil","Kenya","Spain"],0,"India's national fruit."]]},
{id:"ASH-T003",name:"Ashok",sci:"Species to be confirmed",img:"",family:"To be confirmed",
 id_chars:"Common name 'Ashok' is used for more than one tree in India. Confirm the species on site before publishing details.",leaves:"To be confirmed.",bark:"To be confirmed.",flowers:"To be confirmed.",fruits:"To be confirmed.",
 native:"To be confirmed.",eco:"To be confirmed.",uses:"To be confirmed.",culture:"The name Ashok/Ashoka is tied to Indian cultural and religious traditions.",
 facts:["Local names can refer to different species.","Botanical verification avoids mixing up similar-named trees.","Edit this entry in the Admin Panel once confirmed."],did:"Always use the scientific name to be sure which tree is meant.",
 quiz:[["Why is a scientific name useful?",["It is shorter","It identifies one species precisely","It is only for books","It changes by region"],1,"Common names vary; scientific names are standard."],["What is the scientific name of Sita Ashok?",["Saraca asoca","Ficus religiosa","Litchi chinensis","Psidium guajava"],0,"Sita Ashok is Saraca asoca."],["What should be done for this entry?",["Guess","Confirm the species","Delete it","Ignore it"],1,"Species is marked as to be confirmed."]]},
{id:"SIT-T004",name:"Sita Ashok",sci:"Saraca asoca",img:"",family:"Fabaceae",
 id_chars:"Small evergreen tree with dense foliage.",leaves:"Pinnate, with several pairs of long leaflets; new leaves hang limply, reddish.",bark:"Dark, smooth to slightly rough.",flowers:"Dense clusters of fragrant orange-yellow flowers turning red.",fruits:"Flat, leathery pods.",
 native:"Indian subcontinent and nearby regions; moist forests.",eco:"Flowers attract pollinating insects; wild populations are considered threatened in some assessments.",uses:"Ornamental; bark used in traditional medicine (evidence limited).",culture:"Associated with Hindu and Buddhist traditions and Sanskrit literature.",
 facts:["Flowers change from orange-yellow to red.","It is a member of the pea family.","Its name relates to the Sanskrit word for 'without sorrow'."],did:"Do not confuse it with the tall, slender 'false ashoka' tree that is also called Ashok.",
 quiz:[["Sita Ashok's scientific name?",["Saraca asoca","Syzygium cumini","Bombax ceiba","Cassia fistula"],0,"Saraca asoca."],["Its flowers turn from orange-yellow to…",["White","Blue","Red","Purple"],2,"They deepen to red."],["Which family?",["Fabaceae","Myrtaceae","Malvaceae","Sapindaceae"],0,"It is in the pea family."]]},
{id:"LIT-T005",name:"Litchi",sci:"Litchi chinensis",img:"",family:"Sapindaceae",
 id_chars:"Dense evergreen with rounded crown.",leaves:"Pinnate, glossy dark green leaflets.",bark:"Grey-brown, smooth to slightly rough.",flowers:"Small greenish-white flowers in panicles.",fruits:"Rough red-pink shell with translucent white sweet flesh.",
 native:"Southern China; grown in warm subtropical regions, including north India.",eco:"Flowers are visited by bees.",uses:"Edible fruit, shade tree.",culture:"A prized fruit in many Asian cultures.",
 facts:["The fruit has a bumpy red shell.","The edible part is a fleshy covering of the seed.","It prefers warm, humid conditions."],did:"Litchi is related to soapberry and rambutan.",
 quiz:[["Native region of litchi?",["Southern China","Africa","Peru","Siberia"],0,"Litchi comes from southern China."],["Litchi's family?",["Sapindaceae","Fabaceae","Moraceae","Malvaceae"],0,"Sapindaceae."],["The edible part is…",["Leaf","Root","Fleshy covering of seed","Bark"],2,"It is the aril around the seed."]]},
{id:"GUA-T006",name:"Guava",sci:"Psidium guajava",img:"",family:"Myrtaceae",
 id_chars:"Small tree with smooth, mottled bark.",leaves:"Oval, opposite, with prominent veins.",bark:"Smooth, thin, peeling in flakes to show greenish patches.",flowers:"White with a brush of many stamens.",fruits:"Round to pear-shaped berry with many seeds.",
 native:"Tropical Americas.",eco:"Fruit feeds birds and bats; flowers attract bees.",uses:"Edible fruit rich in vitamin C; leaves used in folk remedies.",culture:"Widely grown in home gardens in India.",
 facts:["Guava fruit is a good source of vitamin C.","Bark peels in thin flakes.","It originated in the Americas, not Asia."],did:"Guava is in the same family as clove and eucalyptus.",
 quiz:[["Guava's native region?",["Tropical Americas","Madagascar","Australia","Europe"],0,"It originated in the tropical Americas."],["Guava's fruit type?",["Pod","Berry","Nut","Cone"],1,"Botanically a berry."],["Which family?",["Myrtaceae","Fabaceae","Moraceae","Meliaceae"],0,"Myrtaceae."]]},
{id:"SEM-T007",name:"Semal",sci:"Bombax ceiba",img:"",family:"Malvaceae",
 id_chars:"Tall tree with straight trunk and tiered branches.",leaves:"Palmately compound with 5–7 leaflets; shed in winter.",bark:"Grey with conical prickles on young trunks.",flowers:"Large crimson-red flowers on bare branches, late winter to spring.",fruits:"Capsule that splits to release silky fibre and seeds.",
 native:"South and Southeast Asia, northern Australia.",eco:"Nectar-rich flowers feed many birds and insects.",uses:"Silky fibre for stuffing; light wood.",culture:"Often called the silk-cotton tree.",
 facts:["Flowers appear when the tree is leafless.","Young trunks bear sharp cone-shaped prickles.","Fruit capsules release cotton-like fibre."],did:"The fluffy fibre is lightweight and water-repellent.",
 quiz:[["Semal's other name?",["Silk-cotton tree","Flame tree","Bodhi tree","Mahogany"],0,"Bombax ceiba is silk-cotton."],["When do the flowers appear?",["On leafless branches","Only underground","In monsoon only","After fruiting"],0,"The tree is bare when it flowers."],["Trunk feature?",["Conical prickles","Aerial roots","Peeling bark","Thorns in pairs"],0,"Young trunks have prickles."]]},
{id:"NEE-T008",name:"Neem",sci:"Azadirachta indica",img:"",family:"Meliaceae",
 id_chars:"Evergreen to semi-deciduous tree with round crown.",leaves:"Pinnate with serrated leaflets, bitter taste.",bark:"Dark grey, fissured.",flowers:"Small white fragrant flowers in drooping clusters.",fruits:"Smooth yellowish drupes with a single seed.",
 native:"Indian subcontinent.",eco:"Drought-tolerant; bees visit the flowers.",uses:"Shade; twigs traditionally used for cleaning teeth; extracts used in pest management.",culture:"Strongly tied to Indian rural life and traditional medicine.",
 facts:["Neem leaves are very bitter.","It tolerates dry conditions well.","Neem products are used as natural pesticides."],did:"Neem twigs are known as 'datun'.",
 quiz:[["Neem's scientific name?",["Azadirachta indica","Ficus indica","Mangifera indica","Saraca indica"],0,"Azadirachta indica."],["Neem's family?",["Meliaceae","Fabaceae","Moraceae","Myrtaceae"],0,"Meliaceae."],["Neem leaves taste…",["Sweet","Bitter","Sour","Salty"],1,"They are very bitter."]]},
{id:"PEE-T009",name:"Peepal",sci:"Ficus religiosa",img:"",family:"Moraceae",
 id_chars:"Large tree, often starts as an epiphyte.",leaves:"Heart-shaped with long drip-tip.",bark:"Pale grey, smooth to flaking.",flowers:"Hidden inside figs (syconia).",fruits:"Small figs turning purplish.",
 native:"Indian subcontinent and Southeast Asia.",eco:"Figs feed many birds and bats; pollinated by fig wasps.",uses:"Shade; sacred tree.",culture:"Sacred in Hinduism, Buddhism and Jainism; Buddha is traditionally said to have attained enlightenment beneath a peepal.",
 facts:["Leaves flutter in the slightest breeze.","Pollinated by specialised fig wasps.","Also known as the Bodhi tree."],did:"The drip-tip helps shed rain quickly.",
 quiz:[["Peepal belongs to which genus?",["Ficus","Cassia","Bombax","Litchi"],0,"Ficus religiosa."],["Leaf shape?",["Heart-shaped","Needle-like","Fan-shaped","Bipinnate"],0,"Heart-shaped with drip-tip."],["Who pollinates its figs?",["Fig wasps","Bats","Beetles","Wind"],0,"Fig wasps."]]},
{id:"BAN-T010",name:"Banyan",sci:"Ficus benghalensis",img:"",family:"Moraceae",
 id_chars:"Huge spreading crown, aerial prop roots.",leaves:"Large, oval, leathery.",bark:"Grey-brown, smooth.",flowers:"Hidden inside figs.",fruits:"Small red figs.",
 native:"Indian subcontinent.",eco:"Figs feed birds and bats; large canopy shelters wildlife.",uses:"Shade; roots and latex in folk practice.",culture:"National tree of India.",
 facts:["Aerial roots grow down to become new trunks.","One tree can cover a vast area.","It is India's national tree."],did:"Banyan can begin life on another tree.",
 quiz:[["India's national tree?",["Banyan","Neem","Mango","Semal"],0,"Banyan."],["What are prop roots?",["Aerial roots that thicken into trunks","Underground tubers","Thorns","Fruits"],0,"They hang down and root."],["Banyan family?",["Moraceae","Myrtaceae","Fabaceae","Malvaceae"],0,"Moraceae."]]},
{id:"JAM-T011",name:"Jamun",sci:"Syzygium cumini",img:"",family:"Myrtaceae",
 id_chars:"Evergreen with dense crown.",leaves:"Glossy, oval, aromatic when crushed.",bark:"Rough at base, smoother above.",flowers:"Small fragrant white-cream flowers in clusters.",fruits:"Oblong berries ripening purple-black.",
 native:"Indian subcontinent and Southeast Asia.",eco:"Fruits eaten by birds and bats.",uses:"Edible fruit; shade; timber.",culture:"Widely loved summer fruit.",
 facts:["Ripe fruit stains tongue and lips purple.","Fruits ripen in summer–monsoon.","It is in the clove family."],did:"Jamun is also called Indian blackberry.",
 quiz:[["Jamun's scientific name?",["Syzygium cumini","Psidium guajava","Litchi chinensis","Cassia fistula"],0,"Syzygium cumini."],["Ripe jamun is…",["Purple-black","Bright red","Blue","Yellow"],0,"Purple-black."],["Which family?",["Myrtaceae","Meliaceae","Fabaceae","Moraceae"],0,"Myrtaceae."]]},
{id:"AMA-T012",name:"Amaltas",sci:"Cassia fistula",img:"",family:"Fabaceae",
 id_chars:"Medium tree known for golden cascades.",leaves:"Pinnate with 3–8 pairs of leaflets.",bark:"Grey, smooth when young.",flowers:"Hanging clusters of bright yellow flowers.",fruits:"Long, dark, cylindrical pods.",
 native:"Indian subcontinent and Southeast Asia.",eco:"Flowers attract bees and other insects.",uses:"Ornamental; pod pulp in traditional medicine (evidence limited).",culture:"Kerala's state flower (Kani Konna) and Thailand's national flower.",
 facts:["Also called Golden Shower tree.","Pods can reach about 60 cm.","Flowers hang in long chains."],did:"It blooms in summer at the same time as Gulmohar.",
 quiz:[["Amaltas flower colour?",["Golden yellow","Red","Blue","White"],0,"Golden yellow."],["Another name?",["Golden Shower","Silk-cotton","Flame tree","Bodhi tree"],0,"Golden Shower tree."],["Fruit type?",["Long pod","Drupe","Cone","Berry"],0,"A long cylindrical pod."]]}
];

/* ================= STATE & STORAGE (non-sensitive only) ================= */
const K = {trees:"pgt_trees",bikes:"pgt_bikes",rentals:"pgt_rentals"};
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let trees=load(K.trees,TREES);
let bikes=load(K.bikes,CONFIG.BIKES.map(id=>({id,rented:false})));
let rentals=load(K.rentals,[]);
let scanned=!!sessionStorage.getItem('pgt_scan');
let quizResult=null;   // {treeId, score, total, pct, off}
let idFileObj=null;    // kept in memory only, never stored
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=n=>CONFIG.CURRENCY+(Math.round(n*100)/100).toFixed(2).replace(/\.00$/,"").replace(/(\.\d)0$/,"$1");
const discountFor=pct=>CONFIG.DISCOUNT_TIERS.find(t=>pct>=t.min).off;
const finalPrice=off=>Math.round(CONFIG.RENTAL_PRICE*(1-off/100)*100)/100;
const getTree=id=>trees.find(t=>t.id===id);

/* ================= RENDER HELPERS ================= */
function photo(t){
  return t.img?`<img class="photo" src="${esc(t.img)}" alt="${esc(t.name)} tree" loading="lazy" onerror="this.outerHTML='<div class=ph>🌳</div>'">`:`<div class="ph" role="img" aria-label="No photo yet">🌳</div>`;
}
function treeCard(t){
  return `<button class="tcard" data-open="${esc(t.id)}">${photo(t)}<div class="body"><b>${esc(t.name)}</b><small>${esc(t.sci)}</small><span class="pill">${esc(t.id)}</span></div></button>`;
}
function renderHome(){
  $("#featured").innerHTML=trees.slice(0,4).map(treeCard).join("");
  $("#basePrice").textContent=money(CONFIG.RENTAL_PRICE);
  $("#tiers").innerHTML=[...CONFIG.DISCOUNT_TIERS].reverse().map(t=>`<span>Score ≥ ${t.min}% → ${t.off}% off (${money(finalPrice(t.off))})</span>`).join("");
  $("#stats").innerHTML=statsHtml();
}
function statsHtml(){
  const avail=bikes.filter(b=>!b.rented).length;
  return [["Sample trees",trees.length],["Bicycles",bikes.length],["Available now",avail],["Demo requests",rentals.length]].map(([l,v])=>`<div class="stat"><b>${v}</b>${l}</div>`).join("");
}
function renderTreeGrid(){
  const q=$("#search").value.trim().toLowerCase();
  const list=trees.filter(t=>[t.name,t.sci,t.id,t.family].join(" ").toLowerCase().includes(q));
  $("#treeGrid").innerHTML=list.length?list.map(treeCard).join(""):`<p class="card">No trees match “${esc(q)}”. Try a different name.</p>`;
}
function treeUrl(id){
  const base=CONFIG.SITE_URL||(location.origin==="null"?location.href.split(/[?#]/)[0]:location.origin+location.pathname);
  return `${base}?scan=${id}`;
}
function fullQuiz(t){
  const q=[...(t.quiz||[])],others=trees.filter(o=>o.id!==t.id);
  const add=(txt,field,ex)=>{
    const ok=t[field];if(!ok||/confirm/i.test(ok)||q.some(x=>x[0]===txt))return;
    const d=[...new Set(others.map(o=>o[field]).filter(v=>v&&!/confirm/i.test(v)&&v!==ok))].slice(0,3);
    if(d.length<3)return;const p=(t.id.length+q.length)%4;d.splice(p,0,ok);q.push([txt,d,p,ex]);
  };
  add(`What is the scientific name of the ${t.name}?`,"sci",`It is ${t.sci}.`);
  add(`Which family does the ${t.name} belong to?`,"family","Family: "+t.family+".");
  return q.slice(0,10);
}
const sec=(h,txt)=>txt?`<div class="card"><h3>${h}</h3><p>${esc(txt)}</p></div>`:"";
function renderTree(id){
  const t=getTree(id);const el=$("#treeDetail");
  if(!t){el.innerHTML=`<div class="card"><h2>Tree not found</h2><p>No tree with ID “${esc(id)}”.</p><a class="btn green" href="#trees">Browse trees</a></div>`;return}
  const ex=t.extra,names=t.names||(t.aka?t.aka.split(/,\s*/):[]);
  const ladder=ex?`<h2>Scientific classification</h2><div class="ladder">${ex.cls.map((x,i)=>{const [k,...v]=x.split(": ");return `<div style="margin-left:${i*14}px;background:hsl(${168-i*9},60%,${28-i*1.2}%)"><small>${esc(k)}</small><b>${esc(v.join(": "))}</b></div>`}).join("")}</div>`:"";
  el.innerHTML=`<div class="detail"><a class="back" href="${scanned?"#hub/"+esc(t.id):"#trees"}">← ${scanned?"Back to options":"All trees"}</a>
  <div class="gh"><div class="gh-img">${photo(t)}</div><div class="gh-txt"><p class="kick">An illustrated botanical field guide</p><h1>${esc(t.name)}</h1><p class="sci">${esc(t.sci)}</p>${t.tagline?`<p>${esc(t.tagline)}.</p>`:""}</div></div>
  ${t.chips?`<div class="chips">${t.chips.map(c=>`<div><small>${esc(c[0])}</small><b>${esc(c[1])}</b></div>`).join("")}</div>`:`<p><span class="pill">${esc(t.id)}</span><span class="pill">${esc(t.family)}</span></p>`}
  <div class="btns" style="justify-content:flex-start"><button class="btn green" data-qr="${esc(t.id)}">View QR code</button><button class="btn amber" data-rent>Rent a Bicycle</button></div>
  <p class="note">Sample catalogue entry. Not confirmation that this tree is at a specific campus location.</p>
  <h2>Identity card</h2><div class="card">${esc(t.id_chars)}</div>
  <h2>Anatomy of a flame</h2><div class="cols">${[["Flowers","flowers","red"],["Leaves","leaves","green"],["Bark and trunk","bark","brown"],["Fruits and seeds","fruits","orange"]].map(([h,f,c])=>t[f]?`<div class="card tb ${c}"><h3>${h}</h3><p>${esc(t[f])}</p></div>`:"").join("")}</div>
  ${ladder}
  ${names.length?`<h2>One tree, many names</h2><div>${names.map(n=>`<span class="pill">${esc(n)}</span>`).join("")}</div>`:""}
  <h2>Home and journey</h2><div class="cols">${sec("Native region & habitat",t.native)}${sec("Life around the tree",t.eco)}</div>
  ${ex?`<div class="card"><h3>A short history</h3><ul class="tl">${ex.history.map(x=>{const [y,...r]=x.split(": ");return `<li><b>${esc(y)}</b> ${esc(r.join(": "))}</li>`}).join("")}</ul></div>`:""}
  <h2>Uses and benefits</h2><div class="card">${esc(t.uses||"")}</div>
  <h2>Lore and legends</h2><div class="card">${esc(t.culture||"")}</div>
  <div class="card"><h3>Three interesting facts</h3><ol>${(t.facts||[]).map(f=>`<li>${esc(f)}</li>`).join("")}</ol></div>
  <div class="warn fact"><b>Fact check:</b> ${esc(t.did||"")}</div>
  ${ex?`<div class="card"><h3>Common claims, corrected</h3><ul>${ex.checks.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}
  ${scanned?`<div class="btns"><a class="btn green" href="#hub/${esc(t.id)}">Back to options</a></div>`:`<p class="note">🔒 The tree quiz and discount unlock only when you scan this tree's QR code on campus.</p>`}</div>`;
}
function renderHub(id){
  const t=getTree(id),el=$("#hubBox");
  if(!t){el.innerHTML=`<div class="card"><h2>Tree not found</h2><a class="btn green" href="#home">Home</a></div>`;return}
  el.innerHTML=`<div class="hubhead"><p class="kick">You scanned</p><h1>${esc(t.name)}</h1><p class="sci">${esc(t.sci)}</p></div>
  <p class="note" style="text-align:center">Choose what you would like to do:</p>
  <div class="hubgrid">
   <a class="opt" href="#tree/${esc(t.id)}"><span>🌳</span><b>About the tree</b><small>Identity, anatomy, origin, uses and legends.</small></a>
   <a class="opt" href="#rent" data-std><span>🚲</span><b>Bike rental</b><small>Rent a campus bicycle at the standard price of ${money(CONFIG.RENTAL_PRICE)}.</small></a>
   <a class="opt hot" href="#quiz/${esc(t.id)}"><span>🎯</span><b>Rental with discount</b><small>Answer ${fullQuiz(t).length} questions about this tree and earn up to ${CONFIG.DISCOUNT_TIERS[0].off}% off.</small></a>
  </div>`;
}
function renderQuizPage(id){
  const t=getTree(id),el=$("#quizPage");
  if(!scanned||!t){el.innerHTML=`<div class="card"><h2>Quiz locked 🔒</h2><p>The quiz is available only after scanning a tree's QR code on campus.</p><a class="btn green" href="#trees">Explore trees</a></div>`;return}
  el.innerHTML=`<a class="back" href="#hub/${esc(t.id)}">← Back to options</a><h1>Quiz: ${esc(t.name)}</h1><p class="note">Answer all questions. Your score sets your bicycle rental discount.</p><div id="quizBox"></div>`;
  renderQuiz(t);
}
function renderQuiz(t){
  const b=$("#quizBox"),Q=fullQuiz(t);
  if(!Q||!Q.length){b.innerHTML=`<div class="card">No quiz for this tree yet. You can still rent a bicycle at ${money(CONFIG.RENTAL_PRICE)}.</div>`;return}
  b.innerHTML=`<form class="card" id="quizForm">${Q.map((q,i)=>`<fieldset class="q" style="border:0;padding:0"><legend><b>${i+1}. ${esc(q[0])}</b></legend>${q[1].map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}" style="width:auto"> ${esc(o)}</label>`).join("")}<div class="note" id="ex${i}"></div></fieldset>`).join("")}
  <p class="err" id="quizErr"></p><button class="btn green" type="submit">Submit quiz</button><div id="quizOut"></div></form>`;
  $("#quizForm").addEventListener("submit",e=>{
    e.preventDefault();
    const ans=Q.map((q,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`);return c?+c.value:null});
    if(ans.includes(null)){$("#quizErr").textContent="Please answer all questions.";return}
    $("#quizErr").textContent="";
    let score=0;
    Q.forEach((q,i)=>{
      const ok=ans[i]===q[2];if(ok)score++;
      document.querySelectorAll(`input[name=q${i}]`).forEach(r=>{r.disabled=true;const l=r.parentElement;if(+r.value===q[2])l.classList.add("right");else if(r.checked)l.classList.add("wrong")});
      $("#ex"+i).textContent=(ok?"✔ Correct. ":"✘ Correct answer: "+q[1][q[2]]+". ")+q[3];
    });
    const pct=Math.round(score/Q.length*100),off=discountFor(pct);
    quizResult={treeId:t.id,score,total:Q.length,pct,off};
    $("#quizOut").innerHTML=`<div class="pricebox"><b>Score: ${score}/${Q.length} (${pct}%)</b><br>Discount earned: <b>${off}%</b> · Original ${money(CONFIG.RENTAL_PRICE)} → Final <b>${money(finalPrice(off))}</b></div><button type="button" class="btn amber" data-rent>Rent with this price</button>`;
    e.target.querySelector("button[type=submit]").hidden=true;
  });
}

/* ================= QR CODES ================= */
let qrTree=null;
function makeQR(el,text,size){
  el.innerHTML="";
  if(typeof QRCode==="undefined"){el.textContent="QR library could not load (check internet connection).";return null}
  new QRCode(el,{text,width:size,height:size,correctLevel:QRCode.CorrectLevel.M});
  return el;
}
function qrDataUrl(el){const c=el.querySelector("canvas");if(c)return c.toDataURL("image/png");const i=el.querySelector("img");return i?i.src:null}
function openQR(id){
  const t=getTree(id);if(!t)return;qrTree=t;
  $("#qrTitle").textContent=`${t.name} · ${t.id}`;
  makeQR($("#qrBox"),treeUrl(id),220);
  $("#qrUrl").textContent=treeUrl(id)+(CONFIG.SITE_URL?"":"  (set CONFIG.SITE_URL before printing real labels)");
  $("#qrModal").hidden=false;
}
function downloadQR(){
  setTimeout(()=>{const u=qrDataUrl($("#qrBox"));if(!u)return alert("QR not ready.");const a=document.createElement("a");a.href=u;a.download=`${qrTree.id}-qr.png`;a.click()},50);
}
function printLabel(){
  const t=qrTree;if(!t)return;
  const area=$("#labelArea");
  area.innerHTML=`<div class="label"><h2>${esc(t.name)}</h2><i>${esc(t.sci)}</i><b>${esc(t.id)}</b><div class="qr" id="lblQr"></div><p><b>Scan to Explore This Tree</b></p><small>Pantnagar Green Trails · GBPUAT</small></div>`;
  makeQR($("#lblQr"),treeUrl(t.id),200);
  printWith("label");
}
function printWith(mode){
  document.body.dataset.print=mode;
  setTimeout(()=>{window.print()},150);
  window.onafterprint=()=>{delete document.body.dataset.print};
}

/* ================= RENTAL ================= */
function renderRentForm(){
  $("#college").innerHTML=`<option value="">Select college</option>`+CONFIG.COLLEGES.map(c=>`<option>${esc(c)}</option>`).join("");
  $("#year").innerHTML=`<option value="">Select year</option>`+CONFIG.YEARS.map(c=>`<option>${esc(c)}</option>`).join("");
  const cur=$("#bikeSel").value;
  $("#bikeSel").innerHTML=`<option value="">Select bicycle</option>`+bikes.map(b=>`<option value="${b.id}" ${b.rented?"disabled":""}>${b.id} ${b.rented?"(currently rented)":"(available)"}</option>`).join("");
  $("#bikeSel").value=cur;
  const q=quizResult,t=q&&getTree(q.treeId);
  $("#priceBox").innerHTML=q?`Quiz on <b>${esc(t.name)}</b>: ${q.score}/${q.total} (${q.pct}%) · Discount <b>${q.off}%</b><br>Original ${money(CONFIG.RENTAL_PRICE)} → <b>Final ${money(finalPrice(q.off))}</b> <a href="#" id="clearQuiz">remove discount</a>`:`Standard price: <b>${money(CONFIG.RENTAL_PRICE)}</b>. Scan a tree's QR code on campus to unlock the quiz and earn a discount.`;
  if(!bikes.some(b=>!b.rented))$("#formErr").textContent="All bicycles are currently rented. Please check back later.";
}
function submitRent(e){
  e.preventDefault();
  const f=e.target,v=n=>f.elements[n].value.trim(),err=$("#formErr");
  for(const [n,l] of [["name","full name"],["sid","student ID"],["college","college"],["year","academic year"],["contact","contact number or email"],["bike","a bicycle"]])
    if(!v(n)){err.textContent=`Please provide ${l}.`;return}
  const c=v("contact");if(!/^\S+@\S+\.\S+$/.test(c)&&!/^[+\d][\d\s-]{7,}$/.test(c)){err.textContent="Enter a valid phone number or email.";return}
  if(!idFileObj){err.textContent="Please select an image of your student ID card.";return}
  const bike=bikes.find(b=>b.id===v("bike"));if(!bike||bike.rented){err.textContent="That bicycle is no longer available.";renderRentForm();return}
  err.textContent="";
  const off=quizResult?quizResult.off:0,fee=finalPrice(off);
  const req={no:"PGT-"+new Date().toISOString().slice(2,10).replace(/-/g,"")+"-"+Math.floor(1000+Math.random()*9000),
    name:v("name"),sid:v("sid"),college:v("college"),year:v("year"),contact:c,bike:bike.id,
    quiz:quizResult?`${quizResult.score}/${quizResult.total} (${quizResult.pct}%)`:"Not taken",off,fee,status:"Request Submitted — Demo Only",time:new Date().toLocaleString()};
  bike.rented=true;rentals.push(req);save(K.bikes,bikes);save(K.rentals,rentals);   // no ID image saved
  showConfirm(req);
}
function showConfirm(r){
  $("#rentFormWrap").hidden=true;
  const box=$("#confirm");box.hidden=false;
  box.innerHTML=`<h2>Rental Request Summary</h2>
  <p>Your request number (enter this in the Google Form):</p><p><span class="reqno" id="reqNo">${esc(r.no)}</span> <button class="btn ghost dark noprint" id="copyReq">Copy</button></p>
  <table><tr><th>Student</th><td>${esc(r.name)}</td></tr><tr><th>Bicycle</th><td>${esc(r.bike)}</td></tr><tr><th>Quiz result</th><td>${esc(r.quiz)}</td></tr>
  <tr><th>Original fee</th><td>${money(CONFIG.RENTAL_PRICE)}</td></tr><tr><th>Discount</th><td>${r.off}%</td></tr><tr><th>Final fee</th><td><b>${money(r.fee)}</b></td></tr><tr><th>Status</th><td>${esc(r.status)}</td></tr></table>
  <div class="warn">This is a demo. Payment has <b>not</b> been received or verified. Use the button below to submit payment details, then return to this site.</div>
  <div class="btns noprint" style="justify-content:flex-start"><button class="btn amber" id="gform">Submit Payment Details via Google Form</button><button class="btn green" id="printConf">Print / Save as PDF</button><a class="btn ghost dark" href="#home">Back to Home</a></div>
  <p class="err" id="gfMsg"></p>`;
  quizResult=null;idFileObj=null;
  window.scrollTo(0,0);
}
function openForm(){
  const u=CONFIG.GOOGLE_FORM_URL;
  if(!u||u.includes("PLACEHOLDER")){$("#gfMsg").textContent="Demo mode: no Google Form is configured yet. Set CONFIG.GOOGLE_FORM_URL in script.js.";return}
  window.open(u,"_blank","noopener");
}
function copyReq(){
  const n=$("#reqNo").textContent;
  (navigator.clipboard?navigator.clipboard.writeText(n):Promise.reject()).then(()=>{$("#copyReq").textContent="Copied ✔"}).catch(()=>prompt("Copy your request number:",n));
}
function resetRent(){$("#confirm").hidden=true;$("#rentFormWrap").hidden=false;$("#rentForm").reset();$("#idPreview").hidden=true;$("#formErr").textContent="";renderRentForm()}

/* ================= ADMIN ================= */
function renderAdmin(){
  $("#adminStats").innerHTML=statsHtml();
  $("#bikeAdmin").innerHTML=bikes.map(b=>`<div class="card"><b>${b.id}</b><br>${b.rented?"🔴 Rented":"🟢 Available"}<br><button class="btn ${b.rented?"green":"amber"}" data-bike="${b.id}">${b.rented?"Mark available":"Mark rented"}</button></div>`).join("");
  $("#treeTable").innerHTML=`<tr><th>ID</th><th>Name</th><th>Scientific</th><th>Family</th><th></th></tr>`+trees.map(t=>`<tr><td>${esc(t.id)}</td><td>${esc(t.name)}</td><td><i>${esc(t.sci)}</i></td><td>${esc(t.family)}</td><td><button class="btn green" data-edit="${esc(t.id)}">Edit</button></td></tr>`).join("");
  $("#rentTable").innerHTML=rentals.length?`<tr><th>Request</th><th>Name</th><th>Student ID</th><th>Bicycle</th><th>Fee</th><th>Discount</th><th>Status</th></tr>`+rentals.map(r=>`<tr><td>${esc(r.no)}</td><td>${esc(r.name)}</td><td>${esc(r.sid)}</td><td>${esc(r.bike)}</td><td>${money(r.fee)}</td><td>${r.off}%</td><td>${esc(r.status)}</td></tr>`).join(""):`<tr><td>No demo rental requests yet.</td></tr>`;
}
function addTree(){
  const name=prompt("Common name?");if(!name)return;
  const sci=prompt("Scientific name?","To be confirmed")||"To be confirmed",fam=prompt("Botanical family?","To be confirmed")||"To be confirmed";
  const n=trees.length+1,id=name.replace(/[^a-z]/gi,"").slice(0,3).toUpperCase().padEnd(3,"X")+"-T"+String(n).padStart(3,"0");
  trees.push({id,name,sci,family:fam,img:"",id_chars:"Sample entry. Add details.",facts:[],did:"",quiz:[]});
  save(K.trees,trees);renderAdmin();
}
function editTree(id){
  const t=getTree(id);
  const name=prompt("Common name:",t.name);if(name===null)return;
  t.name=name||t.name;t.sci=prompt("Scientific name:",t.sci)||t.sci;t.family=prompt("Family:",t.family)||t.family;
  t.img=prompt("Photo URL or path (blank for none):",t.img||"")??t.img;
  save(K.trees,trees);renderAdmin();
}

/* ================= ROUTING ================= */
const VIEWS=["home","trees","tree","hub","quiz","rent","admin","about"];
function route(){
  const h=location.hash.replace("#","");let [v,arg]=h.split("/");
  const sp=new URLSearchParams(location.search),sc=sp.get("scan")||sp.get("tree");
  if(sc&&!window._sc){window._sc=1;scanned=true;try{sessionStorage.setItem("pgt_scan",sc)}catch{}if(!v){v="hub";arg=sc}}
  if(!VIEWS.includes(v))v="home";
  VIEWS.forEach(x=>$("#view-"+x).hidden=x!==v);
  document.querySelectorAll("#menu a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+(v==="tree"?"trees":v)));
  $("#menu").classList.remove("open");
  if(v==="home")renderHome();
  if(v==="trees")renderTreeGrid();
  if(v==="tree")renderTree(arg);
  if(v==="hub")renderHub(arg);
  if(v==="quiz")renderQuizPage(arg);
  if(v==="rent"){if(!$("#confirm").hidden&&!$("#confirm").innerHTML.trim())resetRent();renderRentForm()}
  if(v==="admin")renderAdmin();
  window.scrollTo(0,0);
}
function go(h){location.hash=h;if(location.hash==="#"+h&&false)route()}

/* ================= EVENTS ================= */
document.addEventListener("click",e=>{
  const g=s=>e.target.closest(s);
  let el;
  if(el=g("[data-open]"))go("tree/"+el.dataset.open);
  else if(el=g("[data-qr]"))openQR(el.dataset.qr);
  else if(g("[data-std]"))quizResult=null;
  else if(g("[data-rent]")){if(!$("#confirm").hidden)resetRent();go("rent")}
  else if(el=g("[data-bike]")){const b=bikes.find(x=>x.id===el.dataset.bike);b.rented=!b.rented;save(K.bikes,bikes);renderAdmin()}
  else if(el=g("[data-edit]"))editTree(el.dataset.edit);
  else if(g("#clearQuiz")){e.preventDefault();quizResult=null;renderRentForm()}
  else if(g("#gform"))openForm();
  else if(g("#copyReq"))copyReq();
  else if(g("#printConf"))printWith("conf");
  else if(g("#addTree"))addTree();
  else if(g("#resetData")){if(confirm("Reset all demo data?")){[K.trees,K.bikes,K.rentals].forEach(k=>localStorage.removeItem(k));trees=JSON.parse(JSON.stringify(TREES));bikes=CONFIG.BIKES.map(id=>({id,rented:false}));rentals=[];renderAdmin()}}
  else if(g("#qrDl"))downloadQR();
  else if(g("#qrPrint"))printLabel();
  else if(g("#qrClose")||e.target.id==="qrModal")$("#qrModal").hidden=true;
  else if(g("#menuBtn")){const o=$("#menu").classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",o)}
});
$("#search").addEventListener("input",renderTreeGrid);
$("#rentForm").addEventListener("submit",submitRent);
$("#idFile").addEventListener("change",e=>{
  const f=e.target.files[0],p=$("#idPreview");idFileObj=null;p.hidden=true;
  if(!f)return;
  if(!["image/jpeg","image/png","image/webp"].includes(f.type)){$("#formErr").textContent="ID photo must be a JPG, PNG or WebP image.";e.target.value="";return}
  if(f.size>5*1024*1024){$("#formErr").textContent="Image must be under 5 MB.";e.target.value="";return}
  $("#formErr").textContent="";idFileObj=f;p.src=URL.createObjectURL(f);p.hidden=false;
});
window.addEventListener("hashchange",route);
route();
