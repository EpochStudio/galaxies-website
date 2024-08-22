import React from 'react'

const page = () => {
    return (
        <div style={{ backgroundColor: "#232931", paddingTop: '7rem', paddingLeft: '3rem', paddingBottom: '1rem' }}>
            <h1>Terms of Service</h1>
            <p>Thank you for choosing Galaxies as your Server Utility Discord bot. By using Galaxies (hereafter referred to as the "Service"), you agree to the following Terms. If you disagree with any of these Terms, you are prohibited from using the Service.</p>

            <div class="section">
                <h2>Section 1 - General Terms</h2>
                <p>By using the Service, you explicitly agree to abide by <a href="https://discord.com/terms">Discord's Terms of Service</a>. You acknowledge that your account may be suspended from using the Service if you violate Discord's Terms of Service in any way.</p>
                <p>We prohibit Service users, as well as any associated guilds (servers), threads, or forums, from promoting the violation of these Terms or Discord's Terms of Service. Any violations will be addressed accordingly, up to and including suspension from the Service.</p>
                <p>If we do not immediately act on a violation, it does not imply waiver of our legal rights. If any part of these Terms is deemed invalid or unenforceable by a court or competent authority, the remainder of the Terms will remain in effect.</p>
            </div>

            <div class="section">
                <h2>Section 2 - Service Guidelines and Restrictions</h2>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.1 - Content Posting</h3>
                    <p>The Service allows you to post, link, store, and make available certain information, text, or material ("Content"). You are solely responsible for the Content you share, and the Service provider assumes no responsibility for this information. However, we reserve the right to take action against your Content or revoke your access to the Service if it includes, but is not limited to:</p>
                    <ul>
                        <li>Harassment</li>
                        <li>NSFW (Not Safe For Work) content</li>
                        <li>Threats of any kind</li>
                        <li>Links to malicious content</li>
                        <li>Political discussions</li>
                        <li>Violations of Discord's Terms of Service</li>
                    </ul>
                </div>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.2 - Prohibited Usage</h3>
                    <p>Using the Service to directly or indirectly affect other users' experience is strictly prohibited. This includes exploiting any bugs or vulnerabilities in the Service. Violations may result in suspension from the Service, with the severity of the action determined by the nature of the offense.</p>
                </div>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.3 - Galaxies Badges</h3>
                    <p>We offer collectible "Galaxies Badges" to recognize contributors to the Service. Badge holders are prohibited from selling these badges to other users for any material or digital goods. Violations may result in badge removal and/or Service suspension for both the seller and the recipient.</p>
                </div>

                <div class="subsection">
                    <h3 style={{ color: 'rgb(181 181 181 / 78%)'}}>Section 2.4 - Subscription Services</h3>
                    <p>Guilds may purchase Subscription Services to access additional features. These services are subject to the following conditions:</p>

                    <div class="subsection">
                        <h4>2.4.1 - Refund Policy</h4>
                        <p>Please open a ticket at <a href="https://support.discord.com">Discord Support</a> to issue a refund.</p>
                    </div>

                    <div class="subsection">
                        <h4>2.4.2 - Trial Policy</h4>
                        <p>Guilds are eligible for a one-time, 14-day Trial Period of Subscription Services. This offer cannot be extended or repeated.</p>
                    </div>

                    <div class="subsection">
                        <h4>2.4.3 - Third-Party Sellers</h4>
                        <p>Unauthorized third-party sales of our Subscription Services are prohibited. Violators will be banned from purchasing Subscription Services.</p>
                    </div>

                    <div class="subsection">
                        <h4>2.4.4 - Subscription Removal</h4>
                        <p>We reserve the right to remove Subscription Services without refund from guilds violating these Terms.</p>
                    </div>

                    <div class="subsection">
                        <h4>2.4.5 - Service Discontinuation</h4>
                        <p>If Galaxies ceases operations, refunds may be requested within 7 days of the announcement.</p>
                    </div>

                    <div class="subsection">
                        <h4>2.4.6 - Illegal Chargebacks</h4>
                        <p>Illegal chargebacks will result in the user being banned from the Service and the guild losing Subscription Services.</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Section 3 - Modifications</h2>
                <p>We reserve the right to modify these Terms at any time. For material changes, we will attempt to provide 7 days' notice. Your continued use of the Service after modifications constitutes acceptance of the new Terms.</p>
            </div>

            <div class="section">
                <h2>Section 4 - Privacy Policy</h2>
                <p>Our Privacy Policy is available <a href="https://github.com/EpochStudio/Galaxies-ToS-Privacy/blob/main/Privacy_Policy.md">here</a>.</p>
            </div>

            <div class="section">
                <h2>Section 5 - Suspension</h2>
                <p>Violations of these Terms may result in warnings or immediate suspension from the Service. In cases of repeated misconduct, we may permanently revoke your right to appeal suspensions.</p>
                <p>While you have the right to appeal a suspension (unless explicitly stated otherwise), approval is not guaranteed. Access to certain features may be permanently restricted based on prior violations.</p>
                <p>This document is effective as of July 12th, 2024, and will remain in effect until replaced by a future version. Any changes to these Terms will be effective immediately upon posting of the revised Terms on the Official Releases of the Service.</p>
            </div>
        </div>
    )
}

export default page