import User from "../../models/userModel.js";

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

    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    // Instead of redirect, just send success json (redirects don't work in API)
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ message: `Something went wrong: ${err.message}` });
  }
}