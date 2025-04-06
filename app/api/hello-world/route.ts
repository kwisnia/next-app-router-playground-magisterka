import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  console.log('Hello world', request);
  return NextResponse.json({
    message: 'Hello world',
  });
}
