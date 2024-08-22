export async function getDiscordAvatarUrl(userId) {
    try {
        console.log('Fetching user:', userId);
        
        const botToken = process.env.BOT_TOKEN;
        const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${botToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.statusText}`);
        }

        const user = await response.json();
        console.log(user);
        
        const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=1024`;
        return avatarUrl;
    } catch (error) {
        console.error('Error:', error);
    }
}
