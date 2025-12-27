document.getElementById("apply").addEventListener("click", () => {
  const start = Number(document.getElementById("start").value);
  const end = Number(document.getElementById("end").value);

  if (start >= end || isNaN(start) || isNaN(end)) return;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "SET_LOOP",
      start,
      end,
    });
  });
});
