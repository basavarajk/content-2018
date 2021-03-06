const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/rotem-mizrachi-meidan")],
  title: "Detox",
  description: `High velocity native mobile development requires us to adopt continuous integration workflows, which means our reliance on manual QA has to drop significantly. The most difficult part of automated testing on mobile is the tip of the testing pyramid – E2E. The core problem with E2E tests is flakiness – tests are usually not deterministic.

  React Native makes flakiness worse due to the asynchronous nature of the bridge. We believe the only way to tackle flakiness head on is by moving from blackbox testing to graybox testing and that’s where detox comes into play. The library synchronizes with the lifecycle of the app, including React Native core, making tests finally deterministic. This workshop shows how to get most out of Detox in React Native context.`,
  tickets: [
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/lctskibt-fy",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/ldpzefjkijm",
    },
  ],
  keywords: require("../speakers/rotem-mizrachi-meidan").keywords,
};
