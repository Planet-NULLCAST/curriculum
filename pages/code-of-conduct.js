import Head from "next/head";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import styles from "./../styles/Conduct.module.scss";

export default function CodeConduct() {
  const contents = {
    type: "courses",
    title: "Code of conduct",
    subtitle:
      "Before you start reading off into the oblivion, let's just get one thing out into the open. We are a community of developers! With that said, nullcast's contributions come from from everyone who shares our goals and wants to contribute in a healthy and constructive manner within our community. This Code of conduct (guidelines) simply remains as a verbatim writing which could be used to help us create a safe and positive community experience for all. This document outlines both expected and prohibited behavior when taking part in the community.",
    buttonText: "Get Started for free",
    image: "/images/bg-coursespotlight2.svg",
    alt: "Want to be a Mighty Duck?",
    imageWidth: 482,
    imageHeight: 377,
    bgcolor: "#083644"
  };
  return (
    <div>
      <Head>
        <title>Code of Conduct | Nullcast </title>
      </Head>
      <SiteHeader />
      <section
        className={`${styles.spotlight} ${contents.bgimage}`}
        style={{ "--bgcolor": `${contents.bgcolor}` }}
      >
        <div className="container container--small">
          <div className="md:flex items-center justify-between">
            <div className="w-full text-center md:text-left py-10 md:p-0 mb-5 md:m-0">
              <h2>{contents.title}</h2>
              <h3 className="mb-10 font-semibold text-lg">
                {contents.subtitle}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className={`lg:px-48 md:px-10 px-4 max-w-panel ${styles.code}`}>
        <h3 className="font-extrabold mb-4">Expected Behavior</h3>
        <p className="mb-8 font-semibold">
          The following behaviors are expected from the members of nullcast:
        </p>
        <h3 className="font-extrabold mb-4">Be Respectful</h3>
        <p className="mb-8 font-semibold">
          Value each other’s ideas, styles and viewpoints. We may not always
          agree, but disagreement is no excuse for poor manners. Be open to
          different possibilities and to being wrong. Be kind in all
          interactions and communications, especially when debating the merits
          of different options. Be aware of your impact and how intense
          interactions may be affecting people. Be direct, constructive and
          positive. Take responsibility for your impact and your mistakes – if
          someone says they have been harmed through your words or actions,
          listen carefully, apologize sincerely, and correct the behavior going
          forward.
        </p>
        <h3 className="font-extrabold mb-4">
          Be Direct but Professional
        </h3>
        <p className="mb-8 font-semibold">
          Seek diverse perspectives. Diversity of views and of people on teams
          powers innovation, even if it is not always comfortable. Encourage all
          voices. Help new perspectives be heard and listen actively. If you
          find yourself dominating a discussion, it is especially important to
          step back and encourage other voices to join in. Be aware of how much
          time is taken up by dominant members of the group.
          <br />
          <br />
          Provide alternative ways to contribute or participate when possible.
          Think about how you might facilitate alternative ways to contribute or
          participate. If you find yourself dominating a discussion, step back.
          Make way for other voices and listen actively to them.
        </p>

        <h3 className="font-extrabold mb-4">
          Understand Different Perspectives
        </h3>
        <p className="mb-8 font-semibold">
          Our goal should not be to “win” every disagreement or argument. A more
          productive goal is to be open to ideas that make our own ideas better.
          Strive to be an example for inclusive thinking. “Winning” is when
          different perspectives make our work richer and stronger.
        </p>

        <h3 className="font-extrabold mb-4">
          Appreciate and Accommodate Our Similarities and Differences
        </h3>
        <p className="mb-8 font-semibold">
          Mozillians come from many cultures and backgrounds. Cultural
          differences can encompass everything from official religious
          observances to personal habits to clothing. Be respectful of people
          with different cultural practices, attitudes and beliefs. Work to
          eliminate your own biases, prejudices and discriminatory practices.
          Think of others’ needs from their point of view. Use preferred titles
          (including pronouns) and the appropriate tone of voice. Respect
          people’s right to privacy and confidentiality. Be open to learning
          from and educating others as well as educating yourself; it is
          unrealistic to expect Mozillians to know the cultural practices of
          every ethnic and cultural group, but everyone needs to recognize one’s
          native culture is only part of positive interactions.
        </p>

        <h3 className="font-extrabold mb-4">Lead by Example</h3>
        <p className="mb-8 font-semibold">
          By matching your actions with your words, you become a person others
          want to follow. Your actions influence others to behave and respond in
          ways that are valuable and appropriate for our organizational
          outcomes. Design your community and your work for inclusion. Hold
          yourself and others accountable for inclusive behaviors.
        </p>

        <h3 className="font-extrabold mb-4">
          Behavior That Will Not Be Tolerated
        </h3>
        <p className="mb-8 font-semibold">
          The following behaviors are considered to be unacceptable.
        </p>

        <h3 className="font-extrabold mb-4">
          Violence and Threats of Violence
        </h3>
        <p className="mb-8 font-semibold">
          Violence and threats of violence are not acceptable - online or
          offline. This includes incitement of violence toward any individual,
          including encouraging a person to commit self-harm. This also includes
          posting or threatening to post other people’s personally identifying
          information (“doxxing”) online.
        </p>

        <h3 className="font-extrabold mb-4">Personal Attacks</h3>
        <p className="mb-8 font-semibold">
          Conflicts will inevitably arise, but frustration should never turn
          into a personal attack. It is not okay to insult, demean or belittle
          others. Attacking someone for their opinions, beliefs and ideas is not
          acceptable. It is important to speak directly when we disagree and
          when we think we need to improve, but such discussions must be
          conducted respectfully and professionally, remaining focused on the
          issue at hand.
        </p>

        <h3 className="font-extrabold mb-4">Derogatory Language</h3>
        <p className="mb-6 font-semibold">
          Hurtful or harmful language related to:
        </p>
        <ul className="list-disc pl-5 mb-8">
          <li className="mb-1 font-semibold">Background</li>
          <li className="mb-1 font-semibold">Family status</li>
          <li className="mb-1 font-semibold">Background</li>
          <li className="mb-1 font-semibold">Gender</li>
          <li className="mb-1 font-semibold">Gender identity or expression</li>
          <li className="mb-1 font-semibold">Marital status</li>
          <li className="mb-1 font-semibold">Sex</li>
          <li className="mb-1 font-semibold">Sexual orientation</li>
          <li className="mb-1 font-semibold">Native Language</li>
          <li className="mb-1 font-semibold">Age</li>
          <li className="mb-1 font-semibold">Ability</li>
          <li className="mb-1 font-semibold">Race and/or ethnicity</li>
          <li className="mb-1 font-semibold">National origin</li>
          <li className="mb-1 font-semibold">Socioeconomic status</li>
          <li className="mb-1 font-semibold">Religion</li>
          <li className="mb-1 font-semibold">Geographical location</li>
          <li className="mb-1 font-semibold">Other attributes</li>
        </ul>

        <h3 className="font-extrabold mb-4">
          Unwelcome Sexual Attention or Physical Contact
        </h3>
        <p className="mb-8 font-semibold">
          Unwelcome sexual attention or unwelcome physical contact is not
          acceptable. This includes sexualized comments, jokes or imagery in
          interactions, communications or presentation materials, as well as
          inappropriate touching, groping, or sexual advances. This includes
          touching a person without permission, including sensitive areas such
          as their hair, pregnant stomach, mobility device (wheelchair, scooter,
          etc) or tattoos. This also includes physically blocking or
          intimidating another person. Physical contact or simulated physical
          contact (such as emojis like “kiss”) without affirmative consent is
          not acceptable. This includes sharing or distribution of sexualized
          images or text.
        </p>

        <h3 className="font-extrabold mb-4">Reporting</h3>
        <p className="mb-8 font-semibold">
          If you believe you’re experiencing unacceptable behavior that will not
          be tolerated as outlined above, report it immediately to
          <a href="mailto:connect@nullcast.io" traget="/blank" className="pl-0 text-blue-600 hover:text-blue-400">{' '}connect@nullcast.io</a>
          <br />
          <br />
          Please also report to us if you observe a potentially dangerous
          situation, someone in distress, or violations of these guidelines,
          even if the situation is not happening to you.
          <br />
          <br />
          If you feel you have been unfairly accused of violating these
          guidelines, please follow the same reporting process.
        </p>
      </div>
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
