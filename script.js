console.clear();
let readText = false;

fetch(
  "https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "008a0af592mshaaea859b4f3a3a3p11a32djsn8a22b2666daf",
      "x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((items) => {
    let requests = items
      .splice(1, 100)
      .map((item) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
        )
      );
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((articles) =>
        articles.forEach((article) => {
          $(".loader").remove();
          $("#titles")
            .append(`<p><span class="title" >${article.title}</span><br>
          Score: ${article.score}<br>
          <a href="${article.url}" target="_blank">${article.url}</a><br>
          </p>`);
        })
      );
  });

var scrolling = true;
window.setInterval(scroll_, 60);
function scroll_() {
  if (scrolling) {
    window.scrollBy(0, 1);
  }
}

$("#titles").hover(
  function () {
    scrolling = false;
  },
  function () {
    scrolling = true;
  }
);

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// create the mute button
$("body").prepend('<a onclick="muteSound()" class="mute">Back to Top</a>');
var amountScrolled = 0;
$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $("a.mute").fadeIn("500");
  }
});

// let sentences = $("p").find("span");

// confirmBox("Do you want to hear the news ?", function (callback) {
//   if (callback) {
//   }
// });

if (readText === true) {
  let sentences = ["Hello my friend", "How are you doing today ? "];

  let audio = new SpeechSynthesisUtterance("text");
  window.speechSynthesis.speak(audio);

  (function () {
    play(sentences);

    async function play(sentences) {
      for (let i = 0; i < sentences.length; i++) {
        await getNextAudio(sentences[i]);
      }

      async function getNextAudio(sentence) {
        console.log(sentence);
        let audio = new SpeechSynthesisUtterance(sentence);
        window.speechSynthesis.speak(audio);

        return new Promise((resolve) => {
          audio.onend = resolve;
        });
      }
    }
  })();
}
