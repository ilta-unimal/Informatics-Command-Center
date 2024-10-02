 function loadRunningText() {
  fetch("function/data/running_text.json")
      .then((response) => response.json())
      .then((data) => {
          const texts = data.text.join('<span class="px-5"> | </span>'); 
          document.getElementById("text").innerHTML = texts;
      })
      .catch((error) => {
          console.error("Error loading JSON:", error);
      });
}

loadRunningText();

setInterval(loadRunningText, 1000);