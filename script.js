const timeline = [
  {era:"EARLY YEARS",tag:"Origins",name:"Gordon Schmidt Van Dyke",text:"The firm's earlier identity is referenced as part of its history before the series' central story. The show gradually reveals how legacy and old alliances shape the firm that follows."},
  {era:"SEASONS 1–2",tag:"A new chapter",name:"Pearson Hardman",text:"Jessica Pearson and Daniel Hardman sit at the centre of a firm balancing leadership, ambition, and a battle over control. Harvey Specter is one of its star closers; Mike Ross enters as his extraordinary, secret-keeping associate."},
  {era:"SEASON 2",tag:"A power struggle",name:"The fight for control",text:"Hardman's return creates a major internal contest. Jessica and Harvey work to protect the firm's future while loyalties and past decisions are tested."},
  {era:"SEASON 3",tag:"Merger era",name:"Pearson Darby",text:"A merger with Darby International changes the firm's power structure and brings new alliances and tensions into the office."},
  {era:"SEASONS 3–4",tag:"New nameplate",name:"Pearson Specter",text:"After the Darby arrangement breaks down, the firm continues under Jessica and Harvey's names. The partnership's internal politics remain as consequential as its client work."},
  {era:"SEASON 4",tag:"Strategic alliance",name:"Pearson Specter Litt",text:"Louis Litt's place in the firm's identity becomes central. The nameplate reflects the changing balance of power among its senior lawyers."},
  {era:"SEASONS 5–6",tag:"Consequences",name:"The firm's crisis years",text:"Mike's secret becomes a public and legal crisis. The firm's reputation, client base, and leadership are put under extraordinary pressure."},
  {era:"SEASONS 7–8",tag:"Rebuilding",name:"Specter Litt and Zane",text:"The firm navigates another series of transitions, including Robert Zane's growing role and a reshaped leadership group."},
  {era:"SEASON 9",tag:"Final chapter",name:"Zane Specter Litt Wheeler Williams",text:"The final season brings the firm's long-running conflicts toward resolution, with leadership, loyalty, and the meaning of a legacy at the centre."}
];

const people = [
  {name:"Jessica Pearson",initials:"JP",role:"Leadership",title:"Managing partner",bio:"A formidable strategist whose authority, discretion, and political instincts help define the firm's direction. Jessica's leadership is repeatedly tested by internal challenges and the consequences of protecting the people she values.",tags:["Leadership","Strategy","Loyalty"]},
  {name:"Harvey Specter",initials:"HS",role:"Partner",title:"Senior partner · Closer",bio:"A confident, sharp-edged closer known for reading opponents, negotiating aggressively, and backing his people. Across the series, Harvey's professional certainty is challenged by the cost of loyalty and his own emotional defences.",tags:["Negotiation","Mentorship","Loyalty"]},
  {name:"Louis Litt",initials:"LL",role:"Partner",title:"Senior partner",bio:"A technically gifted lawyer whose need for recognition often clashes with his loyalty to the firm. Louis's journey explores ambition, insecurity, friendship, and what it takes to become a leader.",tags:["Finance","Litigation","Growth"]},
  {name:"Daniel Hardman",initials:"DH",role:"Leadership",title:"Co-founding partner",bio:"A powerful former leader whose return destabilizes the firm. Hardman uses institutional history and personal leverage in his attempts to regain influence.",tags:["Power","Rivalry","Legacy"]},
  {name:"Robert Zane",initials:"RZ",role:"Partner",title:"Managing partner · Senior attorney",bio:"A respected attorney and Rachel's father whose firm and personal relationships become intertwined with the central partnership. Robert brings experience, authority, and difficult choices to the firm's later years.",tags:["Leadership","Mentorship","Integrity"]},
  {name:"Mike Ross",initials:"MR",role:"Associate",title:"Associate · Later attorney",bio:"Brilliant, unusually perceptive, and capable of connecting details others miss, Mike begins the series working as Harvey's associate while concealing that he never attended law school. His secret drives one of the show's central storylines.",tags:["Memory","Pro bono","Consequences"]},
  {name:"Rachel Zane",initials:"RZ",role:"Associate",title:"Paralegal · Attorney",bio:"A highly capable legal professional who works toward becoming a lawyer while navigating a demanding firm and complicated personal relationships. Rachel's ambition and ethical instincts remain important throughout her arc.",tags:["Ambition","Research","Advocacy"]},
  {name:"Donna Paulsen",initials:"DP",role:"Other",title:"Executive assistant · COO",bio:"Harvey's trusted confidante, Donna has exceptional emotional intelligence and a talent for reading a room. Her role grows beyond traditional support work as she seeks recognition and influence of her own.",tags:["Insight","Operations","Loyalty"]},
  {name:"Katrina Bennett",initials:"KB",role:"Associate",title:"Attorney · Partner",bio:"Precise, driven, and politically astute, Katrina learns to navigate the firm's power dynamics while proving her value as a lawyer and leader.",tags:["Precision","Ambition","Leadership"]},
  {name:"Samantha Wheeler",initials:"SW",role:"Partner",title:"Senior partner",bio:"A fierce, unconventional attorney who arrives with a close professional bond to Robert Zane. Samantha is fiercely competitive, but her story also explores identity, trust, and the people she chooses to protect.",tags:["Trial strategy","Loyalty","Rivalry"]},
  {name:"Alex Williams",initials:"AW",role:"Partner",title:"Senior partner",bio:"A seasoned attorney and Harvey's longtime friend. Alex balances professional ambition with a desire to protect his family and maintain a place in the firm's evolving leadership.",tags:["Experience","Family","Strategy"]},
  {name:"Gretchen Bodinski",initials:"GB",role:"Other",title:"Legal secretary",bio:"A capable and refreshingly direct legal secretary who brings warmth and candour to the office. Gretchen's relationships with the lawyers show that the firm's support staff are essential to its daily life.",tags:["Support","Candour","Office life"]}
];

const cases = [
  {id:"CF-01",name:"The Ava Hessington matter",type:"Corporate",seasons:"Season 3",summary:"A high-profile international client matter escalates into allegations and ethical complications, testing the firm's judgment and its lawyers' loyalties.",people:"Harvey Specter · Jessica Pearson · Stephen Huntley",note:"Canon storyline · Multi-episode arc"},
  {id:"CF-02",name:"The Mike Ross secret",type:"Professional",seasons:"Across the series",summary:"Mike's lack of a law degree becomes the central professional and legal vulnerability surrounding his work at the firm.",people:"Mike Ross · Harvey Specter · Jessica Pearson",note:"Canon storyline · Major series spoiler"},
  {id:"CF-03",name:"The takeover struggle",type:"Internal",seasons:"Season 2",summary:"Daniel Hardman's attempt to regain control creates a high-stakes internal battle involving the partnership, its reputation, and the loyalties of its lawyers.",people:"Jessica Pearson · Harvey Specter · Daniel Hardman",note:"Canon storyline · Firm governance"},
  {id:"CF-04",name:"The merger with Darby International",type:"Corporate",seasons:"Season 3",summary:"The merger changes the firm's governance and introduces new leadership dynamics, competing interests, and pressure around client work.",people:"Jessica Pearson · Harvey Specter · Edward Darby",note:"Canon storyline · Corporate transition"},
  {id:"CF-05",name:"The Liberty Rail case",type:"Corporate",seasons:"Season 4",summary:"A matter involving a rail company becomes a test of strategy, disclosure, and the consequences of decisions made under pressure.",people:"Harvey Specter · Mike Ross · Louis Litt",note:"Canon storyline · Ethical tension"},
  {id:"CF-06",name:"The firm's bar and reputation crisis",type:"Professional",seasons:"Seasons 5–6",summary:"The fallout from Mike's secret threatens the careers of multiple lawyers and the survival of the firm, with professional consequences extending beyond one individual.",people:"Mike Ross · Harvey Specter · Jessica Pearson",note:"Canon storyline · Major series spoiler"},
  {id:"CF-07",name:"The prison storyline",type:"Personal",seasons:"Season 6",summary:"Mike faces the consequences of the fraud case while the firm tries to manage its own survival and the relationships affected by his choices.",people:"Mike Ross · Harvey Specter · Rachel Zane",note:"Canon storyline · Major series spoiler"},
  {id:"CF-08",name:"The firm after Jessica",type:"Internal",seasons:"Seasons 7–8",summary:"Jessica's departure leaves a leadership vacuum and forces the remaining partners to reconsider the firm's identity and direction.",people:"Harvey Specter · Louis Litt · Donna Paulsen",note:"Canon storyline · Leadership transition"},
  {id:"CF-09",name:"The final leadership contest",type:"Internal",seasons:"Season 9",summary:"The last season brings questions of loyalty, control, and the firm's future to a head as the lawyers work through unresolved conflicts.",people:"Harvey Specter · Louis Litt · Samantha Wheeler · Robert Zane",note:"Canon storyline · Final-season spoilers"}
];

const $ = (id) => document.getElementById(id);
function renderTimeline(){
  $("timelineList").innerHTML = timeline.map((item,i)=>`<article class="timeline-item"><div class="timeline-era">${item.era}</div><div class="timeline-node"></div><div class="timeline-card"><span class="timeline-tag">${item.tag}</span><h3>${item.name}</h3><p>${item.text}</p></div></article>`).join("");
}
function renderPeople(){
  const q=$("peopleSearch").value.trim().toLowerCase(), role=$("roleFilter").value;
  const list=people.filter(p=>(role==="all"||p.role===role||role==="Other"&&p.role==="Other")&&(p.name+" "+p.title+" "+p.bio+" "+p.tags.join(" ")).toLowerCase().includes(q));
  $("peopleGrid").innerHTML=list.length?list.map(p=>`<button class="person-card" type="button" data-person="${p.name}"><span class="person-avatar">${p.initials}</span><span class="person-role">${p.role==="Other"?"Key figure":p.role}</span><h3>${p.name}</h3><p>${p.title}</p><span class="person-open">View profile ↗</span></button>`).join(""):`<div class="empty-state">No profiles match that search.</div>`;
  $("peopleGrid").querySelectorAll("[data-person]").forEach(btn=>btn.addEventListener("click",()=>openProfile(btn.dataset.person)));
}
function openProfile(name){
  const p=people.find(x=>x.name===name); if(!p)return;
  $("dialogRole").textContent=p.role==="Other"?"Key figure":p.role;
  $("dialogName").textContent=p.name;$("dialogMeta").textContent=p.title;$("dialogBio").textContent=p.bio;
  $("dialogTags").innerHTML=p.tags.map(t=>`<span>${t}</span>`).join("");
  $("profileDialog").showModal();
}
function renderCases(){
  const q=$("caseSearch").value.trim().toLowerCase(), type=$("caseTypeFilter").value;
  const list=cases.filter(c=>(type==="all"||c.type===type)&&(c.name+" "+c.summary+" "+c.people+" "+c.seasons+" "+c.type).toLowerCase().includes(q));
  $("caseList").innerHTML=list.length?list.map(c=>`<article class="case-item"><div class="case-index">${c.id}</div><div><span class="case-category">${c.type} · ${c.seasons}</span><h3>${c.name}</h3><p>${c.summary}<br><b>Key figures:</b> ${c.people}</p></div><span class="case-pill">${c.note}</span></article>`).join(""):`<div class="empty-state">No case files match those filters.</div>`;
}
const STORAGE_KEY="firmArchiveWarroomV1";
function getBoard(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]")}catch{return []}}
function saveBoard(items){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(items))}catch{alert("This browser could not save local data. You can still use the archive, but the board may not persist.")}renderBoard()}
function renderBoard(){
  const items=getBoard();
  $("userBoard").innerHTML=items.length?items.map(item=>`<div class="board-item"><div class="board-text"><strong>${escapeHtml(item.name)}</strong><small>Added ${new Date(item.created).toLocaleDateString()}</small></div><span class="priority ${item.priority}">${item.priority}</span><select class="status-select" data-status="${item.id}" aria-label="Status for ${escapeHtml(item.name)}">${["Open","In review","Resolved"].map(s=>`<option ${s===item.status?"selected":""}>${s}</option>`).join("")}</select><button class="remove-item" data-remove="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div>`).join(""):`<div class="empty-state">Your board is clear. Add a matter above to start planning.</div>`;
  $("userBoard").querySelectorAll("[data-status]").forEach(el=>el.addEventListener("change",()=>saveBoard(getBoard().map(x=>x.id===el.dataset.status?{...x,status:el.value}:x))));
  $("userBoard").querySelectorAll("[data-remove]").forEach(el=>el.addEventListener("click",()=>saveBoard(getBoard().filter(x=>x.id!==el.dataset.remove))));
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("peopleSearch").addEventListener("input",renderPeople);$("roleFilter").addEventListener("change",renderPeople);
$("caseSearch").addEventListener("input",renderCases);$("caseTypeFilter").addEventListener("change",renderCases);
$("caseForm").addEventListener("submit",e=>{e.preventDefault();const name=$("newCaseName").value.trim();if(!name)return;const items=getBoard();items.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),name,priority:$("newCasePriority").value,status:$("newCaseStatus").value,created:new Date().toISOString()});saveBoard(items);$("newCaseName").value="";});
$("clearBoard").addEventListener("click",()=>{if(getBoard().length&&confirm("Clear all matters saved on this device?"))saveBoard([])});
$("dialogClose").addEventListener("click",()=>$("profileDialog").close());
$("profileDialog").addEventListener("click",e=>{if(e.target===$("profileDialog"))$("profileDialog").close()});
$("menuToggle").addEventListener("click",()=>{const open=$("primaryNav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open))});
$("primaryNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("primaryNav").classList.remove("open");$("menuToggle").setAttribute("aria-expanded","false")}));
renderTimeline();renderPeople();renderCases();renderBoard();