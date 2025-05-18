// Bütün məlumatlar sabit dəyişənlərdə saxlanılır
const profileData = {
  name: "Quliyev Orxan",
  description: "student at",
  university: {
    name: "AzTU",
    link: "https://aztu.edu.az/az",
    logo: "https://sso.aztu.edu.az/Content/Login/images/aztu_logo_az.png"
  }
};

// Dinamik redaktə və əlavə üçün yenilənə bilən siyahılar
let aboutData = [
  "Ad: Orxan",
  "Soyad: Quliyev",
  "Yaş: 18",
  "İxtisas: İnformasiya təhlükəsizliyi",
  'Universitet: <a href="https://aztu.edu.az/az" target="_blank">AzTU</a>'
];

const aboutTextContent = `Mən, Azərbaycan Texniki Universitetində (AzTU) İnformasiya Təhlükəsizliyi ixtisası üzrə təhsil alıram.
<strong>Kibertəhlükəsizlik</strong> sahəsinə dərin marağım var və bu istiqamətdə daimi şəkildə biliklərimi artırmağa çalışıram.
Praktiki olaraq əsasən <em>Kali Linux və Windows</em> mühitlərində işləyirəm, müxtəlif testlər və analizlər aparıram.
Proqramlaşdırma sahəsində <i>C++ və Python</i> dilləri üzrə əsas biliklərə malikəm.
<strong>TryHackMe</strong> platformasında tapşırıqlar üzərində çalışıram və kibertəhlükəsizlik alətləri ilə təcrübəm var.`;

let skillsData = [
  { category: "Əməliyyat Sistemləri", description: "Kali GNU/Linux, Windows" },
  { category: "Proqramlaşdırma", description: "Python, C++ (əsas səviyyə)" },
  { category: "Alətlər", description: "Nmap, Metasploit, Burp Suite, Wireshark və s." },
  { category: "Təcrübə Platformaları", description: "TryHackMe" },
  { category: "Maraq Sahələri", description: "Sistem zəiflikləri, sosial mühəndislik" }
];

let contactData = [
  "E-mail: quliyevorxan@gmail.com",
  "Telefon nömrəsi: (+994) 99-999-99-99",
  'GitHub: <a href="https://github.com/VQAiX" target="_blank">VQAiX</a>'
];

// Səhifə yüklənəndə bütün bölmələri doldur
window.onload = function() {
  loadProfile();
  loadAbout();
  loadAboutText();
  loadSkills();
  loadContacts();
};

// Bölməni gizlət/göstər
function toggleSection(id) {
  var sec = document.getElementById(id);
  sec.classList.toggle("hidden");
}

// Profil header
function loadProfile() {
  var h = document.getElementById("profileHeader");
  h.innerHTML = ""
    + "<h1>" + profileData.name + "</h1>"
    + "<h3>" + profileData.description + "</h3>"
    + '<a href="' + profileData.university.link + '" target="_blank">'
    + '<img src="' + profileData.university.logo + '" alt="' + profileData.university.name + '" width="200" height="100">'
    + "</a>";
}

// Haqqımda siyahısı
function loadAbout() {
  var list = document.getElementById("aboutList");
  list.innerHTML = "";
  for (var i = 0; i < aboutData.length; i++) {
    list.innerHTML += "<li>"
      + aboutData[i]
      + ' <button onclick="editAbout(' + i + ')">Redaktə et</button>'
      + ' <button onclick="deleteAbout(' + i + ')">Sil</button>'
      + "</li>";
  }
}

// Haqqımda alt mətni
function loadAboutText() {
  document.getElementById("aboutText").innerHTML = aboutTextContent;
}

// Haqqımda əlavə et
function addAbout() {
  var v = document.getElementById("aboutInput").value;
  aboutData.push(v);
  document.getElementById("aboutInput").value = "";
  loadAbout();
}

// Haqqımda redaktə et
function editAbout(i) {
  var v = prompt("Yeni məlumatı daxil edin:", aboutData[i]);
  aboutData[i] = v;
  loadAbout();
}

// Haqqımda sil
function deleteAbout(i) {
  aboutData.splice(i, 1);
  loadAbout();
}

// Bacarıqları çəkmək
function loadSkills() {
  var tb = document.getElementById("skillsTable").getElementsByTagName("tbody")[0];
  tb.innerHTML = "";
  for (var i = 0; i < skillsData.length; i++) {
    tb.innerHTML += "<tr>"
      + "<td>" + skillsData[i].category + "</td>"
      + "<td>" + skillsData[i].description + "</td>"
      + "<td>"
      + '<button onclick="editSkill(' + i + ')">Redaktə et</button>'
      + ' <button onclick="deleteSkill(' + i + ')">Sil</button>'
      + "</td>"
      + "</tr>";
  }
}

// Yeni bacarıq əlavə et
function addSkill() {
  var c = document.getElementById("skillsCategory").value;
  var d = document.getElementById("skillsDescription").value;
  skillsData.push({ category: c, description: d });
  document.getElementById("skillsCategory").value = "";
  document.getElementById("skillsDescription").value = "";
  loadSkills();
}

// Bacarıq redaktə et
function editSkill(i) {
  var nc = prompt("Yeni kateqoriya:", skillsData[i].category);
  var nd = prompt("Yeni təsvir:", skillsData[i].description);
  skillsData[i] = { category: nc, description: nd };
  loadSkills();
}

// Bacarıq sil
function deleteSkill(i) {
  skillsData.splice(i, 1);
  loadSkills();
}

// Əlaqələri çəkmək
function loadContacts() {
  var list = document.getElementById("contactList");
  list.innerHTML = "";
  for (var i = 0; i < contactData.length; i++) {
    list.innerHTML += "<p>"
      + contactData[i]
      + ' <button onclick="editContact(' + i + ')">Redaktə et</button>'
      + ' <button onclick="deleteContact(' + i + ')">Sil</button>'
      + "</p>";
  }
}

// Yeni əlaqə əlavə et
function addContact() {
  var v = document.getElementById("contactInput").value;
  contactData.push(v);
  document.getElementById("contactInput").value = "";
  loadContacts();
}

// Əlaqə redaktə et
function editContact(i) {
  var v = prompt("Yeni əlaqə məlumatı:", contactData[i]);
  contactData[i] = v;
  loadContacts();
}

// Əlaqə sil
function deleteContact(i) {
  contactData.splice(i, 1);
  loadContacts();
}

// Form məlumatlarını validasiya və yadda saxla
function handleFormSubmit(event) {
  event.preventDefault();

  // Inputlar
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
  const date = document.getElementById("dateInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();

  // Xəta sahələri
  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    age: document.getElementById("ageError"),
    date: document.getElementById("dateError"),
    phone: document.getElementById("phoneError"),
  };

  // Əvvəlki xətaları təmizlə
  for (let key in errors) errors[key].textContent = "";

  let hasError = false;

  // Validasiya
  if (!name) {
    errors.name.textContent = "Ad boş ola bilməz";
    hasError = true;
  }

  if (!email || !email.includes("@")) {
    errors.email.textContent = "Doğru email daxil edin";
    hasError = true;
  }

  if (!age || isNaN(age) || Number(age) <= 0) {
    errors.age.textContent = "Yaş müsbət rəqəm olmalıdır";
    hasError = true;
  }

  if (!date) {
    errors.date.textContent = "Tarix seçilməlidir";
    hasError = true;
  }

  if (!phone || phone.length < 7) {
    errors.phone.textContent = "Doğru telefon nömrəsi daxil edin";
    hasError = true;
  }

  if (hasError) return false;

  // Məlumatları obyekt kimi saxla
  const formData = { name, email, age, date, phone };
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Məlumat yadda saxlanıldı!");

  return true;
}

// Səhifə yüklənəndə localStorage məlumatlarını göstər
function restoreFormData() {
  const stored = localStorage.getItem("formData");
  if (stored) {
    const data = JSON.parse(stored);
    document.getElementById("nameInput").value = data.name || "";
    document.getElementById("emailInput").value = data.email || "";
    document.getElementById("ageInput").value = data.age || "";
    document.getElementById("dateInput").value = data.date || "";
    document.getElementById("phoneInput").value = data.phone || "";
  }
}

window.onload = function() {
  loadProfile();
  loadAbout();
  loadAboutText();
  loadSkills();
  loadContacts();
  restoreFormData(); // Form məlumatlarını bərpa et
};