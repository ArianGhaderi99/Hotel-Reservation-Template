function toggleDark(){
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

function toggleLang(){
  let lang = localStorage.getItem("lang") || "en";
  lang = lang === "en" ? "fa" : "en";
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang(){
  let lang = localStorage.getItem("lang") || "en";

  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = lang === "en"
      ? el.getAttribute("data-en")
      : el.getAttribute("data-fa");
  });

  // ✨ فعال کردن active page highlight
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.href.includes(location.pathname.split("/").pop())){
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

window.onload = () => {
  if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
  }
  applyLang();
};