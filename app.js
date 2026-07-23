var TURNSTILE_SITEKEY = "0x4AAAAAAD1O7oM83flDL2Xm";
var pendingAction = null;
var widgetId = null;

function runAction(action) {
  if (typeof turnstile === "undefined") return;
  pendingAction = action;
  var container = document.getElementById("turnstile-container");
  container.hidden = false;
  if (widgetId === null) {
    widgetId = turnstile.render("#turnstile-container", {
      sitekey: TURNSTILE_SITEKEY,
      callback: onVerified,
      "error-callback": hideWidget,
    });
  } else {
    turnstile.reset(widgetId);
  }
}

function hideWidget() {
  pendingAction = null;
  document.getElementById("turnstile-container").hidden = true;
}

async function onVerified(token) {
  var action = pendingAction;
  pendingAction = null;
  document.getElementById("turnstile-container").hidden = true;
  if (action) await action(token);
}

async function revealPhone(token) {
  var res = await fetch("/api/phone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  if (!res.ok) return;
  var data = await res.json();
  var link = document.createElement("a");
  link.href = "tel:" + data.phone.replace(/\s/g, "");
  link.textContent = data.phone;
  var slot = document.getElementById("phone-slot");
  slot.textContent = "";
  slot.appendChild(link);
}

async function downloadResume(token) {
  var res = await fetch("/api/resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  if (!res.ok) return;
  var blob = await res.blob();
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = "Vishnu-Roshan-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

document.getElementById("reveal-phone").addEventListener("click", function () {
  runAction(revealPhone);
});

document.getElementById("resume-btn").addEventListener("click", function () {
  runAction(downloadResume);
});
