import React from 'react'

const page = () => {
    return (
        <div style={{ backgroundColor: "#232931", paddingTop: '7rem', paddingLeft: '3rem', paddingBottom: '1rem' }}>
            <h1>Introduction</h1>
            <p><strong>Last Updated:</strong> 2nd June, 2024</p>
            <p>At Galaxies, one of our main priorities is the privacy of our users' data. This Privacy Policy document contains the types of information that is collected and used by Galaxies and how we use it to provide service to our users.</p>
            <p>For additional questions, do not hesitate to contact us via <a href="https://discord.gg/P9sT95Fh">Discord</a></p>

            <div class="section">
                <h2>Section 1 - Consent</h2>
                <p>By using Galaxies (referred to as "service"), you consent to our Privacy Policy and agree to its terms.</p>
            </div>

            <div class="section">
                <h2>Section 2 - Information We Collect</h2>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.1 - Personal Information</h3>
                    <p>The personal information you are asked to provide, and why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                </div>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.2 - Personal Data and Information</h3>

                    <div class="subsection">
                        <h4>Section 2.2.1 - Data Collected By Commands</h4>
                        <p>The following items may be collected and stored when intentionally provided by a user (usually through a command). This data will not be collected automatically. When providing data this way, you forego any rights to the content of the data provided.</p>
                        <ul>
                            <li>Server configurations</li>
                            <li>Data and content for automated tasks (giveaways, blacklists, infractions, AFK, sticky messages, greet)</li>
                            <li>Saved references, URLs, or text (profile bios, footer)</li>
                        </ul>
                    </div>

                    <div class="subsection">
                        <h4>Section 2.2.2 - Data Collected When Enabled</h4>
                        <p>The following items may be collected and stored if the "service" is configured to perform certain actions by a server administrator. These features are always opt-in, and thus the data will not be collected unless the corresponding feature is enabled.</p>
                        <ul>
                            <li>Channel-ids</li>
                            <li>Server-ids</li>
                            <li>User-ids (including but not limited to the server members that trigger these features and the enabler of these features.)</li>
                            <li>Role-ids</li>
                        </ul>
                    </div>

                </div>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.3 - Other Information</h3>
                    <p>The following information is information that we can access via the Discord API, but do not store in our Database System</p>
                    <ul>
                        <li>Message content of server members</li>
                        <li>Sensitive guild member information</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <h2>Section 3 - How We Utilize Your Information</h2>
                <p>We use the information we collect in various ways, including:</p>
                <ul>
                    <li>Provide, operate, and maintain the "service"</li>
                    <li>Improve, personalize, and expand our "service"</li>
                    <li>Develop new services, features, and functionality</li>
                </ul>
            </div>

            <div class="section">
                <h2>Section 4 - GDPR Data Protection Rights</h2>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul>
                    <li>The right to access - You have the right to request copies of your data.</li>
                    <li>The right to rectification - You have the right to request that we correct any information you believe is inaccurate.</li>
                    <li>The right to erasure - You have the right to request that we erase your data, under certain conditions.</li>
                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your data, under certain conditions.</li>
                    <li>The right to object to processing – You have the right to object to our processing of your data, under certain conditions.</li>
                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
            </div>

            <div class="section">
                <h2>Section 5 - Data Storage and Security</h2>
                <p>The security of your Personal Information and Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information and Data, we cannot guarantee its absolute security.</p>
            </div>

            <div class="section">
                <h2>Section 6 - Effectiveness</h2>
                <p>This Privacy Policy is effective as of June 2nd, 2024, and will remain in effect except concerning any changes in its provisions in the future, which will be in effect immediately after being changed on one of the Official Releases of the “service”.</p>
            </div>
        </div>
    )
}

export default page