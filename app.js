
document.addEventListener("DOMContentLoaded", () => {

  const avatar = document.getElementById("avatar");
  const startScreen = document.getElementById("startScreen");
  const startBtn = document.getElementById("startBtn");

  const mainButtons = document.getElementById("mainButtons");
  const tierButtons = document.getElementById("tierButtons");
  const hearAnotherBtn = document.getElementById("hearAnotherBtn");
  const doneBtn = document.getElementById("doneBtn");

  let currentMain = "";
  let currentTier = 1;

  // ----- Random phrases with durations (ms) -----
  const phrases = {
    outside: {
      1: [
        { text: "It makes sense that you’re not ready yet. There’s a lot happening inside, and your feelings are guiding you to stay safe for now. Simply noticing this and allowing yourself to pause is already a meaningful step—it shows you’re paying attention to your needs instead of forcing yourself before you feel comfortable.", duration: 14800 },
        { text: "You might feel a mix of restlessness and fear, and that’s completely natural. Being here, taking a moment to recognize how overwhelming even the thought of stepping outside can feel, is a sign of awareness and self-care. You don’t have to change anything today; simply honoring your boundaries is valuable.", duration: 14200 },
        { text: "Your mind may be racing with worries about what could happen if you go outside, and that’s okay. You are not weak or failing—these feelings are your body and mind trying to keep you safe. Right now, the important thing is that you’re listening to yourself, not pushing against yourself.", duration: 14000 },
        { text: "Even though it might feel frustrating to stay inside, you’re actually doing something courageous: you’re observing your fear without judgment. Sometimes, just noticing your hesitation and letting yourself exist in this moment is a step forward on its own.", duration: 12500 },
        { text: "There’s no rush, no expectation, and no timeline you need to meet. You are giving yourself permission to move at your own pace, and that in itself is a way of respecting your own needs and limits.", duration: 10500 }
      ],
      2: [
        { text: "You’re starting to explore the idea of going outside, even if it feels uncertain or scary. That curiosity, no matter how small, is important—it means part of you is open to new experiences while another part is keeping you safe.", duration: 11100 },
        { text: "As you think about it, your mind might be weighing possibilities, imagining what could feel okay and what might be too much. That process of reflection is healthy—it shows you’re carefully considering your feelings instead of acting on impulse or pressure.", duration: 12600 },
        { text: "You may notice that some days the idea seems possible, and other days it feels overwhelming. That fluctuation is normal and expected. Just allowing yourself to think through it without committing yet is itself a form of gentle progress.", duration: 12100 },
        { text: "You might be imagining little steps or ways to feel safer outside, even if you haven’t taken them yet. Simply visualizing what might feel manageable is preparing your mind and body for when you do decide to try.", duration: 11800 },
        { text: "Even if you haven’t made a choice yet, the act of reflecting on your comfort, fears, and readiness is meaningful. It shows you care about yourself and your well-being, which is exactly the kind of attention that leads to real progress.", duration: 12200 }
      ],
      3: [
        { text: "You’re ready to take a step, even if it’s small. That decision shows trust in yourself and your ability to face your fears gradually. Every effort, no matter the size, is important and worth noticing.", duration: 11400 },
        { text: "You may still feel nervous or unsure, and that’s completely fine. Trying doesn’t mean being fearless; it means you’re willing to see what you can manage, and that willingness is already a sign of courage.", duration: 11400 },
        { text: "You might be planning a careful approach, imagining the first small steps that feel safe. Paying attention to these details shows that you’re in control and approaching the challenge thoughtfully, rather than rushing or forcing it.", duration: 12100 },
        { text: "Even if it feels challenging, attempting this action demonstrates progress. You’re giving yourself the opportunity to learn what works for you, what feels manageable, and what can wait for another day.", duration: 11400 },
        { text: "Whatever happens during this attempt, it matters. Success isn’t defined by perfection—it’s defined by your willingness to try, to notice your feelings, and to respond to yourself with care and patience.", duration: 11400 }
      ]
    },
    clinic: {
      1: [
        { text: "It’s perfectly normal to feel apprehensive about going to a hospital or seeing a doctor. These environments can feel overwhelming, and acknowledging that you’re not ready yet is a way of respecting your own comfort and limits. You’re being attentive to yourself, and that’s important.", duration: 14200 },
        { text: "Your mind might be imagining worst-case scenarios, anticipating discomfort or uncertainty, and that’s understandable. Feeling nervous doesn’t mean you’re weak—it means you’re human. Giving yourself permission to pause is a meaningful step.", duration: 12300 },
        { text: "Even if it feels frustrating to put off the appointment, staying aware of your own boundaries is part of self-care. Right now, simply noticing your fear without trying to fight it is progress in itself.", duration: 11400 },
        { text: "You might be experiencing a mix of anxiety and responsibility—wanting to take care of yourself but feeling unable to act. Both of those feelings are valid. Being honest with yourself about not being ready is a way of listening to your own needs.", duration: 12500 },
        { text: "There’s no timeline you need to meet. Taking time to prepare mentally, even if it’s just to sit with the idea of going later, is a step toward feeling safer when the time is right.", duration: 10600 }
      ],
      2: [
        { text: "You’re starting to explore the possibility of attending your appointment, even if you feel uncertain. That’s an important sign that part of you is open to care and willing to consider what’s possible.", duration: 11400 },
        { text: "Your thoughts might be shifting back and forth between worry and curiosity, imagining what could happen if you go and what might be overwhelming. That reflection is normal and shows careful consideration rather than avoidance.", duration: 12600 },
        { text: "Some days the idea might feel manageable, other days overwhelming, and that fluctuation is part of the process. Simply thinking about it without committing yet is already a meaningful step toward readiness.", duration: 11400 },
        { text: "You might be imagining ways to feel safer—planning who to bring, what to bring, or what small steps feel achievable. Even these mental preparations are forms of progress that can make the eventual visit easier.", duration: 11600 },
        { text: "The act of considering your own comfort and safety shows that you care for yourself. You’re balancing caution with curiosity, which is a healthy, thoughtful approach to facing something that feels scary.", duration: 11500 }
      ],
      3: [
        { text: "Deciding to try, even if it feels scary, is a courageous step. You’re trusting yourself to face your fear in a measured, careful way, and that willingness itself is important.", duration: 9000 },
        { text: "It’s okay if nerves are still present; trying doesn’t require being fearless. It means you’re willing to take small, deliberate steps and see what you can handle.", duration: 8800 },
        { text: "You might be planning the details carefully—choosing a quiet time, taking a supportive person with you, or breaking the process into manageable moments. Paying attention to these details shows that you’re in control of your experience.", duration: 12200 },
        { text: "Even if it’s challenging, the attempt itself is progress. You’re learning about your boundaries, discovering what helps you cope, and creating opportunities to feel safer in medical environments.", duration: 10300 },
        { text: "No matter how the visit goes, it matters that you tried. Success isn’t about perfection—it’s about showing up for yourself, noticing your feelings, and responding with patience, compassion, and care.", duration: 10300 }
      ]
    },
    social: {
      1: [
        { text: "It’s completely understandable to feel that way. Being around others can be draining or overwhelming, and recognizing that you’re not ready yet is a form of self-respect. Simply acknowledging your feelings shows awareness and care for your own well-being.", duration: 13300 },
        { text: "Your mind might be imagining awkward moments or fears of judgment, and that’s normal. Feeling anxious doesn’t mean you’re weak—it means your brain is protecting you. Choosing to pause and honor that is a meaningful step.", duration: 12200 },
        { text: "Even if it feels frustrating to stay in, there’s value in observing your own boundaries. By noticing your fear without forcing yourself, you’re taking care of yourself in a gentle, deliberate way.", duration: 10700 },
        { text: "You may feel torn—wanting connection but fearing discomfort. That mix of feelings is natural. Listening to yourself and allowing space for rest is part of preparing for future engagement.", duration: 10500 },
        { text: "There’s no timeline or expectation. Taking this time for yourself, even just to breathe and notice your thoughts, is a step toward understanding your limits and building confidence at your own pace.", duration: 10700 }
      ],
      2: [
        { text: "You’re starting to explore the idea of being around others, even if it feels uncertain. That’s important—it shows part of you is curious and willing to imagine new possibilities while another part remains cautious.", duration: 11100 },
        { text: "Your mind might be weighing potential discomforts against possible enjoyment, imagining different scenarios. That internal conversation is healthy—it’s how you assess what feels safe before you act.", duration: 10800 },
        { text: "Some days the idea may feel manageable, other days overwhelming, and that’s perfectly normal. Simply thinking about it without taking action yet is meaningful progress.", duration: 9200 },
        { text: "You might be imagining strategies to feel safer—choosing who to meet, how long to stay, or what coping tools to bring. Even these mental preparations help you gradually approach social situations with more confidence.", duration: 11100 },
        { text: "Considering your own comfort and limits while being open to connection shows self-awareness and care. You’re balancing caution and curiosity, which is exactly the kind of thoughtful preparation that leads to positive experiences.", duration: 12300 }
      ],
      3: [
        { text: "Deciding to try, even if it feels daunting, is a brave step. You’re trusting yourself to face your fears in a careful, controlled way, and that willingness alone is significant.", duration: 9800 },
        { text: "Feeling nervous is normal, and it doesn’t mean you shouldn’t go. Trying doesn’t require being fearless—it means being willing to notice your feelings and take small steps despite them.", duration: 10200 },
        { text: "You may be planning the interaction carefully—thinking about who will be there, how long you’ll stay, or what strategies help you feel safe. That thoughtfulness shows you are in control and approaching this with care.", duration: 11000 },
        { text: "Even if parts of the interaction feel uncomfortable, attempting it is progress. You’re learning what works for you, discovering your limits, and gaining experience to build confidence for the future.", duration: 10700 },
        { text: "No matter how it goes, what matters is that you tried. Success isn’t measured by perfection or how others perceive you—it’s measured by your willingness to engage, notice your feelings, and respond to yourself with patience and kindness.", duration: 12300 }
      ]
    }
  };

  // ----- Greeting -----
  const welcomePhrase = { text: "Hello my friend. It’s really good to have you here. There's no pressure here — so just breathe, and know that I’m here to support you every step of the way.", duration: 8000 };

  // ----- CHEAT FIX: speak with timer -----
  function speakTimedPhrase(phrase) {
    avatar.src = "talking.gif";
    hearAnotherBtn.style.display = "none";
    doneBtn.style.display = "none";

    if (window.AppInventor) window.AppInventor.setWebViewString(phrase.text);
    else if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(phrase.text);
      window.speechSynthesis.speak(utter);
    } else console.log("TTS:", phrase.text);

    setTimeout(() => {
      avatar.src = "idle.gif";
      hearAnotherBtn.style.display = "inline-block";
      doneBtn.style.display = "inline-block";
    }, phrase.duration);
  }

  // ----- START BUTTON -----
  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    avatar.src = "waving.gif";
    avatar.style.display = "inline-block";

    if (window.AppInventor) window.AppInventor.setWebViewString(welcomePhrase.text);
    else if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(welcomePhrase.text);
      window.speechSynthesis.speak(utter);
    } else console.log("TTS:", welcomePhrase.text);

    setTimeout(() => {
      avatar.src = "idle.gif";
      mainButtons.style.display = "block";
      hearAnotherBtn.style.display = "none";
      doneBtn.style.display = "none";
    }, welcomePhrase.duration);
  });

  // ----- MAIN BUTTONS -----
  mainButtons.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentMain = btn.dataset.type;
      tierButtons.style.display = "block";
      mainButtons.querySelectorAll("button").forEach(b => { if (b !== btn) b.style.display = "none"; });
      hearAnotherBtn.style.display = "none";
      doneBtn.style.display = "none";
    });
  });

  // ----- TIER BUTTONS -----
  tierButtons.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTier = btn.dataset.tier;
      const list = phrases[currentMain][currentTier];
      const phrase = list[Math.floor(Math.random() * list.length)];
      speakTimedPhrase(phrase);
    });
  });

  // ----- HEAR ANOTHER -----
  hearAnotherBtn.addEventListener("click", () => {
    const list = phrases[currentMain][currentTier];
    const phrase = list[Math.floor(Math.random() * list.length)];
    speakTimedPhrase(phrase);
  });

  // ----- DONE -----
  doneBtn.addEventListener("click", () => {
    tierButtons.style.display = "none";
    hearAnotherBtn.style.display = "none";
    doneBtn.style.display = "none";
    mainButtons.querySelectorAll("button").forEach(b => b.style.display = "inline-block");
  });

});
