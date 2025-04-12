let latestRecommendations = [];

document.getElementById("gradesForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const results = document.getElementById("results");
  const downloadBtn = document.getElementById("downloadBtn");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");
  results.innerHTML = "";
  results.style.display = "block";
  latestRecommendations = [];

  const name = document.getElementById("studentName").value;
  const school = document.getElementById("school").value;
  const wilaya = document.getElementById("wilaya").value;

  const islamiya = parseInt(document.getElementById("islamiya").value);
  const arabic = parseInt(document.getElementById("arabic").value);
  const english = parseInt(document.getElementById("english").value);
  const social = parseInt(document.getElementById("social").value);
  const math = parseInt(document.getElementById("math").value);
  const chemistry = parseInt(document.getElementById("chemistry").value);
  const physics = parseInt(document.getElementById("physics").value);
  const biology = parseInt(document.getElementById("biology").value);

  function addRec(text) {
    latestRecommendations.push(text);
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;
    results.appendChild(div);
  }

  addRec(`توصيات للطالب ${name}:`);
  if (english >= 90) {
    addRec("✔️ نوصيك باختيار مادة English Elective نظرًا لتفوقك في اللغة الإنجليزية.");
  } else {
    addRec("💡 مستواك جيد في اللغة الإنجليزية. استمر في تطوير مهاراتك لتصل إلى المستوى المتقدم.");
  }

  if (math >= 80) {
    addRec("✔️ يمكنك اختيار الرياضيات المتقدمة ضمن المسار العلمي.");
  } else {
    addRec("💡 نوصي باختيار الرياضيات الأساسية ضمن المسار الأدبي.");
  }

  if (chemistry >= 70) addRec("✔️ يمكنك دراسة الكيمياء لأنها ضمن نطاق قوتك الأكاديمية.");
  if (physics >= 70) addRec("✔️ يمكنك دراسة الفيزياء، درجتك مناسبة.");
  if (biology >= 70) addRec("✔️ يمكنك اختيار الأحياء ضمن موادك العلمية.");

  if (chemistry < 70 && physics < 70 && biology < 70) {
    addRec("⚠️ لم تسجل درجات عالية في العلوم، نوصي بمادة العلوم البيئية فقط إن كنت في المسار الأدبي.");
  }

  downloadBtn.style.display = "inline-block";
  downloadPdfBtn.style.display = "inline-block";
});

document.getElementById("downloadPdfBtn").addEventListener("click", function() {
  const element = document.getElementById("results");
  const opt = {
    margin: 0.5,
    filename: 'تقرير_المواد.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});
