const featureText = document.getElementById("feature-text");
const hotspots = document.querySelectorAll(".hotspot");

const copy = {
  ccus:
    "CCUS (Carbon Capture, Utilisation & Storage) vangt CO₂ af bij het proces en leidt het naar opslag of hergebruik.",
  elektrificatie:
    "Elektrificatie vervangt fossiele warmte door elektrisch aangedreven processen, bijvoorbeeld met warmtepompen.",
};

const setActive = (feature) => {
  hotspots.forEach((hotspot) => {
    hotspot.classList.toggle(
      "active",
      hotspot.dataset.feature === feature
    );
  });
};

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    event.preventDefault();
    const feature = hotspot.dataset.feature;
    featureText.textContent = copy[feature];
    setActive(feature);

    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        {
          type: "factory-feature-click",
          feature,
        },
        "*"
      );
    }
  });
});
