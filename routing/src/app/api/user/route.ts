import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   return NextResponse.json([
    {
        id: 1,
        name: "imran",
        username: "imrantech"
    },
    {
        id: 2,
        name: "tech",
        username: "techvoyager"
    }
   ]);
}

export async function POST(req: NextRequest) {
    //getting body
    const body = req.json();
    // console.log(body);

    //getting header
    console.log(req.headers.get("authorization"));

    //query parameters
    console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({
        message: "you are signedin"
    })
}