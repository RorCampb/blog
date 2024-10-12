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
            There are still a lot of empty wall space in my apartment. As of
            right now, the vibe is lighter wood accents, muted blue fabrics, and
            mid-century forms.
          </p>
          <br />
          <p>
            A lot of the inspiration, besides some basic sillouhettes from the
            Internet, came from this Marc Jacobs storefront I passed on the way
            to the movies last week.
          </p>
          <img
            className={styles.supplementalImage}
            src="../marcjacobsstorefront.png"
            alt="My Shelf"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => "https://www.youtube.com/watch?v=PUQfNBzMjiw"}
          />
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
          desktopBackgroundColor={post.desktopBackgroundColor}
          desktopTextColor={post.desktopTextColor}
          mobileTextColor={post.mobileTextColor}
          content={post.content}
        />
      ))}
    </div>
  );
}
