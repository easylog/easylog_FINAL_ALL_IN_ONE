
export default async function handler(req, res) {
  const { input } = req.body;
  const output = "📄 GPT-Eintrag (Demo): " + input;
  res.status(200).json({ output });
}
