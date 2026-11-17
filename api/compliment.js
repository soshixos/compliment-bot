// Webhook for the Compliment Bot Slack app.
// Slack sends a POST request here when someone runs /compliment.
// We answer immediately with a random compliment, posted in the channel.
const compliments = [
  "Your positivity is infectious!",
  "You are a fantastic person!",
  "You light up the room!",
  "You are making a real difference!",
  "Your hard work is paying off!",
  "You have a great sense of humor!",
  "You are a true team player!",
  "Your kindness does not go unnoticed!",
  "You are an inspiration to us all!",
  "You bring out the best in others!",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, hint: "POST here from a Slack slash command." });
  }
  const message = compliments[Math.floor(Math.random() * compliments.length)];
  return res.status(200).json({
    response_type: "in_channel",
    text: `💡 ${message}`,
  });
}
