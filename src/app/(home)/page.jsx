import { getDiscordAvatarUrl } from "@/utils/discordAPI";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function Home() {
  let { team } = publicRuntimeConfig;

  // Fetch the avatar URLs for the team members
  (async () => {
    team = await Promise.all(team.map(async (user) => {
      user.avatar = (await getDiscordAvatarUrl(user.id));
      return user;
    }));
  })();
  
  return (
    <>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img className="img-fluid feature-img logo-img"
                    src="https://images-ext-1.discordapp.net/external/ilZeQH42X5HhsLfCyYeg3DWxE9Q3j_wUCLrM7mzKgmw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/814441758037377045/f335ed9c5c2df7712f30423806396d54.png"
                    alt="alternative" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>
                    <span className="turquoise">Galaxies</span><br />
                    Discord Utility bot
                  </h1>
                  <p className="p-large">Galaxies. A bot dependable to manage your discord server. It has
                    powerful
                    giveaway, greet system to welcome your new members on join. A sticky message system
                    that allows you to highlight important messages, Moderation commands. It also has some utility
                    commands and fun commands And more!</p>
                  <a className="btn-solid-lg page-scroll"
                    href="https://discord.com/oauth2/authorize?client_id=814441758037377045&permissions=8589934591&scope=bot%20applications.commands">Invite
                    Bot</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="features" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Features</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">ALT detector</h4>
                  <p>Setup ALT Detector so that it can help you to get rid of ALTs by
                    notify/taking actions for you!
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Greet</h4>
                  <p>Set up custom greet messages on your server with our advanced Greet System to
                    make your users feel welcomed when they join!
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sticky Messages</h4>
                  <p>Got some important messages that pinning them just won't cut it? Set up
                    sticky messages in one of your channels today!
                    <br /><br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Alt Detector</h2>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body"> Setup the age of accounts you want to get kicked</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body"> Make the bot dm the kicked people to let them why</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body"> Get notified when an alt joins</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body"> Make your friends bypass if there account doesn't meet the
                      requirement</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img className="img-fluid feature-img"
                  src="https://i.imgur.com/j9xgpjD.png"
                  alt="ALT_Detector" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img className="img-fluid feature-img"
                  src="https://i.imgur.com/gvzS62F.png"
                  alt="alternative" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Greet</h2>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">Setup bot to ping someone when they join</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">Make the msg delete after a few seconds</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">Set a custom message for bot to send</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">Enable the welcome banner to spice up your greet message!</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Premium</h2>
              <p className="p-heading p-large">
                To purchase premium for the bot, you can contact us on <a
                  href="https://discord.gg/Gjd6U8MMrP">our
                  discord server</a> or purchase directly on our patreon.
                <br /><br />
                We're currently working actively behind the scenes to improve our Premium Services! Our premium services
                will be back in action on August 14th, 2024.
              </p>

            </div>
          </div>
        </div>
      </div>

      <div id="about" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>About us</h2>
              <p className="p-heading p-large">Meet our Development Team!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {
                team.map((user) => <div key={user.name} className="team-member">
                  <div className="image-wrapper feature-img">
                    <img className="img-fluid" src={user.avatar} alt="alternative" />
                  </div>
                  <p className="p-large"><strong>{user.name}</strong></p>
                  <p className="job-title">{user.detail}</p>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
