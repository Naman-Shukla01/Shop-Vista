import User from "../src/models/userModel.js";
import crypto from "crypto";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const dbUrl = process.env.DB_URL;
    
    main()
    .then(()=>{
        console.log(`Connected to DB`);
    })
    .catch((err)=>{
        console.log(`Can't connect to DB ${err}`)
    });
    
    async function main() {
        await mongoose.connect(dbUrl);
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password === password) {
      const token = crypto.randomBytes(20).toString("hex");

      user.token = token;
      await user.save();

      return res.status(200).json({ token });
    }

    return res.status(401).json({ message: "Password Incorrect" });
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong: ${err.message}` });
  }
}
