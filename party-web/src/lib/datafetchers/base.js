export function getUserParties(userId) {
  return {
    parties: [
      {
        name: "Gorm's Scoundrels",
        size: 5,
        nextMeeting: "2023-10-15",
        lastMeeting: "2023-09-01"
      },
      {
        name: "The League",
        size: 3,
        nextMeeting: "2023-11-15",
        lastMeeting: "2023-08-12"
      }
    ]
  }
}