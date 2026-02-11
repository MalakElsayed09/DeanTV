import mongoose from "mongoose";
import dotenv from "dotenv";
import Show from "./models/Show";
import Episode from "./models/Episode";

dotenv.config();

const seedData = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB connected");

    // Clear existing data
    console.log("🗑️  Clearing existing data...");
    await Show.deleteMany({});
    await Episode.deleteMany({});
    console.log("✅ Cleared existing data");

    // Create shows
    console.log("📺 Creating shows...");
    const shows = await Show.insertMany([
      {
        title: "Breaking Bad",
        description: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future as he battles terminal lung cancer.",
        thumbnailUrl: "https://images.unsplash.com/photo-1574267432644-f610a4ab7f6e?w=500&h=300&fit=crop"
      },
      {
        title: "Stranger Things",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        thumbnailUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=300&fit=crop"
      },
      {
        title: "The Crown",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        thumbnailUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&h=300&fit=crop"
      },
      {
        title: "Game of Thrones",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop"
      },
      {
        title: "The Mandalorian",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        thumbnailUrl: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=500&h=300&fit=crop"
      }
    ]);

    console.log(`✅ Created ${shows.length} shows`);

    // Create episodes for each show
    console.log("🎬 Creating episodes...");
    const episodes = [];
    
    for (const show of shows) {
      for (let i = 1; i <= 5; i++) {
        episodes.push({
          show: show._id,
          title: `Episode ${i}: The Journey Begins`,
          description: `Episode ${i} of ${show.title}. In this thrilling installment, our characters face new challenges and unexpected twists that will keep you on the edge of your seat!`,
          videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          episodeNumber: i,
          duration: 600 // 10 minutes
        });
      }
    }

    await Episode.insertMany(episodes);
    console.log(`✅ Created ${episodes.length} episodes`);

    console.log("\n🎉 Database seeded successfully!");
    console.log(`   - ${shows.length} shows created`);
    console.log(`   - ${episodes.length} episodes created`);
    console.log("\n📊 Summary:");
    shows.forEach((show, index) => {
      console.log(`   ${index + 1}. ${show.title} (5 episodes)`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedData();