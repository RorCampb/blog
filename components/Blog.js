// components/Blog.js
"use client";
import { useState, useEffect } from "react";
import BlogBlock from "./BlogBlock.js";
import styles from "../styles/BlogBlock.module.css"; // Import Blog styles
import "../styles/globals.css";

export default function Blog() {
  const [enlargedImageId, setEnlargedImageId] = useState(null); // Track the ID of the enlarged image

  const handleImageClick = (id) => {
    setEnlargedImageId((prevId) => (prevId === id ? null : id)); // Toggle enlargement
  };
  const blogPosts = [
    {
      title: "How Far Is Heaven?",
      description: "Cheeked Up",
      timestamp: "02:15:2025",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          We are on pace with our painting goal for this year! This month, I
          decided to try combining my imagination with the real world.
          <img
            key="IMG_5350"
            className={styles.supplementalImage}
            src="../369D10F4-C214-49DC-9F88-6714158496F5_1_102_o.jpeg"
            alt="painting"
            href=""
            onClick={() => handleImageClick("IMG_5136")}
            style={{}}
          />
          The painting depicts an angel prostrated outside of Dallas city
          limits. Which angel, if they are prostrating, and what city are
          ultimately up to you. I do suppose that, since I made it, I can make
          my own assumptions. <br />
          The composition is a bright one. It's a sunny day, the city looks
          colorful, and there's a train wreck! Or, more specifically, a DART
          wreck. <br />I don't know if the angel is a cause of that day's
          problems. But, I do believe they are feeling awfully sad about
          whatever happened. We see the angel prostrated to whatever stands
          before them, presumably God. Is our man (technically a genderless
          spiritual entity) asking forgiveness for whatever foul deeds affected
          the city? Honestly, it's whatever. Whoever wants to take the time to
          contemplate is more than welcome:)
        </>
      ),
    },

    {
      title: "Tealsky Promo #3",
      description: "Flyers",
      timestamp: "02:15:2025",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            key="IMG_5350"
            className={styles.supplementalImage}
            src="../DD3A78B8-1F28-4B7F-A360-BBDA4638CFEF_1_105_c.jpeg"
            alt="painting"
            href=""
            onClick={() => handleImageClick("IMG_5136")}
            style={{}}
          />
          <img
            key="IMG_5350"
            className={styles.supplementalImage}
            src="../5C602584-1F89-4076-9E48-E3C50ED8972B.jpeg"
            alt="painting"
            href=""
            onClick={() => handleImageClick("IMG_5136")}
            style={{}}
          />
          <img
            key="IMG_5350"
            className={styles.supplementalImage}
            src="../75F98B7F-67DF-4241-A744-B356B2306215.jpeg"
            alt="painting"
            href=""
            onClick={() => handleImageClick("IMG_5136")}
            style={{}}
          />
          <p>
            It's time for a supply of Tealsky content! The flyers were for their
            first two concerts of 2025. <br />
            And, yeah, thats about it for now. NEW PAINTING COMING SOON!
            <br />
          </p>
        </>
      ),
    },
    {
      title: "He's Alive!",
      description: "Mood(?)",
      timestamp: "02:02:2025",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          Painting number TWO has been released to the public!
          <img
            key="IMG_5350"
            className={styles.supplementalImage}
            src="../IMG_5350.png"
            alt="painting"
            href=""
            onClick={() => handleImageClick("IMG_5136")}
            style={{}}
          />
          When I first started painting (last August), I dove straight into my
          imagination. What came of that was an emotionless portrait of a bald
          man. I wouldn't say we've come a LONG way, but some progress has been
          made.
          <br />
          My new painting is my own interpretation of Frankenstein's monster.
          Our boy is confused, pale, and well accessorized.
          <br />
          We don't have to get too interpretive with it, but the feeling I got
          when creating this guy was "confused". If you had already lived a full
          life, what would your motivations be? If you'd previously led a life
          of evil, would you repent? Or, if you lived a life of love, would you
          take the chance to invoke chaos? The cannon Frankenstein's monster
          tried his best to be a good guy. But, as you'd expect, the first
          impressions he left on the living were quite repulsive.
          <br />
          So, what would the monster be like if you were the first to meet him?
          Would you inspire a life of fruitful pursuits? Or, are we a catalyst
          for the destructive nature that resides in all of us?
        </>
      ),
    },
    {
      title: "Rory Campbell Painting",
      description: "I love you Mom and Dad!",
      timestamp: "01:14:2025",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <p>
            It has been almost a month since rorycampbell.me was updated. I am
            so SORRY.
            <br />
            If it makes you feel any better, I've been working on some pretty
            cool stuff. That stuff includes the first finished painting of my
            life (see below).
            <img
              key="IMG_5136"
              className={styles.supplementalImage}
              src="../IMG_5136.png"
              alt="painting"
              href=""
              onClick={() => handleImageClick("IMG_5136")}
              style={{}}
            />
            I worked on this painting over the course of a week or so. If you
            don't recognize it, the painting depicts my parents and I posing in
            front of the bull at the New York Stock Exchange.
            <br />
            Painting is something I've always wanted to learn, but never took
            the time to. My experience with drawing has definitely helped me
            ramp up into the foundations of the medium. But, even so, learning
            to translate monotone drawings to a colored composition is not easy!
            <br />
            If you are like me, learning new things like this is very exciting!
            And, if you are even more like me, you also get a little dejected
            when climbing that mountain of experience. No reason to worry,
            though! With the power of my inpervious spirit, my skills will be
            honed.
            <br />
          </p>
        </>
      ),
    },
    {
      title: "Posh Priest Shirt",
      description: "A little something to hold y'all over:)",
      timestamp: "12:18:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            className={styles.supplementalImage}
            src="../priestshirt.png"
            alt="priest shirt"
            href=""
            onClick={() => ""}
          />
          <p>
            So I've been workin on some stuff! It's exciting, engaging,
            continuous, and yet to be revealed. In the meantime, I have this
            cute little garment I've come up with in Illustrator over the past
            few days.
            <br />I found that the structure of this shirt was similar to the
            vestments you'd see a priest wearing; and, to be honest, I think I
            am okay with that! Those of you who followed me about a year ago
            will probably notice some similarities to the star-C apparel
            prototype. If not, go do some homework!
            <br />
            <br />I promise there will be more Rory originals posted soon, just
            bear with me while work wraps up. Merry Christmas and all of that, I
            love you guys!
          </p>
        </>
      ),
    },
    {
      title: "Sport Co. T-Shirt",
      description: "Big sports guy here",
      timestamp: "12:07:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <p>
            I know, there hasn't been much output from me this holiday season.
            At least, not on the website. Production is not stopping, DON'T
            WORRY. The last week or so, I have actually been trying to develop
            this idea of a mock sports brand, Sport Co.
            <br />
            Sport Co. was never 'created'. It has never endorsed an athlete or
            pushed a major ad campaign. Instead, I like to think of Sport Co. as
            an embodiment of the concept of sports.
            <img
              className={styles.supplementalImageType2}
              src="../sportcoshirt.png"
              alt="sportcoshirt"
              href=""
              onClick={() => ""}
            />
            <br />
            While designing the t-shirt graphic, I tried to center everything
            around the core characteristics of what I recognize as sports.
            <br />
            The block lettering doesn't require much explanation; below it,
            however, are some things that probably do. That big, blank, rounded
            rectangle may not be something you'd see on an ordinary uniform.
            Instead, it's something you're more likely to see in a weight room
            or practice field.
            <img
              className={styles.supplementalImageType2}
              src="../athleticshirt.webp"
              alt="athleticshirt"
              href=""
              onClick={() => ""}
            />
            Maybe I could tell you that I left it blank because it represents
            the indomitable spirit of human competition. That putting a label on
            that spirit would be mortifying to me. In reality, I enjoy how it
            looks being blank.
            <br />
            Now, the NUMBERS! These were what started the whole design process.
            I wanted to make a shirt with digital characters because: <br />
            1. They look neat. <br />
            2. They carry two meanings to me <br />
            The first is the obvious. Numbers are the biggest characteristic of
            sports uniforms. As children (and adults), we identify numbers with
            our biggest heroes. They act like the logo for your favorite
            superhero!
            <br />
            Also, by making them in the style of digital characters, they
            represent what both our favorite players and ourselves are
            constantly fighting against. TIME.
            <br />
            From practicing a buzzer beater in the driveway, to working on a
            deadline, we will never escape the concept of a countdown. I was
            hoping that incorporating that 01 into the design could help keep a
            reminder to myself, that I am always working on a shot clock. And,
            if I play my cards right, I can be the game winner.
          </p>
        </>
      ),
    },
    {
      title: "Red Eyes Promo #2",
      description: "Dreamyyyy :)",
      timestamp: "11:21:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            className={styles.supplementalImageType2}
            src="../tealskypromo2.png"
            alt="tealskypromo2"
            href=""
            onClick={() => ""}
          />
          <p>
            Another Tealsky promo; and this time, they actually posted it! That
            is not a knock on the wonderful members of Tealsky. It is actually a
            call for celebration! Between a full time job of my own, learning to
            paint, and trying to make new art every week, finding time to be
            still and celebrate a win is not to be taken for granted.
            <br />
            Work is fun! Work is hard. Work is rewarding! Work, when its
            something you love, is one of the greatest things life has to offer.
            I have noticed, unfortunately, that the greatest things we have are
            especially taxing on our spirit.
            <br />
            Everyone wants to be fulfilled. To end their day with a sense of
            accomplishment or satisfaction with themselves. But standing right
            between us and that joy is a sort of void.
            <br />
            The void is all that we don't know. The things we are trying to see
            for ourselves, but aren't quite sure where to find.
            <br />
            And so, our roles as individuals come in. We accept that there is no
            person on this planet that can point us directly to our aspirations.
            We must walk into the unknown, using our faith to guide us towards
            what we know is possible.
            <br />
            <br />
            Listen to Red Eyes by Tealsky, it's out now on all major streaming
            platforms
          </p>
        </>
      ),
    },
    {
      title: "Grids",
      description: "grid.png is made by Rory Campbell!",
      timestamp: "11:13:2024",
      desktopBackgroundColor: "transparent",
      desktopTextColor: "#000000",
      mobileTextColor: "#000000",
      content: (
        <>
          <img
            className={styles.supplementalImageType3}
            src="../grid.png"
            alt="My font"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => ""}
          />
          <p>
            I've been thinking about grids lately. More specifically, I have
            been thinking about how they are everywhere.
          </p>
          <p>
            We live in space, right? Without constraints, space would be
            undefined. Great! We understand what a dimension is.
          </p>
          <p>
            This isn't about calculus. What I am really interested in is how
            that concept translates to our lives PRACTICALLY. If you are in a
            building right now, you are inside a grid. If you are outside right
            now, you are still in a grid!
          </p>
          <img
            className={styles.supplementalImageType2}
            src="../bendingspace.png"
            alt="My font"
            href="https://www.youtube.com/watch?v=PUQfNBzMjiw"
            onClick={() => ""}
          />
          <p>
            Hehe...but for real.
            <br /> A constraint can be something helpful, like sleeping 8 hours,
            or watching what you say around a narcisist!
            <br />
            They can also be bad, like when we lose confidence in ourselves.
            <br />
            Grids are INESCAPABLE, and that's a good thing (as long as you know
            you are in one).
          </p>
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
