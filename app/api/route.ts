/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    console.log('HIT-HIT');
    console.log('Request:', request);
    try {
        return NextResponse.json({
            message: 'User found',
            data: 'Booboo',
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
