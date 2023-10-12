function resizeWindow() {
  let width = window.innerWidth;
  if (width <= 679) {
    document.getElementById("navContents").className = "closeNavC";
  } else {
    document.getElementById("navContents").className = "normalNavC flexCenter";
  }
}
addEventListener("DOMContentLoaded", resizeWindow);
addEventListener("resize", resizeWindow);

document.getElementById("loginBtn").addEventListener("click", loginBox);

function loginBox() {
  document.getElementById("LoginBox").style.display = "block";
}

document.getElementById("closeBtn").addEventListener("click", closeLogin);

function closeLogin() {
  document.getElementById("LoginBox").style.display = "none";
}

// open sidebar
document.getElementById("topbarMenu").addEventListener("click", () => {
  document.getElementById("navContents").className = "openMobNavC";
});

// close sidebar

document.getElementById("mobNavClose").addEventListener("click", () => {
  document.getElementById("navContents").className = "closeNavC";
});
