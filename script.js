function displayCurrentTime() {
  const currentTimeElement = document.getElementById('current-time');
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = currentTime;
}

function showWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'block';
}

function hideWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'none';
}

function loadContentIntoIframe(iframeId, url) {
  const iframe = document.getElementById(iframeId);
  iframe.src = url;
}

function switchWindow(currentWindowId, nextWindowId, iframeUrl) {
  hideWindow(currentWindowId);
  loadContentIntoIframe('terminal-frame', iframeUrl);
  showWindow(nextWindowId);
}

function openFileManager() {
  switchWindow('terminal-window', 'file-manager-window', 'Linux_page/index.html');
}

document.addEventListener('DOMContentLoaded', () => {
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
});


const terminalButton = document.getElementById('terminal-button');
terminalButton.addEventListener('click', () => {
  showWindow('terminal-window');
});


const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  location.reload();
});