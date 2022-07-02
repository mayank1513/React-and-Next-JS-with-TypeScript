import { StickySectionHeader } from "@mayank1513/sticky-section-header";

export default function Gist({ setBg }) {
  return (
    <section>
      <StickySectionHeader
        stick={false}
        callBack={(entry) => entry.isIntersecting && setBg("stars")}
      >
        <h1>Gist</h1>
      </StickySectionHeader>
      <hr />
      <p>
        <b>Experience: </b>8 years
      </p>
      <p>
        <b>Key skills: </b> JavaScript, React, Next.js, TypeScript, HTML, CSS,
        SCSS, Vue.js, Nuxt.js, Firebase, Prisma, Firefox-addon, Azure, Amazon
        Web Services, Google Cloud Platform, Android, Java
      </p>
      <h3>Career Highlights</h3>
      <ul>
        <li>Top 1% talent on Upwork with 100% 5-star client feedback.</li>
        <li>
          Worked with amazing clients and collaborators including Microsoft,
          WHO, Sequoia Capital, Just Analytics, NUS, MIT, Default
        </li>
        <li>
          Multi-domain expertise with experience working on cutting-edge
          projects - Front end and Android, Nextgen Solar cell research (in
          collaboration with MIT), Advanced scrapping with cognitive
          capabilities, Computer vision and ML POCs, MVP – Tele-bot powered by
          data and AI that talked like human and understood human language,
          cutting-edge front-end project.
        </li>
        <li>Microsoft certified professional.</li>
        <li>
          <StickySectionHeader
            stick={false}
            callBack={(entry) => entry.isIntersecting && setBg("stars")}
          >
            Open source contributor:&nbsp;
            <a
              href="https://stackoverflow.com/users/9640177/mayank1513"
              target="_blank"
              rel="noopener noreferrer"
            >
              StackOverflow
            </a>
            ,&nbsp;
            <a
              href="https://github.com/mayank1513"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </StickySectionHeader>
        </li>
      </ul>
    </section>
  );
}
