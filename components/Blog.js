// components/Blog.js
"use client";
import BlogBlock from "./BlogBlock.js";
import styles from "../styles/BlogBlock.module.css"; // Import Blog styles
import "../styles/globals.css";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Tools That Keep Us Alive",
      description: "What Prospero knew that we didn't",
      timestamp: "10:06:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <a href="http://shakespeare.mit.edu/tempest/full.html">
            <img
              className={styles.supplementalImage}
              src="../tempestImg.png"
              alt="The Tempest"
              href="http://shakespeare.mit.edu/tempest/full.html"
              onClick={() => "http://shakespeare.mit.edu/tempest/full.html"}
            />
          </a>
          <p>
            William Shakespeare was well aware that The Tempest was the last
            work in his career. His play is a story of forgiveness. More
            specifically, choosing to forgive. Prospero, the main character, is
            the former Duke of Milan...and an advanced sorcerer. After being
            overthrown by his brother, Antonio, he is exiled to a remote island
            with his daughter, Miranda.
          </p>
          <br />
          <p>
            Over the years, he has raised Miranda and enlisted the help of a
            magical spirit named Ariel, who seems to be a woman but is actually
            a dude. That is, if spirits even have a gender? Anyways, Prospero
            finds an opportunity to detour Antonio and his entourage to the
            island. That's not exactly accurate, he wrecks their ship and
            crashes it ashore.
          </p>
          <br />
          <p>
            One could imagine that Prospero is looking to inflict maximum pain
            on his bro. After all, he has been alone on this island with a
            teenage girl and non-binary spirit for over a decade. That's not
            what happens though! The five acts of the play progress like a
            Tarantino film, tracking the storylines of the ships inhabitants
            until they all converge at Prospero's crib at the end.
          </p>
          <br />
          <p>
            In each group's journey to Prospero's, we can see that most of these
            people are not the best. There is an assassination attempt, a
            drunken butler, a deformed slave, and VERY spontaneous marriage
            proposal. Prospero, with his magical wizard powers, watches this all
            unfold, and, despite all of that, he forgives them all. Before
            Shakespeare checks into the retirement home, he leaves us with this
            beautiful reflection through the eyes of the main character:
            <br />
            <br />
          </p>
          <p>
            " Now my charms are all o’erthrown,
            <br />
            And what strength I have’s mine own,
            <br />
            Which is most faint. Now, ’tis true
            <br />
            I must be here confined by you,
            <br />
            Or sent to Naples. Let me not,
            <br />
            Since I have my dukedom got
            <br />
            And pardoned the deceiver, dwell
            <br />
            In this bare island by your spell;
            <br />
            But release me from my bands
            <br />
            With the help of your good hands.
            <br />
            Gentle breath of yours my sails
            <br />
            Must fill, or else my project fails,
            <br />
            Which was to please. Now I want
            <br />
            Spirits to enforce, art to enchant;
            <br />
            And my ending is despair,
            <br />
            Unless I be relieved by prayer,
            <br />
            Which pierces so that it assaults
            <br />
            Mercy itself, and frees all faults.
            <br />
            <br />
            As you from crimes would pardoned be,
            <br />
            Let your indulgence set me free."
            <br />
            <br />
          </p>
          {/* Example of supplemental image */}
          <p>
            What would happen if we woke up and decided to forgive EVERYONE?
            Prospero must have imagined obliterating his brother and his crew.
            It would be easy. And, I will be the first to admit, rage bait
            Twitter threads have a special place in my heart. But, what do we
            gain when we fuel ourselves with contempt? You would think that we
            gain nothing. Unfortunately, it's much worse than that. All of that
            hatred comes back to us. Our world is self-centric, the negative
            feelings we project onto others are the same ones we feel from
            ourselves.
          </p>
          <br />
          <p>
            This is not to say that we should let ourselves be doormats to all
            of the bullies of the world. What I do think, however, is that we
            should be mindful of the reasons we want to project our anger.
            <br />
            In the story, Prospero could have chose to kill everyone before they
            even reached the island. We know that's not how he operates though!
            In fact, the choice to let them onto the island is what gives the
            entourage an opportunity to see from Prospero's perspective. It's
            beautiful!
          </p>
          <br />
          <br />
          <p>Basically, start being more understanding, it helps.</p>
        </>
      ),
    },
    {
      title: "Thanks Steve Lacy",
      description: "Our boredom is polar!",
      timestamp: "10:12:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <a href="https://www.youtube.com/watch?v=PUQfNBzMjiw">
            <img
              className={styles.supplementalImage}
              src="../isthisstevelacy.png"
              alt="The Tempest"
              href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
              onClick={() => "https://www.youtube.com/watch?v=PUQfNBzMjiw"}
            />
          </a>
          <p>Steve Lacy is coming back. At least according to him.</p>
          <br />
          <p>
            I have a feeling that Steve is going to do some DESPICABLE things.
            He has shown from the time he got popular that he is a versatile
            musician. Everyone loves his guitar skills, but the drums he puts on
            his tracks are equally exceptional. Seriously, listen to his outro
            on Apollo XXI (link on Michael).
          </p>
        </>
      ),
    },
    {
      title: "New Shelf?",
      description: "",
      timestamp: "10:14:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            className={styles.supplementalImageType2}
            src="../shelf.png"
            alt="My Shelf"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => "https://www.youtube.com/watch?v=PUQfNBzMjiw"}
          />
          <p>
            There is still a lot of empty wall space in my apartment. As of
            right now, the vibe is lighter wood accents, muted blue fabrics, and
            mid-century forms.
          </p>
          <br />
          <p>
            A lot of the inspiration, besides some basic sillouhettes from the
            Internet, came from this Marc Jacobs storefront I passed on the way
            to the movies last week.
          </p>
          <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DdfafPe1rEPk&ved=2ahUKEwjN36-v-qWJAxW95ckDHQm0Ob8QwqsBegQIAhAF&usg=AOvVaw2dvHPKtD2P-QaFszA14ySM">
            <img
              className={styles.supplementalImage}
              src="../marcjacobsstorefront.png"
              alt="My Shelf"
              href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
              onClick={() => "https://www.youtube.com/watch?v=PUQfNBzMjiw"}
            />
          </a>
        </>
      ),
    },
    {
      title: "Boat Boots!",
      description: "Sperry boots...kinda",
      timestamp: "10:20:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            className={styles.supplementalImageType2}
            src="../boots.png"
            alt="My Boots"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => ""}
          />
          <p>
            Miu Miu is, unsurprisingly, making me very happy with the trends
            they are starting. It seems like it was only yesterday when we were
            (tastefully) flaunting Nike Elite socks, complimented with a pair of
            Sperrys.
          </p>
          <a href="https://www.miumiu.com/kw/en/p/unlined-bleached-leather-loafers/5D123E_3F33_F0038_F_005">
            <img
              className={styles.supplementalImageType2}
              src="../brown-leather-miu-miu-flats-45177596-1_2.jpg.webp"
              alt="unlined-bleached-leather-loafers"
              href="https://www.miumiu.com/kw/en/p/unlined-bleached-leather-loafers/5D123E_3F33_F0038_F_005"
              onClick={() =>
                "https://www.miumiu.com/kw/en/p/unlined-bleached-leather-loafers/5D123E_3F33_F0038_F_005"
              }
            />
          </a>
          <p>
            The boots are not a direct rip of the topsider sillouhette. At
            least, I hope. Their real inspiration is derived from the
            mocassin-like seams that run across the front of the shoe, as well
            as the large flappy upper. To give them a little ruggedness, I also
            added a thicker sole.
          </p>
          <br />
          <p>
            I would like to think that the owners of these boots could be found
            in a variety of places. Maybe a sailing adventure, a walk in the
            park, trip to the grocery store, hike in the mountains? Honestly,
            any environment will do, the only thing I really want to come from
            this concept is more concepts.
          </p>
        </>
      ),
    },
    {
      title: "Rory Font",
      description: "A tedious new idea",
      timestamp: "10:30:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <p>
            Some time has passed, I know. But fret not! I can assure you that
            there is an abundance of new ideas still at my disposal.
          </p>
          <p>
            It is one of these new ideas that has taken me away from the blog
            for the week (as well as a Bladee concert).
          </p>
          <img
            className={styles.supplementalImageType2}
            src="../font.png"
            alt="My font"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => ""}
          />
          <p>
            As you could see, there is a lot left to be imagined. What you CAN
            imagine, I hope, is a typeface that demonstrates clarity.
          </p>
          <br />
          <p>
            In other news, I recently revisited photoshop to play around with
            some pictures I took at a sculpture garden.
          </p>
          <img
            className={styles.supplementalImageType2}
            src="../tealskyconcept.png"
            alt="My font"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => ""}
          />
        </>
      ),
    },
    {
      title: "Tealsky Promo",
      description: "Streaming right now (spotify link on the picture)",
      timestamp: "11:07:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <a href="https://open.spotify.com/album/7FwnfDrPIpwo8h2leFlCjR?si=6oGbuNzrR0itRnoHV8_f5g">
            <img
              className={styles.supplementalImageType2}
              src="../redeyes.png"
              alt="My font"
              href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
              onClick={() => ""}
            />
          </a>
          <p>
            I guess you could call me a 'creative director'. Actually, not yet.
            As of right now, this promo cover has not been used. But that is not
            to say it won't happen!
          </p>
          <p>
            Tealsky is a promising band whose drummer is a close friend of mine.
            Whether its publicized or not, I could never pass up a creative
            opportunity.
          </p>
          <p>
            If you are reading this, I have good ideas! Look at them, and if you
            think the same, let me know. I am always looking for a chance to
            make something.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {blogPosts.map((post, index) => (
        <BlogBlock
          key={index}
          title={post.title}
          description={post.description}
          timestamp={post.timestamp}
          desktopBackgroundColor={post.desktopBackgroundColor}
          desktopTextColor={post.desktopTextColor}
          mobileTextColor={post.mobileTextColor}
          content={post.content}
        />
      ))}
    </div>
  );
}
