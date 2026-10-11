var TURNSTILE_SITEKEY = "0x4AAAAAAD1O7oM83flDL2Xm";
var TURNSTILE_API =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileReady";
var pendingAction = null;
var widgetId = null;
var apiLoader = null;

function loadTurnstile() {
  if (apiLoader) return apiLoader;
  apiLoader = new Promise(function (resolve, reject) {
    var timer = setTimeout(function () {
      reject(new Error("turnstile: timed out"));
    }, 10000);

    window.onTurnstileReady = function () {
      clearTimeout(timer);
      resolve();
    };

    var script = document.createElement("script");
    script.src = TURNSTILE_API;
    script.async = true;
    script.onerror = function () {
      clearTimeout(timer);
      reject(new Error("turnstile: script blocked or unreachable"));
    };
    document.head.appendChild(script);
  });
  return apiLoader;
}

async function runAction(action) {
  pendingAction = action;

  try {
    await loadTurnstile();
  } catch {
    console.error("turnstile: script failed to load");
    apiLoader = null;
    hideWidget();
    return;
  }

  document.getElementById("turnstile-container").hidden = false;

  if (widgetId === null) {
    widgetId = turnstile.render("#turnstile-container", {
      sitekey: TURNSTILE_SITEKEY,
      callback: onVerified,
      "error-callback": function (code) {
        console.error("turnstile: widget error", code);
        hideWidget();
      },
    });
  } else {
    turnstile.reset(widgetId);
  }
}

function hideWidget() {
  var notice = document.getElementById("resume-consent");
  if (notice.matches(":popover-open")) notice.hidePopover();
}

async function onVerified(token) {
  var action = pendingAction;
  hideWidget();
  if (action) await action(token);
}

async function downloadResume(token) {
  var res = await fetch("/api/resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token, lang: document.documentElement.lang }),
  });
  if (!res.ok) {
    console.error("resume download failed:", res.status);
    return;
  }
  var disposition = res.headers.get("Content-Disposition") || "";
  var match = disposition.match(/filename="([^"]+)"/);
  var blob = await res.blob();
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = match ? match[1] : "Vishnu-Roshan-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function placeBelow(popover, anchor) {
  var rect = anchor.getBoundingClientRect();
  var maxLeft = window.innerWidth - popover.offsetWidth - 8;
  popover.style.top = rect.bottom + 8 + "px";
  popover.style.left = Math.max(8, Math.min(rect.left, maxLeft)) + "px";
}

function withConsent(id, action) {
  var notice = document.getElementById(id);
  var body = notice.querySelector(".consent-body");
  var button = body.querySelector("button");
  notice.showPopover();
  placeBelow(notice, document.getElementById("resume-btn"));
  if (notice.dataset.granted) {
    body.hidden = true;
    action();
    return;
  }
  body.hidden = false;
  button.onclick = function () {
    notice.dataset.granted = "true";
    body.hidden = true;
    action();
  };
  button.focus();
}

document.getElementById("resume-consent").addEventListener("toggle", function (event) {
  if (event.newState !== "closed") return;
  pendingAction = null;
  document.getElementById("turnstile-container").hidden = true;
});

document.getElementById("resume-btn").addEventListener("click", function () {
  withConsent("resume-consent", function () {
    runAction(downloadResume);
  });
});

var fitDialog = document.getElementById("fit-dialog");

document.getElementById("fit-btn").addEventListener("click", function () {
  fitDialog.showModal();
});

document.getElementById("fit-close").addEventListener("click", function () {
  fitDialog.close();
});

var scrollPanels = document.querySelectorAll(
  ".panel--work, .panel--skills, .panel--projects"
);

function updateScrollHint(panel) {
  var overflows = panel.scrollHeight > panel.clientHeight;
  var atEnd = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1;
  panel.classList.toggle("has-more", overflows && !atEnd);
}

scrollPanels.forEach(function (panel) {
  updateScrollHint(panel);
  panel.addEventListener(
    "scroll",
    function () {
      updateScrollHint(panel);
    },
    { passive: true }
  );
  new ResizeObserver(function () {
    updateScrollHint(panel);
  }).observe(panel);
});

/*
var gameDialog = document.getElementById("game-dialog");
var gameSlot = document.getElementById("game-slot");
var gameName = document.getElementById("game-name");

function openGame(button) {
  var frame = document.createElement("iframe");
  frame.src = "https://archive.org/embed/" + button.dataset.game;
  frame.title = button.dataset.gameTitle;
  frame.allow = "fullscreen";
  gameName.textContent = button.dataset.gameTitle;
  gameSlot.appendChild(frame);
  gameDialog.show();
}

document.querySelectorAll(".icon-btn[data-game]").forEach(function (button) {
  button.addEventListener("click", function () {
    withConsent("game-consent", function () {
      openGame(button);
    });
  });
});

document.getElementById("game-close").addEventListener("click", function () {
  gameDialog.close();
});

gameDialog.addEventListener("cancel", function (event) {
  event.preventDefault();
});

gameDialog.addEventListener("close", function () {
  gameSlot.textContent = "";
  gameName.textContent = "";
});
*/
