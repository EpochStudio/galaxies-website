"use server"

import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const botToken = process.env.BOT_TOKEN;

    if (!userId || !botToken) {
        return NextResponse.json({ error: 'Missing userId or botToken' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${botToken}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: response.statusText }, { status: response.status });
        }

        const userData = await response.json();

        if (userData.avatar) {
            const avatarUrl = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.${userData.avatar.startsWith("a_") ? "gif" : "png"}?size=1024`;
            return NextResponse.json({ avatarUrl });

        } else {
            return NextResponse.json({ error: 'No avatar found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching Discord avatar:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
