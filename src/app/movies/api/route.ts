import { movieData } from '@/mocks/movies';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    return NextResponse.json({ data: movieData });
}
