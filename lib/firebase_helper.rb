require "firebase"

module FirebaseHelper
  def firebase_get
    firebase_url = "https://fir-test-f1e24.firebaseio.com/"
    firebase_secret = "HmNPBKP9SOdhMRZ6BC0lCUzeWcUdIELHpSYMpS0m"
    firebase = Firebase::Client.new(firebase_url, firebase_secret)
    firebase.push("events", {
      title: "Tech Courses",
      date: "2020/04/17",
      user: "Francesco Ecclesie",
      topic: "Javascript per principianti",
      time: "19.00",
    })
    return firebase.get("events").body.values
  end
end
