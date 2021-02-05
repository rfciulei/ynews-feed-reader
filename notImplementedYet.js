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

////// SPEECH
/*
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
*/
