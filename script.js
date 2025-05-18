// Sabit məlumat
const profileData = {
  name: "Quliyev Orxan",
  description: "student at",
  university: {
    name: "AzTU",
    link: "https://aztu.edu.az/az",
    logo: "https://sso.aztu.edu.az/Content/Login/images/aztu_logo_az.png"
  }
};

// Haqqımda mətni
const aboutTextContent = `Mən, Azərbaycan Texniki Universitetində (AzTU) İnformasiya Təhlükəsizliyi ixtisası üzrə təhsil alıram.
<strong>Kibertəhlükəsizlik</strong> sahəsinə dərin marağım var və bu istiqamətdə daimi şəkildə biliklərimi artırmağa çalışıram.
Praktiki olaraq əsasən <em>Kali Linux və Windows</em> mühitlərində işləyirəm, müxtəlif testlər və analizlər aparıram.
Proqramlaşdırma sahəsində <i>C++ və Python</i> dilləri üzrə əsas biliklərə malikəm.
<strong>TryHackMe</strong> platformasında tapşırıqlar üzərində çalışıram və kibertəhlükəsizlik alətləri ilə təcrübəm var.`;

// Dinamik məlumatlar
let aboutData = JSON.parse(localStorage.getItem("aboutData")) || [
  "Ad: Orxan",
  "Soyad: Quliyev",
  "Yaş: 18",
  "İxtisas: İnformasiya təhlükəsizliyi",
  'Universitet: <a href="https://aztu.edu.az/az" target="_blank">AzTU</a>'
];

let skillsData = JSON.parse(localStorage.getItem("skillsData")) || [
  { category: "Əməliyyat Sistemləri", description: "Kali GNU/Linux, Windows" },
  { category: "Proqramlaşdırma", description: "Python, C++ (əsas səviyyə)" },
  { category: "Alətlər", description: "Nmap, Metasploit, Burp Suite, Wireshark və s." },
  { category: "Təcrübə Platformaları", description: "TryHackMe" },
  { category: "Maraq Sahələri", description: "Sistem zəiflikləri, sosial mühəndislik" }
];

let contactData = JSON.parse(localStorage.getItem("contactData")) || [
  "E-mail: quliyevorxan@gmail.com",
  "Telefon nömrəsi: (+994) 99-999-99-99",
  'GitHub: <a href="https://github.com/VQAiX" target="_blank">VQAiX</a>'
];

window.onload = function() {
  loadProfile();
  loadAbout();
  loadAboutText();
  loadSkills();
  loadContacts();
};

function toggleSection(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function loadProfile() {
  const h = document.getElementById("profileHeader");
  h.innerHTML = `
    <h1>${profileData.name}</h1>
    <h3>${profileData.description}</h3>
    <a href="${profileData.university.link}" target="_blank">
      <img src="${profileData.university.logo}" alt="${profileData.university.name}" width="200" height="100">
    </a>
  `;
}

function loadAbout() {
  const list = document.getElementById("aboutList");
  list.innerHTML = "";
  aboutData.forEach((item, i) => {
    list.innerHTML += `<li>${item}
      <button onclick="editAbout(${i})">Redaktə et</button>
      <button onclick="deleteAbout(${i})">Sil</button>
    </li>`;
  });
  saveToLocalStorage();
}

function loadAboutText() {
  document.getElementById("aboutText").innerHTML = aboutTextContent;
}

function addAbout() {
  const input = document.getElementById("aboutInput");
  const error = document.getElementById("aboutError");
  if (!input.value.trim()) {
    error.textContent = "Boş sahə əlavə edilə bilməz.";
    return;
  }
  error.textContent = "";
  aboutData.push(input.value.trim());
  input.value = "";
  loadAbout();
}

function editAbout(i) {
  const v = prompt("Yeni məlumatı daxil edin:", aboutData[i]);
  if (v !== null && v.trim()) {
    aboutData[i] = v.trim();
    loadAbout();
  }
}

function deleteAbout(i) {
  aboutData.splice(i, 1);
  loadAbout();
}

function loadSkills() {
  const tb = document.getElementById("skillsTable").getElementsByTagName("tbody")[0];
  tb.innerHTML = "";
  skillsData.forEach((skill, i) => {
    tb.innerHTML += `<tr>
      <td>${skill.category}</td>
      <td>${skill.description}</td>
      <td>
        <button onclick="editSkill(${i})">Redaktə et</button>
        <button onclick="deleteSkill(${i})">Sil</button>
      </td>
    </tr>`;
  });
  saveToLocalStorage();
}

function addSkill() {
  const c = document.getElementById("skillsCategory");
  const d = document.getElementById("skillsDescription");
  const error = document.getElementById("skillsError");

  if (!c.value.trim() || !d.value.trim()) {
    error.textContent = "Hər iki sahə doldurulmalıdır.";
    return;
  }

  error.textContent = "";
  skillsData.push({ category: c.value.trim(), description: d.value.trim() });
  c.value = "";
  d.value = "";
  loadSkills();
}

function editSkill(i) {
  const nc = prompt("Yeni kateqoriya:", skillsData[i].category);
  const nd = prompt("Yeni təsvir:", skillsData[i].description);
  if (nc !== null && nd !== null && nc.trim() && nd.trim()) {
    skillsData[i] = { category: nc.trim(), description: nd.trim() };
    loadSkills();
  }
}

function deleteSkill(i) {
  skillsData.splice(i, 1);
  loadSkills();
}

function loadContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contactData.forEach((item, i) => {
    list.innerHTML += `<p>${item}
      <button onclick="editContact(${i})">Redaktə et</button>
      <button onclick="deleteContact(${i})">Sil</button>
    </p>`;
  });
  saveToLocalStorage();
}

function addContact() {
  const input = document.getElementById("contactInput");
  const error = document.getElementById("contactError");
  if (!input.value.trim()) {
    error.textContent = "Əlaqə məlumatı boş ola bilməz.";
    return;
  }
  error.textContent = "";
  contactData.push(input.value.trim());
  input.value = "";
  loadContacts();
}

function editContact(i) {
  const v = prompt("Yeni əlaqə məlumatı:", contactData[i]);
  if (v !== null && v.trim()) {
    contactData[i] = v.trim();
    loadContacts();
  }
}

function deleteContact(i) {
  contactData.splice(i, 1);
  loadContacts();
}

// LocalStorage yaz
function saveToLocalStorage() {
  localStorage.setItem("aboutData", JSON.stringify(aboutData));
  localStorage.setItem("skillsData", JSON.stringify(skillsData));
  localStorage.setItem("contactData", JSON.stringify(contactData));
}